<template>
  <div id="app">
    <app-header></app-header>
    <b-container class="mt-2">
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>
import Header from "./components/layout/Header";
export default {
  name: "App",
  components: {
    "app-header": Header,
  },
};
</script>
