<!--
 * @Author: your name
 * @Date: 2022-04-13 13:38:48
 * @LastEditTime: 2022-05-09 16:43:58
 * @LastEditors: xianglutao 294301492@qq.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \v3-ts-tourdeer\src\views\jue-jin\index.vue
-->
<template>
  <div class="app-container">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
          <el-button class="button" type="text">Operation button</el-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
    </el-card>
  </div>
</template>
<script lang="ts" setup>
// import { onMounted } from 'vue';
// import { useRoute } from 'vue-router';

// const route = useRoute();
// onMounted(() => {

// });
</script>
