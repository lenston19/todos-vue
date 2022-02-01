<template>
  <div class="todo-item todo-item__card">
    <p class="todo-item__text">
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
