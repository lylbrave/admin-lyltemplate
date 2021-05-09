import Mock from "mockjs";
import homeApi from "./home";
import userApi from "./user"

//设置延时
Mock.setup({
  timeout: "200-600",
});
//首页相关
Mock.mock(new RegExp("home/getHomeLineChartData"), "get", homeApi.getHomeLineChartData);
Mock.mock(new RegExp("home/getRadarData"), "get", homeApi.getRadarData);
Mock.mock(new RegExp("home/getPieData"), "get", homeApi.getPieData);
Mock.mock(new RegExp("home/getBarData"), "get", homeApi.getBarData);
//登录和登出
Mock.mock(new RegExp("user/login"), "post", userApi.getLogin);
Mock.mock(new RegExp("user/logout"), "post", userApi.getLoginOut);
