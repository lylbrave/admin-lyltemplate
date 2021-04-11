import http from "./axiosInstance";

export function getHomeData(query) {
  return http({
    url: "/home/getData",
    method: "get",
    params: query,
  });
}
