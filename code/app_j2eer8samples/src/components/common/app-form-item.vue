<script setup lang="ts">
import { Ref, ref } from 'vue';
import { IActionParam, ILayoutOpts } from '@core';

interface FormGroupProps {
  name: string;
  layoutOpts?: ILayoutOpts;
  label?: string;
  showLabel?: boolean,
  required?: boolean;
  visible?: boolean;
  labelWidth?: number;
  labelPos?: string | 'LEFT' | 'TOP' | 'RIGHT' | 'BOTTOM' | 'NONE';
  rules?: any;
  error?: string;
  labelClass?: string;
}
interface FormGroupEmit {
  (name: 'componentEvent', value: IActionParam): void;
}
const props = withDefaults(defineProps<FormGroupProps>(), {
  required: false,
  visible: true,
  showLabel: true,
  labelPos: 'LEFT'
});
const emit = defineEmits<FormGroupEmit>();

onBeforeMount(() => {
  watch(
    () => props.required,
    (newVal: boolean, oldVal: boolean) => {
      initRules();
    }
  )
  initRules();
});

const itemRules: Ref<any[]> = ref([]);
const initRules = () => {
  itemRules.value.splice(0, itemRules.value.length);
  if (props.rules) {
    itemRules.value.push(...props.rules);
  }
  if (props.required) {
    itemRules.value.push({
      trigger: ['change', 'blur'],
      required: props.required,
      message: props.label + '必须填写',
    });
  }
};
//
</script>

<template>
  <AppCol :visible="visible" noRoot :layoutOpts="layoutOpts" class="app-form-item">
    <template v-slot:default="{slotStyle, slotClass}">
      <a-form-item
        :class="slotClass"
        :colon="false"
        :style="slotStyle"
        :name="name"
        :rules="itemRules"
        :help="error"
        :required="required"
        :labelCol="{ style: { width: `${labelWidth}px` } }"
        :validateStatus="error ? 'error' : 'validating'"
      >
        <template #label v-if="showLabel && labelPos !== 'NONE'">
          <label :class="labelClass">
            <div class="label-title">{{ label }}</div>
          </label>
        </template>
        <slot></slot>
      </a-form-item>
    </template>
  </AppCol>
</template>

<style lang="scss">
// 上方标签
.app-form-item.label-top {
  flex-direction: column;
}
// 下方标签
.app-form-item.label-bottom {
  flex-direction: column-reverse;
}
.app-form-item.label-right {
  flex-direction: row-reverse;
}
// 标题在下方时调整错误提示位置
.ant-form-item-has-error.label-bottom {
  .ant-form-item-control {
    position: relative;
  }
  .ant-form-item-explain-error {
    position: absolute;
    right: 0;
    top: 100%;
  }
}
</style>