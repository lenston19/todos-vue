export const getTodoById = (state) => (value) => {
  return state.todoList.find((todo) => todo.id == value);
};

export const getTodoByActive = (state) => () => {
  return state.todoList.filter((todo) => todo.done === false);
};
export const getTodoByCompleted = (state) => () => {
  return state.todoList.filter((todo) => todo.done === true);
};
