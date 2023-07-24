/*
 * @Author: xianglutao 294301492@qq.com
 * @Date: 2022-05-13 17:21:04
 * @LastEditors: xianglutao 294301492@qq.com
 * @LastEditTime: 2022-06-20 10:58:15
 * @FilePath: \vue-tour-deer\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './styles/element/index.scss';
import '@/styles/index.scss';
import store from './store';
import * as ElIcons from '@element-plus/icons-vue';
import './permission'
import Particles from 'particles.vue3'

const app = createApp(App);
app.use(router).use(store).use(ElementPlus).use(Particles).mount('#app')

// 注册Icons 全局组件
Object.keys(ElIcons).forEach((key) => {
  app.component(key, ElIcons[key as keyof typeof ElIcons]);
});
