// Refactor to CommonJS
const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
const { fileURLToPath } = require('url');
const { dirname, resolve } = require('path');
const osc = require('osc');
const os = require('os');
const fs = require('fs');
const { log } = require('console');

// Server Setup Host Satic Files with express
//--------------------------------------------------
const app = express(); // create express app
const httpServer = createServer(app);

// Determine the correct directory to serve static files from
const isPackaged = typeof process.pkg !== 'undefined';
const currentDirname = isPackaged ? dirname(process.execPath) : __dirname;

// Log the directory being served
const staticFilesPath = resolve(currentDirname, '../dist');
console.log(`Serving static files from ${staticFilesPath}`);

// Serve static files from the 'dist' directory
app.use(express.static(staticFilesPath));
// socket.io server
const io = new Server(httpServer, {
  cors: { origin: '*' }, // wild card since security isn't a concern
});

// Get current IP-Addresses for the local machine
const getIPAddresses = () => {
  const interfaces = os.networkInterfaces();

  const ipAddresses = Object.values(interfaces)
    .flat()
    .filter(
      (addressInfo) => addressInfo.family === 'IPv4' && !addressInfo.internal,
    )
    .map((addressInfo) => addressInfo.address);

  // Log the IP addresses with the specified message
  ipAddresses.forEach((ip) => {
    console.log(`Log into WeSp as client with IP address ${ip}:8081`);
  });

  return ipAddresses;
};

// Call the function to log IP addresses
getIPAddresses();

// UDP-Ports for OSC communication
//--------------------------------------------------
const udpPortSettings = {
  defaultLocalPort: 7400,
  defaultRemotePort: 7500,
  defaultRemoteAddress: '127.0.0.1',
};
//Array to store all the UDP Ports
let udpPorts = [];

