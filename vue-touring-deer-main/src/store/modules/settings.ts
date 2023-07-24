/*
 * @Author: your name
 * @Date: 2022-04-16 10:51:24
 * @LastEditTime: 2022-06-16 11:30:05
 * @LastEditors: xianglutao 294301492@qq.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \v3-ts-tourdeer\src\store\modules\settings.ts
 */
import { defineStore } from 'pinia';

interface settingsState {
  tagsView: boolean;
  sidebarLogo: boolean;
  siderIcon: any
}

export const useSettingsStore = defineStore({
  id: 'settings', // id必填，且需要唯一
  state: (): settingsState => {
    return {
      tagsView: true,
      sidebarLogo: true,
      siderIcon: {
        color: "currentColor",
        width: "1em",
        height: "1em",
        marginRight: "16px",
        verticalAlign: "-0.15em",
        fill: "currentColor",
        overflow: "hidden"
      }
    };
  },
  getters: {},
  actions: {},
});
