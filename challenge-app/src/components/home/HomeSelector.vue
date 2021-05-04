<template>
  <div>
    <p class="mb-2">Repositories</p>
    <b-form-select
      class="mb-4"
      v-model="selectedRepo"
      @change="changeRepo"
      :options="repositories"
    ></b-form-select>

    <p class="mb-2">Branches</p>
    <b-form-select
      v-model="selectedBranche"
      @change="changeBranche"
      :options="branches"
    ></b-form-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedRepo: null,
      selectedBranche: null,
    };
  },
  computed: {
    repositories() {
      return this.$store.getters.getRepos;
    },
    branches() {
      return [
        { value: null, text: "Please select a branche" },
        ...this.$store.getters.getBranches.filter(
          (b) => b.repo === this.selectedRepo
        ),
      ];
    },
  },
  methods: {
    changeRepo(repo) {
      console.log(repo, this.selectedRepo);
      this.$store.dispatch("setRepoAction", repo);
    },
    changeBranche(branche) {
      console.log(
        branche,
        this.selectedBranche,
        this.$store.getters.getBranches
      );
      this.$store.dispatch("setBrancheAction", branche);
    },
  },
};
</script>
