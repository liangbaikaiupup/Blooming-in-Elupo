/*
 * @Author: xianglutao 294301492@qq.com
 * @Date: 2022-06-17 09:59:27
 * @LastEditors: xianglutao 294301492@qq.com
 * @LastEditTime: 2022-06-17 10:00:17
 * @FilePath: \vue-tour-deer\src\axios.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import * as axios from 'axios'

declare module 'axios' {
  interface AxiosInstance {
    (config: AxiosRequestConfig): Promise<any>
  }
}