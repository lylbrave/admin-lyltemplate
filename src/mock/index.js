import Mock from "mockjs";
import homeApi from "./home";

//设置延时
Mock.setup({
  timeout: "200-600",
});
//首页相关
Mock.mock(new RegExp("home/getHomeLineChartData"), "get", homeApi.getHomeLineChartData);
