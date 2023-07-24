<!--
 * @Author: your name
 * @Date: 2022-04-16 16:50:48
 * @LastEditTime: 2022-04-24 16:16:15
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \v3-ts-tourdeer\src\views\guide\index.vue
-->
<template>
  <div class="app-container">
    <el-card>
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="img-box">
            <div class="frosted-glass"></div>
            <el-image src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg" style="width: 80%" />
          </div>
        </el-col>
        <el-col :span="12"></el-col>
      </el-row>
    </el-card>
  </div>
</template>
<style lang="scss" scoped>
.img-box {
  position: relative;
  .frosted-glass {
    position: absolute;
    // z-index: -1;
    width: 100%;
    height: 100%;

    background-image: url('https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg');
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    filter: blur(2px);
  }
}
</style>
