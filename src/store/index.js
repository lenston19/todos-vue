import { createStore } from "vuex";
import todoModule from "./todoModule";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  modules: { todoModule },
  plugins: [createPersistedState()],
});
