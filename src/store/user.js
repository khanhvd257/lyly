// store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    user: null, // Thông tin người dùng
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    setUser({ commit }, user) {
      commit('setUser', user);
    },
  },
  getters: {
    getUser: state => state.user,
  },
});
