<template>
  <form
    @change="$emit('update:modelValue', $event.target.value)"
    class="todo-filter"
  >
    <input
      type="radio"
      id="all"
      name="todo-filter"
      class="todo-filter__input"
      value="all"
      :checked="modelValue === 'all'"
    />
    <label for="all" class="todo-filter__label"> All </label>
    <input
      type="radio"
      id="active"
      name="todo-filter"
      class="todo-filter__input"
      value="active"
      :checked="modelValue === 'active'"
    />
    <label for="active" class="todo-filter__label"> Active </label>
    <input
      type="radio"
      id="completed"
      name="todo-filter"
      class="todo-filter__input"
      value="completed"
      :checked="modelValue === 'completed'"
    />
    <label for="completed" class="todo-filter__label"> Completed </label>
  </form>
</template>

<script>
export default {
  props: {
    modelValue: String,
  },
};
</script>
