import { getListOfToDos, getProjectDetails, read, update } from "../../../database/ls";
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

  toggleTodoCompletion();
};

export const createTodoList = function (projectId) {
  const allTodos = getListOfToDos(projectId);
  const allTemplates = [];

  allTodos.forEach((todo) => {
    const template = document.querySelector("#listOfTodosTemplate").content.cloneNode(true);
    const completeEl = template.querySelector(".complete");
    const titleEl = template.querySelector(".title");
    const dateEl = template.querySelector(".date");
    const descriptionEl = template.querySelector(".description");
    // const notesEl = template.querySelector(".notes");

    titleEl.firstElementChild.textContent = todo.name;
    dateEl.firstElementChild.textContent = todo.dueDate;
    descriptionEl.firstElementChild.textContent = todo.description;
    // notesEl.firstElementChild.textContent = todo.notes;

    const completeElCheckbox = todoCheckmarkElement(todo.completed);
    completeEl.appendChild(completeElCheckbox);

    if (todo.complete) {
      //the box is checked, the class 'complete' is added
    }

    allTemplates.push(template);

    const x = allTemplates.length - 1;

    allTemplates[x].lastElementChild.dataset.id = todo.id;
  });

  return allTemplates;
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

const toggleCheckMarkElement = function (target, isComplete) {
  target.classList.remove("fa-square-check");
  target.classList.remove("fa-square");
  isComplete ? target.classList.add("fa-square-check") : target.classList.add("fa-square");
};

//click on todos and complete them
const toggleTodoCompletion = function () {
  const contentEl = document.querySelector(".content");
  contentEl.addEventListener("click", (e) => {
    if (e.target.localName == "i") {
      console.log(e);
      const todoId = e.target.closest("[data-id]").dataset.id;
      //get current val, invert it, save it, apply/remove tick
      const record = read("todos", todoId);
      record.completed = !record.completed;
      update("todos", record.id, record);
      toggleCheckMarkElement(e.target, record.completed);
    }
  });
};

//click on todos and toggle expand them
