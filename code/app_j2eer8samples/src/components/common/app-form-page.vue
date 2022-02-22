<script setup lang="ts">
import { IActionParam, ILayoutOpts, IParam } from "@core";

interface FormPageProps {
  layoutOpts: ILayoutOpts;
  tab?: string
}

const props = withDefaults(defineProps<FormPageProps>(), {
});

</script>

<template>
  <a-tab-pane class="app-form-page" :key="$attrs.key" :tab="tab">
    <AppRow :layoutOpts="layoutOpts">
      <slot></slot>
    </AppRow>
  </a-tab-pane>
</template>

<style lang="scss">
</style>