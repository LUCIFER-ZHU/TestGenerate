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
  <IbizIndexViewBaseLayout class="ibiz-default-index-view">
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
        theme="light"
        collapsible
        :trigger="null"
        :collapsed="collapsed">
        <slot name="menu"></slot>
      </a-layout-sider>
    </template>
    <template v-slot:content>
      <!-- <div class="ibiz-page-tag"></div> -->
      <slot name="router" />
    </template>
  </IbizIndexViewBaseLayout>
</template>

<style lang="scss">
.ibiz-default-index-view {
}
</style>