import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import osc from 'osc';
import os from 'os';

const app = express(); // create express app
const httpServer = createServer(app);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Serve static files from the 'dist' directory
app.use(express.static(resolve(__dirname, '../dist')));

/*
// Create an HTTP server that listens to clients and gives responses back
const httpServer = createServer((req, res) => {    
    res.writeHead(200, {"Content-Type": "text/plain"}); // 200 = request successful
    res.write("The web server is up and running!");     // writes to the browser
    res.end();                                          // signals headers/body sent
});
*/

// Create a socket.io server instance passing it httpServer and required options
const io = new Server(httpServer, {
  cors: { origin: '*' }, // wild card since security isn't a concern
});

// object to store connected clients
const clients = {};
let firstClientSocket = null;
const previousStates = new Map();

// Opening UDP-Port for OSC communication
//--------------------------------------------------

const defaultLocalPort = 7400,
  defaultRemotePort = 7500,
  defaultRemoteAddress = '127.0.0.1',
  udpPorts = []; // array of open UDP ports to send

// Get current IP-Addresses for the local machine
const getIPAddresses = () => {
  const interfaces = os.networkInterfaces();

  return Object.values(interfaces)
    .flat()
    .filter(
      (addressInfo) => addressInfo.family === 'IPv4' && !addressInfo.internal,
    )
    .map((addressInfo) => addressInfo.address);
};

// Setting up UDP Port

const createUDPPort = (
  localPort = defaultLocalPort,
  remotePort = defaultRemotePort,
  remoteAddress = defaultRemoteAddress,
) => {
  return new osc.UDPPort({
    localAddress: '0.0.0.0',
    localPort: localPort,
    remoteAddress: remoteAddress,
    remotePort: remotePort,
  });
};

const setupReadyEvent = (udp) => {
  udp.on('ready', () => {
    const ipAddresses = getIPAddresses();
    console.log('New UDPPort created');
    ipAddresses.forEach((address) => {
      console.log(' Host:', address + ', Port:', udp.options.localPort);
    });
    console.log(
      'Broadcasting OSC over UDP to',
      udp.options.remoteAddress + ', Port:',
      udp.options.remotePort,
    );
  });
};

const setupUDPPort = (
  localPort = defaultLocalPort,
  remotePort = defaultRemotePort,
  remoteAddress = defaultRemoteAddress,
) => {
  // Get all the local port numbers from the udpPorts array
  const localPorts = udpPorts.map((udp) => udp.options.localPort);
  // Get all the remote port numbers from the udpPorts array
  //const remotePorts = udpPorts.map((udp) => udp.options.remotePort);

  // If the provided localPort is already in use, return without doing anything
  if (localPorts.includes(localPort)) {
    console.log('inPort already in use');
    return;
  }

  const udp = createUDPPort(localPort, remotePort, remoteAddress);
  udpPorts.push(udp);
  setupReadyEvent(udp);
  udp.open();
  console.log(udpPorts.length + ' udpPorts open');
  return udp;
};

//const initialUDPPort = setupUDPPort();

// Function to close the UDP Port
const closeUDPPort = (localPort, remotePort) => {
  // Find the index of the port with the specified localPort and remotePort
  const index = udpPorts.findIndex(
    (udp) =>
      udp.options.localPort === localPort &&
      udp.options.remotePort === remotePort,
  );

  if (index >= 0 && index < udpPorts.length) {
    const udp = udpPorts[index];
    udp.close();
    console.log('Closed udpPort port on', udp.options.remotePort);
    udpPorts.splice(index, 1);
    console.log(udpPorts.length + ' udpPorts open');
  }
};

// Event fired when client connects, giving each client a unique "socket" instance
io.on('connection', (socket) => {
  console.log('a user connected ' + socket.id);

  //Store client id and source (browser or max) in clients object
  clients[socket.id] = { clientID: socket.id };

  // If this is the first client, store its socket and set up the 'syncScene' listener
  if (!firstClientSocket) {
    firstClientSocket = socket;

    // Listen for the 'syncScene' event from the first client
    firstClientSocket.on('syncScene', ({ curvesState, triggersState }) => {
      // Forward the scene data to all connected clients
      firstClientSocket.broadcast.emit('syncScene', {
        curvesState,
        triggersState,
      });
    });
  } else {
    // If this is not the first client, ask the first client for its scene data
    firstClientSocket.emit('requestScene');
  }

  // Listen for the 'updateScene' event from the client
  socket.on('updateScene', (state) => {
    // Broadcast the new state to all connected clients
    socket.broadcast.emit('updateScene', state);
  });

  // Remove client from clients object when they disconnect
  socket.on('disconnect', () => {
    console.log('a user disconnected ' + socket.id);
    delete clients[socket.id];
    // If the first client disconnected, clear the firstClientSocket
    if (socket === firstClientSocket) {
      firstClientSocket = null;
    }
  });

  // Setup UDP PORTS
  // OpenPort message
  socket.on('addUDPPort', (localPort, remotePort, remoteAddress) => {
    setupUDPPort(localPort, remotePort, remoteAddress);
  });
  // close port message
  socket.on('removeUDPPort', (localPort, remotePort) => {
    //console.log('Remove UDP Port');
    closeUDPPort(localPort, remotePort);
  });

  // SEND OSC MESSAGES

  let shouldSendMap = new Map();

  //receive triggerObjects from client
  socket.on('sendOSC', (objectsToSend) => {
    objectsToSend.forEach((object) => {
      // If shouldSend flag for this row is false, return
      let shouldSend = shouldSendMap.get(object.rowId);
      if (shouldSend === false) return;
      udpPorts.forEach((udp) => {
        if (
          udp.options.remotePort === object.outPort &&
          udp.options.remoteAddress === object.outAddress
        ) {
          // Create an array of arguments
          let args = [];

          // Only add the values that are present
          if (object.x !== undefined) args.push({ type: 'f', value: object.x });
          if (object.y !== undefined) args.push({ type: 'f', value: object.y });
          if (object.z !== undefined) args.push({ type: 'f', value: object.z });

          udp.send({
            address: object.oscMessage,
            args: args,
          });

          // Log the final UDP send
          console.log(
            `Sent OSC message to ${object.outAddress}:${
              object.outPort
            } with address ${object.oscMessage} and arguments ${args.map(
              (arg) => arg.value,
            )}`,
          );
        }
      });
    });
  });

  socket.on('stopSendOSC', (rowId) => {
    shouldSendMap.set(rowId, false);
  });

  socket.on('startSendOSC', (rowId) => {
    shouldSendMap.set(rowId, true);
  });

  //LATENCY TEST

  // Measure RTT
  socket.on('pingCheck', () => {
    socket.emit('pongCheck');
  });

  socket.on('message', (message) => {
    console.log(message);
    io.emit('message', message); // send to all clients
  });
});

// Launch server
const myPort = process.env.PORT || 8081; // let Glitch choose port OR use 3000
httpServer.listen(myPort, () => {
  console.log(`the server is listening on port: ${myPort}`);
});
