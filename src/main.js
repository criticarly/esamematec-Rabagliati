import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BottoneCarrello from "./components/BottoneCarrello.vue";
import {CarouselPlugin} from 'bootstrap-vue';
import "./assets/style.css";

Vue.use(CarouselPlugin);

Vue.config.productionTip = false;

Vue.component("BottoneCarrello", BottoneCarrello);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
