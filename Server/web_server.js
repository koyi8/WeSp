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

// Opening UDP-Port for OSC communication
//--------------------------------------------------

const defaultLocalPort = 7400,
  defaultRemotePort = 7500,
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
) => {
  return new osc.UDPPort({
    localAddress: '0.0.0.0',
    localPort: localPort,
    remoteAddress: '127.0.0.1',
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
) => {
  // Get all the local port numbers from the udpPorts array
  const localPorts = udpPorts.map((udp) => udp.options.localPort);
  // Get all the remote port numbers from the udpPorts array
  const remotePorts = udpPorts.map((udp) => udp.options.remotePort);

  // If the provided localPort and remotePort are already in use, return without doing anything
  if (localPorts.includes(localPort) && remotePorts.includes(remotePort)) {
    return;
  }

  // If the provided localPort is already in use, set it to one more than the highest port number
  if (localPorts.includes(localPort)) {
    const maxLocalPort = Math.max(...localPorts);
    localPort = maxLocalPort + 1;
  }

  const udp = createUDPPort(localPort, remotePort);
  udpPorts.push(udp);
  setupReadyEvent(udp);
  udp.open();
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
    console.log('udpPorts:', udpPorts.length);
  }
};

// Event fired when client connects, giving each client a unique "socket" instance
io.on('connection', (socket) => {
  console.log('a user connected ' + socket.id);

  //Store client id and source (browser or max) in clients object
  clients[socket.id] = { clientID: socket.id, clientSource: null };
  // Remove client from clients object when they disconnect
  socket.on('disconnect', () => {
    console.log('a user disconnected ' + socket.id);
    delete clients[socket.id];
  });

  // RECIEVE

  //Receive Client ID and Source (Browser or Max)
  socket.on('clientSource', (data) => {
    console.log('Client source: ' + data.source);
    //update client source in clients object
    clients[data.id].clientSource = data.source;
  });

  // Listening for AddUDPPort event from client
  // OpenPort message
  socket.on('addUDPPort', (localPort, remotePort) => {
    setupUDPPort(localPort, remotePort);
  });
  // close port message
  socket.on('removeUDPPort', (localPort, remotePort) => {
    //console.log('Remove UDP Port');
    closeUDPPort(localPort, remotePort);
  });

  // SEND the coordinates via OSC

  socket.on('coordinates', (coordinates) => {
    //console.log(coordinates);
    /*initialUDPPort.send({
      address: '/coordinates',
      args: [
        { type: 's', value: coordinates.id },
        { type: 's', value: coordinates.TriggerID },
        { type: 'f', value: coordinates.x },
        { type: 'f', value: coordinates.y },
        { type: 'f', value: coordinates.z },
      ],
    });*/
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

/*
// Log the clients object every 20 seconds
setInterval(() => {
    console.log(clients);
}, 2000);
*/

// Launch server
const myPort = process.env.PORT || 8081; // let Glitch choose port OR use 3000
httpServer.listen(myPort, () => {
  console.log(`the server is listening on port: ${myPort}`);
});
