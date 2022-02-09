<template>
  <div
    class="todo-item todo-item__card"
    :class="todoById.done ? 'text-muted todo-item__done' : ''"
  >
    <p class="todo-item__text">
      {{ todoById.text }}
    </p>
    <div class="todo-item__tools">
      <input
        type="checkbox"
        v-model="todoById.done"
        class="me-3 todo-item__checkbox"
        @click="doneTodo()"
      />
      <span class="todo-item__icon" @click="removeTodo()">
        <i class="fa fa-minus todo-btn todo-btn__minus p-1"></i>
      </span>
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
        timer: 3000,
        timerProgressBar: true,
        icon: "success",
        title: "Success remove",
      });
    };

    return { todoById, removeTodo, doneTodo };
  },
};
</script>
