import { getListOfToDos } from "../../../database/ls";
import { clearContent } from "../../../components/scripts/html";
import { todo } from "./todo";

export const renderTodos = function (projectId) {
  clearContent();
  const content = document.querySelector(".content");
  const todoCardSectionEl = document.createElement("div");
  todoCardSectionEl.classList.add("todo-cards");

  const allTemplates = createTodoList(projectId);
  todoCardSectionEl.append(...allTemplates);
  content.append(todoCardSectionEl);
};

export const createTodoList = function (projectId) {
  const allTodos = getListOfToDos(projectId);
  const AllTemplates = [];

  allTodos.forEach((todo) => {
    const template = document.querySelector("#listOfTodosTemplate").content.cloneNode(true);
    const completeEl = template.querySelector(".complete");
    const titleEl = template.querySelector(".title");
    const dateEl = template.querySelector(".date");
    const descriptionEl = template.querySelector(".description");
    const notesEl = template.querySelector(".notes");

    titleEl.firstElementChild.textContent = todo.name;
    dateEl.firstElementChild.textContent = todo.dueDate;
    descriptionEl.firstElementChild.textContent = todo.description;
    notesEl.firstElementChild.textContent = todo.notes;

    if (todo.complete) {
      //the box is checked, the class 'complete' is added
    }

    AllTemplates.push(template);
  });

  return AllTemplates;
};
