import Home from "@/views/home/home";
export default [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/home/cart",
    name: "cart",
    component: () =>
      import(/* webpackChunkName: "friends" */ "@/views/home/cart")
  },
  {
    path: "/friends",
    name: "friends",
    component: () => import(/* webpackChunkName: "friends" */ "@/views/friends")
  },
  {
    path: "/search",
    name: "friends",
    component: () => import(/* webpackChunkName: "friends" */ "@/views/search")
  },
  {
    path: "/setting",
    name: "friends",
    component: () => import(/* webpackChunkName: "friends" */ "@/views/setting")
  }
];
