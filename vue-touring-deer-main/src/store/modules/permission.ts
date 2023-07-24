/*
 * @Author: your name
 * @Date: 2022-04-18 14:03:55
 * @LastEditTime: 2022-05-16 17:14:34
 * @LastEditors: xianglutao 294301492@qq.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \v3-ts-tourdeer\src\store\modules\permission.ts
 */
import { defineStore } from 'pinia';

export const usePermissionStore = defineStore({
  id: 'permission',
  state: () => {
    return {
      route: [],
    };
  },
  actions:{
    UPDATE_ROUTE(route: any) {
      this.route = route;
    },
  }
});
