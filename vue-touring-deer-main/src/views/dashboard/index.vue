<template>
  <div class="app-container">
    <el-row :gutter="20">
      <el-col :span="24">
        <EyeSocket height="300px" />
      </el-col>
      <el-col :span="24">
        <EyeSocket2 />
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts" setup>
import EyeSocket from "@/components/EyeSocket/index.vue"
import EyeSocket2 from "@/components/EyeSocket2/inde.vue"
</script>
<style lang="scss" scoped>

</style>
