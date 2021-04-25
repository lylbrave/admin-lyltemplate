import http from "./axiosInstance";
//请求曲线图数据
export function getHomeLineChartData(query) {
  return http({
    url: "/home/getHomeLineChartData",
    method: "get",
    params: query,
  });
}
//请求雷达图数据
export function getRadarData(query) {
  return http({
    url: "/home/getRadarData",
    method: "get",
    params: query,
  });
}
