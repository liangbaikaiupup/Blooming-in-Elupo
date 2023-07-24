<template>
  <div v-if="!item.hidden">
    <template
      v-if="
        hasOneShowingChild(item.children, item) &&
        (!onlyOneChild.children || onlyOneChild.noShowingChildren) &&
        !item.alwaysShow
      "
    >
      <app-link
        v-if="onlyOneChild.meta"
        :to="resolvePath(onlyOneChild.path)"
        :class="{ 'submenu-title-noDropdown': !isNest }"
      >
        <el-menu-item :index="resolvePath(onlyOneChild.path)">
          <Item :icon="onlyOneChild.meta.icon || (item.meta && item.meta.icon)" />
          <template #title>
            <span>{{ onlyOneChild.meta.title }}</span></template
          >
        </el-menu-item>
      </app-link>
    </template>

    <el-sub-menu v-else ref="subMenu" :index="resolvePath(item.path)">
      <template #title>
        <Item v-if="item.meta" :icon="item.meta && item.meta.icon" />
        <span>{{ item.meta.title }}</span>
      </template>

      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      />
    </el-sub-menu>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, ref, toRefs } from 'vue';
import AppLink from './Link';
import path from 'path';
import { isExternal } from '@/utils/validate';
import Item from './Item';

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  isNest: {
    type: Boolean,
    default: false,
  },
  basePath: {
    type: String,
    default: '',
  },
});

const { item, isNest, basePath } = toRefs(props);

const onlyOneChild: any = ref(null);

function hasOneShowingChild(children = [], parent?: any) {
  const showingChildren = children.filter((item: any) => {
    if (item.hidden) {
      return false;
    } else {
      // Temp set(will be used if only has one showing child)
      onlyOneChild.value = item;
      return true;
    }
  });
  // When there is only one child router, the child router is displayed by default
  if (showingChildren.length === 1) {
    return true;
  }

  // Show parent if there are no child router to display
  if (showingChildren.length === 0) {
    onlyOneChild.value = { ...parent, path: '', noShowingChildren: true };
    return true;
  }
  return false;
}

function resolvePath(routePath: any) {
  if (isExternal(routePath)) {
    return routePath;
  }
  if (isExternal(basePath.value)) {
    return basePath;
  }
  return path.resolve(basePath.value, routePath);
}
</script>
