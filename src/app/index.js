import "../components/style/style.css";
import { PubSub } from "../api/pubsub";
import { createProjectCard } from "../features/projects/scripts/renderProjects";
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

document.querySelector(".project-card-area").appendChild(x);
