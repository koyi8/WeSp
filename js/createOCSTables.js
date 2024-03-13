// Description: This file contains tcontainerhe logic to create the tables for the OSC configuration section.

import {
  addRowUDPPorts,
  deleteRowUDPPorts,
  addRowOSCMessage,
  deleteRowOSCMessage,
} from '/client_web.js';

export const createOCSTables = () => {
  const container = document.getElementById('osc-container');
  container.innerHTML = '';
  // Create the UDP_Ports section
  const udpPortsDiv = document.createElement('div');
  udpPortsDiv.className = 'item';

  const udpPortsH3 = document.createElement('h3');
  udpPortsH3.textContent = 'UDP_Ports';
  udpPortsDiv.appendChild(udpPortsH3);

  const udpPortsTable = document.createElement('table');
  udpPortsTable.id = 'portTable';
  udpPortsTable.className = 'oscConfigTable';
  udpPortsDiv.appendChild(udpPortsTable);

  // Add table headers for UDP_Ports
  const udpPortsHeaders = [
    'Port-ID',
    'inPort',
    'outPort',
    'outAddress',
    'open/close',
  ];
  const udpPortsTr = document.createElement('tr');
  udpPortsTr.className = 'oscConfigTableRow';
  udpPortsHeaders.forEach((header, index) => {
    const th = document.createElement('th');
    th.textContent = header;
    switch (index) {
      case 0:
        th.className = 'indexCell';
        break;
      case 1:
        th.className = 'portCell';
        break;
      case 2:
        th.className = 'portCell';
        break;
      case 3:
        th.className = 'ipCell';
        break;
      case 4:
        th.className = 'checkboxCell';
        break;
    }

    udpPortsTr.appendChild(th);
  });
  udpPortsTable.appendChild(udpPortsTr);

  // Add buttons for UDP_Ports
  const udpPortsAddButton = document.createElement('button');
  udpPortsAddButton.textContent = 'Add';
  udpPortsAddButton.addEventListener('click', () => {
    // Add your addRowUDPPorts logic here
    addRowUDPPorts();
  });
  udpPortsDiv.appendChild(udpPortsAddButton);

  const udpPortsDeleteButton = document.createElement('button');
  udpPortsDeleteButton.textContent = 'Delete';
  udpPortsDeleteButton.addEventListener('click', () => {
    // Add your deleteRowUDPPorts logic here
    deleteRowUDPPorts();
  });
  udpPortsDiv.appendChild(udpPortsDeleteButton);

  // Append the UDP_Ports section to the container
  container.appendChild(udpPortsDiv);

  // Create the OSC_Messages section
  const oscMessagesDiv = document.createElement('div');
  oscMessagesDiv.className = 'item';

  const oscMessagesH3 = document.createElement('h3');
  oscMessagesH3.textContent = 'OSC_Messages';
  oscMessagesDiv.appendChild(oscMessagesH3);

  const oscMessagesTable = document.createElement('table');
  oscMessagesTable.id = 'messageTable';
  oscMessagesTable.className = 'oscConfigTable';
  oscMessagesDiv.appendChild(oscMessagesTable);

  // Add table headers for OSC_Messages
  const oscMessagesHeaders = ['Port Sel', 'oscMessage', 'oscArguments', 'Send'];
  const oscMessagesTr = document.createElement('tr');
  oscMessagesTr.className = 'oscConfigTableRow';
  oscMessagesHeaders.forEach((header, index) => {
    const th = document.createElement('th');
    th.textContent = header;
    switch (index) {
      case 0:
        th.className = 'portNumberCell';
        break;
      case 1:
        th.className = 'oscMessageCell';
        break;
      case 2:
        th.className = 'oscArgumentsCell';
        break;
      case 3:
        th.className = 'sendCell';
        break;
    }
    oscMessagesTr.appendChild(th);
  });
  oscMessagesTable.appendChild(oscMessagesTr);

  // Add buttons for OSC_Messages
  const oscMessagesAddButton = document.createElement('button');
  oscMessagesAddButton.textContent = 'Add';
  oscMessagesAddButton.addEventListener('click', () => {
    // Add your addRowOSCMessage logic here
    addRowOSCMessage();
  });
  oscMessagesDiv.appendChild(oscMessagesAddButton);

  const oscMessagesDeleteButton = document.createElement('button');
  oscMessagesDeleteButton.textContent = 'Delete';
  oscMessagesDeleteButton.addEventListener('click', () => {
    // Add your deleteRowOSCMessage logic here
    deleteRowOSCMessage();
  });
  oscMessagesDiv.appendChild(oscMessagesDeleteButton);

  // Append the OSC_Messages section to the container
  container.appendChild(oscMessagesDiv);
};
