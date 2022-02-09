<template>
  <div class="row">
    <h2 class="todo-title">List todo</h2>
    <TransitionGroup name="todo-list">
      <div class="col-lg-8 col-12" v-for="item in todoList" :key="item.id">
        <TodoItem :id="item.id" />
      </div>
    </TransitionGroup>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  components: {
    TodoItem,
  },
  props: {
    todoList: Array,
  },
};
</script>
