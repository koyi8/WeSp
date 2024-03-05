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
  isValidIP,
  interpolateStringOscMessage,
  interpolateStringScaling,
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

let udpPortObjects = [], // Array to store the udpPortRow objects
  portIndex = 0, // Variable to keep track of the port index
  oscMessageObjects = [], // Array to store the oscMessageRow objects
  sendingIntervals = [], // Array to store the sending intervals
  sendingInterval = 20; // Interval to send coordinates 1 second

let labels = ['X', 'Y', 'Z'],
  scales = ['scaleX', 'scaleY', 'scaleZ'];

window.udpPortObjects = udpPortObjects; // Make udpPortObjects globally accessible
window.oscMessageObjects = oscMessageObjects; // Make oscMessageObjects globally accessible

// array to store all the SourceObject -> Javascript objects
let triggerObjects = [],
  triggerObject = {
    clientID: '',
    outPort: '',
    outAddress: '',
    oscMessage: '',
    x: '',
    y: '',
    z: '',
  };

// updates the triggerObjects array based on the positionsArray and keeps track of x,y,z values
setInterval(() => {
  updateTriggerObjectsLength(positionsArray);
  updateTriggerObjectsPositions(positionsArray);
}, 17); // ~16.67 ms (1 second / 60) for 60 fps

window.addRowUDPPorts = (inPortValue, outPortValue, outAddressValue) => {
  let row = {}; // New object for the row

  let table = document.getElementById('portTable');
  let newRow = table.insertRow(table.rows.length);

  let portIndexCell = newRow.insertCell(0),
    inPortCell = newRow.insertCell(1),
    outPortCell = newRow.insertCell(2),
    outAddressCell = newRow.insertCell(3),
    openCell = newRow.insertCell(4);
  // Increment the port index for each new row
  portIndex++;
  portIndexCell.textContent = portIndex;
  row.portIndex = portIndex;
  portIndexCell.className = 'portIndexCell';
  // inPortCell
  let inPortInput = document.createElement('input');
  inPortInput.type = 'text';
  inPortInput.className = 'inPortCell';
  inPortInput.value = inPortValue || '5001'; //Default
  row.inPort = checkPortNumberInput(inPortInput.value);
  inPortCell.appendChild(inPortInput);
  // add eventlistener to check if the input is a valid port number
  inPortInput.addEventListener('change', () => {
    let portNumber = checkPortNumberInput(inPortInput.value);
    if (portNumber !== false) {
      row.inPort = portNumber;
    } else {
      console.error('Invalid port number.');
    }
  });
  // outPortCell
  let outPortInput = document.createElement('input');
  outPortInput.type = 'text';
  outPortInput.className = 'outPortCell';
  outPortInput.value = outPortValue || '7001'; //DEFAULT
  row.outPort = checkPortNumberInput(outPortInput.value);
  outPortCell.appendChild(outPortInput);
  // add eventlistener to check if the input is a valid port number
  outPortInput.addEventListener('change', () => {
    let portNumber = checkPortNumberInput(outPortInput.value);
    if (portNumber !== false) {
      row.outPort = portNumber;
    } else {
      console.error('Invalid port number.');
    }
  });
  // outAddressCell
  let outAddressInput = document.createElement('input');
  outAddressInput.type = 'text';
  outAddressInput.className = 'outAddressCell';
  outAddressInput.value = outAddressValue || '127.0.0.1';
  row.outAddress = outAddressInput.value;
  outAddressCell.appendChild(outAddressInput);
  // add eventlistener to check if the input is valid
  outAddressInput.addEventListener('change', () => {
    if (isValidIP(outAddressInput.value)) {
      try {
        row.outAddress = outAddressInput.value;
        console.log(row.outAddress);
      } catch (error) {
        console.error(error.message);
      }
    } else {
      console.error('Invalid IP address format.');
    }
  });

  // openCell
  let openInput = document.createElement('input');
  openInput.type = 'checkbox';
  openInput.className = 'openCell';
  openInput.addEventListener('change', () => {
    row.active = openInput.checked;

    if (row.active) {
      socket.emit('addUDPPort', row.inPort, row.outPort, row.outAddress);
      newRow.classList.add('checked');
    } else {
      socket.emit('removeUDPPort', row.inPort, row.outPort);
      newRow.classList.remove('checked');
    }
  });
  openCell.appendChild(openInput);
  udpPortObjects.push(row);
  // Update the select options for each oscMessageObject
  updatePortSelect(oscMessageObjects, udpPortObjects);
};

// Define the deletePort function in the global scope
window.deleteRowUDPPorts = () => {
  let table = document.getElementById('portTable');
  let rowCount = table.rows.length;

  // Ensure there's at least one row to delete
  if (rowCount > 1) {
    table.deleteRow(rowCount - 1);
    udpPortObjects.pop();
    portIndex--;
    updatePortSelect(oscMessageObjects, udpPortObjects);

    console.log(udpPortObjects.length);
  } else {
    console.log("Can't delete the last row");
  }
};

