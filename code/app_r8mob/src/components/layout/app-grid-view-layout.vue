<script setup lang="ts">

</script>

<template>
  <AppViewBaseLayout>
    <template v-slot:header-left>
      <slot name="caption" />
    </template>
    <template v-slot:header-right>
      <slot name="quickSearch" />
      <slot name="toolbar" />
    </template>
    <template v-slot:header-bottom>
      <slot name="topMessage" />
      <slot name="searchForm" />
    </template>
    <template v-slot:body-top>
      <slot name="bodyMessage" />
    </template>
    <slot />
    <template v-slot:footer-content>
      <slot name="bottomMessage" />
    </template>
  </AppViewBaseLayout>
</template>

<style lang="scss">


</style>