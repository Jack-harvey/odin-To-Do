export const todo = function (name, completed, description, notes, projectId) {
  const id = crypto.randomUUID();
  return {
    id,
    name,
    completed,
    description,
    notes,
    projectId,
  };
};
