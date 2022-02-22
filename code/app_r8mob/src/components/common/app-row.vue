<script setup lang="ts">
import { ILayoutOpts } from "@core";
import { LayoutTool } from "@core/modules/common/layout-tool";

interface AppRowProps {
  layoutOpts: ILayoutOpts;
}

const props = withDefaults(defineProps<AppRowProps>(), {});

// 使用布局逻辑获得响应式的layout对象
const layout = LayoutTool.useLayout(toRef(props, "layoutOpts"));

</script>

<template>
  <div 
  :style="layout.rowStyle"
  v-if="layoutOpts.selfLayout == 'FLEX'" class="app-row app-row--flex">
    <slot></slot>
  </div>
  <a-row v-else class="app-row app-row--grid">
    <slot></slot>
  </a-row>
</template>

<style lang="scss">
.app-row{
  width: 100%;
}
</style>