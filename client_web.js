// add CDN for socket.io and link to this file in index.html header

// Variables
const serverURL = 'http://:8081/'; // make sure you EDIT THIS!
//"http://DESKTOP-ECNAGKS:8081/";
//"https://omniscient-brainy-sprite.glitch.me/";                                                           // use http://localhost:3000
// if running server locally
let socketID = '';
let clientSource = '';

// Client Initialization
const socket = io(serverURL);

// RECEIVE

socket.on('connect', () => {
  console.log('Connected to server!');
  socketID = socket.id; // unique random 20-character id is given to client from server
  console.log(`Your socket id is ${socketID}`);
  clientSource = 'Browser';

  // Emit an event to the server with the clientSource
  socket.emit('clientSource', { id: socketID, source: clientSource });
});

// THIS WILL BE CHANGED to EVENT LISTENERS

/*
//Open a UDPPort after 5 seconds !!
setTimeout(() => {
  socket.emit('addUDPPort', 7501, 7401);
}, 5000);

//Close the udpPort after 10 seconds !!
setTimeout(() => {
  socket.emit('removeUDPPort', 1);
}, 10000);
*/

// Inlcude data from main_copy.js
import { exportPositionsArray } from '/main copy.js';

setInterval(() => {
  // Iterate over the exportPositionsArray
  for (let i = 0; i < exportPositionsArray.length; i++) {
    let TrigPos = exportPositionsArray[i][0];

    // Map the x, y, and z components of TrigPos
    const xMapped = map(TrigPos.x, 1000, -1000, -15, 15);
    const zMapped = map(TrigPos.y, 0, 500, 0, 10);
    const yMapped = map(TrigPos.z, -1000, 1000, -15, 15);

    //console.log(`Trigger ${i+1}: X = ${xMapped}, Y = ${yMapped}, Z = ${zMapped}`);
    // Send the mapped x, y, z coordinates to the server
    socket.emit('coordinates', {
      id: socketID,
      TriggerID: 'Trigger_' + (i + 1),
      x: xMapped,
      y: yMapped,
      z: zMapped,
    });
  }
}, 20); //every 20 ms

// RTT Latency Check
socket.on('pongCheck', () => {
  const latency = Date.now() - start;
  //console.log(`Latency is ${latency} ms`);
});

let start;
setInterval(() => {
  start = Date.now();
  socket.emit('pingCheck');
}, 1000);

// Map a value from one range to another
function map(value, min1, max1, min2, max2) {
  return ((value - min1) * (max2 - min2)) / (max1 - min1) + min2;
}

//Disconnect from Server
socket.on('disconnect', () => {
  console.log('Disconnected from server!');
});

// coordinate conversion // probaply another file? coodinates MATH?

// in radians //
function cartesianToSphericalRad(x, y, z) {
  var distance = Math.sqrt(x * x + y * y + z * z);
  var azimuth = Math.atan2(y, x);
  var elevation = Math.atan2(z, Math.sqrt(x * x + y * y));

  return { azimuth, elevation, distance };
}

function cartesianToSphericalDeg(x, y, z) {
  var distance = Math.sqrt(x * x + y * y + z * z);
  var azimuth = Math.atan2(y, x) * (180 / Math.PI);
  var elevation = Math.atan2(z, Math.sqrt(x * x + y * y)) * (180 / Math.PI);

  return { azimuth, elevation, distance };
}
