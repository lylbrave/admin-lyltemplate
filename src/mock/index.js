import Mock from "mockjs";
import homeApi from "./home";

//设置延时
Mock.setup({
  timeout: "200-600",
});
//首页相关
Mock.mock(new RegExp("home/getHomeLineChartData"), "get", homeApi.getHomeLineChartData);
Mock.mock(new RegExp("home/getRadarData"), "get", homeApi.getRadarData);
Mock.mock(new RegExp("home/getPieData"), "get", homeApi.getPieData);
Mock.mock(new RegExp("home/getBarData"), "get", homeApi.getBarData);
