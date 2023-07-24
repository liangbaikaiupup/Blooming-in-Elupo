/*
 * @Author: your name
 * @Date: 2022-03-28 10:14:17
 * @LastEditTime: 2022-04-01 11:25:12
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \v3-ts-tourdeer\src\store\modules\user.ts
 */
import { defineStore } from 'pinia';

interface processState {
  process: number | string;
}

export const useProcessStore = defineStore({
  id: 'process', // id必填，且需要唯一
  state: (): processState => {
    return {
      process: 0,
    };
  },
  actions: {
    UPDATE_PROCESS(process: string) {
      this.process = process;
    },
  },
});
