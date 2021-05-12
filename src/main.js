import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//全局配置
import "@/assets/scss/reset.scss";
import "./icons";
//第三方包
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./mock/index.js";

Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
