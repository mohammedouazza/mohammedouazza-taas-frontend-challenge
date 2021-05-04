import axios from "axios";

const GITHUB_URL = "https://api.github.com";

export default {
  state: {
    username: "",
    user: {},
    isAuth: false,
    selectedRepo: null,
    selectedBranche: null,
    repos: [{ value: null, text: "Please select a repository" }],
    branches: [{ value: null, text: "Please select a branche" }],
    commits: [],
  },
  mutations: {
    setRepo(state, repo) {
      state.selectedRepo = state.repos.find((r) => r.value === repo);
    },
    setBranche(state, branche) {
      state.selectedBranche = state.branches.find((b) => b.value === branche);
    },
    setUsername(state, username) {
      state.username = username;
    },
    storeUser(state, user) {
      state.isAuth = true;
      state.user = user;
    },
    storeRepos(state, repos) {
      const newRepos = repos.map((repo) => {
        return {
          value: repo.id,
          text: repo.name,
        };
      });
      state.repos = [
        { value: null, text: "Please select a repository" },
        ...newRepos,
      ];
    },
    storeBranches(state, branches) {
      const newBranches = branches.map((branche) => {
        return {
          value: branche.id,
          text: branche.name,
          repo: state.selectedRepo.value,
        };
      });
      state.branches = [
        { value: null, text: "Please select a branche" },
        ...newBranches,
      ];
    },
    storeCommits(state, commits) {
      const newCommits = commits.map((commitItem) => {
        return {
          id: commitItem.sha,
          message: commitItem.commit.message,
          author: commitItem.commit.author.name,
          date: commitItem.commit.author.date,
          url: commitItem.commit.url,
        };
      });
      state.commits = newCommits;
    },
  },
  actions: {
    async authenticate({ commit, dispatch }, username) {
      commit("setUsername", username);
      dispatch("loadUser");
      dispatch("loadRepos");
    },
    setRepoAction({ commit, dispatch }, repo) {
      commit("setRepo", repo);
      dispatch("loadBranches");
      dispatch("loadCommits");
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
    loadBranches({ state, commit }) {
      axios
        .get(
          `${GITHUB_URL}/repos/${state.username}/${state.selectedRepo.text}/branches`
        )
        .then((res) => {
          commit("storeBranches", res.data);
        });
    },
    loadCommits({ state, commit }) {
      axios
        .get(
          `${GITHUB_URL}/repos/${state.username}/${state.selectedRepo.text}/commits`
        )
        .then((res) => {
          console.log(res);
          commit("storeCommits", res.data);
        });
    },
  },
  getters: {
    getRepos(state) {
      return state.repos;
    },
    getBranches(state) {
      return state.branches;
    },
    getCommits(state) {
      return state.commits;
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
