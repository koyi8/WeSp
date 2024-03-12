import * as THREE from 'three';

export const updateTrajectoriesHTML = (curveManager) => {
  const container = document.getElementById('trajectories-container');
  container.innerHTML = '';

  curveManager.curves.forEach((curve, curveIndex) => {
    const trajectoryDiv = document.createElement('div');
    trajectoryDiv.className = 'trajectory';
    trajectoryDiv.id = `trajectory-${curveIndex}`;

    const headerDiv = document.createElement('div');
    headerDiv.className = 'header';

    const titleDiv = document.createElement('div');
    titleDiv.className = 'title';
    titleDiv.textContent = `Trajectory ${curveIndex + 1}`;
    headerDiv.appendChild(titleDiv);

    const closedCheckbox = document.createElement('input');
    closedCheckbox.type = 'checkbox';
    closedCheckbox.checked = curve.closed;
    closedCheckbox.addEventListener('change', (e) => {
      curveManager.toggleCurveClosed(curveIndex, e.target.checked);
    });

    const closedLabel = document.createElement('label');
    closedLabel.textContent = 'Closed';
    closedLabel.appendChild(closedCheckbox);
    headerDiv.appendChild(closedLabel);

    const tensionInput = document.createElement('input');
    tensionInput.type = 'range';
    tensionInput.min = 0;
    tensionInput.max = 1;
    tensionInput.step = 0.01;
    tensionInput.value = curve.tension;
    tensionInput.addEventListener('input', (e) => {
      curveManager.updateCurveTension(curveIndex, parseFloat(e.target.value));
    });

    const tensionLabel = document.createElement('label');
    tensionLabel.textContent = 'Tension';
    tensionLabel.appendChild(tensionInput);
    headerDiv.appendChild(tensionLabel);

    trajectoryDiv.appendChild(headerDiv);

    const pointsDiv = document.createElement('div');
    pointsDiv.className = 'points';
    pointsDiv.id = `trajectory-points-${curveIndex}`;

    curveManager.splineHelperObjects.forEach((object, objectIndex) => {
      if (object.curveIndex !== curveIndex) return;

      const pointDiv = document.createElement('div');
      pointDiv.className = 'point';
      pointDiv.id = `trajectory-point-${objectIndex}`;

      ['x', 'y', 'z'].forEach((axis) => {
        const controlDiv = document.createElement('div');
        controlDiv.className = 'control';

        const label = document.createElement('label');
        label.textContent = `${axis.toUpperCase()}: `;

        const input = document.createElement('input');
        input.type = 'number';
        input.name = axis;
        input.value = object.position[axis].toFixed(2);
        input.addEventListener('change', (e) => {
          object.position[axis] = parseFloat(e.target.value);
          curveManager.updateCurveFromControlPoint(object);
        });

        controlDiv.appendChild(label);
        controlDiv.appendChild(input);
        pointDiv.appendChild(controlDiv);
      });

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'delete';
      deleteButton.addEventListener('click', () =>
        deleteControlPoint(objectIndex, curveManager),
      );
      pointDiv.appendChild(deleteButton);

      const addButton = document.createElement('button');
      addButton.textContent = 'add';
      addButton.addEventListener('click', () =>
        addControlPoint(curveIndex, curveManager, objectIndex),
      );
      pointDiv.appendChild(addButton);

      pointsDiv.appendChild(pointDiv);
    });

    trajectoryDiv.appendChild(pointsDiv);
    container.appendChild(trajectoryDiv);
  });
};

const deleteControlPoint = (objectIndex, curveManager) => {
  curveManager.deleteSplineObject(objectIndex);
  updateTrajectoriesHTML(curveManager);
};

const addControlPoint = (curveIndex, curveManager, objectIndex) => {
  const currentPoint = curveManager.splineHelperObjects[objectIndex].position;
  const nextPointIndex =
    (objectIndex + 1) % curveManager.splineHelperObjects.length;
  const nextPoint = curveManager.splineHelperObjects[nextPointIndex].position;

  const midPoint = new THREE.Vector3()
    .addVectors(currentPoint, nextPoint)
    .multiplyScalar(0.5);

  console.log(curveManager.curves[curveIndex].tension);

  const newControlPoint = curveManager.addSplineObject(midPoint, curveIndex);

  const actualNextIndex =
    objectIndex + 1 === curveManager.splineHelperObjects.length &&
    !curveManager.curves[curveIndex].closed
      ? objectIndex
      : objectIndex + 1;

  curveManager.splineHelperObjects.splice(actualNextIndex, 0, newControlPoint);
  curveManager.splineHelperObjects.pop();

  curveManager.updateCurveFromControlPoint(newControlPoint);

  updateTrajectoriesHTML(curveManager);
};

export const updateControlPointsHTML = (curveManager) => {
  curveManager.splineHelperObjects.forEach((object, objectIndex) => {
    const pointDiv = document.getElementById(`trajectory-point-${objectIndex}`);
    if (pointDiv) {
      pointDiv.querySelector(`input[name='x']`).value =
        object.position.x.toFixed(2);
      pointDiv.querySelector(`input[name='y']`).value =
        object.position.y.toFixed(2);
      pointDiv.querySelector(`input[name='z']`).value =
        object.position.z.toFixed(2);
    }
  });
};
