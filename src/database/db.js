import Dexie from "dexie";

export const db = new Dexie("GonnaDatabase");

export function createDb() {
  db.version(1).stores({
    projects: `
        ++id,
        name
        `,
    todos: `
    ++id,
    name,
    priority,
    dueDate
    complete
    projectId`,
  });
}
