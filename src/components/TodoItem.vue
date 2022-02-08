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
        @click="doneTodo()"
        class="me-3 todo-item__checkbox"
      />
      <span class="todo-item__icon" @click="removeTodo()">
        <i class="fa fa-minus todo-btn todo-btn__minus p-1"></i>
      </span>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
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

    const todoById = $store.getters["todoModule/getTodoById"](props.id);

    // models

    // methods
    const doneTodo = () => {
      $store.commit("todoModule/doneTodo", props.id);
    };

    const removeTodo = () => {
      $store.commit("todoModule/removeTodo", props.id);
    };

    return { todoById, removeTodo, doneTodo };
  },
};
</script>
