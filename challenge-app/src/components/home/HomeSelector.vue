<template>
  <div>
    {{ getMessage }}
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
};
</script>
