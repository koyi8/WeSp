import * as THREE from 'three';
import { logUIInteraction } from '../helpers/logUIInteraction';
import { debouncedUpdateControlPointsHTML } from '/index.js';

let selectedPointIndex;
let isNewTrajectory = false;
let previousTrajectoryIndex = null;

export let selectedTrajectoryIndex;

let pointControlSettings = {
  cpRangeMin: -1,
  cpRangeMax: 1,
  cpStepSlider: 0.01,
  cpStepNumber: 0.05,
};

export const updateTrajectoriesHTML = (
  trajectoryManager,
  isNewTrajectory = false,
) => {
  const container = document.getElementById('trajectories-container');
  container.innerHTML = '';

  const tabContainer = document.getElementById('tab-container');
  tabContainer.innerHTML = '';

  // Store the currently active tab index
  let activeTabIndex = selectedTrajectoryIndex;

  trajectoryManager.trajectories.forEach((trajectory, trajectoryIndex) => {
    let selectPointIndex = 0;
    // Create a tab for each trajectory
    const tab = document.createElement('button');
    tab.id = `trajectory-tab-${trajectoryIndex}`;
    tab.className =
      trajectoryIndex === activeTabIndex
        ? 'trajectory-tab active'
        : 'trajectory-tab';
    trajectoryManager.trajectories.length - 1 === trajectoryIndex
      ? 'trajectory-tab active'
      : 'trajectory-tab';
    tab.textContent = `T${trajectoryIndex + 1}`;
    tab.addEventListener('click', () => {
      // Hide all trajectories
      document.querySelectorAll('.trajectory').forEach((trajectory) => {
        trajectory.style.display = 'none';
      });
      // Show the clicked trajectory
      document.getElementById(`trajectory-${trajectoryIndex}`).style.display =
        'block';
      // Deselect all trajectories
      trajectoryManager.trajectories.forEach((_, index) => {
        trajectoryManager.toggleTrajectorySelected(index, false);
      });
      trajectoryManager.toggleTrajectorySelected(trajectoryIndex, true);
      selectedTrajectoryIndex = trajectoryIndex;

      document
        .querySelectorAll('.trajectory-tab')
        .forEach((e) => e.classList.remove('active'));

      tab.classList.add('active');

      //logging interaction
      logUIInteraction(
        'trajectoryModule',
        `trajectory selected ${selectedTrajectoryIndex + 1}`,
      );
    });

    tabContainer.appendChild(tab);

    const trajectoryDiv = document.createElement('div');
    trajectoryDiv.className = 'trajectory';
    trajectoryDiv.id = `trajectory-${trajectoryIndex}`;
    trajectoryDiv.addEventListener('click', () => {
      // Deselect all trajectories
      trajectoryManager.trajectories.forEach((_, index) => {
        trajectoryManager.toggleTrajectorySelected(index, false);
      });
      trajectoryManager.toggleTrajectorySelected(trajectoryIndex, true);
      selectedTrajectoryIndex = trajectoryIndex; // update selectedTrajectoryIndex
    });

    const headerDiv = document.createElement('div');
    headerDiv.className = 'header';

    // const titleDiv = document.createElement('div');
    // titleDiv.className = 'title';
    // titleDiv.textContent = `Trajectory ${trajectoryIndex + 1}`;
    // headerDiv.appendChild(titleDiv);

    const closedCheckbox = document.createElement('input');
    closedCheckbox.type = 'checkbox';
    closedCheckbox.checked = trajectory.closed;
    closedCheckbox.addEventListener('change', (e) => {
      trajectoryManager.toggleTrajectoryClosed(
        trajectoryIndex,
        e.target.checked,
      );
      const event = new Event('uiUpdated');
      window.dispatchEvent(event);

      //logging interaction
      const eventName = e.target.checked
        ? 'trajectory closed'
        : 'trajectory open';
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
    tensionInput.value = trajectory.tension;
    tensionInput.addEventListener('input', (e) => {
      trajectoryManager.updateTrajectoryTension(
        trajectoryIndex,
        parseFloat(e.target.value),
      );
      const event = new Event('uiUpdated');
      window.dispatchEvent(event);

      //logging interaction
      logUIInteraction('trajectoryModule', 'tension changed');
    });

    const tensionLabel = document.createElement('label');
    tensionLabel.textContent = 'Tension';
    tensionLabel.appendChild(tensionInput);
    headerDiv.appendChild(tensionLabel);

    const deleteTrajectoryButton = document.createElement('button');
    deleteTrajectoryButton.textContent = 'x';
    deleteTrajectoryButton.addEventListener('click', () => {
      const trajectoriesLength = trajectoryManager.trajectories.length - 1;
      const isLast = trajectoriesLength === trajectoryIndex;

      trajectoryManager.deleteTrajectory(trajectoryIndex);
      // Adjust selectedTrajectoryIndex to account for the shift in indices after deletion
      selectedTrajectoryIndex = isLast
        ? trajectoriesLength
        : Math.min(trajectoryIndex, trajectoriesLength - 1);

      updateTrajectoriesHTML(trajectoryManager);
      console.log('delete trajectory', trajectoryIndex);
      const event = new Event('uiUpdated');
      window.dispatchEvent(event);

      document
        .querySelectorAll('.trajectory-tab')
        .forEach((e) => e.classList.remove('active'));
      document
        .getElementById(
          `trajectory-tab-${
            isLast ? trajectoryManager.trajectories.length - 1 : trajectoryIndex
          }`,
        )
        .classList.add('active');

      //logging interaction
      logUIInteraction(
        'trajectoryModule',
        `trajectory deleted ${trajectoryIndex + 1}`,
      );
    });

    headerDiv.appendChild(deleteTrajectoryButton);

    trajectoryDiv.appendChild(headerDiv);

    const pointsDiv = document.createElement('div');
    pointsDiv.className = 'points';
    pointsDiv.id = `trajectory-points-${trajectoryIndex}`;

    trajectoryManager.splineHelperObjects.forEach((object, objectIndex) => {
      if (object.trajectoryIndex !== trajectoryIndex) return;

      //calc LabelIndex for each trajectory
      let pointLabelIndex = objectIndex;
      for (let i = 0; i < trajectoryIndex; i++) {
        pointLabelIndex -= trajectoryManager.trajectories[i].points.length;
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
        selectPointListener(
          trajectoryIndex,
          selectPointIndex,
          trajectoryManager,
        ),
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
          trajectoryManager.updateTrajectoryFromControlPoint(object);
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
            `Control Point Changed: Input Trajectory: ${
              trajectoryIndex + 1
            } Point: ${pointLabelIndex + 1} Axis: ${axis} Value: ${
              e.target.value
            }`,
          );
        });

        slider.addEventListener('input', (e) => updatePosition(e.target.value));
        slider.addEventListener('change', (e) => {
          const event = new Event('uiUpdated');
          window.dispatchEvent(event);

          //logging interaction
          logUIInteraction(
            'trajectoryModule',
            `Control Point Changed: Slider Trajectory: ${
              trajectoryIndex + 1
            } Point: ${pointLabelIndex + 1} Axis: ${axis} Value: ${
              e.target.value
            }`,
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
        deleteControlPoint(objectIndex, trajectoryManager);
        trajectoryManager.updateControlPointLabels(trajectoryIndex);

        //logging interaction
        logUIInteraction(
          'trajectoryModule',
          `Control Point Deleted: Trajectory: ${trajectoryIndex + 1} Point: ${
            pointLabelIndex + 1
          }`,
        );
      });

      pointDiv.appendChild(deleteButton);

      const addButton = document.createElement('button');
      addButton.className = 'add-controlPoint-button';
      addButton.textContent = 'add';
      addButton.addEventListener('click', () => {
        addControlPoint(trajectoryIndex, trajectoryManager, objectIndex);
        trajectoryManager.updateControlPointLabels(trajectoryIndex);

        //logging interaction
        logUIInteraction(
          'trajectoryModule',
          `Control Point Added: Trajectory: ${trajectoryIndex + 1} Point: ${
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
  createTrajectoryDiv.id = 'create-trajectory';
  createTrajectoryDiv.textContent = '+';
  createTrajectoryDiv.addEventListener('click', () => {
    trajectoryManager.addRandomTrajectory();

    debouncedUpdateControlPointsHTML();

    setTimeout(() => {
      const trajectoriesLength = trajectoryManager.getTrajectories().length - 1;
      trajectoryManager.trajectories.forEach((_, index) => {
        trajectoryManager.toggleTrajectorySelected(index, false);
      });
      trajectoryManager.toggleTrajectorySelected(trajectoriesLength, true);
      document
        .querySelectorAll('.trajectory-tab')
        .forEach((e) => e.classList.remove('active'));
      document
        .getElementById(`trajectory-tab-${trajectoriesLength}`)
        .classList.add('active');
      document.querySelectorAll('.trajectory').forEach((trajectory) => {
        trajectory.style.display = 'none';
      });
      document.getElementById(
        `trajectory-${trajectoriesLength}`,
      ).style.display = 'block';
      selectedTrajectoryIndex = trajectoriesLength;
      logUIInteraction(
        'trajectoryModule',
        `trajectory added ${trajectoryManager.trajectories.length}`,
      );
    }, 50);

    // Interaction log
    logUIInteraction(
      'trajectoryModule',
      `trajectory added ${trajectoryManager.trajectories.length}`,
    );
  });
  tabContainer.appendChild(createTrajectoryDiv);

  //console.log('selectedtrajectory index', selectedTrajectoryIndex);

  // Adjust for deletion of the last trajectory
  if (activeTabIndex >= trajectoryManager.trajectories.length) {
    activeTabIndex = trajectoryManager.trajectories.length - 1; // Update to new last index
  }
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
  } else if (trajectoryManager.trajectories.length > 0) {
    // Default to the first tab if there are trajectories but no active tab
    const firstTab = document.getElementById('trajectory-tab-0');
    if (firstTab) firstTab.classList.add('active');

    const firstTrajectory = document.getElementById('trajectory-0');
    if (firstTrajectory) firstTrajectory.style.display = 'block';
  }
};

const deleteControlPoint = (objectIndex, trajectoryManager) => {
  trajectoryManager.deleteSplineObject(objectIndex);
  updateTrajectoriesHTML(trajectoryManager, (isNewTrajectory = false));

  const event = new Event('uiUpdated');
  window.dispatchEvent(event);
};

const addControlPoint = (trajectoryIndex, trajectoryManager, objectIndex) => {
  const currentPoint =
    trajectoryManager.splineHelperObjects[objectIndex].position;
  const nextPointIndex =
    (objectIndex + 1) % trajectoryManager.splineHelperObjects.length;
  const nextPoint =
    trajectoryManager.splineHelperObjects[nextPointIndex].position;

  const midPoint = new THREE.Vector3()
    .addVectors(currentPoint, nextPoint)
    .multiplyScalar(0.5);

  //console.log(trajectoryManager.trajectories[trajectoryIndex].tension);

  const newControlPoint = trajectoryManager.addSplineObject(
    midPoint,
    trajectoryIndex,
  );

  const actualNextIndex =
    objectIndex + 1 === trajectoryManager.splineHelperObjects.length &&
    !trajectoryManager.trajectories[trajectoryIndex].closed
      ? objectIndex
      : objectIndex + 1;

  trajectoryManager.splineHelperObjects.splice(
    actualNextIndex,
    0,
    newControlPoint,
  );
  trajectoryManager.splineHelperObjects.pop();

  trajectoryManager.updateTrajectoryFromControlPoint(newControlPoint);

  updateTrajectoriesHTML(trajectoryManager, (isNewTrajectory = false));

  const event = new Event('uiUpdated');
  window.dispatchEvent(event);
};

const selectPointListener = (
  trajectoryIndex,
  pointIndex,
  trajectoryManager,
) => {
  return () => {
    //console.log(`Trajectory ${trajectoryIndex}, Point ${pointIndex} clicked`);
    selectedPointIndex = pointIndex;
    for (let i = 0; i < trajectoryIndex; i++) {
      selectedPointIndex += trajectoryManager.trajectories[i].points.length;
    }
    //console.log(trajectoryManager.splineHelperObjects[selectedPointIndex]);
    //console.log(trajectoryManager.splineHelperObjects);
  };
};

export const updateControlPointsHTML = (trajectoryManager) => {
  trajectoryManager.splineHelperObjects.forEach((object, objectIndex) => {
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
