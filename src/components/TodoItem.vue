<template>
  <div
    class="todo-item todo-item__card"
    :class="checked ? 'text-muted todo-item__done' : ''"
  >
    <p class="todo-item__text">
      {{ item?.text }}
    </p>
    <div class="todo-item__tools">
      <input
        type="checkbox"
        v-model="checked"
        class="me-3 todo-item__checkbox"
      />
      <span class="todo-item__icon" @click="removeTodo()">
        <i class="fa fa-minus todo-btn todo-btn__minus p-1"></i>
      </span>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    // using store
    const $store = useStore();

    // models
    const checked = ref(false);

    // methods
    const removeTodo = () => {
      $store.commit("todoModule/removeTodo", props.item.id);
    };

    return { checked, removeTodo };
  },
};
</script>
