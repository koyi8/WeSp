import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import path from 'path';
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

// OPening UDP-Port for OSC communication
//--------------------------------------------------

const defaultRemotePort = 7500,
  defaultLocalPort = 7400,
  udpSendPorts = []; // array of UDP ports to send

//Get current IP-Addresses for the local machine
const getIPAddresses = function () {
  const interfaces = os.networkInterfaces();
  const ipAddresses = [];

  for (const deviceName in interfaces) {
    const addresses = interfaces[deviceName];

    for (let i = 0; i < addresses.length; i++) {
      const addressInfo = addresses[i];

      if (addressInfo.family === 'IPv4' && !addressInfo.internal) {
        ipAddresses.push(addressInfo.address);
      }
    }
  }

  return ipAddresses;
};

// Setting up UDP Port

function createUDPPort(
  localPort = defaultLocalPort,
  remotePort = defaultRemotePort,
) {
  return new osc.UDPPort({
    localAddress: '0.0.0.0',
    localPort: localPort,
    remoteAddress: '127.0.0.1',
    remotePort: remotePort,
  });
}

function setupReadyEvent(udp) {
  udp.on('ready', function () {
    const ipAddresses = getIPAddresses();
    console.log('New UDPPort created');
    ipAddresses.forEach(function (address) {
      console.log(' Host:', address + ', Port:', udp.options.localPort);
    });
    console.log(
      'Broadcasting OSC over UDP to',
      udp.options.remoteAddress + ', Port:',
      udp.options.remotePort,
    );
  });
}

function setupUDPPort(
  localPort = defaultLocalPort,
  remotePort = defaultRemotePort,
) {
  const udp = createUDPPort(localPort, remotePort);
  udpSendPorts.push(udp);
  setupReadyEvent(udp);
  udp.open();
  return udp;
}

const initialUDPPort = setupUDPPort();

// function to close the UDP Port
function closeUDPPort(index) {
  if (index >= 0 && index < udpSendPorts.length) {
    const udp = udpSendPorts[index];
    udp.close();
    console.log('Closed udpSendPort port on', udp.options.remotePort);
  } else {
    console.log('Invalid index:', index);
  }
}

// Event fired when client connects, giving each client a unique "socket" instance
io.on('connection', (socket) => {
  console.log('a user connected' + socket.id);

  //Store client id and source (browser or max) in clients object
  clients[socket.id] = { clientID: socket.id, clientSource: null };

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
  socket.on('removeUDPPort', (index) => {
    closeUDPPort(index);
  });

  // SEND the coordinates via OSC

  socket.on('coordinates', (coordinates) => {
    //console.log(coordinates);
    initialUDPPort.send({
      address: '/coordinates',
      args: [
        { type: 's', value: coordinates.id },
        { type: 's', value: coordinates.TriggerID },
        { type: 'f', value: coordinates.x },
        { type: 'f', value: coordinates.y },
        { type: 'f', value: coordinates.z },
      ],
    });
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

  // Remove client from clients object when they disconnect
  socket.on('disconnect', () => {
    console.log('a user disconnected' + socket.id);
    delete clients[socket.id];
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
