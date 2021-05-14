import axios from "axios";
import { MessageBox, Message } from "element-ui";
 import store from '@/store'
import { getToken } from "@/utils/auth";

const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 5000, // request timeout
});
/**
 * 过滤 option 中值为undefined,"",null的字段
 */
function filterOption(option) {
  let params = {};
  if (option instanceof Array) {
    return option;
  }
  Object.keys(option).forEach(key => {
    let item = option[key];
    if (item !== void 0 && item !== '' && item !== null) {
      params[key] = isString(item) ? item.trim() : item;
    }
    if (item === false) {
      params[key] = item;
    }
  });
  return params;
}
// request interceptor
service.interceptors.request.use(
  (config) => {
//    let {
//     ...params
//   } = config.params || {};
   /**
   * 过滤 请求参数中 值为undefined,"",null的字段
   */
//     params = filterOption(params || {})
//    if (!!params) {
//     Object.keys(params).forEach(key => {
//       if (params[key] instanceof Array) {
//         params[key] = params[key].join(',');
//       }
//     });
//   }
    if (store.state.user.token) {
      config.headers["X-Token"] = getToken();
    }
   
    console.log(config);
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  (response) => {
    console.log(response);
    const res = response.data;
    if (res.code !== 20000) {
      Message({
        message: res.message || "Error",
        type: "error",
        duration: 5 * 1000,
      });
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // to re-login
        MessageBox.confirm(
          "You have been logged out, you can cancel to stay on this page, or log in again",
          "Confirm logout",
          {
            confirmButtonText: "Re-Login",
            cancelButtonText: "Cancel",
            type: "warning",
          }
        ).then(() => {
          store.dispatch("user/resetToken").then(() => {
            location.reload();
          });
        });
      }
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res;
    }
  },
  (error) => {
    console.log("err" + error); // for debug
    Message({
      message: error.message,
      type: "error",
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  }
);

export default service;
