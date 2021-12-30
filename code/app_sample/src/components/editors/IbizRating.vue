<script setup lang="ts">
import { IActionParam, IParam } from "@ibiz-core";
interface RatingProps {
  /**
   * 传入值
   * @type {any}
   * @memberof AppRating
   */
  value: number;

  /**
   * 数据名称
   * @type {*}
   * @memberof AppRating
   */
  name: string;

  /**
   * 是否禁用
   * @type {boolean}
   * @memberof AppRating
   */
  disabled?: boolean;

  /**
   * 只读模式
   *
   * @type {boolean}
   */
  readonly?: boolean;

  /**
   * 下发数据
   * @type {number}
   * @memberof AppRating
   */
  data?: IParam;

  /**
   * 传递最大值
   * @type {*}
   * @memberof AppRating
   */
  max: number;

  /**
   * 是否半星
   * @type {boolean}
   * @memberof AppRating
   */
  allowHalf: boolean;
}

interface EditorEmit {
  (name: "editorEvent", value: IActionParam): void;
}

const props = withDefaults(defineProps<RatingProps>(), {
  max: 5,
  allowHalf: false,
  disabled: false,
  readonly: false,
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
  <div :class="['app-editor-container', `app-rating-${name}`]">
    <a-rate
      :value="value"
      :allowHalf="allowHalf"
      :count="max"
      :disabled="disabled || readonly"
      @change="onChange"
    />
  </div>
</template>

<style scoped>
.app-editor-container {
  width: fit-content;
}
</style>
