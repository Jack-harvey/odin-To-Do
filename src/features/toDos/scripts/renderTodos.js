import { getListOfToDos } from "../../../database/ls";
import { clearContent } from "../../../components/scripts/html";

export const renderTodos = function (projectId) {
  clearContent();
  createTodoList(projectId);
};

export const createTodoList = function (projectId) {
  const allTodos = getListOfToDos(projectId);
  const template = document.querySelector("#listOfTodosTemplate").content.cloneNode(true);
  const titleEl = template.querySelector(".project-title");
};
