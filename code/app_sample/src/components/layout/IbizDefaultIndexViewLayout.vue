<script setup lang="ts">
interface LayoutProps {
  /**
   * @description 菜单方向
   */
  menuAlign: "LEFT" | "TOP" | "CENTER" | "TABEXP_LEFT" | "TABEXP_TOP" | "TABEXP_RIGHT" | "TABEXP_BOTTOM" | "NONE",

  /**
   * @description 收缩
   */
  collapsed: boolean,
}
const props = withDefaults(defineProps<LayoutProps>(), {
  menuAlign: "LEFT",
  collapsed: false,
})
</script>

<template>
  <a-layout class="app-index-view">
    <a-layout-header>
      <slot name="header"></slot>
      <slot name="menu" v-if="Object.is(menuAlign, 'TOP')"></slot>
      <slot name="user"></slot>
    </a-layout-header>
    <a-layout>
      <a-layout-sider 
        v-if="Object.is(menuAlign, 'LEFT')" 
        theme="light"
        collapsible
        :trigger="null"
        :collapsed="collapsed">
        <slot name="menu"></slot>
      </a-layout-sider>
      <a-layout-content>
        <slot name="content"></slot>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style lang="scss">
.app-index-view {
  width: 100%;
  height: 100%;
  .ant-layout-header {
    display: flex;
    background-color: #fff;
    justify-content: space-between;
  }
  .ant-layout-sider {
    overflow-y: auto;
  }
}
</style>