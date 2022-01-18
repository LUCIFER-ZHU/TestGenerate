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
  <AppIndexViewBaseLayout class="ibiz-index-view-layout--default">
    <template v-slot:header-left>
      <slot name="caption"></slot>
    </template>
    <template v-slot:header-content>
      <slot name="menu" v-if="Object.is(menuAlign, 'TOP')"></slot>
    </template>
    <template v-slot:header-right>
      <slot name="user"></slot>
    </template>
    <template v-slot:side-left>
      <a-layout-sider 
        v-if="Object.is(menuAlign, 'LEFT')" 
        collapsible
        :trigger="null"
        :collapsed="collapsed">
        <slot name="menu"></slot>
      </a-layout-sider>
    </template>
    <template v-slot:content>
      <slot name="router" />
    </template>
  </AppIndexViewBaseLayout>
</template>

<style lang="scss">
</style>