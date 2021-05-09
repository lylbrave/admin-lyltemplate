import Vue from "vue";
import Vuex from "vuex";
import menu from "./menu/index";
import user from "./user/index";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    menu,
    user
  },
});
