<script setup lang="ts">

</script>

<template>
  <AppViewBaseLayout>
    <template v-slot:header-top>
      <slot name="topMessage" />
    </template>
    <template v-slot:header-left>
      <slot name="caption" />
    </template>
    <template v-slot:header-content>
      <slot name="quickGroupSearch" />
      <slot name="quickSearch" />
    </template>
    <template v-slot:header-right>
      <slot name="toolbar" />
    </template>
    <template v-slot:header-bottom>
      <slot name="quickSearchForm" />
      <slot name="searchForm" />
      <slot name="searchBar" />
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