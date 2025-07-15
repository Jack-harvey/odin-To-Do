import {
  createFormEventListener,
  createCloseFormEventListener,
} from "../../../components/scripts/forms";
import { clearContent } from "../../../components/scripts/html";

const dialogEl = document.querySelector("dialog");

export const createTodoForm = function () {
  clearContent("dialog");
  dialogEl.innerHTML = `
 <div class="new-todo">
    <div>
      <i class="close-btn fa-solid fa-rectangle-xmark"></i>
    </div>
    <div>
      <form id="newTodoForm" method="dialog">
        <div>
          <label for="title">Todo Name</label>
          <input type="text" id="title" name="title" placeholder="Wash the sheets" required />
        </div>
        <div>
          <label for="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            placeholder="Sheets are cleaned on sunday!"
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
          <label for="due-date">Date Due</label>
          <input type="date" name="due-date" id="dueDate" required />
        </div>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  </div>
`;
  createFormEventListener("#newTodoForm");
  createCloseFormEventListener("#newTodoForm");
};
