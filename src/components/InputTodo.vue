<template>
  <!-- TODO add more props -->
  <input
    :value="modelValue"
    @input="updateInput"
    type="text"
    class="todo-input"
    placeholder="Write a todo"
    ref="input"
  />
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  props: {
    modelValue: String,
  },
  setup(props, context) {
    const input = ref();

    const updateInput = (event) => {
      context.emit("update:modelValue", event.target.value);
    };

    onMounted(() => {
      input.value.focus();
    });

    return { input, updateInput, focus };
  },
};
</script>
