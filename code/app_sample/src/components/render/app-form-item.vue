<script setup lang="ts">
import { IActionParam } from '@core';

interface FormGroupProps {
  name: string;
  label: string;
  required: boolean;
  labelWidth: number;
  rules?: any;
  error?: string;
  titleStyle?: string;
}
interface FormGroupEmit {
  (name: 'componentEvent', value: IActionParam): void;
}
const props = withDefaults(defineProps<FormGroupProps>(), {});
const emit = defineEmits<FormGroupEmit>();

onBeforeMount(() => {
  initRules();
});

let itemRules: any = [];
const initRules = () => {
  if (props.rules) {
    itemRules.push(...props.rules);
  }
  if (props.required) {
    itemRules.push({
      trigger: ['change', 'blur'],
      required: props.required,
      message: props.label + '必须填写',
    });
  }
};
//
</script>

<template>
  <a-form-item
    :name="name"
    :rules="itemRules"
    :help="error"
    :required="required"
    :validateStatus="error ? 'error' : 'validating'"
  >
    <template #label>
      <label :style="{ width: labelWidth + 'px' }" :class="titleStyle">{{ label }}</label>
    </template>
    <slot></slot>
  </a-form-item>
</template>

<style lang="scss">
</style>