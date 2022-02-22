<script setup lang="ts">
import { IActionParam } from '@core';
import { computed, Ref } from 'vue';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
interface DatePickerProps {
  /**
   * checked选中状态
   *
   * @type {string}
   * @memberof DatePickerProps
   */
  value?: string;

  /**
   * checked选中状态
   *
   * @type {string}
   * @memberof DatePickerProps
   */
  name: string;

  /**
   * 设置选择器类型
   *
   * @type {string}
   * @memberof DatePickerProps
   */
  dateFormat?: string;

  /**
   * 时间类型
   *
   * @type {string}
   * @memberof DatePickerProps
   */
  dateType?: 'time' | 'date' | 'dateTime';

  /**
   * 提示信息
   *
   * @type {string}
   * @memberof DatePickerProps
   */
  placeholder?: string;

  /**
   * 禁用
   *
   * @type {boolean}
   * @memberof DatePickerProps
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
  (name: 'editorEvent', value: IActionParam): void;
}

const props = withDefaults(defineProps<DatePickerProps>(), {
  disabled: false,
  readonly: false,
  dateType: 'date',
  dateFormat: 'yyyy-MM-dd HH:mm:ss',
  placeholder: '请选择日期',
});
const emit = defineEmits<EditorEmit>();
let curValue : Ref<any> = computed(() => props.value ? (dayjs(props.value, props.dateFormat)) : '');
const onChange = (date: string, dateString: string) => {
  emit('editorEvent', {
    tag: props.name,
    action: 'valueChange',
    data: dateString,
  });
};

onMounted(() => {
  //  设置国际化
  dayjs.locale('zh-cn');
})
</script>

<template>
  <template v-if="dateType === 'time'">
    <a-time-picker
      :class="['app-editor-container', 'app-date-picker', `app-date-picker-${name}`]"
      v-model:value="curValue"
      :format="dateFormat"
      :placeholder="placeholder"
      :inputReadOnly="readonly"
      :disabled="disabled"
      @change="onChange"
    />
  </template>
  <template v-else-if="dateType === 'date'">
    <a-date-picker
      :class="['app-editor-container', 'app-date-picker', `app-date-picker-${name}`]"
      v-model:value="curValue"
      :format="dateFormat"
      picker="date"
      :placeholder="placeholder"
      :inputReadOnly="readonly"
      :disabled="disabled"
      @change="onChange"
    />
  </template>
  <template v-else>
    <a-date-picker
      showTime
      :class="['app-editor-container', 'app-date-picker', `app-date-picker-${name}`]"
      v-model:value="curValue"
      :format="dateFormat"
      :placeholder="placeholder"
      :inputReadOnly="readonly"
      :disabled="disabled"
      @change="onChange"
    />
  </template>
</template>

<style lang="scss">
.app-date-picker {
  width: 100%;
}
</style>