// Define the addRowOSCMessage function in the global scope
window.addRowOSCMessage = (sendOSCValue) => {
  let row = {}; // New object for the row

  let table = document.getElementById('messageTable');
  let newRow = table.insertRow(table.rows.length);

  let portNumberCell = newRow.insertCell(0),
    oscMessageCell = newRow.insertCell(1),
    oscArgumentsCell = newRow.insertCell(2),
    sendCell = newRow.insertCell(3);

  // portNumberCell
  let portNumberSelect = document.createElement('select');
  portNumberSelect.id = 'portNumberSelect';
  portNumberSelect.className = 'portNumberSelect';
  row.portNumberSelect = portNumberSelect;
  portNumberCell.appendChild(portNumberSelect);
  // assign defaults from udpPortObjects
  row['outPort'] = udpPortObjects[0].outPort;
  row['outAddress'] = udpPortObjects[0].outAddress;
  // add eventllistener for the select options
  portNumberSelect.addEventListener('change', () => {
    let selectedIndex = portNumberSelect.value - 1; // selected index
    let selectedUdpPortObject = udpPortObjects[selectedIndex]; // Get selected UDP port object
    // Update rowrObject
    row['outPort'] = selectedUdpPortObject.outPort;
    row['outAddress'] = selectedUdpPortObject.outAddress;
    console.log(row);
  });

  let addressInput = document.createElement('input');
  addressInput.className = 'addressInput';
  oscMessageCell.appendChild(addressInput);
  addressInput.value = '/source/xyz $srcID';
  row.oscMessage = addressInput.value;
  addressInput.addEventListener('change', () => {
    let inputValue = addressInput.value;
    // Regular expression for OSC address checks basic /something/something/else logic
    let oscAddressRegex = /^(\/\w+)+(.*)$/;
    if (oscAddressRegex.test(inputValue)) {
      console.log('Valid OSC address');
      row.oscMessage = inputValue;
    } else {
      console.log('Invalid OSC address');
    }
  });
  // oscArgumentsCell
  oscArgumentsCell.className = 'oscArgumentsInput';
  // 3pairs of textfields and dropwdowns
  for (let i = 0; i < 3; i++) {
    // Create Label
    let label = document.createElement('label');
    label.textContent = labels[i];
    label.className = 'osc-label'; //
    oscArgumentsCell.appendChild(label);

    // Create a text field
    let textField = document.createElement('input');
    textField.type = 'text';
    textField.className = 'osc-input'; // Add class
    oscArgumentsCell.appendChild(textField);
    //set defaults scales as 1
    row[scales[i]] = '*1';
    // eventlistener for the textfield
    textField.addEventListener('change', () => {
      //let inputValue = textField.value;
      interpolateStringScaling(textField.value, row, scales[i]);
    });
    textField.value = row[scales[i]];

    //Default value for the dropdown
    row.sendX = 'allX';
    row.sendY = 'allY';
    row.sendZ = 'allZ';

    // Create a dropdown
    let dropdown = document.createElement('select');
    dropdown.className = 'osc-select'; // Add class
    oscArgumentsCell.appendChild(dropdown);
    // Add event listener to dropdown
    dropdown.addEventListener('change', (e) => {
      let selectedValue = e.target.value;
      if (selectedValue.startsWith('X') || selectedValue === 'allX') {
        row.sendX = selectedValue;
      } else if (selectedValue.startsWith('Y') || selectedValue === 'allY') {
        row.sendY = selectedValue;
      } else if (selectedValue.startsWith('Z') || selectedValue === 'allZ') {
        row.sendZ = selectedValue;
      }
      console.log(row);
    });

    // set default option "all"
    let option = document.createElement('option');
    option.value = 'all' + labels[i];
    option.text = 'all' + labels[i];
    dropdown.appendChild(option);
  }

  // sendOSCCell
  let sendInput = document.createElement('input');
  sendInput.type = 'checkbox';
  sendInput.className = 'sendInput';
  sendCell.appendChild(sendInput);
  sendInput.addEventListener('change', () => {
    let rowIndex = oscMessageObjects.indexOf(row);
    if (sendInput.checked) {
      socket.emit('startSendOSC', rowIndex);
      //assign the row variables outport, outaddress, oscMessage
      sendingIntervals[rowIndex] = setInterval(() => {
        let triggerObjectsCopy = triggerObjects.map((triggerObject, index) => {
          let oscMessage = interpolateStringOscMessage(
            row.oscMessage,
            triggerObjects,
          );
          let scaledTriggerObject = {
            ...triggerObject,
            outPort: row.outPort,
            outAddress: row.outAddress,
            oscMessage: oscMessage[index].oscMessage,
          };
          // Apply scaling factors
          scaledTriggerObject.x = eval(`${scaledTriggerObject.x}${row.scaleX}`);
          scaledTriggerObject.y = eval(`${scaledTriggerObject.y}${row.scaleY}`);
          scaledTriggerObject.z = eval(`${scaledTriggerObject.z}${row.scaleZ}`);
          return scaledTriggerObject;
        });
        // Determine which objects to send based on sendX, sendY, and sendZ
        let objectsToSend;
        if (
          row.sendX === 'allX' &&
          row.sendY === 'allY' &&
          row.sendZ === 'allZ'
        ) {
          objectsToSend = triggerObjectsCopy;
        } else {
          let xObject = triggerObjectsCopy[row.sendX.slice(1) - 1];
          let yObject = triggerObjectsCopy[row.sendY.slice(1) - 1];
          let zObject = triggerObjectsCopy[row.sendZ.slice(1) - 1];
          // Select the first defined object
          let definedObject = xObject || yObject || zObject;
          objectsToSend = [
            {
              ...definedObject,
              x: xObject?.x,
              y: yObject?.y,
              z: zObject?.z,
            },
          ];
        }

        console.log(objectsToSend);
        // socket emit triggerObjects
        socket.emit('sendOSC', objectsToSend);
      }, sendingInterval);
    } else {
      clearInterval(sendingIntervals[rowIndex]);
      delete sendingIntervals[rowIndex];
      socket.emit('stopSendOSC', rowIndex);
      console.log('Stop sending Coordinates');
    }
  });
  sendCell.appendChild(sendInput);

  oscMessageObjects.push(row);
  updatePortSelect(oscMessageObjects, udpPortObjects);
  updateDropdownSelect(triggerObjects, labels);
};

