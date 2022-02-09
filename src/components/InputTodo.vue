<template>
  <input
    :value="modelValue"
    @input="updateInput"
    type="text"
    class="todo-input"
    placeholder="Write a todo"
  />
</template>

<script>
export default {
  props: {
    modelValue: String,
  },
  setup(props, context) {
    const updateInput = (event) => {
      context.emit("update:modelValue", event.target.value);
    };
    return { updateInput };
  },
};
</script>
