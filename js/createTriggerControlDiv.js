import noUiSlider from 'nouislider';
import { logUIInteraction } from './heplers/logUIInteraction';

export const createTriggerControlDiv = (
  index,
  onUpdate,
  curves,
  triggerDefaults,
  onAnimateChange,
) => {
  const div = document.createElement('div');
  div.id = `trigger${index}`;
  div.className = 'trigger';
  let selectOptions = curves
    .map(
      (_, curveIndex) =>
        `<option value="${curveIndex}" ${
          curveIndex === triggerDefaults.curveIndex ? 'selected' : ''
        }>${curveIndex + 1}</option>`,
    )
    .join('');

  div.innerHTML = `
  <div class="header">
    <label class="label">OBJ #${index + 1}</label>
    <button id="delete${index}">&#10005;</button>
  </div>
  <div class="control inline">
    <div class="control-col">
      <label class="label small" for="animate${index}">Control:</label>
      <input type="checkbox" id="animate${index}" name="animate" class="hidden-checkbox" ${
    triggerDefaults.animate ? 'checked' : ''
  }/>
      <div id="animate-sign-${index}" class="value-placeholder with-arrow">${
    triggerDefaults.animate ? 'Speed' : 'Coords'
  }</div>
    </div>
    <div class="control-col right trajectory-select">
      <label for="trajectory${index}" class="label small">Trajectory:</label>
      <select name="trajectory" id="trajectory${index}">
        ${selectOptions}
      </select>
    </div>
  </div>
  <div class="control full slider-wrapper">
    <div id="speed${index}" class="slider"></div>
  </div>
  <div class="control full slider-wrapper" style="display: none;">
    <div id="position${index}" class="slider"></div>
  </div>
  <div class="control inline">
    <div class="control-col">
      <label for="loop${index}" class="label small">Move:</label>
      <input type="checkbox" id="loop${index}" name="animate" class="hidden-checkbox" ${
    triggerDefaults.loop ? 'checked' : ''
  }/>
      <div id="loop-sign-${index}" class="value-placeholder with-arrow">${
    triggerDefaults.loop ? 'Loop' : 'Alt'
  }</div>
    </div>
    <div id="direction-${index}" class="direction control-col">
      <label class="label small">Direction:</label>
      <span  id="direction-sign-${index}" class="value-placeholder with-arrow">${
    triggerDefaults.direction === 'ltr' ? 'L > R' : 'R > L'
  }</span>
    </div>
  </div>
`;

  // Append the div to the DOM before initializing sliders
  document.body.appendChild(div);

  const speedControl = div.querySelector(`div.control:has(#speed${index})`);
  const positionControl = div.querySelector(
    `div.control:has(#position${index})`,
  );

  const animateSign = div.querySelector(`#animate-sign-${index}`);
  const animateCheckbox = div.querySelector(`#animate${index}`);
  animateSign.addEventListener('click', () => {
    animateCheckbox.checked = !animateCheckbox.checked;
    const event = new Event('change');
    animateCheckbox.dispatchEvent(event);
  });
  animateCheckbox.addEventListener('change', (e) => {
    onUpdate(index, { animate: e.target.checked });
    onAnimateChange(index);

    if (e.target.checked) {
      positionControl.style.display = 'none';
      speedControl.style.display = ''; // Show speed control (use default or '' to reset)
      div.querySelector(`#animate-sign-${index}`).textContent = 'Speed';
    } else {
      positionControl.style.display = ''; // Show position control when not animated
      speedControl.style.display = 'none'; // Hide speed control
      div.querySelector(`#animate-sign-${index}`).textContent = 'Coords';
    }

    //logging interaction
    const eventName = e.target.checked
      ? `Animate active Object ${index + 1}`
      : `Position active Object ${index + 1}`;
    logUIInteraction('objectsModule', eventName);
  });

  // Initialize noUiSlider for Speed

  const speedSlider = document.getElementById(`speed${index}`);
  if (speedSlider) {
    noUiSlider.create(speedSlider, {
      start: triggerDefaults.speed,
      connect: [true, false],
      range: {
        min: [0],
        '30%': [1], //non-linear slider behaviour
        '70%': [4],
        max: [6], // change because noUI only accepts 2 digits after komma
      },
      step: 0.01,
      orientation: 'vertical',
      direction: 'rtl',
      behaviour: 'snap',
    });

    speedSlider.noUiSlider.on('update', (values) => {
      const speed = parseFloat(values[0]) / 100; // scale back the output
      onUpdate(index, { speed });
      console.log('speed', speed);
    });

    speedSlider.noUiSlider.on('change', (values) => {
      logUIInteraction(
        'objectsModule',
        `Animate Speed changed Object ${index + 1} Value: ${values[0]}`,
      );
    });
  } else {
    console.error(`Speed slider with id speed${index} not found`);
  }

  // Initialize noUiSlider for Position
  const positionSlider = document.getElementById(`position${index}`);
  if (positionSlider) {
    noUiSlider.create(positionSlider, {
      start: triggerDefaults.position,
      connect: [true, false],
      range: {
        min: 0,
        max: 1,
      },
      step: 0.001,
      orientation: 'vertical',
      direction: 'rtl',
      behaviour: 'snap',
    });

    positionSlider.noUiSlider.on('update', (values) => {
      onUpdate(index, { position: parseFloat(values[0]) });
    });

    positionSlider.noUiSlider.on('change', (values) => {
      logUIInteraction(
        'objectsModule',
        `Object Position changed Object ${index + 1} Value: ${values[0]}`,
      );
    });
  } else {
    console.error(`Position slider with id position${index} not found`);
  }

  // Trajectory Select
  const trajectorySelect = div.querySelector(`#trajectory${index}`);
  trajectorySelect.addEventListener('change', (e) => {
    onUpdate(index, { curveIndex: e.target.value });

    // interaction logging
    logUIInteraction(
      'objectsModule',
      `Trajectory changed Object ${index + 1} Traj: ${
        parseFloat(e.target.value) + 1
      }`,
    );
  });

  // Loop /Alternate Checkbox
  const loopSign = div.querySelector(`#loop-sign-${index}`);
  const loopButton = div.querySelector(`#loop${index}`);
  loopSign.addEventListener('click', () => {
    loopButton.checked = !loopButton.checked;
    const event = new Event('change');
    loopButton.dispatchEvent(event);
  });
  loopButton.addEventListener('change', (e) => {
    onUpdate(index, { loop: e.target.checked });

    //logging interaction
    const eventName = e.target.checked
      ? `Loop active Object ${index + 1}`
      : `Alternate active  Object ${index + 1}`;

    div.querySelector(`#loop-sign-${index}`).textContent = e.target.checked
      ? 'Loop'
      : 'Alt';

    logUIInteraction('objectsModule', eventName);
  });

  const directionDiv = div.querySelector(`#direction-${index}`);
  directionDiv.addEventListener('click', () => {
    const directionSign = div.querySelector(`#direction-sign-${index}`);
    const newDirection =
      directionSign.textContent === 'L > R' ? 'R > L' : 'L > R';
    directionSign.textContent = newDirection;
    onUpdate(index, { direction: newDirection === 'L > R' ? 'ltr' : 'rtl' });

    //logging interaction
    const eventName = `Direction changed Object ${
      index + 1
    } Value: ${newDirection}`;
    logUIInteraction('objectsModule', eventName);
  });

  const deleteButton = div.querySelector(`#delete${index}`);
  deleteButton.addEventListener('click', () => {
    onUpdate(index, { delete: true });
    //logging interaction
    logUIInteraction('objectsModule', `Deleted Object ${index + 1}`);
  });

  return div;
};
