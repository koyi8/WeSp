// Check if the input is a number, integer, and within the range of 1024-49151
export const checkPortNumberInput = (input) => {
  let number = parseInt(input, 10);

  if (Number.isNaN(number)) {
    throw new Error('Input is not a number');
  }

  if (!Number.isInteger(number)) {
    throw new Error('Input is not an integer');
  }

  if (number < 1024 || number > 49151) {
    throw new Error('Input is out of range (1024-49151)');
  }

  return number;
};

export const isValidIP = (ip) => {
  let ipFormat = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
  return ipFormat.test(ip);
};

//Checks adress input and sets sendOSC flag for the corresponding triggerObject
// also sets osc adress attribute for the triggerObject
export const interpolateString = (input, triggerObjects) => {
  // Initialize sendOSC to false for all objects
  triggerObjects.forEach((triggerObject) => (triggerObject.sendOSC = false));

  // Determine which placeholders are present in the input string
  let generalPlaceholdersPresent = /\$x\b|\$y\b|\$z\b/.test(input);
  let idPlaceholderPresent = /\$srcID\b/.test(input);

  // Iterate over the triggerObjects
  for (let i = 0; i < triggerObjects.length; i++) {
    let triggerObject = triggerObjects[i];

    // Reset result to the original input value at the start of each iteration
    let result = input;

    // Set sendOSC to true for all objects if general placeholders are present
    if (generalPlaceholdersPresent) {
      triggerObject.sendOSC = true;
    }

    // Set sendOSC to true for the corresponding object if specific placeholders are present
    let specificPlaceholderPresent = new RegExp(
      `\\$x${i + 1}\\b|\\$y${i + 1}\\b|\\$z${i + 1}\\b`,
    ).test(input);
    if (specificPlaceholderPresent) {
      triggerObject.sendOSC = true;
    }

    // Replace $srcID placeholder
    if (idPlaceholderPresent) {
      result = result.replace(/\$srcID\b/g, i + 1);
    }

    // Remove general placeholders
    result = result.replace(/\$x\b/g, '');
    result = result.replace(/\$y\b/g, '');
    result = result.replace(/\$z\b/g, '');

    // Remove specific placeholders
    result = result.replace(new RegExp(`\\$x${i + 1}\\b`, 'g'), '');
    result = result.replace(new RegExp(`\\$y${i + 1}\\b`, 'g'), '');
    result = result.replace(new RegExp(`\\$z${i + 1}\\b`, 'g'), '');

    // Remove trailing whitespaces
    result = result.trim();

    // Apply the result of the string replacement to the address attribute of the triggerObject
    triggerObject.address = result;
  }

  console.log(triggerObjects); // Logs the triggerObjects array
};

export const interpolateStringOscMessage = (input, triggerObjects) => {
  // Determine if the $srcID placeholder is present in the input string
  let idPlaceholderPresent = /\$srcID\b/.test(input);

  // Iterate over the triggerObjects
  for (let i = 0; i < triggerObjects.length; i++) {
    let triggerObject = triggerObjects[i];

    // Reset result to the original input value at the start of each iteration
    let result = input;

    // Replace $srcID placeholder
    if (idPlaceholderPresent) {
      result = result.replace(/\$srcID\b/g, i + 1);
    }

    // Apply the result of the string replacement to the address attribute of the triggerObject
    triggerObject.oscMessage = result;
  }
  return triggerObjects;

  //console.log(triggerObjects); // Logs the triggerObjects array
};

export const interpolateStringScaling = (input, row, scale) => {
  let scalingExpression = input.match(/([*\/]-?\d+(\.\d+)?)/);
  // If a scaling expression is found, store it as a string
  if (scalingExpression) {
    row[scale] = scalingExpression[0]; // Store the expression as a string
  }
  console.log(row); // Logs the row object
};
