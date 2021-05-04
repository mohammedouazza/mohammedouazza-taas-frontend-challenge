<template>
  <div>
    <b-alert v-if="error" show dismissible variant="danger"
      >{{ username }} not found !</b-alert
    >
    <b-alert v-if="isAuth" show dismissible variant="success"
      >You are authenticated successfully</b-alert
    >
    <b-container v-if="!isAuth">
      <b-input
        placeholder="Github Username"
        required
        v-model="username"
        class="mb-2"
        @keypress-enter="authenticateGithub"
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
      error: false,
    };
  },
  components: {
    "user-info": UserInfoVue,
  },
  computed: {
    isAuth() {
      return this.$store.getters.getIsAuth;
    },
  },
  methods: {
    authenticateGithub() {
      this.$store.dispatch("authenticate", this.username).then(() => {
        this.error = false;
        if (!this.isAuth) this.error = true;
      });
    },
  },
};
</script>