// Setting up UDP Ports
const createUDPPort = (
  localPort = udpPortSettings.defaultLocalPort,
  remotePort = udpPortSettings.defaultRemotePort,
  remoteAddress = udpPortSettings.defaultRemoteAddress,
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
  localPort = udpPortSettings.defaultLocalPort,
  remotePort = udpPortSettings.defaultRemotePort,
  remoteAddress = udpPortSettings.defaultRemoteAddress,
) => {
  // Get all the local port numbers from the udpPorts array
  const localPorts = udpPorts.map((udp) => udp.options.localPort);
  // If the provided localPort is already in use, return
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

// Websocket MultiClient communication
//--------------------------------------------------

// Objects to store clients and sockets
let clients = {},
  sockets = {};

let firstClientSocket = null;
let clientColors = [
  '#FF00FF', // Magenta
  '#00FFFF', // Cyan
  '#00FF00', // Lime
  '#0000FF', // Blue
  '#FF0000', // Red
  '#006400', // Dark Green
];

// Event fired when client connects
io.on('connection', (socket) => {
  console.log('a user connected ' + socket.id);

  // LOG User Connection
  storeLogData(new Date().toISOString(), {
    clientID: socket.id,
    module: 'Server',
    event: 'User Connected',
  });

  // Assign unique color to the client
  const clientColor = clientColors[0];
  clientColors.shift();

  //Store client id and initialize objects array for each client
  clients[socket.id] = {
    clientID: socket.id,
    Objects: [],
    color: clientColor,
  };
  sockets[socket.id] = socket;
  // Emit the 'clientList' event with the updated clients object
  io.emit('clientList', clients);
  // Send the assigned color to the client
  socket.emit('assignColor', { color: clients[socket.id].color });

  // Update the client divs for Trajectories
  socket.on('updateClientsDiv', () => {
    io.emit('syncClientsDiv', clients);
  });

  // CURVES
  // SyncTrajectories on Client Connection
  if (!firstClientSocket) {
    firstClientSocket = socket;
    firstClientSocket.on('syncTrajectories', ({ trajectoriesState }) => {
      // Forward the scene data to all connected clients
      firstClientSocket.broadcast.emit('syncTrajectories', {
        trajectoriesState,
      });
    });
  } else {
    firstClientSocket.emit('requestTrajectoryState');
  }
  // Handle Client Disconnection
  socket.on('disconnect', () => {
    console.log('a user disconnected ' + socket.id);
    // LOG User Disonnection
    storeLogData(new Date().toISOString(), {
      clientID: socket.id,
      module: 'Server',
      event: 'User Disconnected',
    });

    if (socket === firstClientSocket) {
      const socketKeys = Object.keys(sockets);
      if (socketKeys.length > 1) {
        firstClientSocket = sockets[socketKeys[1]];
        firstClientSocket.on('syncTrajectories', ({ trajectoriesState }) => {
          // Forward the scene data to all connected clients
          firstClientSocket.broadcast.emit('syncTrajectories', {
            trajectoriesState,
          });
        });
      } else {
        firstClientSocket = null;
      }
    }

    // Add the client's color back to the clientColors array
    if (clients[socket.id]) {
      clientColors.push(clients[socket.id].color);
    }

    delete clients[socket.id];
    delete sockets[socket.id];

    io.emit('syncObjectsOnClientDisconnected', {
      objectsState: JSON.stringify(clients),
    });
  });

  // Listen for the 'updateTrajectories' event from the client
  socket.on('updateTrajectories', (trajectoriesState) => {
    // Broadcast the new trajectoriesState to all connected clients
    socket.broadcast.emit('updateTrajectories', trajectoriesState);
  });

  // TRIGGERS
  // Request Objects State on Client Connection
  socket.emit('requestObjectsState');
  // Sync Objects on Client Connection
  socket.on('syncObjects', syncObjectsOnClientConnect(socket, clients, io));
  // Update Objects Length
  socket.on('updateObjectsLength', updateObjectsLength(socket, clients, io));
  // Update client Objects Settings
  socket.on(
    'updateValuesClientsObjects',
    updateValuesClientsObjects(socket, clients, io),
  );

  // Setup UDP PORTS
  // OpenPort message
  socket.on('addUDPPort', (localPort, remotePort, remoteAddress) => {
    setupUDPPort(localPort, remotePort, remoteAddress);
  });
  // Close port message
  socket.on('removeUDPPort', (localPort, remotePort) => {
    closeUDPPort(localPort, remotePort);
  });

  // SEND OSC MESSAGES
  let shouldSendMap = new Map();

  // Receive objects from client
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
          let args = [];

          if (object.x !== undefined) args.push({ type: 'f', value: object.x });
          if (object.y !== undefined) args.push({ type: 'f', value: object.y });
          if (object.z !== undefined) args.push({ type: 'f', value: object.z });

          udp.send({
            address: object.oscMessage,
            args: args,
          });
          // Log the final UDP send
          /*
          console.log(
            `Sent OSC message to ${object.outAddress}:${
              object.outPort
            } with address ${object.oscMessage} and arguments ${args.map(
              (arg) => arg.value,
            )}`,
          );
          */
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

  // LOG DATA
  socket.on('startLogging', () => {
    io.emit('requestLogData');
    io.emit('updateCheckbox');
    logEntries = [];
    console.log('Logging started');
  });

  socket.on('logData', (data) => {
    let timestamp = new Date().toISOString();
    storeLogData(timestamp, data);
  });

  socket.on('stopLogging', () => {
    io.emit('stopLogData');
    writeLogData();
    io.emit('updateCheckbox');
  });

  socket.on('logMarker', () => {
    const timestamp = new Date().toISOString();
    storeLogData(timestamp, { event: 'Marker' });
    console.log('Marker logged');
  });

  //LATENCY TEST

  // Measure RTT
  socket.on('pingCheck', () => {
    socket.emit('pongCheck', Date.now());
  });
});

const syncObjectsOnClientConnect =
  (socket, clients, io) =>
  ({ objectsState }) => {
    let parsedObjectsState = JSON.parse(objectsState);
    clients[socket.id].Objects = parsedObjectsState.objects;
    socket.emit('syncObjects', {
      objectsState: JSON.stringify(clients),
    });
    io.emit('clientList', clients);
  };

const updateObjectsLength =
  (socket, clients, io) =>
  ({ objectsState }) => {
    let parsedObjectsState = JSON.parse(objectsState);
    clients[socket.id].Objects = parsedObjectsState.objects;
    io.emit('updateObjectsLength', {
      objectsState: JSON.stringify(clients),
    });
    io.emit('clientList', clients);
  };

const updateValuesClientsObjects =
  (socket, clients, io) =>
  ({ objectsState }) => {
    let parsedObjectsState = JSON.parse(objectsState);
    clients[socket.id].Objects = parsedObjectsState.objects;
    io.emit('updateValuesClientsObjects', {
      objectsState: JSON.stringify(clients),
    });
    io.emit('clientList', clients);
  };

// DATA LOGGING
//--------------------------------------------------

let logEntries = [];
let logFilePath = null;

const generateFilePath = (timestamp) => {
  let filename = `log_${new Date(timestamp)
    .toISOString()
    .replace(/[:.]/g, '-')}.txt`;
  return resolve(
    'C:/Users/Lennart/Documents/TUB_MASTER/CODE/Javascript/WeSpa_Data_Logs',
    filename,
  );
};

//store log data in memory
const storeLogData = (timestamp, logData) => {
  logEntries.push({
    timestamp,
    ...logData,
  });

  if (!logFilePath) {
    logFilePath = generateFilePath(timestamp);
  }
};

const writeLogData = () => {
  let csvData = logEntries
    .map(
      (entry) =>
        `${entry.timestamp},${entry.clientID},${entry.module},${entry.event}`,
    )
    .join('\n');

  // Write the CSV data to a new file
  fs.writeFile(logFilePath, csvData, (err) => {
    if (err) throw err;
    console.log('Log data saved!');

    // Reset the log entries and file path for the next log
    logEntries = [];
    logFilePath = null;
  });
};

// Launch server
const myPort = process.env.PORT || 8081; // let Glitch choose port OR use 8081
httpServer.listen(myPort, '0.0.0.0', () => {
  console.log(`The server is listening on port: ${myPort}`);
});
