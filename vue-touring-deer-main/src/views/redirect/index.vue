<!--
 * @Author: your name
 * @Date: 2022-04-13 15:39:34
 * @LastEditTime: 2022-04-13 16:09:00
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \v3-ts-tourdeer\src\views\redirect\index.vue
-->
<template>
  <div class="app-container">重定向</div>
</template>
<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const { params, query } = route;
const { path } = params;
const router = useRouter();
router.replace({ path: '/' + path, query });
</script>
