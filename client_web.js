// add CDN for socket.io and link to this file in index.html header

// Variables
const serverURL = 'http://:8081/'; //
let socketID = '',
  clientSource = '';

// Client Initialization
const socket = io(serverURL);

// Inlcude data from main_copy.js
import { positionsArray } from '/index.js';

// include error handling for the input fields
import {
  checkPortNumberInput,
  interpolateString,
} from './js/heplers/checkOSCInputs.js';

// RECEIVE

socket.on('connect', () => {
  console.log('Connected to server!');
  socketID = socket.id; // unique random 20-character id is given to client from server
  console.log(`Your socket id is  ${socketID}`);
  clientSource = 'Browser';

  // Emit an event to the server with the clientSource
  socket.emit('clientSource', { id: socketID, source: clientSource });
});

// Make OSC GUI::::
// Define the addPort function in the global scope

let oscPortObjects = [], // Array to store the row objects
  sendingCoordinates, // Variable to start interval and stop interval sneding coordinates
  sendingInterval = 20; // Interval to send coordinates 1 second

window.oscPortObjects = oscPortObjects; // Make oscPortObjects globally accessible

// array to store all the SourceObject -> Javascript objects
let triggerObjects = [],
  triggerObject = {
    clientID: '',
    sendOSC: '',
    outPort: '',
    address: '',
    srcInd: '',
    x: '',
    y: '',
    z: '',
  };

// updates the triggerObjects array based on the positionsArray and keeps track of x,y,z values
setInterval(() => {
  updateTriggerObjectsLength(positionsArray);
  updateTriggerObjectsPositions(positionsArray);
}, 17); // ~16.67 ms (1 second / 60) for 60 fps

window.addRow = (inPortValue, outPortValue) => {
  let row = {}; // New object for the row

  let table = document.getElementById('portTable');
  let newRow = table.insertRow(table.rows.length);

  let inPortCell = newRow.insertCell(0),
    outPortCell = newRow.insertCell(1),
    addressCell = newRow.insertCell(2),
    openCell = newRow.insertCell(3),
    sendCell = newRow.insertCell(4);

  let inPortInput = document.createElement('input');
  inPortInput.type = 'text';
  inPortInput.className = 'inPortInput';
  inPortInput.value = inPortValue || '';
  inPortCell.appendChild(inPortInput);

  let outPortInput = document.createElement('input');
  outPortInput.type = 'text';
  outPortInput.className = 'outPortInput';
  outPortInput.value = outPortValue || '';
  outPortCell.appendChild(outPortInput);
  // ad eventlistener to check if the input is a valid port number
  outPortInput.addEventListener('change', () => {
    try {
      row.outPort = checkPortNumberInput(outPortInput.value);
    } catch (error) {
      console.error(error.message);
    }
  });

  let addressInput = document.createElement('input');
  addressInput.type = 'text';
  addressInput.className = 'addressInput';
  addressCell.appendChild(addressInput);

  addressInput.addEventListener('change', () => {
    let inputValue = addressInput.value;
    // Regular expression for OSC address
    //checks basic /something/something/else logic
    let oscAddressRegex = /^(\/\w+)+(.*)$/;
    if (oscAddressRegex.test(inputValue)) {
      console.log('Valid OSC address');
    } else {
      console.log('Invalid OSC address');
    }
    // func that looks for placeholders in the string and sets sendOSC flag for the corresponding triggerObject
    interpolateString(inputValue, triggerObjects);
  });

  let openInput = document.createElement('input');
  openInput.type = 'checkbox';
  openInput.className = 'openInput';
  openInput.addEventListener('change', () => {
    try {
      row.inPort = checkPortNumberInput(inPortInput.value);
      row.outPort = checkPortNumberInput(outPortInput.value);
      row.active = openInput.checked;

      if (row.active) {
        socket.emit('addUDPPort', row.inPort, row.outPort);
      } else {
        socket.emit('removeUDPPort', row.inPort, row.outPort);
      }
    } catch (error) {
      console.error(error.message);
    }
  });
  openCell.appendChild(openInput);

  let sendInput = document.createElement('input');
  sendInput.type = 'checkbox';
  sendInput.className = 'sendInput';
  sendInput.addEventListener('change', () => {
    if (sendInput.checked) {
      // Add the row object to the oscPortObjects array
      row.inPort = inPortInput.value;
      row.outPort = outPortInput.value;
      row.address = addressInput.value;
      window.oscPortObjects.push(row);

      // Start the interval to send coordinates
      sendingCoordinates = setInterval(() => {
        processTriggerObjects(triggerObjects, row.outPort);

        // socket emit triggerObjects
        socket.emit('triggerObjects', triggerObjects);
      }, sendingInterval);
    } else {
      clearInterval(sendingCoordinates);
      console.log('Stop sending Coordinates');
    }
  });
  sendCell.appendChild(sendInput);
};

// Define the deletePort function in the global scope
window.deleteRow = () => {
  let table = document.getElementById('portTable');
  let rowCount = table.rows.length;

  // Ensure there's at least one row to delete
  if (rowCount > 1) {
    table.deleteRow(rowCount - 1);
    oscPortObjects.pop();
    console.log(oscPortObjects.length);
  } else {
    console.log("Can't delete the last row");
  }
};

// functions to process the trigger objects Object
const updateTriggerObjectsLength = (positionsArray) => {
  // If positionsArray length is greater than triggerObjects length
  if (positionsArray.length > triggerObjects.length) {
    // Calculate the difference
    let diff = positionsArray.length - triggerObjects.length;

    // Add new triggerObjects for the difference
    for (let i = 0; i < diff; i++) {
      // Create a new triggerObject based on the structure defined outside the function
      let newTriggerObject = { ...triggerObject };

      // Add the new triggerObject to the triggerObjects array
      triggerObjects.push(newTriggerObject);
    }
  }
};

const updateTriggerObjectsPositions = (positionsArray) => {
  // Update the x, y, z values for all triggerObjects
  for (let i = 0; i < positionsArray.length; i++) {
    triggerObjects[i].x = positionsArray[i].x;
    triggerObjects[i].y = positionsArray[i].y;
    triggerObjects[i].z = positionsArray[i].z;
  }
};

const processTriggerObjects = (triggerObjects, outportValue) => {
  // Convert outportValue to a number using parseInt
  let outportNumber = parseInt(outportValue, 10);

  // Iterate over the triggerObjects
  triggerObjects.forEach((triggerObject) => {
    // If sendOSC is true
    if (triggerObject.sendOSC) {
      // Assign outportNumber to the triggerObject attribute outPort
      triggerObject.outPort = outportNumber;
    }
    console.log(triggerObject);
  });
};

setInterval(() => {
  // Iterate over the positionsArray
  for (let i = 0; i < positionsArray.length; i++) {
    let trigPos = positionsArray[i];

    if (trigPos) {
      // Send the mapped x, y, z coordinates to the server
      //console.log(trigPos.x, trigPos.y, trigPos.z);
      socket.emit('coordinates', {
        id: socketID,
        TriggerID: 'Trigger_' + (i + 1),
        x: trigPos.x,
        y: trigPos.y,
        z: trigPos.z,
      });
    }
  }
}, 2000); //every 20 ms

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
