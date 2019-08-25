import Vue from "vue";
import App from "./App.vue";
import router from "@/plugins/router";
import store from "@/service/store";
import "./plugins/vant.config";
import "./assets/styles/index.less";
Vue.config.productionTip = false;
GLOBAL.vbus = new Vue();
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
