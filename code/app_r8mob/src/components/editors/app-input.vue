<script setup lang="ts">
import { IActionParam } from "@core";
interface InputProps{
  /**
   * @description 编辑器名称
   */
  name: string;

  /**
   * @description 编辑器值
   */
  value?: string | number;

  /**
   * @description 禁用
   */
  disabled?: boolean;

  /**
   * @description 占位提示信息
   */
  placeholder?: string;

  /**
   * @description 输入框类型
   */
  type?: 'text' | 'password' | 'textarea' | 'number';

  /**
   * @description 文本输入框最大字符长度
   */
  maxLength?: number;

  /**
   * @description 数值框最大值
   */
  max?: number;

  /**
   * @description 数值框最小值
   */
  min?: number;

  /**
   * @description 数值框精度
   */
  precision?: number;

  /**
   * @description 是否显示最大长度
   */
  showMaxLength?: boolean;
}

interface EditorEmit{
    (name: 'editorEvent', value: IActionParam): void
}

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  showMaxLength: false,
})
const emit = defineEmits<EditorEmit>()

const onChange = ($event: any) => {
  let value;
  if (props.type == 'number') {
    value = $event;
  } else {
    value = $event.target.value;
  }
  emit('editorEvent', { tag: props.name, action: "valueChange", data: value});
}

</script>

<template>
  <div :class="['app-editor-container','app-input',`app-input-${name}`]">
    <a-input-number
      v-if="Object.is('number', type)"
      :value="value"
      :disabled="disabled"
      :max="max"
      :min="min"
      :precision="precision"
      @change="onChange"
      :placeholder="placeholder" />
    <a-input-password 
      v-else-if="Object.is('password', type)"
      v-model:value="value"
      :disabled="disabled"
      @blur="onChange"
      :placeholder="placeholder"/>
    <a-textarea 
      v-else-if="Object.is('textarea', type)"
      v-model:value="value"
      :disabled="disabled"
      :maxlength="maxLength"
      @blur="onChange"
      :placeholder="showMaxLength && maxLength ? `最大内容长度为${maxLength}` : placeholder"/>
    <a-input 
      allowClear
      v-else-if="Object.is('text', type)"
      v-model:value="value"
      :disabled="disabled"
      :maxlength="maxLength"
      :type="type"
      @blur="onChange"
      :placeholder="showMaxLength && maxLength ? `最大内容长度为${maxLength}` : placeholder" />
  </div>
</template>

<style scoped>
.app-editor-container,
.app-editor-container .ant-input {
  width: 100%;
  height: 100%;
}
</style>