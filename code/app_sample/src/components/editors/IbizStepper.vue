<script setup lang="ts">
import { IActionParam } from "@ibiz-core";
interface StepperProps {
  /**
   * 传入值
   * @type {any}
   * @memberof AppSlider
   */
  value: number;

  /**
   * 属性项名称
   *
   * @type {string}
   * @memberof AppPicker
   */
  name: string;

  /**
   * 数值精度
   * @type {number}
   * @memberof AppSlider
   */
  precision: number;

  /**
   * 步长
   * @type {number}
   * @memberof AppSlider
   */
  step: number;

  /**
   * 最小值
   * @type {number}
   * @memberof AppSlider
   */
  min?: number;

  /**
   * 最大值
   * @type {number}
   * @memberof AppSlider
   */
  max?: number;

  /**
   * 只读模式
   *
   * @type {boolean}
   */
  readonly?: boolean;

  /**
   * 是否禁用
   * @type {boolean}
   * @memberof AppSlider
   */
  disabled?: boolean;
}

interface EditorEmit {
  (name: "editorEvent", value: IActionParam): void;
}

const props = withDefaults(defineProps<StepperProps>(), {
  step: 1,
  disabled: false,
  readonly: false,
  precision: 0
});
const emit = defineEmits<EditorEmit>();

const onChange = (value: number) => {
  emit("editorEvent", {
    tag: props.name,
    action: "valueChange",
    data: value,
  });
};
</script>

<template>
  <div :class="['app-editor-container', `app-stepper-${name}`]">
    <a-input-number
      :value="value"
      :min="min"
      :max="max"
      :step="step"
      :precision="precision"
      :disabled="disabled || readonly"
      @change="onChange"
    />
  </div>
</template>

<style scoped>
.app-editor-container {
  width: 100%;
  height: 100%;
}
.app-editor-container .ant-input-number {
  width: 100%;
}
</style>
