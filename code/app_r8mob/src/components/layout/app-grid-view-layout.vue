<script setup lang="ts">

</script>

<template>
  <AppViewBaseLayout class="app-grid-view-layout">
    <template v-slot:header-top>
      <slot name="topMessage" />
    </template>
    <template v-slot:header-left>
      <slot name="caption" />
    </template>
    <template v-slot:header-content>
    </template>
    <template v-slot:header-right>
      <div class="grid-view__header-right">
        <slot name="quickGroupSearch" />
        <slot name="quickSearch" />
        <slot name="toolbar" />
      </div>
    </template>
    <template v-slot:header-bottom>
      <div>
      <slot name="quickSearchForm" />
      <slot name="searchForm" />
      <slot name="searchBar" />
      </div>
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
.app-grid-view-layout {
  .grid-view__header-right {
    display: flex;
    flex-wrap: nowrap;
  }
}

</style>