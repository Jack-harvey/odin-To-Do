import {
  getCountOfAllCompletedTodosOnProject,
  getCountOfAllTodosOnProject,
} from "../../../database/ls";
import { buttonBar } from "../../../components/scripts/buttonBar";
import { clearContent, changeBannerText } from "../../../components/scripts/html";
import { createProjectForm } from "./form";

export const createProjectCards = function (projects) {
  clearContent(".content");
  changeBannerText("Gonna", "I'm gonna do it!");
  const content = document.querySelector(".content");
  const cardArea = document.createElement("div");
  cardArea.classList.add("project-card-area");

  projects.forEach((project) => {
    const template = document.querySelector("#projectCardTemplate").content.cloneNode(true);
    const titleEl = template.querySelector(".project-title");
    const descriptionEl = template.querySelector(".project-description");
    const dateEl = template.querySelector(".created-date");
    const progressEl = template.querySelector(".completion-status");
    const progressValue = calculateProgress(project.id);

    titleEl.firstElementChild.textContent = project.title;
    if (project.description) {
      descriptionEl.firstElementChild.textContent = project.description;
    }
    dateEl.firstElementChild.textContent = project.createdDate;
    progressEl.firstElementChild.textContent = progressValue;

    cardArea.append(template);
    cardArea.lastElementChild.dataset.id = project.id;
  });

  content.append(cardArea);

  buttonBar("project");
  createProjectForm();
};

const calculateProgress = function (projectId) {
  const completedTodos = getCountOfAllCompletedTodosOnProject(projectId);
  const totalTodos = getCountOfAllTodosOnProject(projectId);

  const progressValue = `${completedTodos}/${totalTodos}`;
  return progressValue;
};
