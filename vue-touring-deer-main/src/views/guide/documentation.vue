<!--
 * @Author: your name
 * @Date: 2022-04-18 15:16:24
 * @LastEditTime: 2022-08-06 13:39:41
 * @LastEditors: xianglutao 294301492@qq.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \v3-ts-tourdeer\src\views\guide\documentation.vue
-->
<template>
  <div class="page-container">
    <iframe :src="src" frameborder="0" style="width: 100%;height: 100%;"></iframe>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const src = ref('../../../static/index.html')
</script>
<style lang="scss" scoped>
.page-container {
  padding: 20px;
  height: 100%;
}
</style>