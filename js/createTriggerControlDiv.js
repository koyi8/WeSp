export const createTriggerControlDiv = (
  index,
  onUpdate,
  curves,
  triggerDefaults,
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
      <div class="control">
        <label class="label">Trajectory</label>
        <select name="trajectory" id="trajectory${index}">
          ${selectOptions}
        </select>
      </div>
      <div class="control">
        <label for="animate${index}">Animate</label>
        <input type="checkbox" id="animate${index}" name="animate" ${
    triggerDefaults.animate ? 'checked' : ''
  }/>
      </div>
      <div class="control">
        <label class="label">Speed</label>
        <input type="range" orient="vertical" id="speed${index}" min="0.02" max="0.2" step="0.01" value="${
    triggerDefaults.speed
  }"/>
      </div>
      <div class="control">
        <label class="label">Position</label>
        <input type="range" orient="vertical" id="position${index}" min="0" max="1" step="0.01" value="${
    triggerDefaults.position
  }"/>
      </div>
      <div class="control direction">
        <label class="label">Direction</label>
        <button id="loop${index}" ${
    triggerDefaults.direction === 'loop' ? 'class="selected"' : ''
  }>Loop</button>
        <button id="ltr${index}" ${
    triggerDefaults.direction === 'ltr' ? 'class="selected"' : ''
  }>LTR</button>
      </div>
      <div class="control">
        <button id="delete${index}">Delete</button>
      </div>
    `;

  // Animate Checkbox
  const animateCheckbox = div.querySelector(`#animate${index}`);
  animateCheckbox.addEventListener('change', (e) => {
    console.log(e.target.checked);
    onUpdate(index, { animate: e.target.checked });
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
  loopButton.addEventListener('click', () => {
    onUpdate(index, { loop: false });
  });

  const ltrButton = div.querySelector(`#ltr${index}`);
  ltrButton.addEventListener('click', () => {
    onUpdate(index, { direction: 'ltr' });
  });

  // Delete Button
  const deleteButton = div.querySelector(`#delete${index}`);
  deleteButton.addEventListener('click', () => {
    onUpdate(index, { delete: true });
  });

  return div;
};
