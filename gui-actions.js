// FILE for all the gui actions

// Tab functionality for the gui-container
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  tablinks = document.getElementsByClassName('tab');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }
  document.getElementById(tabName).style.display = 'block';
  evt.currentTarget.className += ' active';
}

// Make OSC GUI::::
// Define the addPort function in the global scope

oscPortObjects = []; // Array to store the row objects

window.addRow = (inPortValue, outPortValue) => {
  let row = {}; // New object for the row

  let table = document.getElementById('portTable');
  let newRow = table.insertRow(table.rows.length);

  let inPortCell = newRow.insertCell(0),
    outPortCell = newRow.insertCell(1),
    addressCell = newRow.insertCell(2),
    coordinatesCell = newRow.insertCell(3),
    activeCell = newRow.insertCell(4);

  let inPortInput = document.createElement('input');
  inPortInput.type = 'text';
  inPortInput.className = 'inPortInput';
  inPortInput.value = inPortValue || ''; // Set the value of the input field if defined
  inPortInput.addEventListener('input', () => {
    row.inPort = inPortInput.value; // Update the property in the object
  });
  inPortInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      console.log('inPort:', inPortInput.value);
    }
  });
  inPortCell.appendChild(inPortInput);

  let outPortInput = document.createElement('input');
  outPortInput.type = 'text';
  outPortInput.className = 'outPortInput';
  outPortInput.value = outPortValue || ''; // Set the value of the input field if defined
  outPortInput.addEventListener('input', () => {
    row.outPort = outPortInput.value; // Update the property in the object
  });
  outPortInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      console.log('outPort:', outPortInput.value);
    }
  });
  outPortCell.appendChild(outPortInput);

  let addressInput = document.createElement('input');
  addressInput.type = 'text';
  addressInput.className = 'addressInput';
  addressInput.addEventListener('input', () => {
    row.address = addressInput.value; // Update the property in the object
  });
  addressInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      console.log('address:', addressInput.value);
    }
  });
  addressCell.appendChild(addressInput);

  let coordinatesInput = document.createElement('input');
  coordinatesInput.type = 'text';
  coordinatesInput.className = 'coordinatesInput';
  coordinatesInput.addEventListener('input', () => {
    row.coordinates = coordinatesInput.value; // Update the property in the object
  });
  coordinatesInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      console.log('coordinates:', coordinatesInput.value);
    }
  });
  coordinatesCell.appendChild(coordinatesInput);

  let activeInput = document.createElement('input');
  activeInput.type = 'checkbox';
  activeInput.className = 'activeInput';
  activeInput.addEventListener('change', () => {
    row.active = activeInput.checked; // Update the property in the object
  });
  activeCell.appendChild(activeInput);

  window.oscPortObjects.push(row); // Add the object to the array
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

// Iterate over the oscPortObjects array
for (let row of window.oscPortObjects) {
  // Access the values of the row
  console.log('inPort:', row.inPort);
  console.log('outPort:', row.outPort);
  console.log('address:', row.address);
  console.log('coordinates:', row.coordinates);
  console.log('active:', row.active);
}
