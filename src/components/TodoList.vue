<template>
  <div class="row">
    <h2 class="todo-title">List todo</h2>
    <TodoFilter v-model="filterValue" />
    <TransitionGroup name="todo-list">
      <div class="col-lg-8 col-12" v-for="item in todoList" :key="item.id">
        <TodoItem :id="item.id" />
      </div>
    </TransitionGroup>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import TodoFilter from "./TodoFilter.vue";
import { ref, computed } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    TodoItem,
    TodoFilter,
  },
  setup() {
    const $store = useStore();

    const filterValue = ref("all");
    let todoList = computed(() => {
      if (filterValue.value == "active") {
        return $store.getters["todoModule/getTodoByActive"]();
      } else if (filterValue.value == "completed") {
        return $store.getters["todoModule/getTodoByCompleted"]();
      } else {
        return $store.state.todoModule.todoList;
      }
    });

    return { filterValue, todoList };
  },
};
</script>
