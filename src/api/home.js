import http from "./axiosInstance";

export function getHomeLineChartData(query) {
  return http({
    url: "/home/getHomeLineChartData",
    method: "get",
    params: query,
  });
}
