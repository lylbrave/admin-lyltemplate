import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/views/layout"),
    children: [
      {
        path: "/",
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

export default router;
