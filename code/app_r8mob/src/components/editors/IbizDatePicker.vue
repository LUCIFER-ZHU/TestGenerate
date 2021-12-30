<script setup lang="ts">
import { IActionParam } from '@ibiz-core';
// import dayjs from 'ant-design-vue/lib/time-picker/dayjs';
import { computed, Ref } from 'vue';
import dayjs, { Dayjs } from 'dayjs';
interface DatePickerProps {
  /**
   * checked选中状态
   *
   * @type {string}
   * @memberof DatePickerProps
   */
  value: string;

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
  dateFormat: string;

  /**
   * 时间类型
   *
   * @type {string}
   * @memberof DatePickerProps
   */
  dateType: 'time' | 'date' | 'dateTime';

  /**
   * 提示信息
   *
   * @type {string}
   * @memberof DatePickerProps
   */
  placeholder: string;

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
  picker: 'date',
  dateType: 'date',
  dateFormat: 'yyyy-MM-dd HH:mm:ss',
  placeholder: '请选择日期',
});
const emit = defineEmits<EditorEmit>();
const curValue: Ref<any> = props.value ? ref<Dayjs>(dayjs(props.value, props.dateFormat)) : ref('');
const onChange = (date: string, dateString: string) => {
  emit('editorEvent', {
    tag: props.name,
    action: 'valueChange',
    data: dateString,
  });
};
</script>

<template>
  <template v-if="dateType === 'time'">
    <a-time-picker
      :class="['app-date-picker', `app-date-picker--${name}`]"
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
      :class="['app-date-picker', `app-date-picker--${name}`]"
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
      :class="['app-date-picker', `app-date-picker--${name}`]"
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
