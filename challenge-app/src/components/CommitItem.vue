<template>
  <div>
    <b-list-group-item>
      <b-card :title="commit.message" :sub-title="commit.date">
        <b-card-text>SHA: {{ commit.id }} </b-card-text>

        <b-card-text>Author: {{ commit.author }}</b-card-text>
      </b-card>
    </b-list-group-item>
  </div>
</template>

<script>
export default {
  props: {
    commit: {},
  },
  computed: {
    selectedBranche() {
      return this.$store.getters.getSelectedBranche;
    },
  },
};
</script>
