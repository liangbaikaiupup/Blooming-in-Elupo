/*
 * @Author: your name
 * @Date: 2022-03-28 13:31:38
 * @LastEditTime: 2022-04-18 14:10:10
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \v3-ts-tourdeer\src\store\index.ts
 */
/*
 * @Author: your name
 * @Date: 2022-03-28 10:09:41
 * @LastEditTime: 2022-03-28 10:17:14
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \v3-ts-tourdeer\src\store\index.ts
 */
import { createPinia } from 'pinia';

const store = createPinia();

export default store;

export * from './modules/user';
export * from './modules/process';
export * from './modules/settings';
export * from './modules/app';
export * from './modules/permission';
