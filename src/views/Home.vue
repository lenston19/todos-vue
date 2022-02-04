<template>
  <div class="container home p-3">
    <div class="row mb-3">
      <h2 class="todo-title">Create todo</h2>
      <div class="col-8">
        <Input v-model="inputValue" />
      </div>
      <div class="col-4 d-flex align-items-center">
        <span class="todo-btn" @click="pushTodo(inputValue)">
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
import { useStore } from "vuex";
import { ref } from "vue";
export default {
  name: "Home",
  components: {
    TodoList,
    Input,
  },
  setup() {
    // using store
    const $store = useStore();
    const todoList = $store.state.todoModule.todoList;
    // models
    let inputValue = ref("");

    // methods
    const pushTodo = (value) => {
      if (value == "") {
        alert("Enter text");
      } else {
        $store.commit("todoModule/appendTodo", value);
        inputValue = "";
      }
    };

    return { todoList, pushTodo, inputValue };
  },
};
</script>
