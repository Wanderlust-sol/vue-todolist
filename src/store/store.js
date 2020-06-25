import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    items: [],
  },
  getters: {
    getItem(state) {
      return state.items;
    },
  },
  mutations: {
    addItem(state, payload) {
      //return state.items.push(newItem);
      state.items = [...state.items, payload];
    },
    removeItem(state, payload) {
      let arr = state.items;
      const newItems = arr.filter((todo) => todo !== payload);
      state.items = newItems;
    },
  },
});
