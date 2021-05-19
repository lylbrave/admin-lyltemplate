 import qs from "querystring";
import { Message } from 'element-ui';
// 导入接口地址
// import {
//     commonTip,
// } from '../../config';
import instance from "./axiosInstance"
import { saveAs } from "file-saver"

/**
 * 将blob转化成JSON
 * @param {Blob} blob 
 * @returns {Promise<any>}
 */
function blobToJSON(blob) {
    return new Promise(resolve => {
        const fileReader = new FileReader()
        // 将blob以utf8编码为字符串
        fileReader.readAsText(blob, "utf8")
        fileReader.onload = event => {
            try {
                resolve(JSON.parse(event.target.result))
            } catch (err) {
                resolve({})
            }
        }
    })
}

/**
 * 处理响应的文件流
 * @param {import("axios").AxiosResponse} res 
 * @param {string} name 文件名称
 * @returns {Promise<void>}
 */
async function responseFileHandler(res, name) {
    // 根据响应类型判断是否报错
    // 如果返回json类型，说明接口报错，没有返回文件流
    if (res.data.type === "application/json") {
        let data = await blobToJSON(res.data)
        // eslint-disable-next-line no-undef
//         Message.error({ message: _.get(data, "message", commonTip.apiErr), duration: 2000 });
    } else {
        // 如果能获取到后端设置的文件名，则使用后端设置
        let str = (res.headers["content-disposition"] || "").replace(/;\s*/g, ";")
        let { filename } = qs.parse(str, ";");
        saveAs(res.data, filename || name)
    }
}


// 下载文件   
export const filedown = {
    /**
     * get下载文件
     * @typedef DownloadConfig 下载配置
     * @property {string} DownloadConfig.filename 设定下载的文件名，如果取不到响应头content-disposition的值，则用他来替换
     * @typedef {import("axios").AxiosRequestConfig} AxiosRequestConfig
     * @param {string} url 下载链接
     * @param {AxiosRequestConfig&DownloadConfig} config 下载配置
     */
    get(url, config) {
        // 取出设定的文件名
        let { filename, ...restConfig } = config
        return instance
            .get(url, {
                responseType: 'blob',
                timeout: Number.MAX_SAFE_INTEGER,
                ...restConfig
            })
            .then(res => responseFileHandler(res, filename))
    },
    /**
     * post下载文件
     * @typedef DownloadConfig 下载配置
     * @property {string} DownloadConfig.filename 设定下载的文件名，如果取不到响应头content-disposition的值，则用他来替换
     * @typedef {import("axios").AxiosRequestConfig} AxiosRequestConfig
     * @param {string} url 下载链接
     * @param {any} data 携带的数据
     * @param {AxiosRequestConfig&DownloadConfig} config 下载配置
     */
    post(url, data, config = {}) {
        // 取出设定的文件名
        let { filename, ...restConfig } = config
        return instance
            .post(url, data, {
                responseType: 'blob',
                timeout: Number.MAX_SAFE_INTEGER,
                ...restConfig,
            })
            .then(res => responseFileHandler(res, filename))
    }
}
