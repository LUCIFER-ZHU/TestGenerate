<script setup lang="ts">
import { IActionParam } from "@ibiz-core";

interface FormGroupProps{
  name: string;
  title: string;
}
interface FormGroupEmit{
  (name: 'componentEvent', value: IActionParam): void
}
const props = withDefaults(defineProps<FormGroupProps>(), {});
const emit = defineEmits<FormGroupEmit>();

</script>

<template>
  <a-card 
    :class="['app-form-group', `app-form-group-${name}`]" 
    :title="title" 
    :bordered="false">
    <template #extra>
      <a href="#">行为</a>
    </template>
    <slot></slot>
  </a-card>
</template>

<style lang="scss">
.app-form-group {
  height: 100%;
  width: 100%;
  .ant-card-head {
    text-align: left;
  }
}
</style>