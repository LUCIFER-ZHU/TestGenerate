<script setup lang="ts">

</script>

<template>
  <a-layout class="app-index-view">
    <a-layout-header>
      <slot name="header-left" />
      <slot name="header-content" />
      <slot name="header-right" />
    </a-layout-header>
    <a-layout>
      <slot name="side-left" />
      <a-layout-content>
        <slot name="content"></slot>
      </a-layout-content>
      <slot name="side-right" />
    </a-layout>
    <a-layout-footer>
      <slot name="footer-left" />
      <slot name="footer-content" />
      <slot name="footer-right" />
    </a-layout-footer>
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
  .ant-layout-footer {
    padding: 0;
  }
}
</style>