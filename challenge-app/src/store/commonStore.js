export default {
  state: {
    hello: "",
  },
  mutations: {
    setHello(state) {
      state.hello = "Hello challange";
    },
  },
  actions: {
    seyHello({ commit }) {
      commit("setHello");
    },
  },
  getters: {
    getHello(state) {
      return state.hello;
    },
  },
};
