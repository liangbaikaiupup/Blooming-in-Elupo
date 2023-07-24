/*
 * @Author: your name
 * @Date: 2022-03-28 10:14:17
 * @LastEditTime: 2022-04-18 14:08:08
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \v3-ts-tourdeer\src\store\modules\user.ts
 */
import { defineStore } from 'pinia';

interface appState {
  sidebar: {
    opened: boolean;
  };
}

export const useAppStore = defineStore({
  id: 'app', // id必填，且需要唯一
  state: (): appState => {
    return {
      sidebar: {
        opened: true,
      },
    };
  },
  actions: {
    toggleSideBar() {
      this.sidebar.opened = !this.sidebar.opened;
    },
  },
});
