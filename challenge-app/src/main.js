import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import commonStore from "./store/commonStore";
import routes from "./routes";

Vue.use(VueRouter);
Vue.use(Vuex);

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
