export const appendTodoList = (state, value) => {
  state.todoList.push({ id: value[0], text: value[1] });
};

export const removeTodo = (state, value) => {
  state.todoList.splice(
    state.todoList.findIndex((todo) => todo.id == value),
    1
  );
};
