import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Recensioni from "../views/Recensioni.vue";
import Carrello from "../views/Carrello.vue";
import Dettagli from "../views/Dettagli.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/prodotti/:id",
    name: "Dettagli",
    component: Dettagli,
    props: true,
  },
  {
    path: "/recensioni",
    name: "Recensioni",
    component: Recensioni,
    props: true,
  },
  {
    path: "/carrello",
    name: "Carrello",
    component: Carrello,
    props: true,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