// Define the deletePort function in the global scope
window.deleteRowOSCMessage = () => {
  let table = document.getElementById('messageTable');
  let rowCount = table.rows.length;

  // Ensure there's at least one row to delete
  if (rowCount > 1) {
    table.deleteRow(rowCount - 1);
    oscMessageObjects.pop();
  } else {
    console.log("Can't delete the last row");
  }
};

const updatePortSelect = (rowOSCObjects, udpPortObjects) => {
  rowOSCObjects.forEach((rowOSCObject) => {
    // Check if portNumberSelect exists
    if (rowOSCObject.portNumberSelect) {
      // Store the selected value
      const selectedValue = rowOSCObject.portNumberSelect.value;
      // Clear existing options
      rowOSCObject.portNumberSelect.innerHTML = '';

      udpPortObjects.forEach((item) => {
        let option = document.createElement('option');
        option.value = item.portIndex;
        option.text = item.portIndex;
        rowOSCObject.portNumberSelect.appendChild(option); // Append to portNumberSelect
      });
      // Restore the selected value
      rowOSCObject.portNumberSelect.value = selectedValue;
    }
  });
};

const updateDropdownSelect = (triggerObjects, labels) => {
  const dropdowns = document.getElementsByClassName('osc-select');
  const numRowOSCObjects = dropdowns.length / labels.length;

  for (let i = 0; i < numRowOSCObjects; i++) {
    for (const [j, label] of labels.entries()) {
      const dropdown = dropdowns[i * labels.length + j];

      // Store the selected value
      const selectedValue = dropdown.value;
      dropdown.innerHTML = '';
      // Create and append the 'all' option
      let allOption = document.createElement('option');
      allOption.value = 'all' + label;
      allOption.text = 'all' + label;
      dropdown.appendChild(allOption);

      if (triggerObjects.length > 0) {
        for (let index = 0; index < triggerObjects.length; index++) {
          // Create and append the triggerObject option
          let triggerOption = document.createElement('option');
          triggerOption.value = label + (index + 1);
          triggerOption.text = label + (index + 1);
          dropdown.appendChild(triggerOption);
        }
      }
      // Restore the selected value
      dropdown.value = selectedValue;
    }
  }
  console.log(triggerObjects);
};

// functions to process the trigger objects Object
const updateTriggerObjectsLength = (positionsArray) => {
  if (positionsArray.length > triggerObjects.length) {
    let diff = positionsArray.length - triggerObjects.length;
    for (let i = 0; i < diff; i++) {
      let newTriggerObject = { ...triggerObject };
      triggerObjects.push(newTriggerObject);
    }
    updateDropdownSelect(triggerObjects, labels);
  } else if (positionsArray.length < triggerObjects.length) {
    let diff = triggerObjects.length - positionsArray.length;
    for (let i = 0; i < diff; i++) {
      triggerObjects.pop();
    }
    updateDropdownSelect(triggerObjects, labels);
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

/*
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
*/

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
