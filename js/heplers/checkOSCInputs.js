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

//Checks adress input and sets sendOSC flag for the corresponding triggerObject
export const interpolateString = (input, positionsArray, triggerObjects) => {
  let result = input;

  // Initialize sendOSC to false for all objects
  triggerObjects.forEach((triggerObject) => (triggerObject.sendOSC = false));

  // Check for general placeholders
  if (/\$x\b|\$y\b|\$z\b/.test(input)) {
    triggerObjects.forEach((triggerObject) => (triggerObject.sendOSC = true));
  }

  // Iterate over the positionsArray and triggerObjects
  for (let i = 0; i < positionsArray.length; i++) {
    let trigPos = positionsArray[i];
    let triggerObject = triggerObjects[i];

    if (trigPos && triggerObject) {
      let placeholders = {
        $srcIndex: i + 1,
        [`$x${i + 1}`]: trigPos.x,
        [`$y${i + 1}`]: trigPos.y,
        [`$z${i + 1}`]: trigPos.z,
      };

      for (let placeholder in placeholders) {
        // Create a regular expression for the placeholder
        const regex = new RegExp(placeholder.replace(/\$/g, '\\$'), 'g');
        if (regex.test(input)) {
          result = result.replace(regex, placeholders[placeholder]);

          // Check for specific placeholders and set sendOSC to true for the corresponding object
          if (
            placeholder === `$x${i + 1}` ||
            placeholder === `$y${i + 1}` ||
            placeholder === `$z${i + 1}`
          ) {
            triggerObject.sendOSC = true;
          }
        }
      }
    }
  }

  console.log(triggerObjects); // Logs the triggerObjects array

  return result;
};
