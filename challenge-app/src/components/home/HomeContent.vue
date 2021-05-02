<template>
  <div>
    <b-button v-if="!isAuth" @click="authenticateGithub"
      >Authenticate to Github</b-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAuth: false,
    };
  },
};
</script>
