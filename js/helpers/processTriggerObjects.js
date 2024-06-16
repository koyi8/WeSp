export const updateTriggerObjectsLength = (
  triggerObjects,
  triggerObject,
  positionsArray,
) => {
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
  return triggerObjects;
};

export const updateTriggerObjectsPositions = (
  triggerObjects,
  positionsArray,
) => {
  // Update the x, y, z values for all triggerObjects
  for (let i = 0; i < positionsArray.length; i++) {
    triggerObjects[i].x = positionsArray[i].x;
    triggerObjects[i].y = positionsArray[i].y;
    triggerObjects[i].z = positionsArray[i].z;
  }
  return triggerObjects;
};

export const processTriggerObjects = (triggerObjects, outportValue) => {
  // Convert outportValue
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
  return triggerObjects;
};
