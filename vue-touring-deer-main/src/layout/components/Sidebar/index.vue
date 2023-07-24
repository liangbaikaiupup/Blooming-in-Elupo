<!--
 * @Author: xianglutao 294301492@qq.com
 * @Date: 2022-05-16 17:06:33
 * @LastEditors: xianglutao 294301492@qq.com
 * @LastEditTime: 2022-06-16 11:39:22
 * @FilePath: \vue-tour-deer\src\layout\components\Sidebar\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div :class="{ 'has-logo': showLogo }">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        background-color="#304156"
        text-color="#bfcbd9"
        :unique-opened="false"
        active-text-color="#409EFF"
        mode="vertical"
      >
        <sidebar-item
          v-for="route in permission_routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { useSettingsStore, useAppStore, usePermissionStore } from "@/store";
import { useRoute } from "vue-router";
import Logo from "./Logo";
import SidebarItem from "./SidebarItem";

const route = useRoute();
/**
 * 展示logo
 */
const settingsState = useSettingsStore();
const showLogo = computed(() => {
  return settingsState.sidebarLogo;
});

const activeMenu: any = computed(() => {
  const { meta, path } = route;
  if (meta.activeMenu) {
    return meta.activeMenu;
  }
  return path;
});

//可折叠的菜单
const appStore = useAppStore();
const isCollapse = computed(() => {
  return !appStore.sidebar.opened;
});

/**
 * 菜单路由
 */
const permissionStore = usePermissionStore();
const permission_routes = computed(() => {
  return permissionStore.route;
});
</script>
