<script setup lang="ts">
import { IActionParam } from "@core";

interface FormGroupProps{
  name: string;
  error: string;
  label: string;
}
interface FormGroupEmit{
  (name: 'componentEvent', value: IActionParam): void
}
const props = withDefaults(defineProps<FormGroupProps>(), {});
const emit = defineEmits<FormGroupEmit>();

</script>

<template>
  <a-form-item :name="name" :label="label" :help="error" :validateStatus="error ? 'error': 'validating'">
    <slot></slot>
  </a-form-item>
</template>

<style lang="scss">

</style>