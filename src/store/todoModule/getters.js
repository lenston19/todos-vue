export const getTodoById = (state) => (value) => {
  return state.todoList.find((todo) => todo.id == value);
};

export const getTodoByDone = (state) => {
  return state.todoList.filter((todo) => !todo.done);
};
export const getTodoByCompleted = (state) => {
  return state.todoList.filter((todo) => todo.done);
};
