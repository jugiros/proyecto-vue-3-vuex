import { createStore } from "vuex";

export default createStore({
  state: {
    titleApp: "Memes",
    memes: [],
  },
  getters: {},
  mutations: {
    setMemes(state, payload) {
      state.memes = payload;
    },
  },
  actions: {
    async getMemes({ commit }) {
      try {
        const response = await fetch("https://api.imgflip.com/get_memes");
        const result = await response.json();
        console.log(result);
        commit('setMemes', result.data.memes)
      } catch (e) {}
    },
  },
  modules: {},
});
