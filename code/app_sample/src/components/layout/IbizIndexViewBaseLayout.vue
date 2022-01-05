<script setup lang="ts">

</script>

<template>
  <a-layout class="ibiz-index-view-layout">
    <a-layout-header class="ibiz-index-view-layout__header">
      <slot name="header-left" />
      <slot name="header-content" />
      <slot name="header-right" />
    </a-layout-header>
    <a-layout class="ibiz-index-view-layout__body">
      <slot name="side-left" />
      <a-layout-content>
        <slot name="content"></slot>
      </a-layout-content>
      <slot name="side-right" />
    </a-layout>
    <a-layout-footer class="ibiz-index-view-layout__footer">
      <slot name="footer-left" />
      <slot name="footer-content" />
      <slot name="footer-right" />
    </a-layout-footer>
  </a-layout>
</template>

<style lang="scss">
</style>