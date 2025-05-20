import "../components/style/style.css";
import { PubSub } from "../api/pubsub";
import {
  create,
  read,
  update,
  remove,
  add,
  getListOfToDos,
  checkIfLocalStorageDataExists,
} from "../database/ls";
import { Project } from "../features/projects/scripts/project";
import { todo } from "../features/toDos/scripts/todo";

checkIfLocalStorageDataExists();
