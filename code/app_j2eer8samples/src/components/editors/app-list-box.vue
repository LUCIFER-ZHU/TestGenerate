<script setup lang="ts">
import { EditorBase, IActionParam, IParam, IContext, typeOf } from '@core';
import { computed, onBeforeMount, ref, Ref } from 'vue';
interface ListBoxProps {
  /**
   * 值
   *
   * @type {*}
   * @memberof ListBoxProps
   */
  value: any;

  /**
   * 属性名称
   *
   * @type {*}
   * @memberof ListBoxProps
   */
  name: string;

  /**
   * 传入表单数据
   *
   * @type {*}
   * @memberof ListBoxProps
   */
  data: IParam;

  /**
   * 代码表值分隔符
   *
   * @type {string}
   * @memberof ListBoxProps
   */
  valueSeparator?: string;

  /**
   * 模式（数字或者字符串）
   *
   * @type {'string' | 'number'}
   * @memberof CheckboxListProps
   */
  mode?: 'string' | 'number';

  /**
   * 属性类型
   *
   * @type {'string' | 'number'}
   * @memberof ListBoxProps
   */
  valueType?: 'string' | 'number';

  /**
   * 代码表标识
   *
   * @type {string}
   * @memberof ListBoxProps
   */
  codeListTag?: string;

  /**
   * 代码表类型
   *
   * @type {string}
   * @memberof ListBoxProps
   */
  codeListType?: string;

  /**
   * 表单服务(todo 编辑器应该脱钩)
   *
   * @type {*}
   * @memberof ListBoxProps
   */
  service?: any;

  /**
   * 编辑器类型
   *
   * @type {*}
   * @memberof ListBoxProps
   */
  editorType?: 'LISTBOX' | 'LISTBOXPICKUP';

  /**
   * ac参数
   *
   * @type {*}
   * @memberof ListBoxProps
   */
  acParams?: any;

  /**
   * 视图上下文
   *
   * @type {*}
   * @memberof ListBoxProps
   */
  context: IContext;

  /**
   * 视图参数
   *
   * @type {*}
   * @memberof ListBoxProps
   */
  viewParams: IParam;

  /**
   * 局部上下文导航参数
   *
   * @type {any}
   * @memberof ListBoxProps
   */
  localContext?: IParam;

  /**
   * 局部导航参数
   *
   * @type {any}
   * @memberof ListBoxProps
   */
  localParam?: IParam;

  /**
   * 是否多选
   *
   * @type {any}
   * @memberof ListBoxProps
   */
  multiple?: Boolean;

  /**
   * 应用实体主信息属性名称
   *
   * @type {string}
   * @memberof ListBoxProps
   */
  deMajorField?: string;

  /**
   * 应用实体主键属性名称
   *
   * @type {string}
   * @memberof ListBoxProps
   */
  deKeyField?: string;

  /**
   * 是否禁用
   *
   * @type {boolean}
   * @memberof ListBoxProps
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

const props = withDefaults(defineProps<ListBoxProps>(), {
  disabled: false,
  readonly: false,
  multiple: false,
  valueType: 'string',
  valueSeparator: ',',
  mode: 'string',
  editorType: 'LISTBOX',
  acParams: {},
  deMajorField: 'srfmajortext',
  deKeyField: 'srfkey',
});
const emit = defineEmits<EditorEmit>();
const { handleEditorNavParams, handleLevelCodeList, loadCodeListData } = new EditorBase();
const { navContext, navViewParam } = handleEditorNavParams(props);
let items: Ref<IParam[]> = ref([]);
const selectArray: Ref<boolean> = computed(() => {
  if (props.multiple) {
    if (Object.is('LISTBOX', props.editorType)) {
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
      return props.value.split(props.valueSeparator);
    }
  } else {
    return [props.value];
  }
});

const curMajorField: Ref<string> = computed(() => {
  return Object.is(props.editorType, 'LISTBOX') ? 'text' : props.deMajorField;
});

const curKeyField: Ref<string> = computed(() => {
  return Object.is(props.editorType, 'LISTBOX') ? 'value' : props.deKeyField;
});

const onChange = ($event: any[]) => {
  let value: null | string | number = null;
  if (Object.is(props.mode, 'string')) {
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
const loadData = () => {
  if (!props.service) {
    console.warn('部件服务错误');
  } else if (!props.acParams?.serviceName) {
    console.warn('未拥有serviceName参数');
  } else if (!props.acParams?.interfaceName) {
    console.warn('未拥有interfaceName参数');
  } else {
    props.service
      .getItems(props.acParams.serviceName, props.acParams.interfaceName, navContext, navViewParam)
      .then((response: any) => {
        if (response) {
          items.value = [...response];
        }
      })
      .catch((response: any) => {
        console.error('加载数据失败');
      });
  }
};
onBeforeMount(() => {
  if (Object.is('LISTBOX', props.editorType)) {
    loadCodeListData(props.codeListTag, props.codeListType, navContext, navViewParam).then((codeListData: IParam[]) => {
      items.value = formatCodeList(handleLevelCodeList(codeListData));
    });
  } else if (Object.is('LISTBOXPICKUP', props.editorType)) {
    loadData();
  }
});
</script>

<template>
  <div :class="['app-editor-container', 'app-list-box', `app-list-box-${name}`]">
    <template v-if="multiple">
      <a-checkbox-group @change="onChange" :value="selectArray" :options="items" :disabled="disabled || readonly" />
    </template>
    <template v-else>
      <a-radio-group @change="onChange" :value="value" :options="items" :disabled="disabled || readonly" />
    </template>
  </div>
</template>
