<script setup lang="ts">
import { IActionParam, IParam } from "@core";

interface FormTabPanelProps{

}

const props = withDefaults(defineProps<FormTabPanelProps>(), {
});

</script>

<template>
  <a-tabs class="app-form-page">
    <slot></slot>  
  </a-tabs>
</template>

<style lang="scss">
</style>