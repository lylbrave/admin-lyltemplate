import Vue from "vue";
import VueRouter from "vue-router";
import {
  getToken
} from "../utils/auth";
import store from "@/store"
Vue.use(VueRouter);

const routes = [{
    path: "/login",
    name: "login",
    component: () => import("@/views/login/login"),
  },
  {
    path: "/",
    component: () => import("@/views/layout"),
    redirect: "/home",
    children: [{
        path: "/home",
        name: "home",
        component: () => import("@/views/home/home"),
      },
      {
        path: "/video",
        name: "video",
        component: () => import("@/views/video/video"),
      },
      {
        path: "/userManager",
        name: "userManager",
        component: () => import("@/views/userManager/user"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

//全局守卫
router.beforeEach(async (to, from, next) => {
  //这里是对登录后的值进行判断
  const hasToken = getToken();
  if (to.path === "/login") {
    next();
  } else {
    if (!hasToken) return next("/login");
    //判断是否是刷新页面
    if (store.state.user.menuList.length == 0) {
      await store.dispatch('user/getInfo')
    }
    next();
  }
  next();
});

export default router;
