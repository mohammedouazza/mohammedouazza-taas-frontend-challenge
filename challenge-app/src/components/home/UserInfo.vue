<template>
  <div>
    <div class="text-right">
      {{ userInfo.login }}
      <img :src="userInfo.avatar_url" alt="userAvatar" width="60" height="50" />
    </div>
    <h1 class="text-left">{{ selectedRepo && selectedRepo.text }}</h1>
    <div class="text-left">
      <h4>Commits</h4>
      <b-list-group id="infinit-scroll">
        <commit-item
          v-for="commit in commits"
          :key="commit.id"
          :commit="commit"
        ></commit-item>
        <p v-if="loading">Loading...</p>
      </b-list-group>
    </div>
  </div>
</template>

<script>
import CommitItemVue from "../CommitItem.vue";
export default {
  data() {
    return {
      loading: false,
      counter: 0,
    };
  },
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
    selectedBranche() {
      return this.$store.getters.getSelectedBranche;
    },
    commits() {
      let commits = [];
      const allCommits = this.$store.getters.getCommits;
      const endCounter =
        this.counter + 4 > allCommits.length
          ? allCommits.length
          : this.counter + 4;
      for (let i = 0; i < endCounter; i++) {
        commits.push(allCommits[i]);
      }
      return commits;
    },
  },
  mounted() {
    const listElm = document.querySelector("#infinit-scroll");
    listElm.addEventListener("scroll", () => {
      if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
        this.loading = true;
        setTimeout(() => {
          this.counter += 4;
          this.loading = false;
        }, 1000);
      }
    });
  },
  watch: {
    selectedRepo() {
      this.loading = false;
      this.counter = 0;
    },
    selectedBranche() {
      this.loading = false;
      this.counter = 0;
    },
  },
};
</script>

<style>
#infinit-scroll {
  height: 65vh;
  overflow: auto;
}
</style>
