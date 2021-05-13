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
}, ];

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
      await store.dispatch("user/getInfo")
      next(to.path)
    } else {
      next();
    }
  }
});

export default router;
