import * as THREE from 'three';

let selectedPointIndex;

export let selectedCurveIndex;

let pointControlSettings = {
  cpRangeMin: -1,
  cpRangeMax: 1,
  cpStepSlider: 0.01,
  cpStepNumber: 0.05,
};

export const updateTrajectoriesHTML = (curveManager) => {
  const container = document.getElementById('trajectories-container');
  container.innerHTML = '';

  curveManager.curves.forEach((curve, curveIndex) => {
    let selectPointIndex = 0;

    const trajectoryDiv = document.createElement('div');
    trajectoryDiv.className = 'trajectory';
    trajectoryDiv.id = `trajectory-${curveIndex}`;
    trajectoryDiv.addEventListener('click', () => {
      // Deselect all curves
      curveManager.curves.forEach((_, index) => {
        curveManager.toggleCurveSelected(index, false);
      });
      curveManager.toggleCurveSelected(curveIndex, true);
      selectedCurveIndex = curveIndex; // update selectedCurveIndex
    });

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

    const deleteCurveButton = document.createElement('button');
    deleteCurveButton.textContent = 'x';
    deleteCurveButton.addEventListener('click', () => {
      curveManager.deleteCurve(curveIndex);
      updateTrajectoriesHTML(curveManager);
    });
    headerDiv.appendChild(deleteCurveButton);

    trajectoryDiv.appendChild(headerDiv);

    const pointsDiv = document.createElement('div');
    pointsDiv.className = 'points';
    pointsDiv.id = `trajectory-points-${curveIndex}`;

    curveManager.splineHelperObjects.forEach((object, objectIndex) => {
      if (object.curveIndex !== curveIndex) return;

      //calc LabelIndex for each curve
      let pointLabelIndex = objectIndex;
      for (let i = 0; i < curveIndex; i++) {
        pointLabelIndex -= curveManager.curves[i].points.length;
      }

      const pointDiv = document.createElement('div');
      pointDiv.className = 'point';
      pointDiv.id = `trajectory-point-${objectIndex}`;

      // Create a label for the point with the objectIndex
      const pointLabel = document.createElement('label');
      pointLabel.textContent = `P ${pointLabelIndex + 1}: `;
      pointDiv.appendChild(pointLabel);

      //selectPointListener
      pointDiv.addEventListener(
        'click',
        selectPointListener(curveIndex, selectPointIndex, curveManager),
      );

      ['x', 'y', 'z'].forEach((axis) => {
        const controlDiv = document.createElement('div');
        controlDiv.className = 'control';

        const label = document.createElement('label');
        label.textContent = `${axis.toUpperCase()}: `;

        const input = document.createElement('input');
        input.type = 'number';
        input.name = axis;
        input.min = pointControlSettings.cpRangeMin;
        input.max = pointControlSettings.cpRangeMax;
        input.step = pointControlSettings.cpStepNumber;
        input.value = object.position[axis].toFixed(2);
        input.className = 'number-input-class';

        const slider = document.createElement('input');
        slider.type = 'range';
        slider.name = `${axis}Slider`;
        slider.min = pointControlSettings.cpRangeMin;
        slider.max = pointControlSettings.cpRangeMax;
        slider.step = pointControlSettings.cpStepSlider;
        slider.value = object.position[axis].toFixed(2);
        slider.className = 'slider-input-class';

        const updatePosition = (value) => {
          object.position[axis] = parseFloat(value);
          curveManager.updateCurveFromControlPoint(object);
          input.value = value;
          slider.value = value;
        };

        input.addEventListener('input', (e) => updatePosition(e.target.value));
        input.addEventListener('change', (e) => {
          const event = new Event('uiUpdated');
          window.dispatchEvent(event);
        });
        slider.addEventListener('input', (e) => updatePosition(e.target.value));
        slider.addEventListener('change', (e) => {
          const event = new Event('uiUpdated');
          window.dispatchEvent(event);
        });

        controlDiv.appendChild(label);
        controlDiv.appendChild(input);
        controlDiv.appendChild(slider);
        pointDiv.appendChild(controlDiv);
      });

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'delete';
      deleteButton.addEventListener(
        'click',
        () => deleteControlPoint(objectIndex, curveManager),
        curveManager.updateControlPointLabels(curveIndex),
      );
      pointDiv.appendChild(deleteButton);

      const addButton = document.createElement('button');
      addButton.textContent = 'add';
      addButton.addEventListener(
        'click',
        () => addControlPoint(curveIndex, curveManager, objectIndex),
        curveManager.updateControlPointLabels(curveIndex),
      );
      pointDiv.appendChild(addButton);

      pointsDiv.appendChild(pointDiv);
      selectPointIndex++;
    });

    trajectoryDiv.appendChild(pointsDiv);
    container.appendChild(trajectoryDiv);
    //selectPointIndex++;
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

const selectPointListener = (curveIndex, pointIndex, curveManager) => {
  return () => {
    console.log(`Trajectory ${curveIndex}, Point ${pointIndex} clicked`);
    selectedPointIndex = pointIndex;
    for (let i = 0; i < curveIndex; i++) {
      selectedPointIndex += curveManager.curves[i].points.length;
    }
    console.log(curveManager.splineHelperObjects[selectedPointIndex]);
    console.log(curveManager.splineHelperObjects);
  };
};

export const updateControlPointsHTML = (curveManager) => {
  curveManager.splineHelperObjects.forEach((object, objectIndex) => {
    const pointDiv = document.getElementById(`trajectory-point-${objectIndex}`);
    if (pointDiv) {
      ['x', 'y', 'z'].forEach((axis) => {
        const value = object.position[axis].toFixed(2);
        const input = pointDiv.querySelector(
          `input[name='${axis}'][type='number']`,
        );
        const slider = pointDiv.querySelector(
          `input[name='${axis}Slider'][type='range']`,
        );
        if (input) {
          input.value = value;
          input.dispatchEvent(new Event('input'));
        }
        if (slider) {
          slider.value = value;
          slider.dispatchEvent(new Event('input'));
        }
      });
    }
  });
};
