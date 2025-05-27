export const todo = function (name, completed, description, notes, dueDate, projectId) {
  const id = crypto.randomUUID();
  return {
    id,
    name,
    completed,
    description,
    notes,
    dueDate,
    projectId,
  };
};
