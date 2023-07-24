/*
 * @Author: your name
 * @Date: 2022-03-24 11:49:03
 * @LastEditTime: 2022-03-28 10:05:49
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \v3-ts-tourdeer\src\utils\serve.js
 */
// https://juejin.cn/post/6950601763577659400#heading-4
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { ElMessageBox, ElMessage } from 'element-plus';
// import qs from 'qs';

// 声明一个 Map 用于存储每个请求的标识 和 取消函数
// const pending = new Map();
/**
 * 添加请求
 * @param {Object} config
 */
// const addPending = (config: AxiosRequestConfig) => {
//   const url = [config.method, config.url, qs.stringify(config.params), qs.stringify(config.data)].join('&');
//   config.cancelToken =
//     config.cancelToken ||
//     new axios.CancelToken((cancel) => {
//       if (!pending.has(url)) {
//         // 如果 pending 中不存在当前请求，则添加进去
//         pending.set(url, cancel);
//       }
//     });
// };

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
});

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // if (store.getters.token) {
    //   // let each request carry token
    //   // ['X-Token'] is a custom headers key
    //   // please modify it according to the actual situation
    //   config.headers["X-Token"] = getToken();
    // }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data;
    if (res.code !== 200) {
      ElMessage({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000,
      });

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // to re-login
        ElMessageBox.confirm(
          'You have been logged out, you can cancel to stay on this page, or log in again',
          'Confirm logout',
          {
            confirmButtonText: 'Re-Login',
            cancelButtonText: 'Cancel',
            type: 'warning',
          }
        ).then(() => {
          //   store.dispatch("user/resetToken").then(() => {
          //     location.reload();
          //   });
        });
      }
      return Promise.reject(new Error(res.message || 'Error'));
    } else {
      return res;
    }
  },
  (error) => {
    console.log('err' + error); // for debug
    ElMessage({
      message: error.message,
      type: 'error',
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  }
);

export default service;
