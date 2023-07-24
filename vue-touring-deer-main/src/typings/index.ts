/*
 * @Author: your name
 * @Date: 2022-03-28 09:35:21
 * @LastEditTime: 2022-03-28 11:38:04
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \v3-ts-tourdeer\src\typings\index.ts
 */
export interface HttpResponse<T = any> {
  code: number | string;
  result: T;
}

export interface cellphone {
  phone: string | number;
  password: string;
}
