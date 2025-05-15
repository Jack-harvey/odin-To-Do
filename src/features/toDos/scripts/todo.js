export const todo = function (name, completed, description, notes) {
  const id = crypto.randomUUID();
  return {
    id,
    name,
    completed,
    description,
    notes,
  };
};
