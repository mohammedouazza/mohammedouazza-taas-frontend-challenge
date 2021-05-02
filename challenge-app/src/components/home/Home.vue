<template>
  <div>
    <b-row>
      <b-col class="columns mr-2 p-2">
        <home-selector></home-selector>
      </b-col>
      <b-col class="columns text-center p-5" cols="8">
        <home-content></home-content>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import HomeContentVue from "../home/HomeContent.vue";
import HomeSelectorVue from "./HomeSelector.vue";
export default {
  components: {
    "home-selector": HomeSelectorVue,
    "home-content": HomeContentVue,
  },
};
</script>

<style>
.columns {
  border: 2px solid grey;
  border-radius: 20px;
  height: 90vh;
}
</style>
