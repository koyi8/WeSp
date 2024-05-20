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
    <button id="delete${index}">x</button>
  </div>
  <div class="control inline">
    <label for="trajectory${index}" class="label">Tr#</label>
    <select name="trajectory" id="trajectory${index}" class="trajectory-select">
      ${selectOptions}
    </select>
  </div>
  <div class="control inline">
    <label for="animate${index}">Animate</label>
    <input type="checkbox" id="animate${index}" name="animate" ${
    triggerDefaults.animate ? 'checked' : ''
  }/>
  </div>
  <div class="control full">
    <label for="speed${index}" class="label">Speed</label>
    <div id="speed${index}" class="slider"></div>
  </div>
  <div class="control full" style="display: none;">
    <label for="position${index}" class="label">Position</label>
    <div id="position${index}" class="slider"></div>
  </div>
  <div class="control inline">
    <label for="loop${index}" class="label">Loop</label>
    <input type="checkbox" id="loop${index}" name="animate" ${
    triggerDefaults.loop ? 'checked' : ''
  }/>
  </div>
  <div class="control">
    <div class="direction">
      <button id="ltr${index}" style="font-size:15px;" ${
    triggerDefaults.direction === 'ltr' ? 'class="selected"' : ''
  }>&#11013;</button>
      <button id="rtl${index}" style="font-size:15px;" ${
    triggerDefaults.direction === 'rtl' ? 'class="selected"' : ''
  }>&#10145;</button>
    </div>
  </div>
`;

  // Append the div to the DOM before initializing sliders
  document.body.appendChild(div);

  const speedControl = div.querySelector(`div.control:has(#speed${index})`);
  const positionControl = div.querySelector(
    `div.control:has(#position${index})`,
  );
  const animateCheckbox = div.querySelector(`#animate${index}`);
  animateCheckbox.addEventListener('change', (e) => {
    onUpdate(index, { animate: e.target.checked });
    onAnimateChange(index);

    if (e.target.checked) {
      positionControl.style.display = 'none';
      speedControl.style.display = ''; // Show speed control (use default or '' to reset)
    } else {
      positionControl.style.display = ''; // Show position control when not animated
      speedControl.style.display = 'none'; // Hide speed control
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
        min: 0,
        max: 0.06,
      },
      step: 0.0001,
      orientation: 'vertical',
      direction: 'rtl',
      behaviour: 'snap',
    });

    speedSlider.noUiSlider.on('update', (values) => {
      onUpdate(index, { speed: parseFloat(values[0]) });
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
  const loopButton = div.querySelector(`#loop${index}`);
  loopButton.addEventListener('click', (e) => {
    onUpdate(index, { loop: e.target.checked });

    //logging interaction
    const eventName = e.target.checked
      ? `Loop active Object ${index + 1}`
      : `Alternate active  Object ${index + 1}`;
    logUIInteraction('objectsModule', eventName);
  });

  //Direction Buttons
  const updateDirectionSelected = (direction) => {
    const ltrButton = div.querySelector(`#ltr${index}`);
    const rtlButton = div.querySelector(`#rtl${index}`);

    // Remove selected class from both buttons
    ltrButton.classList.remove('selected');
    rtlButton.classList.remove('selected');

    if (direction === 'ltr') {
      ltrButton.classList.add('selected');
    } else if (direction === 'rtl') {
      rtlButton.classList.add('selected');
    }
  };

  // Set initial selection based on defaults
  updateDirectionSelected(triggerDefaults.direction);

  const ltrButton = div.querySelector(`#ltr${index}`);
  ltrButton.addEventListener('click', () => {
    updateDirectionSelected('ltr');
    onUpdate(index, { direction: 'ltr' });

    //logging interaction
    logUIInteraction(
      'objectsModule',
      `Direction changed Object ${index + 1} Value: leftArrow`,
    );
  });

  const rtlButton = div.querySelector(`#rtl${index}`);
  rtlButton.addEventListener('click', () => {
    updateDirectionSelected('rtl');
    onUpdate(index, { direction: 'rtl' });

    //logging interaction
    logUIInteraction(
      'objectsModule',
      `Direction changed Object ${index + 1} Value: rightArrow`,
    );
  });

  const deleteButton = div.querySelector(`#delete${index}`);
  deleteButton.addEventListener('click', () => {
    onUpdate(index, { delete: true });
    //logging interaction
    logUIInteraction('objectsModule', `Deleted Object ${index + 1}`);
  });

  return div;
};
