/*
 * @Author: xianglutao 294301492@qq.com
 * @Date: 2022-05-13 17:21:04
 * @LastEditors: xianglutao 294301492@qq.com
 * @LastEditTime: 2022-06-20 10:59:48
 * @FilePath: \vue-tour-deer\src\shims-vue.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module "particles.vue3";
