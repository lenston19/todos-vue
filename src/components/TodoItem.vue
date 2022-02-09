<template>
  <div
    @dblclick="changed = !changed"
    class="todo-item todo-item__card"
    :class="todoById.done ? 'todo-item__done' : ''"
  >
    <div v-if="changed" class="todo-item__text">
      {{ todoById.text }}
    </div>
    <InputTodo
      v-else
      v-model="todoById.text"
      type="text"
      @keypress.enter="changeTodo(todoById.text)"
      :class="'todo-input todo-input__changed'"
      :value="todoById.text"
    />
    <div class="todo-item__tools">
      <input
        type="checkbox"
        v-model="todoById.done"
        class="me-3 todo-item__checkbox"
        @click="doneTodo()"
      />
      <button class="todo-btn" @click="removeTodo()">
        <i class="fa fa-minus todo-btn__minus p-1"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import InputTodo from "./InputTodo.vue";
import { useStore } from "vuex";
import Swal from "sweetalert2";
export default {
  components: {
    InputTodo,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    // using store
    const $store = useStore();
    const todoById = computed(() =>
      $store.getters["todoModule/getTodoById"](props.id)
    );
    // models
    const changed = ref(true);
    // methods

    const changeTodo = (text) => {
      $store.commit("todoModule/changeTodo", {
        id: todoById.value.id,
        text: text,
      });
      changed.value = true;
      Swal.fire({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
        icon: "success",
        title: "Success changed",
      });
    };
    const doneTodo = () => {
      $store.commit("todoModule/doneTodo", todoById.value.id);
    };

    const removeTodo = () => {
      $store.commit("todoModule/removeTodo", todoById.value.id);
      Swal.fire({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
        icon: "success",
        title: "Success remove",
      });
    };

    return { todoById, removeTodo, doneTodo, changed, changeTodo };
  },
};
</script>
