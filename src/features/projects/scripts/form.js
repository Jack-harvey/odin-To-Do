import { createFormEventListener } from "../../../components/scripts/forms";
import { clearContent } from "../../../components/scripts/html";

const dialogEl = document.querySelector("dialog");

export const createProjectForm = function () {
  clearContent("dialog");
  dialogEl.innerHTML = `
  <div class="new-project">
    <div>
      <i class="fa-solid fa-rectangle-xmark"></i>
    </div>
    <div>
      <form id="newProjectForm" method="dialog">
        <div>
          <label for="title">Project Name</label>
          <input type="text" id="title" name="title" placeholder="Clean the House" required />
        </div>
        <div>
          <label for="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            placeholder="The house needs to be cleaned every day"
            required
          />
        </div>
        <div>
          <label for="notes">Notes</label>
          <input
            type="text"
            id="notes"
            name="notes"
            placeholder="aww man, I don't want notes"
            required
          />
        </div>
        <div>
          <label for="color">Colour</label>
          <input type="color" name="color" id="color" required />
        </div>
        <button type="submit">Add Project</button>
      </form>
    </div>
  </div>
`;
  createFormEventListener("#newProjectForm");
};
