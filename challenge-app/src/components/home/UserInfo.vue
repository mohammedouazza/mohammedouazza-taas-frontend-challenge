<template>
  <div>
    <div class="text-right">
      {{ userInfo.login }}
      <img :src="userInfo.avatar_url" alt="userAvatar" width="60" height="50" />
    </div>
    <h1 class="text-left">{{ selectedRepo }}</h1>
    <div class="text-left">
      <h4>Commits</h4>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: "med",
    };
  },
  computed: {
    userInfo() {
      return this.$store.getters.getUser;
    },
    selectedRepo() {
      return this.$store.getters.getSelectedRepo;
    },
  },
};
</script>
