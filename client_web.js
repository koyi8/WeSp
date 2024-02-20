// add CDN for socket.io and link to this file in index.html header

// Variables
const serverURL = 'http://:8081/'; //
let socketID = '',
  clientSource = '';

// Client Initialization
const socket = io(serverURL);

// RECEIVE

socket.on('connect', () => {
  console.log('Connected to server!');
  socketID = socket.id; // unique random 20-character id is given to client from server
  console.log(`Your socket id is  ${socketID}`);
  clientSource = 'Browser';

  // Emit an event to the server with the clientSource
  socket.emit('clientSource', { id: socketID, source: clientSource });
});

// THIS WILL BE CHANGED to EVENT LISTENERS
/*
//Open a UDPPort after 5 seconds !!
setTimeout(() => {
  socket.emit('addUDPPort', 7500, 7401);
}, 5000);

//Close the udpPort after 10 seconds !!
setTimeout(() => {
  socket.emit('removeUDPPort', 1);
}, 10000);
*/

// Inlcude data from main_copy.js
import { positionsArray } from '/index.js';

setInterval(() => {
  // Iterate over the positionsArray
  for (let i = 0; i < positionsArray.length; i++) {
    let trigPos = positionsArray[i];

    //console.log(`Trigger ${i+1}: X = ${xMapped}, Y = ${yMapped}, Z = ${zMapped}`);
    if (trigPos) {
      // Send the mapped x, y, z coordinates to the server
      socket.emit('coordinates', {
        id: socketID,
        TriggerID: 'Trigger_' + (i + 1),
        x: trigPos.x,
        y: trigPos.y,
        z: trigPos.z,
      });
    }
  }
}, 20); //every 20 ms

// RTT Latency Check
socket.on('pongCheck', () => {
  const latency = Date.now() - start;
  //console.log(`Latency is ${latency} ms`);
});

//Disconnect from Server
socket.on('disconnect', () => {
  console.log('Disconnected from server!');
});

let start;
setInterval(() => {
  start = Date.now();
  socket.emit('pingCheck');
}, 1000);

// coordinate conversion // probaply another file? coodinates MATH?
