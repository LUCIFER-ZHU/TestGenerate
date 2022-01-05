<script setup lang="ts">

</script>

<template>
  <div class="ibiz-view-layout ibiz-view-layout--default">
    <div class="ibiz-view-layout__header">
        <slot name="header-top" />
      <div class="ibiz-view-layout__header-content">
        <slot name="header-left" />
        <slot name="header-content" />
        <slot name="header-right" />
      </div>
      <slot name="header-bottom" />
    </div>
    <div class="ibiz-view-layout__body">
      <slot name="body-top" />
      <slot />
      <slot name="body-bottom" />
    </div>
    <div class="ibiz-view-layout__footer">
      <slot name="footer-left" />
      <slot name="footer-content" />
      <slot name="footer-right" />
    </div>
  </div>
</template>

<style lang="scss">

</style>