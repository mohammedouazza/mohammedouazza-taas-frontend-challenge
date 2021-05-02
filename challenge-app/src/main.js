import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import commonStore from "./store/commonStore";
import routes from "./routes";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

const router = new VueRouter({
  routes,
});

const store = new Vuex.Store({
  modules: {
    common: commonStore,
  },
});

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
