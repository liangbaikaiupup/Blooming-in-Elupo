<!--
 * @Author: your name
 * @Date: 2022-04-13 15:10:44
 * @LastEditTime: 2022-04-16 11:03:54
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \v3-ts-tourdeer\src\layout\components\appMain.vue
-->
<template>
  <section class="app-main">
    <router-view v-model:key="key" />
  </section>
</template>
<script lang="ts" setup>
import { computed } from '@vue/reactivity';
import { useRoute } from 'vue-router';
const route = useRoute();
const key = computed(() => {
  return route.path;
});
</script>
<style lang="scss" scoped>
.app-main {
  /* 50= navbar  50  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}

.fixed-header + .app-main {
  padding-top: 50px;
}

.hasTagsView {
  .app-main {
    /* 84 = navbar + tags-view = 50 + 34 */
    min-height: calc(100vh - 84px);
  }

  .fixed-header + .app-main {
    padding-top: 84px;
  }
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
