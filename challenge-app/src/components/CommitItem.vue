<template>
  <div>
    <b-card :title="commit.message" :sub-title="commit.date">
      <b-card-text> sha: {{ commit.id }} </b-card-text>

      <b-card-text>author: {{ commit.author }}</b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    commit: {},
  },
};
</script>
