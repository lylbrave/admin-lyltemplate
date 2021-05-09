import Vue from "vue";
import VueRouter from "vue-router";
import { getToken } from "../utils/auth";
Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/login"),
  },
  {
    path: "/",
    component: () => import("@/views/layout"),
    redirect: "/home",
    children: [
      {
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
router.beforeEach((to, from, next) => {
  //这里是对登录后的值进行判断
  const hasToken = getToken();
  if (to.path === "/login") {
    next();
  } else {
    console.log(hasToken);
    if (!hasToken) return next("/login");
    next();
  }
  next();
});

export default router;
