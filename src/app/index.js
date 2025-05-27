import "../components/style/style.css";
import { PubSub } from "../api/pubsub";
import { createProjectCard } from "../features/projects/scripts/renderProjects";
import { renderTodos } from "../features/toDos/scripts/renderTodos";
import {
  create,
  read,
  update,
  remove,
  add,
  getListOfToDos,
  checkIfLocalStorageDataExists,
  getCountOfAllTodosOnProject,
  getCountOfAllCompletedTodosOnProject,
} from "../database/ls";
import { Project } from "../features/projects/scripts/project";
import { todo } from "../features/toDos/scripts/todo";

checkIfLocalStorageDataExists();
console.log(getCountOfAllTodosOnProject("46bb5ae4-dba6-41b1-b28e-e83b0c913347"));
console.log(getCountOfAllCompletedTodosOnProject("46bb5ae4-dba6-41b1-b28e-e83b0c913347"));

const proj = JSON.parse(localStorage.getItem("projects"))[0];

const x = createProjectCard(proj);
renderTodos("9b1c9adc-dfb0-43aa-b525-1a3f23de74eb");
