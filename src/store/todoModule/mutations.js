export const appendTodoList = (state, { id, text, done }) => {
  state.todoList.unshift({ id: id, text: text, done: done });
};

export const removeTodo = (state, value) => {
  state.todoList.splice(
    state.todoList.findIndex((todo) => todo.id == value),
    1
  );
};

export const doneTodo = (state, id) => {
  state.todoList = state.todoList.map((todo) => {
    todo.id === id && (todo.done = !todo.done);
    return todo;
  });
};
// TODO деконструктизация объекта
export const changeTodo = (state, { id, text }) => {
  state.todoList = state.todoList.map((todo) => {
    todo.id === id && (todo.text = text);
    return todo;
  });
};
