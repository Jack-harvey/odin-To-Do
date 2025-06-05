import { getListOfToDos, getProjectDetails } from "../../../database/ls";
import { clearContent } from "../../../components/scripts/html";
import { todo } from "./todo";

export const renderTodos = function (projectId) {
  clearContent(".content");
  const content = document.querySelector(".content");
  const todoCardSectionEl = document.createElement("div");
  todoCardSectionEl.classList.add("todo-cards");

  const allTemplates = createTodoList(projectId);
  todoCardSectionEl.append(...allTemplates);
  content.append(todoCardSectionEl);

  const project = getProjectDetails(projectId);
  const projectName = project.title;
  const projectDescription = project.description;
  changeBannerText(projectName, projectDescription);
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

    const completeElCheckbox = todoCheckmarkElement(todo.completed);
    completeEl.appendChild(completeElCheckbox);

    if (todo.complete) {
      //the box is checked, the class 'complete' is added
    }

    AllTemplates.push(template);
  });

  return AllTemplates;
};

const changeBannerText = function (mainText, subtext) {
  const headingEl = document.querySelector("aside h1");
  const subtextEl = document.querySelector("aside p");

  headingEl.textContent = mainText;
  subtextEl.textContent = subtext;
};

const todoCheckmarkElement = function (isComplete) {
  const completeEl = document.createElement("i");
  completeEl.classList.add("fa-regular");
  isComplete ? completeEl.classList.add("fa-square-check") : completeEl.classList.add("fa-square");
  return completeEl;
};

//click on todos and complete them

//click on todos and toggle expand them
