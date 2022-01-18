<script setup lang="ts">

</script>

<template>
  <IbizViewBaseLayout>
    <template v-slot:header-left>
      <slot name="caption" />
    </template>
    <template v-slot:header-right>
      <slot name="toolbar" />
    </template>
    <template v-slot:header-bottom>
      <slot name="topMessage" />
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
  </IbizViewBaseLayout>
</template>

<style lang="scss">


</style>