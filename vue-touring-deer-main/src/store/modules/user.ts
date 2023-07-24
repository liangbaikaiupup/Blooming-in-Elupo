/*
 * @Author: your name
 * @Date: 2022-03-28 10:14:17
 * @LastEditTime: 2022-08-06 16:42:02
 * @LastEditors: xianglutao 294301492@qq.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \v3-ts-tourdeer\src\store\modules\user.ts
 */
import { defineStore } from 'pinia';
import { loginByPhone } from '@/api/user';
import { cellphone } from '@/typings/index';
import { setToken, removeToken } from '@/utils/auth' // get token from cookie
import { usePermissionStore } from './permission'
import { TOURISTS } from '@/typings/route'

interface userState {
  name: string;
  age: number;
  job: string;
  roles: Array<any>
}

export const useUserStore = defineStore({
  id: 'user', // id必填，且需要唯一
  state: (): userState => {
    return {
      name: 'Tim',
      age: 18,
      job: '假面超人',
      roles: []
    };
  },
  getters: {
    fullname: (state) => {
      return `名字：${state.name}`;
    },
  },
  actions: {
    UPDATE_NAME(name: string) {
      this.name = name;
    },
    async login(params: cellphone) {
      return new Promise<void>((resolve, reject) => {
        loginByPhone(params).then(response => {
          const { token } = response
          setToken(token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    /**
     * 游客模式
     * @param params 
     * @returns 
     */
    async mocLogin(params: cellphone) {
      return new Promise<void>((resolve, reject) => {
        if (params.phone === 'admin' && params.password === '123456') {
          setToken('tourists')
          const permissionStore = usePermissionStore()
          permissionStore.UPDATE_ROUTE(TOURISTS)
          resolve()
        } else {
          reject()
        }
      })
    },

    // 退出登录
    async logout(){
      //
      removeToken()
    }
  },
});
