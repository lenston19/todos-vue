<template>
  <div
    class="todo-item todo-item__card"
    :class="todoById.done ? 'todo-item__done' : ''"
  >
    <div class="todo-item__text">
      {{ todoById.text }}
    </div>
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
import { computed } from "vue";
import { useStore } from "vuex";
import Swal from "sweetalert2";
export default {
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

    // methods

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

    return { todoById, removeTodo, doneTodo };
  },
};
</script>
