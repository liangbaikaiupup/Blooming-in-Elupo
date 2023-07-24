/*
 * @Author: your name
 * @Date: 2022-03-29 10:46:06
 * @LastEditTime: 2022-03-29 10:51:37
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \v3-ts-tourdeer\src\utils\auth.ts
 */
import Cookies from 'js-cookie';

const TokenKey = 'Access-Token';

export function getToken() {
  return Cookies.get(TokenKey);
}

export function setToken(token: string) {
  return Cookies.set(TokenKey, token);
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}
