<template>
  <div class="row">
    <h2 class="todo-title">List todo</h2>
    <div class="col-4" v-for="item in todoList" :key="todoList.indexOf(item)">
      <TodoItem :text="item" />
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  components: {
    TodoItem,
  },
  props: {
    todoList: [],
  },
  setup() {},
};
</script>
