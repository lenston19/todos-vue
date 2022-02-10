<template>
  <!-- TODO fix bug changed on done -->
  <!-- TODO check changed text or not -->
  <div
    class="todo-item todo-item__card"
    :class="todoById.done ? 'todo-item__done' : ''"
  >
    <div v-if="changed" @dblclick="changed = !changed" class="todo-item__text">
      {{ todoById.text }}
    </div>
    <InputTodo
      v-else
      @dblclick="changed = !changed"
      v-model="todoById.text"
      type="text"
      @keypress.enter="changeTodo(todoById.text)"
      :class="'todo-input todo-input__changed'"
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
import { useNotify } from "../hooks/useNotify";

export default {
  components: {
    InputTodo,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const { successToast } = useNotify();
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
      successToast("Success changed");
    };
    const doneTodo = () => {
      $store.commit("todoModule/doneTodo", todoById.value.id);
    };

    const removeTodo = () => {
      $store.commit("todoModule/removeTodo", todoById.value.id);
      successToast("Success removed");
    };

    return {
      todoById,
      removeTodo,
      doneTodo,
      changed,
      changeTodo,
    };
  },
};
</script>
