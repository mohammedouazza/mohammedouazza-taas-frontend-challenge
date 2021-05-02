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
    async seyHello({ commit }) {
      console.log("auth");
      commit("setHello");
    },
  },
  getters: {
    getHello(state) {
      return state.hello;
    },
  },
};
