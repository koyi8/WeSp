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

// updates the triggerObjects, keeps track of x,y,z values
setInterval(() => {
  updateTriggerObjectsLength(positionsArray);
  updateTriggerObjectsPositions(positionsArray);
}, 17); // ~16.67 ms (1 second / 60) for 60 fps

export const addRowUDPPorts = (
  inPortValue = '5001',
  outPortValue = '7001',
  outAddressValue = '127.0.0.1',
) => {
  const row = {};
  const table = document.getElementById('portTable');
  const newRow = table.insertRow(table.rows.length);

  newRow.innerHTML = `
    <td class="portIndexCell">${++portIndex}</td>
    <td><input type="text" class="inPortCell" value="${inPortValue}"></td>
    <td><input type="text" class="outPortCell" value="${outPortValue}"></td>
    <td><input type="text" class="outAddressCell" value="${outAddressValue}"></td>
    <td><input type="checkbox" class="openCell"></td>
  `;

  row.portIndex = portIndex;

  const inPortInput = newRow.querySelector('.inPortCell');
  row.inPort = checkPortNumberInput(inPortInput.value);
  inPortInput.addEventListener('change', () => {
    const portNumber = checkPortNumberInput(inPortInput.value);
    if (portNumber !== false) row.inPort = portNumber;
    else console.error('Invalid port number.');
  });

  const outPortInput = newRow.querySelector('.outPortCell');
  row.outPort = checkPortNumberInput(outPortInput.value);
  outPortInput.addEventListener('change', () => {
    const portNumber = checkPortNumberInput(outPortInput.value);
    if (portNumber !== false) row.outPort = portNumber;
    else console.error('Invalid port number.');
  });

  const outAddressInput = newRow.querySelector('.outAddressCell');
  row.outAddress = outAddressInput.value;
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

  const openInput = newRow.querySelector('.openCell');
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

  udpPortObjects.push(row);
  updatePortSelect(oscMessageObjects, udpPortObjects);
};

// Define the deletePort function in the global scope
export const deleteRowUDPPorts = () => {
  const table = document.querySelector('#portTable');
  const rows = table.querySelectorAll('tr');
  // Ensure there's at least one row to delete
  if (rows.length > 1) {
    rows[rows.length - 1].remove();
    udpPortObjects.pop();
    portIndex--;
    updatePortSelect(oscMessageObjects, udpPortObjects);
  } else {
    console.log("Can't delete the last row");
  }
};

// Define the addRowOSCMessage function in the global scope
export const addRowOSCMessage = () => {
  let row = {}; // New object for the row

  let table = document.getElementById('messageTable');
  let newRow = table.insertRow(table.rows.length);

  newRow.innerHTML = `
    <td>
      <select id="portNumberSelect" class="portNumberSelect"></select>
    </td>
    <td>
      <input class="addressInput" value="/source/xyz $srcID" />
    </td>
    <td class="oscArgumentsInput"></td>
    <td>
      <input type="checkbox" class="sendInput" />
    </td>
  `;

  // portNumberCell
  let portNumberSelect = newRow.querySelector('#portNumberSelect');
  row.portNumberSelect = portNumberSelect;
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
    //console.log(row);
  });

  let addressInput = newRow.querySelector('.addressInput');
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
  let oscArgumentsCell = newRow.querySelector('.oscArgumentsInput');
  //Default value for the dropdown
  row.sendX = 'allX';
  row.sendY = 'allY';
  row.sendZ = 'allZ';
  // 3pairs of textfields and dropwdowns
  for (let i = 0; i < 3; i++) {
    // Create label
    let label = document.createElement('label');
    label.className = 'osc-label';
    label.textContent = labels[i];
    oscArgumentsCell.appendChild(label);

    // Create text field
    let textField = document.createElement('input');
    textField.type = 'text';
    textField.className = 'osc-input';
    textField.value = row[scales[i]] = '*1';
    textField.addEventListener('change', () => {
      interpolateStringScaling(textField.value, row, scales[i]);
      console.log(row);
    });
    oscArgumentsCell.appendChild(textField);

    // Create dropdown
    let dropdown = document.createElement('select');
    dropdown.className = 'osc-select';
    dropdown.innerHTML = `<option value="all${labels[i]}">all${labels[i]}</option>`;
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
    oscArgumentsCell.appendChild(dropdown);
  }

  // sendOSCCell
  let sendInput = newRow.querySelector('.sendInput');
  sendInput.addEventListener('change', () => {
    let rowIndex = oscMessageObjects.indexOf(row);
    if (sendInput.checked) {
      socket.emit('startSendOSC', rowIndex);
      console.log('Start sending Coordinates');

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
          //objectsToSend = triggerObjectsCopy;
          objectsToSend = triggerObjectsCopy.filter(
            (obj) => !(obj.x === 0 && obj.y === 0 && obj.z === 0),
          );
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

        //console.log(objectsToSend);
        socket.emit('sendOSC', objectsToSend);
      }, sendingInterval);
    } else {
      clearInterval(sendingIntervals[rowIndex]);
      delete sendingIntervals[rowIndex];
      socket.emit('stopSendOSC', rowIndex);
      console.log('Stop sending Coordinates');
    }
  });

  oscMessageObjects.push(row);
  updatePortSelect(oscMessageObjects, udpPortObjects);
  updateDropdownSelect(triggerObjects, labels);
};

// Define the deletePort function in the global scope
export const deleteRowOSCMessage = () => {
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
          if (
            triggerObjects[index].x === null ||
            triggerObjects[index].y === null ||
            triggerObjects[index].z === null
          )
            continue;

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
    if (triggerObjects[i]) {
      const oldX = triggerObjects[i].x;
      const oldY = triggerObjects[i].y;
      const oldZ = triggerObjects[i].z;

      triggerObjects[i].x = positionsArray[i].x;
      triggerObjects[i].y = positionsArray[i].y;
      triggerObjects[i].z = positionsArray[i].z;

      if (
        (oldX !== null && positionsArray[i].x === null) ||
        (oldY !== null && positionsArray[i].y === null) ||
        (oldZ !== null && positionsArray[i].z === null) ||
        (oldX === null && positionsArray[i].x !== null) ||
        (oldY === null && positionsArray[i].y !== null) ||
        (oldZ === null && positionsArray[i].z !== null)
      ) {
        updateDropdownSelect(triggerObjects, labels);
        break;
      }
    }
  }
};

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
