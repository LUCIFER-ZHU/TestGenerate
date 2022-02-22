<script setup lang="ts">
import { IActionParam, IParam } from "@core";

interface FormTabPageProps{
  visible: boolean;
  caption: string  
}

const props = withDefaults(defineProps<FormTabPageProps>(), {
  visible: true,
});

</script>

<template>
  <a-tab-pane v-show="visible" :tab="caption">
    <slot></slot>  
  </a-tab-pane>
</template>

<style lang="scss">
</style>