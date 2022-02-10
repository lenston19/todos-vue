<template>
  <!-- TODO add more props -->
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    type="text"
    class="todo-input"
    :placeholder="placeholder"
    ref="input"
  />
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  props: {
    modelValue: String,
    placeholder: { type: String, default: "Write a todo" },
  },
  setup() {
    const input = ref();

    onMounted(() => {
      input.value.focus();
    });

    return { input, focus };
  },
};
</script>
