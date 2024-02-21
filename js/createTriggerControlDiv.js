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
    <label class="label">Trig #${index + 1}</label>
    <button id="delete${index}">x</button>
  </div>
  <div class="control inline">
    <label for="trajectory${index}" class="label">Trajectory</label>
    <select name="trajectory" id="trajectory${index}">
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
    <input type="range" orient="vertical" id="speed${index}" min="0.02" max="0.2" step="0.01" value="${
    triggerDefaults.speed
  }"/>
  </div>
  <div class="control full" style="display: none;">
    <label for="position${index}" class="label">Position</label>
    <input type="range" orient="vertical" id="position${index}" min="0" max="1" step="0.001" value="${
    triggerDefaults.position
  }"/>
  </div>
  <div class="control inline">
    <label for="loop${index}" class="label">Loop</label>
    <input type="checkbox" id="loop${index}" name="animate" ${
    triggerDefaults.loop ? 'checked' : ''
  }/>
  </div>
  <div class="control">
    <div class="direction">
      <button id="ltr${index}" ${
    triggerDefaults.direction === 'ltr' ? 'class="selected"' : ''
  }>LTR</button>
      <button id="rtl${index}" ${
    triggerDefaults.direction === 'rtl' ? 'class="selected"' : ''
  }>RTL</button>
    </div>
  </div>
`;

  const speedControl = div.querySelector(`div.control:has(#speed${index})`);
  const positionControl = div.querySelector(
    `div.control:has(#position${index})`,
  );
  const animateCheckbox = div.querySelector(`#animate${index}`);
  animateCheckbox.addEventListener('change', (e) => {
    onUpdate(index, { animate: e.target.checked });
    // When animation starts, update the position range input to match the trigger's current position.
    onAnimateChange(index);

    if (e.target.checked) {
      positionControl.style.display = 'none'; // Hide position control when animated
      speedControl.style.display = ''; // Show speed control (use default or '' to reset)
    } else {
      positionControl.style.display = ''; // Show position control when not animated
      speedControl.style.display = 'none'; // Hide speed control
    }
  });

  // Speed Range Input
  const speedRange = div.querySelector(`#speed${index}`);
  speedRange.addEventListener('input', (e) => {
    onUpdate(index, { speed: parseFloat(e.target.value) });
  });

  // Position Range Input
  const positionRange = div.querySelector(`#position${index}`);
  positionRange.addEventListener('input', (e) => {
    onUpdate(index, { position: parseFloat(e.target.value) });
  });

  // Trajectory Select
  const trajectorySelect = div.querySelector(`#trajectory${index}`);
  trajectorySelect.addEventListener('change', (e) => {
    onUpdate(index, { curveIndex: e.target.value });
  });

  // Direction Buttons
  const loopButton = div.querySelector(`#loop${index}`);
  loopButton.addEventListener('click', (e) => {
    onUpdate(index, { loop: e.target.checked });
  });

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
  });

  const rtlButton = div.querySelector(`#rtl${index}`);
  rtlButton.addEventListener('click', () => {
    updateDirectionSelected('rtl');
    onUpdate(index, { direction: 'rtl' });
  });

  const deleteButton = div.querySelector(`#delete${index}`);
  deleteButton.addEventListener('click', () => {
    onUpdate(index, { delete: true });
  });

  return div;
};
