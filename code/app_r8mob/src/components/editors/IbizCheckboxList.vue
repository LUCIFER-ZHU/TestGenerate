<script setup lang="ts">
import { EditorBase, IActionParam, IParam, IContext, typeOf } from '@core';
import { computed, onBeforeMount, ref, Ref } from 'vue';
interface CheckboxListProps {
  /**
   * 值
   *
   * @type {*}
   * @memberof CheckboxListProps
   */
  value: any;

  /**
   * 属性名称
   *
   * @type {*}
   * @memberof CheckboxListProps
   */
  name: string;

  /**
   * 传入表单数据
   *
   * @type {*}
   * @memberof CheckboxListProps
   */
  data: IParam;

  /**
   * 代码表值分隔符
   *
   * @type {string}
   * @memberof CheckboxListProps
   */
  valueSeparator: string;

  /**
   * 模式（数字或者字符串）
   *
   * @type {'string' | 'number'}
   * @memberof CheckboxListProps
   */
  mode: 'string' | 'number';

  /**
   * 属性类型
   *
   * @type {'string' | 'number'}
   * @memberof CheckboxListProps
   */
  valueType: 'string' | 'number';

  /**
   * 代码表标识
   *
   * @type {string}
   * @memberof CheckboxListProps
   */
  codeListTag: string;

  /**
   * 代码表类型
   *
   * @type {string}
   * @memberof CheckboxListProps
   */
  codeListType: string;

  /**
   * 视图上下文
   *
   * @type {*}
   * @memberof CheckboxListProps
   */
  context: IContext;

  /**
   * 视图参数
   *
   * @type {*}
   * @memberof CheckboxListProps
   */
  viewParams: IParam;

  /**
   * 局部上下文导航参数
   *
   * @type {any}
   * @memberof CheckboxListProps
   */
  localContext: IParam;

  /**
   * 局部导航参数
   *
   * @type {any}
   * @memberof CheckboxListProps
   */
  localParam: IParam;

  /**
   * 是否禁用
   *
   * @type {boolean}
   * @memberof CheckboxListProps
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

const props = withDefaults(defineProps<CheckboxListProps>(), {
  disabled: false,
  readonly: false,
  valueType: 'string',
  valueSeparator: ',',
  mode: 'string',
});
const emit = defineEmits<EditorEmit>();
const { handleEditorNavParams, handleLevelCodeList, loadCodeListData } = new EditorBase();
const { navContext, navViewParam } = handleEditorNavParams(props);
let items: Ref<IParam[]> = ref([]);
const selectArray: Ref<boolean> = computed(() => {
  if (props.value) {
    if (Object.is(props.mode, 'string')) {
      return props.value.split(props.valueSeparator);
    } else {
      let selectsArray: Array<any> = [];
      let num: number = parseInt(props.value, 10);
      items.value.forEach((item: any) => {
        if ((num & item.value) == item.value) {
          selectsArray.push(item.value);
        }
      });
      return selectsArray;
    }
  } else {
    return [];
  }
});

const onChange = ($event: any[]) => {
  let value: null | string | number = null;
  if (Object.is(props.mode,'string')) {
    let _datas: string[] = [];
    items.value.forEach((item: any) => {
      const index = $event.findIndex((_key: any) => Object.is(item.value, _key));
      if (index === -1) {
        return;
      }
      _datas.push(item.value);
    });
    value = _datas.join(props.valueSeparator);
  } else {
    let temp: number = 0;
    $event.forEach((item: any) => {
        temp = temp | parseInt(item, 10);
    });
    value = temp;
  }
  emit('editorEvent', {
    tag: props.name,
    action: 'valueChange',
    data: value,
  });
};
const formatCodeList = (items: Array<any>) => {
  let matching: boolean = false;
  let result: Array<any> = [];
  try {
    items.forEach((item: any) => {
      const type = typeOf(item.value);
      if (type != props.valueType) {
        matching = true;
        if (type === 'number') {
          item.value = item.value.toString();
        } else {
          if (type == 'null') {
            props.valueType == 'number' ? (item.value = 0) : (item.value = '');
          } else if (item.value.indexOf('.') == -1) {
            item.value = parseInt(item.value);
          } else {
            item.value = parseFloat(item.value);
          }
        }
      }
      result.push(item);
    });
    if (matching) {
      console.warn('代码表值类型和属性类型不匹配，自动强制转换');
    }
    return result;
  } catch (error) {
    console.warn('代码表值类型和属性类型不匹配，自动强制转换异常，请修正代码表值类型和属性类型匹配');
    return [];
  }
};
onBeforeMount(() => {
  loadCodeListData(props.codeListTag, props.codeListType, navContext, navViewParam).then((codeListData: IParam[]) => {
    items.value = formatCodeList(handleLevelCodeList(codeListData));
  });
});
</script>

<template>
  <div :class="['app-editor-container', `app-checkbox-list-${name}`]">
    <a-checkbox-group
      @change="onChange"
      :value="selectArray"
      :options="items"
      :disabled="disabled || readonly"
    ></a-checkbox-group>
  </div>
</template>

<style scoped>
.app-editor-container {
  width: fit-content;
}
</style>
