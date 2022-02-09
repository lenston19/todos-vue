export const appendTodoList = (state, value) => {
  state.todoList.unshift({ id: value.id, text: value.text, done: value.done });
};

export const removeTodo = (state, value) => {
  state.todoList.splice(
    state.todoList.findIndex((todo) => todo.id == value),
    1
  );
};

export const doneTodo = (state, value) => {
  let itemIndex = state.todoList.filter((todo) => todo.id == value);
  itemIndex[0].done = !itemIndex[0].done ? true : false;
};

export const changeTodo = (state, value) => {
  let itemIndex = state.todoList.filter((todo) => todo.id == value.id);
  itemIndex[0].text = value.text;
};
