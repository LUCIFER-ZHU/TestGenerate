<script setup lang="ts">
interface LayoutProps {
  /**
   * @description 菜单方向
   */
  menuAlign: 'LEFT' | 'TOP' | 'CENTER' | 'TABEXP_LEFT' | 'TABEXP_TOP' | 'TABEXP_RIGHT' | 'TABEXP_BOTTOM' | 'NONE';

  /**
   * @description 收缩
   */
  collapsed: boolean;

  /**
   * @description 显示标题栏
   */
  showCaptionBar: boolean;
}
const props = withDefaults(defineProps<LayoutProps>(), {
  menuAlign: 'LEFT',
  collapsed: false,
  showCaptionBar: true
});
</script>

<template>
  <div class="app-index-view-layout--default">
    <a-card v-if="Object.is(menuAlign, 'CENTER')" class="center-menu-card">
      <template v-if="showCaptionBar" #title>
        <slot name="caption" />
      </template>
      <slot name="menu" />
    </a-card>
    <AppIndexViewBaseLayout v-else>
      <template v-slot:header-left>
        <slot v-if="showCaptionBar" name="caption"></slot>
      </template>
      <template v-slot:header-content>
        <slot name="breadcrumb" />
        <slot name="menu" v-if="Object.is(menuAlign, 'TOP')"></slot>
      </template>
      <template v-slot:header-right>
        <slot name="user"></slot>
      </template>
      <template v-slot:side-left>
        <a-layout-sider v-if="Object.is(menuAlign, 'LEFT')" collapsible :trigger="null" :collapsed="collapsed">
          <slot name="menu"></slot>
        </a-layout-sider>
      </template>
      <template v-slot:content>
        <slot name="view-exp" />
        <slot name="router" />
      </template>
    </AppIndexViewBaseLayout>
  </div>
</template>

<style lang="scss"></style>
