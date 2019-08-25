import Vue from "vue";
import Router from "vue-router";
import Home from "../views/home/home";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/home/cart",
      name: "cart",
      component: () =>
        import(/* webpackChunkName: "friends" */ "../views/home/cart")
    },
    {
      path: "/friends",
      name: "friends",
      component: () =>
        import(/* webpackChunkName: "friends" */ "../views/friends")
    },
    {
      path: "/search",
      name: "friends",
      component: () =>
        import(/* webpackChunkName: "friends" */ "../views/search")
    },
    {
      path: "/setting",
      name: "friends",
      component: () =>
        import(/* webpackChunkName: "friends" */ "../views/setting")
    }
  ]
});
