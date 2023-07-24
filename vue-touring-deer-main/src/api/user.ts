/*
 * @Author: your name
 * @Date: 2022-03-19 11:23:29
 * @LastEditTime: 2022-03-28 11:36:16
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \v3-pro\src\api\user.ts
 */
import request from '@/utils/request';

interface search {
  keywords: string;
}

interface cellphone {
  phone: string | number;
  password: string;
}


export function getMusicSearch(query: search) {
  return request({
    url: 'search',
    method: 'get',
    params: query,
  });
}

export function loginByPhone(query: cellphone) {
  return request({
    url: 'login/cellphone',
    method: 'get',
    params: query,
  });
}
