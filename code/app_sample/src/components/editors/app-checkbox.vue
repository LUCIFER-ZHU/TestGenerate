<script setup lang="ts">
import { IActionParam } from "@core";
import { computed, Ref } from "vue";
interface CheckboxProps {
  /**
   * @description 编辑器名称
   */
  name: string;

  /**
   * 传入值
   * @type {any}
   * @memberof checkbox
   */
  value?: number;

  /**
   * 是否禁用
   * @type {boolean}
   * @memberof checkbox
   */
  disabled?: boolean;

  /**
   * 只读模式
   *
   * @type {boolean}
   */
  readonly?: boolean;
}

interface EditorEmit {
  (name: "editorEvent", value: IActionParam): void;
}

const props = withDefaults(defineProps<CheckboxProps>(), {
  disabled: false,
  readonly: false,
});
const emit = defineEmits<EditorEmit>();
const curValue: Ref<boolean> = computed(() => {
  if (props.value == 0) {
    return false;
  } else {
    return true;
  }
});

const onChange = ($event: any) => {
  const value = $event.target.checked ? 1 : 0;
  emit("editorEvent", {
    tag: props.name,
    action: "valueChange",
    data: value,
  });
};
</script>

<template>
  <div :class="['app-editor-container', 'app-checkbox', `app-checkbox-${name}`]">
    <a-checkbox
      @change="onChange"
      :checked="curValue"
      :disabled="disabled || readonly"
    ></a-checkbox>
  </div>
</template>

<style scoped>
.app-editor-container {
  width: fit-content;
}
</style>
