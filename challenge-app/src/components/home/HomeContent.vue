<template>
  <div>
    <b-alert v-if="isAuth" show dismissible variant="success"
      >You are authenticated successfully</b-alert
    >
    <b-container v-if="!isAuth">
      <b-input
        placeholder="Github Username"
        required
        v-model="username"
        class="mb-2"
      ></b-input>
      <b-button @click="authenticateGithub">Authenticate to Github</b-button>
    </b-container>

    <user-info v-else></user-info>
  </div>
</template>

<script>
import UserInfoVue from "./UserInfo.vue";
export default {
  data() {
    return {
      username: "",
    };
  },
  components: {
    "user-info": UserInfoVue,
  },
  computed: {
    isAuth() {
      return this.$store.getters.getIsAuth;
    },
    selectedRepo() {
      return this.$store.getters.getSelectedRepo;
    },
    selectedBranche() {
      return this.$store.getters.getSelectedBranche;
    },
  },
  methods: {
    authenticateGithub() {
      this.$store.dispatch("authenticate", this.username);
    },
  },
};
</script>
