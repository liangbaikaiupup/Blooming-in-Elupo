<template>
  <el-icon :style="iconStyle">
    <component :is="icon" />
  </el-icon>
</template>
<script lang="ts" setup>
import { defineProps, computed } from "vue";
import { useSettingsStore } from "@/store";

defineProps({
  icon: {
    type: String,
    default: ""
  }
});

const settingsState = useSettingsStore();
const iconStyle = computed(() => {
  return settingsState.siderIcon;
});
</script>
<style lang="scss" scoped>
.el-icon {
  color: currentColor;
  width: 1em;
  height: 1em;
  margin-right: 16px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>

