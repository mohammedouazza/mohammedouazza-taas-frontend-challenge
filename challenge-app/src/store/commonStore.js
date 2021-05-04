import axios from "axios";

const GITHUB_URL = "https://api.github.com";

export default {
  state: {
    hello: "",
    username: "",
    user: {},
    isAuth: false,
    selectedRepo: null,
    selectedBranche: null,
    repos: [
      { value: null, text: "Please select a repository" },
      { value: "a", text: "Repo A" },
      { value: "b", text: "Repo B" },
      { value: "c", text: "Repo C" },
      { value: "d", text: "Repo D" },
    ],
    branches: [
      { value: null, text: "Please select a branche" },
      { value: "a", text: "Branche A1", repo: "a" },
      { value: "b", text: "Branche A2", repo: "a" },
      { value: "c", text: "Branche A3", repo: "a" },
      { value: "d", text: "Branche B1", repo: "b" },
      { value: "e", text: "Branche B2", repo: "b" },
      { value: "f", text: "Branche B3", repo: "b" },
    ],
  },
  mutations: {
    setHello(state) {
      state.hello = "Hello challange";
    },
    setRepo(state, repo) {
      state.selectedRepo = repo;
    },
    setBranche(state, branche) {
      state.selectedBranche = branche;
    },
    setUsername(state, username) {
      state.username = username;
    },
    storeUser(state, user) {
      state.isAuth = true;
      state.user = user;
    },
    storeRepos(state, repos) {
      state.repos = repos;
    },
  },
  actions: {
    authenticate({ commit, dispatch }, username) {
      commit("setUsername", username);
      dispatch("loadUser");
      dispatch("loadRepos");
    },
    setRepoAction({ commit }, repo) {
      commit("setRepo", repo);
    },
    setBrancheAction({ commit }, branche) {
      commit("setBranche", branche);
    },
    loadUser({ state, commit }) {
      axios.get(`${GITHUB_URL}/users/${state.username}`).then((res) => {
        commit("storeUser", res.data);
      });
    },
    loadRepos({ state, commit }) {
      axios.get(`${GITHUB_URL}/users/${state.username}/repos`).then((res) => {
        commit("storeRepos", res.data);
      });
    },
  },
  getters: {
    getHello(state) {
      return state.hello;
    },
    getRepos(state) {
      return state.repos;
    },
    getBranches(state) {
      return state.branches;
    },
    getSelectedRepo(state) {
      return state.selectedRepo;
    },
    getSelectedBranche(state) {
      return state.selectedBranche;
    },
    getIsAuth(state) {
      return state.isAuth;
    },
    getUser(state) {
      return state.user;
    },
  },
};
