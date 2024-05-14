//refactor
import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import osc from 'osc';
import os from 'os';
import fs from 'fs';
import { log } from 'console';

// Server Setup Host Satic Files with express
//--------------------------------------------------
const app = express(); // create express app
const httpServer = createServer(app);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Serve static files from the 'dist' directory
app.use(express.static(resolve(__dirname, '../dist')));
// socket.io server
const io = new Server(httpServer, {
  cors: { origin: '*' }, // wild card since security isn't a concern
});
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
  '#FF00FF',
  '#00FFFF',
  '#00FF00',
  '#0000FF',
  '#FFFF00',
  '#FF0000',
];
// Event fired when client connects, giving each client a unique "socket" instance
io.on('connection', (socket) => {
  console.log('a user connected ' + socket.id);
  // LOG User Connection
  storeLogData(new Date().toISOString(), {
    clientID: socket.id,
    module: 'Server',
    event: 'User Connected',
  });

  let colorIndex = Object.keys(clients).length % clientColors.length;

  //Store client id and initialize triggers array for each client
  clients[socket.id] = {
    clientID: socket.id,
    Triggers: [],
    color: clientColors[colorIndex],
  };
  sockets[socket.id] = socket;
  // Emit the 'clientList' event with the updated clients object
  io.emit('clientList', clients);
  // Send the assigned color to the client
  socket.emit('assignColor', { color: clients[socket.id].color });

  // Update the client divs for Curves
  socket.on('updateClientsDiv', () => {
    io.emit('syncClientsDiv', clients);
  });

  // CURVES
  // SynCurves on Client Connection
  if (!firstClientSocket) {
    firstClientSocket = socket;
    firstClientSocket.on('syncCurves', ({ curvesState }) => {
      // Forward the scene data to all connected clients
      firstClientSocket.broadcast.emit('syncCurves', {
        curvesState,
      });
    });
  } else {
    firstClientSocket.emit('requestCurveState');
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
        firstClientSocket.on('syncCurves', ({ curvesState }) => {
          // Forward the scene data to all connected clients
          firstClientSocket.broadcast.emit('syncCurves', {
            curvesState,
          });
        });
      } else {
        firstClientSocket = null;
      }
    }

    delete clients[socket.id];
    delete sockets[socket.id];

    io.emit('syncTriggersOnClientDisconnected', {
      triggersState: JSON.stringify(clients),
    });
  });

  // Listen for the 'updateCurves' event from the client
  socket.on('updateCurves', (curvesState) => {
    // Broadcast the new curvesState to all connected clients
    socket.broadcast.emit('updateCurves', curvesState);
  });

  // TRIGGERS
  // Request Triggers State on Client Connection
  socket.emit('requestTriggersState');
  // Sync Triggers on Client Connection
  socket.on('syncTriggers', syncTriggersOnClientConnect(socket, clients, io));
  // Update Triggers Length
  socket.on('updateTriggersLength', updateTriggersLength(socket, clients, io));
  // Update client Triggers Settings
  socket.on(
    'updateValuesClientsTriggers',
    updateValuesClientsTriggers(socket, clients, io),
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

  // Receive triggerObjects from client
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

  // LOG DATA
  socket.on('startLogging', () => {
    io.emit('requestLogData');
    io.emit('updateCheckbox');
    logEntries = [];
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

  //LATENCY TEST

  // Measure RTT
  socket.on('pingCheck', () => {
    socket.emit('pongCheck', Date.now());
  });
});

// Function to sync triggers on client connect
const syncTriggersOnClientConnect =
  (socket, clients, io) =>
  ({ triggersState }) => {
    // Parse the received triggers state
    let parsedTriggersState = JSON.parse(triggersState);
    // Update the triggers state for this client in the clients object
    clients[socket.id].Triggers = parsedTriggersState.triggers;
    // Forward the updated triggers state to all clients
    socket.emit('syncTriggers', {
      triggersState: JSON.stringify(clients),
    });
    // Emit the 'clientList' event with the updated clients object
    io.emit('clientList', clients);
  };

// Function to update triggers length
const updateTriggersLength =
  (socket, clients, io) =>
  ({ triggersState }) => {
    // Parse the received triggers state
    let parsedTriggersState = JSON.parse(triggersState);
    // Update the triggers state for this client in the clients object
    clients[socket.id].Triggers = parsedTriggersState.triggers;
    // Forward the updated triggers state to all clients
    io.emit('updateTriggersLength', {
      triggersState: JSON.stringify(clients),
    });
    // Emit the 'clientList' event with the updated clients object
    io.emit('clientList', clients);
  };
// Function to the triggers
const updateValuesClientsTriggers =
  (socket, clients, io) =>
  ({ triggersState }) => {
    // Parse the received triggers state
    let parsedTriggersState = JSON.parse(triggersState);
    // Update the triggers state for this client in the clients object
    clients[socket.id].Triggers = parsedTriggersState.triggers;
    // Forward the updated triggers state to all clients
    io.emit('updateValuesClientsTriggers', {
      triggersState: JSON.stringify(clients),
    });
    // Emit the 'clientList' event with the updated clients object
    io.emit('clientList', clients);
  };

// DATA LOGGING
//--------------------------------------------------

let logEntries = [];
let logFilePath = null;

// Function to generate a new file path based on the timestamp
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

// Function to write the stored log data to a file
const writeLogData = () => {
  // Convert the log entries to CSV
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
const myPort = process.env.PORT || 8081; // let Glitch choose port OR use 3000
httpServer.listen(myPort, () => {
  console.log(`the server is listening on port: ${myPort}`);
});
