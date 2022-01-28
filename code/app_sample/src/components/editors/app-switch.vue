<script setup lang="ts">
import { IActionParam } from "@core";
import { computed, Ref } from "vue";
interface SwitchProps {
  /**
   * checked选中状态
   *
   * @type {number}
   * @memberof Appswitch
   */
  value?: number;

  /**
   * checked选中状态
   *
   * @type {string}
   * @memberof Appswitch
   */
  name: string;

  /**
   * 禁用
   *
   * @type {boolean}
   * @memberof Appswitch
   */
  disabled?: boolean;

  /**
   * 只读模式
   *
   * @type {boolean}
   */
  readonly?: boolean;

  /**
   * 大小
   *
   * @type {boolean}
   */
  size?: string;
}

interface EditorEmit {
  (name: "editorEvent", value: IActionParam): void;
}

const props = withDefaults(defineProps<SwitchProps>(), {
  disabled: false,
  readonly: false,
  size: 'default',
});
const emit = defineEmits<EditorEmit>();
const curValue: Ref<boolean> = computed(() => {
  if (props.value == 0) {
    return false;
  } else {
    return true;
  }
});
const onChange = (value: number) => {
  emit("editorEvent", {
    tag: props.name,
    action: "valueChange",
    data: value ? 1 : 0,
  });
};
</script>

<template>
  <div :class="['app-editor-container', 'app-switch', `app-switch-${name}`]">
    <a-switch
      :checked="curValue"
      :size="size"
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
