import * as THREE from 'three';
import { logUIInteraction } from './heplers/logUIInteraction';
import { debouncedUpdateControlPointsHTML } from '/index.js';

let selectedPointIndex;
let isNewTrajectory = false;
let previousCurveIndex = null;

export let selectedCurveIndex;

let pointControlSettings = {
  cpRangeMin: -1,
  cpRangeMax: 1,
  cpStepSlider: 0.01,
  cpStepNumber: 0.05,
};

export const updateTrajectoriesHTML = (
  curveManager,
  isNewTrajectory = false,
) => {
  const container = document.getElementById('trajectories-container');
  container.innerHTML = '';

  const tabContainer = document.getElementById('tab-container');
  tabContainer.innerHTML = '';

  // Store the currently active tab index
  let activeTabIndex = selectedCurveIndex;

  curveManager.curves.forEach((curve, curveIndex) => {
    let selectPointIndex = 0;
    // Create a tab for each trajectory
    const tab = document.createElement('button');
    tab.id = `trajectory-tab-${curveIndex}`;
    tab.className =
      curveIndex === activeTabIndex
        ? 'trajectory-tab active'
        : 'trajectory-tab';
    curveManager.curves.length - 1 === curveIndex
      ? 'trajectory-tab active'
      : 'trajectory-tab';
    tab.textContent = `T${curveIndex + 1}`;
    tab.addEventListener('click', () => {
      // Hide all trajectories
      document.querySelectorAll('.trajectory').forEach((trajectory) => {
        trajectory.style.display = 'none';
      });
      // Show the clicked trajectory
      document.getElementById(`trajectory-${curveIndex}`).style.display =
        'block';
      // Deselect all curves
      curveManager.curves.forEach((_, index) => {
        curveManager.toggleCurveSelected(index, false);
      });
      curveManager.toggleCurveSelected(curveIndex, true);
      selectedCurveIndex = curveIndex;

      document
        .querySelectorAll('.trajectory-tab')
        .forEach((e) => e.classList.remove('active'));

      tab.classList.add('active');

      //logging interaction
      logUIInteraction(
        'trajectoryModule',
        `curve selected ${selectedCurveIndex + 1}`,
      );
    });

    tabContainer.appendChild(tab);

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

    // const titleDiv = document.createElement('div');
    // titleDiv.className = 'title';
    // titleDiv.textContent = `Trajectory ${curveIndex + 1}`;
    // headerDiv.appendChild(titleDiv);

    const closedCheckbox = document.createElement('input');
    closedCheckbox.type = 'checkbox';
    closedCheckbox.checked = curve.closed;
    closedCheckbox.addEventListener('change', (e) => {
      curveManager.toggleCurveClosed(curveIndex, e.target.checked);
      const event = new Event('uiUpdated');
      window.dispatchEvent(event);

      //logging interaction
      const eventName = e.target.checked ? 'curve closed' : 'curve open';
      logUIInteraction('trajectoryModule', eventName);
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
      const event = new Event('uiUpdated');
      window.dispatchEvent(event);

      //logging interaction
      logUIInteraction('trajectoryModule', 'tension changed');
    });

    const tensionLabel = document.createElement('label');
    tensionLabel.textContent = 'Tension';
    tensionLabel.appendChild(tensionInput);
    headerDiv.appendChild(tensionLabel);

    const deleteCurveButton = document.createElement('button');
    deleteCurveButton.textContent = 'x';
    deleteCurveButton.addEventListener('click', () => {
      const curvesLength = curveManager.curves.length - 1;
      const isLast = curvesLength === curveIndex;

      curveManager.deleteCurve(curveIndex);
      selectedCurveIndex = isLast ? curvesLength : curveIndex;
      updateTrajectoriesHTML(curveManager);
      console.log('delete curve', curveIndex);
      const event = new Event('uiUpdated');
      window.dispatchEvent(event);

      document
        .querySelectorAll('.trajectory-tab')
        .forEach((e) => e.classList.remove('active'));
      document
        .getElementById(
          `trajectory-tab-${
            isLast ? curveManager.curves.length - 1 : curveIndex
          }`,
        )
        .classList.add('active');

      //logging interaction
      logUIInteraction('trajectoryModule', `curve deleted ${curveIndex + 1}`);
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

        const label = document.createElement('div');
        label.textContent = `${axis.toUpperCase()}: `;

        const input = document.createElement('input');
        input.type = 'number';
        input.name = axis;
        input.min = axis === 'z' ? 0 : pointControlSettings.cpRangeMin;
        input.max = pointControlSettings.cpRangeMax;
        input.step = pointControlSettings.cpStepNumber;
        input.value = object.position[axis].toFixed(2);
        input.className = 'number-input-class';

        const slider = document.createElement('input');
        slider.type = 'range';
        slider.name = `${axis}Slider`;
        slider.min = axis === 'z' ? 0 : pointControlSettings.cpRangeMin;
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

          //logging interaction
          logUIInteraction(
            'trajectoryModule',
            `Control Point Changed: Input Curve: ${curveIndex + 1} Point: ${
              pointLabelIndex + 1
            } Axis: ${axis} Value: ${e.target.value}`,
          );
        });

        slider.addEventListener('input', (e) => updatePosition(e.target.value));
        slider.addEventListener('change', (e) => {
          const event = new Event('uiUpdated');
          window.dispatchEvent(event);

          //logging interaction
          logUIInteraction(
            'trajectoryModule',
            `Control Point Changed: Slider Curve: ${curveIndex + 1} Point: ${
              pointLabelIndex + 1
            } Axis: ${axis} Value: ${e.target.value}`,
          );
        });

        controlDiv.appendChild(label);
        controlDiv.appendChild(input);
        controlDiv.appendChild(slider);
        pointDiv.appendChild(controlDiv);
      });

      const deleteButton = document.createElement('button');
      deleteButton.className = 'delete-controlPoint-button';
      deleteButton.textContent = 'delete';
      deleteButton.addEventListener('click', () => {
        deleteControlPoint(objectIndex, curveManager);
        curveManager.updateControlPointLabels(curveIndex);

        //logging interaction
        logUIInteraction(
          'trajectoryModule',
          `Control Point Deleted: Curve: ${curveIndex + 1} Point: ${
            pointLabelIndex + 1
          }`,
        );
      });

      pointDiv.appendChild(deleteButton);

      const addButton = document.createElement('button');
      addButton.className = 'add-controlPoint-button';
      addButton.textContent = 'add';
      addButton.addEventListener('click', () => {
        addControlPoint(curveIndex, curveManager, objectIndex);
        curveManager.updateControlPointLabels(curveIndex);

        //logging interaction
        logUIInteraction(
          'trajectoryModule',
          `Control Point Added: Curve: ${curveIndex + 1} Point: ${
            pointLabelIndex + 2
          }`,
        );
      });

      pointDiv.appendChild(addButton);

      pointsDiv.appendChild(pointDiv);
      selectPointIndex++;
    });

    trajectoryDiv.appendChild(pointsDiv);
    container.appendChild(trajectoryDiv);
    //selectPointIndex++;
    // Initially hide all trajectories
    trajectoryDiv.style.display = 'none';
    container.appendChild(trajectoryDiv);
  });

  const createTrajectoryDiv = document.createElement('button');
  createTrajectoryDiv.id = 'create-curve';
  createTrajectoryDiv.textContent = '+';
  createTrajectoryDiv.addEventListener('click', () => {
    curveManager.addRandomCurve();

    debouncedUpdateControlPointsHTML();

    setTimeout(() => {
      const curvesLength = curveManager.getCurves().length - 1;
      curveManager.curves.forEach((_, index) => {
        curveManager.toggleCurveSelected(index, false);
      });
      curveManager.toggleCurveSelected(curvesLength, true);
      document
        .querySelectorAll('.trajectory-tab')
        .forEach((e) => e.classList.remove('active'));
      document
        .getElementById(`trajectory-tab-${curvesLength}`)
        .classList.add('active');
      document.querySelectorAll('.trajectory').forEach((trajectory) => {
        trajectory.style.display = 'none';
      });
      document.getElementById(`trajectory-${curvesLength}`).style.display =
        'block';
      selectedCurveIndex = curvesLength;
      logUIInteraction(
        'trajectoryModule',
        `curve added ${curveManager.curves.length}`,
      );
    }, 50);

    // Interaction log
    logUIInteraction(
      'trajectoryModule',
      `curve added ${curveManager.curves.length}`,
    );
  });
  tabContainer.appendChild(createTrajectoryDiv);

  //console.log('selectedcurve index', selectedCurveIndex);

  // Restore the active tab and its corresponding content
  if (activeTabIndex >= 0) {
    const activeTab = document.getElementById(
      `trajectory-tab-${activeTabIndex}`,
    );
    if (activeTab) activeTab.classList.add('active');

    const activeTrajectory = document.getElementById(
      `trajectory-${activeTabIndex}`,
    );
    if (activeTrajectory) activeTrajectory.style.display = 'block';
  } else if (curveManager.curves.length > 0) {
    // Default to the first tab if there are curves but no active tab
    const firstTab = document.getElementById('trajectory-tab-0');
    if (firstTab) firstTab.classList.add('active');

    const firstTrajectory = document.getElementById('trajectory-0');
    if (firstTrajectory) firstTrajectory.style.display = 'block';
  }
};

