<template>
  <div>
    {{ getMessage }}
    <b-button @click="authenticateGithub">Authenticate to Github</b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello from home",
    };
  },
  computed: {
    getMessage() {
      console.log(this.$store);
      return this.$store.getters.getHello || this.message;
    },
  },
  methods: {
    authenticateGithub() {
      this.$store.dispatch("seyHello").then(() => {
        this.message = this.$store.state.hello;
      });
    },
  },
};
</script>
