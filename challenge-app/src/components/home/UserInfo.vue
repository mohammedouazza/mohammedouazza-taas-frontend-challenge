<template>
  <div>
    <div class="text-right">
      {{ userInfo.login }}
      <img :src="userInfo.avatar_url" alt="userAvatar" width="60" height="50" />
    </div>
    <h1 class="text-left">{{ selectedRepo && selectedRepo.text }}</h1>
    <div class="text-left" v-if="selectedRepo">
      <h4>Commits</h4>
      <b-list-group v-if="commits.length">
        <b-list-group-item v-for="commit in commits" :key="commit.id">
          <commit-item :commit="commit"></commit-item>
        </b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>

<script>
import CommitItemVue from "../CommitItem.vue";
export default {
  components: {
    "commit-item": CommitItemVue,
  },
  computed: {
    userInfo() {
      return this.$store.getters.getUser;
    },
    selectedRepo() {
      return this.$store.getters.getSelectedRepo;
    },
    commits() {
      return this.$store.getters.getCommits;
    },
  },
};
</script>
