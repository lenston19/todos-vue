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
        <button
          class="todo-btn todo-btn__plus todo-item__icon"
          @click="pushTodo(inputValue)"
        >
          <i class="fas fa-plus fw-3 p-1"></i>
        </button>
      </div>
    </div>
    <TodoList />
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from "@/components/TodoList.vue";
import InputTodo from "../components/InputTodo.vue";
import { useNotify } from "../hooks/useNotify";
import { useStore } from "vuex";
import { ref } from "vue";
export default {
  name: "Home",
  components: {
    TodoList,
    InputTodo,
  },
  setup() {
    // using hooks
    const { errorMessage } = useNotify();

    // using store
    const $store = useStore();

    // models
    let inputValue = ref("");

    // methods
    const uId = () => {
      return (
        String.fromCharCode(Math.floor(Math.random() * 26) + 97) +
        Math.random().toString(16).slice(2) +
        Date.now().toString(16).slice(4)
      );
    };

    const pushTodo = (text) => {
      if (text == "") {
        errorMessage("Enter text");
      } else {
        $store.commit("todoModule/appendTodoList", {
          id: uId(),
          text: text,
          done: false,
        });
        inputValue.value = "";
      }
    };

    return { pushTodo, inputValue };
  },
};
</script>
