/**
 * 上传
 * @description 导出上传方法
 */

// import store from "../../store"
import instance from "./axiosInstance"

/**
 * 上传文件
 * @typedef {(progressEvent:ProgressEvent) => void} onUploadProgress 上传进度回调
 * @typedef {import("axios").AxiosRequestConfig} AxiosRequestConfig 上传配置
 * @param {string} url 上传接口
 * @param {any} data 上传数据
 * @param {AxiosRequestConfig|onUploadProgress} configOrOnUploadProgress 配置或者进度回调
 */
export function upload(url, data, configOrOnUploadProgress) {
  /**
   * @type {AxiosRequestConfig}
   */
  let config = {}
  if (typeof configOrOnUploadProgress === "function") {
    config.onUploadProgress = configOrOnUploadProgress
  } else {
    config = { ...configOrOnUploadProgress }
  }
  let formData = new FormData()
  for (let key in data) {
    formData.append(key, data[key])
  }

  return instance.post(url, formData, {
    timeout: Number.MAX_SAFE_INTEGER,
    ...config,
    /**
     * 上传进度
     * @param {ProgressEvent} progressEvent 进度事件
     */
    onUploadProgress: function (progressEvent) {
      let onUploadProgress = config.onUploadProgress || (() => { })
      let complete = parseInt(progressEvent.loaded / progressEvent.total * 100)
      // store.commit("updateUploadInfo", { ...progressEvent, complete })
      onUploadProgress({ ...progressEvent, complete })
    },
  });
}
