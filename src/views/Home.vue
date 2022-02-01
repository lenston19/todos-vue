<template>
  <div class="container home p-3">
    <div class="row mb-3">
      <h2 class="todo-title">Create todo</h2>
      <div class="col-8">
        <Input />
      </div>
      <div class="col-4 d-flex align-items-center">
        <span class="todo-btn" @click="todoList.push('sad')">
          <i class="fas fa-plus fw-3"></i>
        </span>
      </div>
    </div>
    <TodoList :todoList="todoList" />
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from "@/components/TodoList.vue";
import Input from "../components/Input.vue";
import { ref } from "vue";
export default {
  name: "Home",
  components: {
    TodoList,
    Input,
  },
  setup() {
    const todoList = ref([]);

    return { todoList };
  },
};
</script>
