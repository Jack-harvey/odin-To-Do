import { checkIfLocalStorageDataExists, getAllProjects } from "../../database/ls";
import { createProjectCards } from "../../features/projects/scripts/renderProjects";
import { renderTodos } from "../../features/toDos/scripts/renderTodos";

export const clearContent = function (querySelector) {
  const content = document.querySelector(querySelector);
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
};

export const createBanner = function (mainText, subText) {
  const aside = document.querySelector("aside");
  const headingEl = document.createElement("h1");
  const subTextEl = document.createElement("p");

  headingEl.textContent = mainText;
  subTextEl.textContent = subText;

  clearContent("aside");
  aside.append(headingEl, subTextEl);
};

export const initialLoad = function () {
  checkIfLocalStorageDataExists();
  createProjectCards(getAllProjects());
  //check if we have data
  //display data
  //set up event listeners
};

export const userOpensProject = function () {
  const content = document.querySelector(".project-card");
  content.addEventListener("click", (e) => {
    const projectId = e.target.closest("[data-id]").dataset.id;
    renderTodos(projectId);
  });
};
