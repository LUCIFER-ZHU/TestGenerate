<script setup lang="ts">
import { IActionParam, ILayoutOpts, IParam } from "@core";

interface FormTabPageProps{
  name: string;
  layoutOpts: ILayoutOpts;
  visible: boolean;
  caption: string  
}

const props = withDefaults(defineProps<FormTabPageProps>(), {
  visible: true,
});

</script>

<template>
  <a-tab-pane class="app-form-tabpage" v-show="visible" :tab="caption">
    <AppRow :layoutOpts="layoutOpts">
      <slot></slot>  
    </AppRow>
  </a-tab-pane>
</template>

<style lang="scss">
</style>