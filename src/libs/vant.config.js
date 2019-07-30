import Vue from "vue";
import "vant/lib/index.css";
import "@vant/touch-emulator";
import {
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Lazyload,
  Card,
  Tag,
  Button
} from "vant";

Vue.use(Tabbar).use(TabbarItem);
Vue.use(Swipe).use(SwipeItem);
// options 为可选参数，无则不传
// Vue.use(Lazyload, options);
Vue.use(Lazyload);
Vue.use(Card);
Vue.use(Tag);
Vue.use(Button);
