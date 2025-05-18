import "../components/style/style.css";
import { PubSub } from "../api/pubsub";
import { create, read, update, remove } from "../database/ls";
import { createDb, db } from "../database/db";
import { Project } from "../features/projects/scripts/project";
import { todo } from "../features/toDos/scripts/todo";

// let x = [];
// x.push(new Project("name", "desc", "notes", "purple"));
// x.push(new Project("name2", "desc2", "notes2", "red"));
// x.push(new Project("name2", "desc2", "notes2", "red"));
// x.push(new Project("name2", "desc2", "notes2", "red"));
// x.push(new Project("name2", "desc2", "notes2", "red"));
// x.push(new Project("name2", "desc2", "notes2", "red"));
// x.push(new Project("name2", "desc2", "notes2", "red"));
// x.push(new Project("name2", "desc2", "notes2", "red"));
// x.push(new Project("name2", "desc2", "notes2", "red"));
// x.push(new Project("name2", "desc2", "notes2", "red"));
// x.push(new Project("name2", "desc2", "notes2", "red"));
// x.push(new Project("name2", "desc2", "notes2", "red"));
// x.push(new Project("name2", "desc2", "notes2", "red"));
// x.push(new Project("name2", "desc2", "notes2", "red"));
// x.push(new Project("name2", "desc2", "notes2", "red"));
// x.push(new Project("name2", "desc2", "notes2", "red"));
// x.push(new Project("name2", "desc2", "notes2", "red"));
// x.push(new Project("name2", "desc2", "notes2", "red"));
// x.push(new Project("name2", "desc2", "notes2", "red"));
// x.push(new Project("name2", "desc2", "notes2", "red"));
// x.push(new Project("name2", "desc2", "notes2", "red"));
// x.push(new Project("name2", "desc2", "notes2", "red"));
// console.log(x);

// let y = todo("name", "completed", "description", "notes");
// console.log(y);

// x.todos.push(y);
// x.todos.push(y);
// x.todos.push(y);
// x.todos.push(y);
// console.log(x);

// console.log();

// localStorage.setItem("projects", JSON.stringify(x));
// console.log("x");
let a = JSON.parse(localStorage.getItem("projects"));

const pubSub = new PubSub();

// createDb();
// db.open();
// db.projects.add({ name: "jack", description: "laksjdf", notes: "asldfkjl" });

let amendedRec = new Project("name7887", "DESC2", "notes2", "GREEBN");

update("projects", "06ab803f-e38c-4e1b-8bef-a0ad49ac8062", amendedRec);
remove("projects", "06ab803f-e38c-4e1b-8bef-a0ad49ac8062");

//"06ab803f-e38c-4e1b-8bef-a0ad49ac8062"
//15
