<template>
  <div
    class="todo-item todo-item__card"
    :class="checked ? 'todo-item__done' : ''"
  >
    <p class="todo-item__text">
      {{ text }}
    </p>
    <div class="todo-item__tools">
      <input
        type="checkbox"
        v-model="checked"
        class="me-3 todo-item__checkbox"
      />
      <i class="fa fa-minus todo-btn todo-btn__minus p-1"></i>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  setup() {
    const checked = ref(false);

    return { checked };
  },
};
</script>
