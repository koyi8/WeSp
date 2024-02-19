export const createTriggerControlDiv = (index) => {
  const div = document.createElement('div');
  div.id = `trigger${index + 1}`;
  div.className = 'trigger';
  div.innerHTML = `
      <div class="control">
        <label class="label">Trajectory</label>
        <select name="cars" id="cars">
          <option value="trajectory1">1</option>
          <option value="trajectory2">2</option>
        </select>
      </div>
      <div class="control">
        <label for="animate">Animate</label>
        <input type="checkbox" id="animate" name="animate"/>
      </div>
      <div class="control">
        <label class="label">Speed</label>
        <input type="range" />
      </div>
      <div class="control">
        <label class="label">Position</label>
        <input type="range" />
      </div>
      <div class="control direction">
        <label class="label">Direction</label>
        <button>Loop</button>
        <button>LTR</button>
      </div>
      <div class="control">
        <button>Delete</button>
      </div>
    `;

  return div;
};