const deleteControlPoint = (objectIndex, curveManager) => {
  curveManager.deleteSplineObject(objectIndex);
  updateTrajectoriesHTML(curveManager, (isNewTrajectory = false));

  const event = new Event('uiUpdated');
  window.dispatchEvent(event);
};

const addControlPoint = (curveIndex, curveManager, objectIndex) => {
  const currentPoint = curveManager.splineHelperObjects[objectIndex].position;
  const nextPointIndex =
    (objectIndex + 1) % curveManager.splineHelperObjects.length;
  const nextPoint = curveManager.splineHelperObjects[nextPointIndex].position;

  const midPoint = new THREE.Vector3()
    .addVectors(currentPoint, nextPoint)
    .multiplyScalar(0.5);

  //console.log(curveManager.curves[curveIndex].tension);

  const newControlPoint = curveManager.addSplineObject(midPoint, curveIndex);

  const actualNextIndex =
    objectIndex + 1 === curveManager.splineHelperObjects.length &&
    !curveManager.curves[curveIndex].closed
      ? objectIndex
      : objectIndex + 1;

  curveManager.splineHelperObjects.splice(actualNextIndex, 0, newControlPoint);
  curveManager.splineHelperObjects.pop();

  curveManager.updateCurveFromControlPoint(newControlPoint);

  updateTrajectoriesHTML(curveManager, (isNewTrajectory = false));

  const event = new Event('uiUpdated');
  window.dispatchEvent(event);
};

const selectPointListener = (curveIndex, pointIndex, curveManager) => {
  return () => {
    //console.log(`Trajectory ${curveIndex}, Point ${pointIndex} clicked`);
    selectedPointIndex = pointIndex;
    for (let i = 0; i < curveIndex; i++) {
      selectedPointIndex += curveManager.curves[i].points.length;
    }
    //console.log(curveManager.splineHelperObjects[selectedPointIndex]);
    //console.log(curveManager.splineHelperObjects);
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
