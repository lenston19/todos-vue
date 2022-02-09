<template>
  <div class="container home p-3">
    <div class="row mb-3">
      <h2 class="todo-title">Create todo</h2>
      <div class="col-lg-8 col-10">
        <InputTodo
          :class="'w-100 todo-input__border'"
          v-model="inputValue"
          @keyup.enter="pushTodo(inputValue)"
        />
      </div>
      <div class="col-lg-4 col-2 d-flex align-items-center">
        <span
          class="todo-btn todo-btn__plus todo-item__icon"
          @click="pushTodo(inputValue)"
        >
          <i class="fas fa-plus fw-3 p-1"></i>
        </span>
      </div>
    </div>
    <TodoList :todoList="todoList" />
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from "@/components/TodoList.vue";
import InputTodo from "../components/InputTodo.vue";
import Swal from "sweetalert2";
import { useStore } from "vuex";
import { ref } from "vue";
export default {
  name: "Home",
  components: {
    TodoList,
    InputTodo,
  },
  setup() {
    // using store
    const $store = useStore();
    const todoList = $store.state.todoModule.todoList;
    // models
    let inputValue = ref("");
    let currentIndex = ref(0);
    // methods
    const pushTodo = (text) => {
      if (text == "") {
        Swal.fire({
          title: "Error!",
          text: "Enter text",
          icon: "error",
          confirmButtonText: "Close",
        });
      } else {
        $store.commit("todoModule/appendTodoList", {
          id: currentIndex.value++,
          text: text,
          done: false,
        });
        inputValue.value = "";
      }
    };

    return { todoList, pushTodo, inputValue };
  },
};
</script>
