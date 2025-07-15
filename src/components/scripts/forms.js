import { add } from "../../database/ls";
import { Project } from "../../features/projects/scripts/project";
import { todo } from "../../features/toDos/scripts/todo";
import { redrawProjects, userOpensProject } from "./html";

export const createFormEventListener = function (id) {
  const formEl = document.querySelector(id);

  formEl.addEventListener("submit", (e) => {
    console.log("submitted data!");
    if (id === "#newProjectForm") {
      createProjectFormPost();
      document.querySelector("dialog").close();
      redrawProjects();
      userOpensProject();
      return;
    } else {
      createTodoFormPost();
      document.querySelector("dialog").close();
      //redraw todos
      //recreate listeners
    }
  });
};

export const createCloseFormEventListener = function (id) {
  const formEl = document.querySelector("dialog");

  formEl.addEventListener("click", (e) => {
    if (e.target.classList.contains("close-btn")) {
      document.querySelector("dialog").close();
      document.querySelector(id).reset();
      console.log("close it down");
    }
  });
};

const createProjectFormPost = function () {
  const title = document.getElementsByName("title")[0].value;
  const description = document.getElementsByName("description")[0].value;
  const notes = document.getElementsByName("notes")[0].value;
  const color = document.getElementsByName("color")[0].value;

  const newProject = new Project(title, description, notes, color);
  console.log(newProject);
  add("projects", newProject);
};

const createTodoFormPost = function () {
  const title = document.getElementsByName("title")[0].value;
  const description = document.getElementsByName("description")[0].value;
  const notes = document.getElementsByName("notes")[0].value;
  const dueDate = document.getElementsByName("due-date")[0].value;
  const projectId = document.querySelector(".todo-cards").dataset.projectId;

  const newTodo = todo(title, false, description, notes, dueDate, projectId);
  add("todos", newTodo);
};
