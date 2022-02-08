export const getTodoById = (state) => (value) => {
  return state.todoList.find((todo) => todo.id == value);
};
