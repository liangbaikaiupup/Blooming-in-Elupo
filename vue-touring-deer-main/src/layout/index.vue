<!--
 * @Author: your name
 * @Date: 2022-04-13 15:09:29
 * @LastEditTime: 2022-04-18 11:46:53
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \v3-ts-tourdeer\src\layout\index.vue
-->
<template>
  <div :class="classObj" class="app-wrapper">
    <Sidebar class="sidebar-container" />
    <div :class="{ hasTagsView: needTagsView }" class="main-container">
      <div>
        <NavBar />
        <tags-view v-if="needTagsView" />
      </div>
      <AppMain />
    </div>
  </div>
</template>
<script lang="ts" setup>
import AppMain from './components/AppMain';
import Sidebar from './components/Sidebar/index';
import NavBar from './components/NavBar';
import TagsView from './components/TagsView';
// import { AppMain, Sidebar, NavBar } from './components';

import { useSettingsStore, useAppStore } from '@/store';
import { computed } from '@vue/reactivity';
const settingsStore = useSettingsStore();
const needTagsView = computed(() => {
  return settingsStore.tagsView;
});

const appStore = useAppStore();
const classObj = computed(() => {
  return {
    hideSidebar: !appStore.sidebar.opened,
  };
});
</script>
<style lang="scss" scoped>
@import '~@/styles/mixin.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}
</style>
