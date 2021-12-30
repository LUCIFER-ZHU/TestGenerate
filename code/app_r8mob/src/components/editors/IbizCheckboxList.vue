<script setup lang="ts">
import {
  EditorBase,
  IActionParam, 
  IParam
} from "@ibiz-core";
import { computed, onBeforeMount, ref, Ref } from "vue";
interface CheckboxListProps {
  /**
   * 值
   *
   * @type {*}
   * @memberof AppCheckBox
   */
  value: any;

  /**
   * 属性名称
   *
   * @type {*}
   * @memberof AppCheckBox
   */
  name: string;

  /**
   * 传入表单数据
   *
   * @type {*}
   * @memberof AppCheckBox
   */
  data: IParam;

  /**
   * 模式（数字或者字符串）
   *
   * @type {*}
   * @memberof AppCheckBox
   */
  mode: "string" | "number";

  /**
   * 代码表值分隔符
   *
   * @type {string}
   * @memberof AppCheckBox
   */
  valueSeparator: string;

  /**
   * 属性类型
   *
   * @type {'string' | 'number'}
   * @memberof AppCheckBox
   */
  valueType: "string" | "number";

  /**
   * 代码表标识
   *
   * @type {string}
   * @memberof AppCheckBox
   */
  codeListTag: string;

  /**
   * 代码表类型
   *
   * @type {string}
   * @memberof AppCheckBox
   */
  codeListType: string;

  /**
   * 视图上下文
   *
   * @type {*}
   * @memberof AppCheckBox
   */
  contextProp: IParam;

  /**
   * 视图参数
   *
   * @type {*}
   * @memberof AppCheckBox
   */
  viewParamsProp: IParam;

  /**
   * 局部上下文导航参数
   *
   * @type {any}
   * @memberof AppCheckBox
   */
  localContext: IParam;

  /**
   * 局部导航参数
   *
   * @type {any}
   * @memberof AppCheckBox
   */
  localParam: IParam;

  /**
   * 是否禁用
   *
   * @type {boolean}
   * @memberof AppCheckBox
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

const props = withDefaults(defineProps<CheckboxListProps>(), {
  disabled: false,
  readonly: false,
  valueType: "string",
  valueSeparator: ",",
  mode: "string",
});
const emit = defineEmits<EditorEmit>();
const { handleEditorNavParams, handleLevelCodeList, loadCodeListData } = new EditorBase();
const { navContext, navViewParam } = handleEditorNavParams(props);
let items: Ref<IParam[]> = ref([]);
const selectArray: Ref<boolean> = computed(() => {
  if (props.value) {
    let selects = props.value.split(props.valueSeparator);
    return selects;
  } else {
    return [];
  }
});

const onChange = ($event: any[]) => {
  let value: null | string | number = null;
  let _datas: string[] = [];
  items.value.forEach((item: any) => {
      const index = $event.findIndex((_key: any) => Object.is(item.value, _key));
      if (index === -1) {
          return;
      }
      _datas.push(item.value);
  });
  value = _datas.join(props.valueSeparator);
  emit("editorEvent", {
    tag: props.name,
    action: "valueChange",
    data: value,
  });
};
onBeforeMount(() => {
  loadCodeListData(
    props.codeListTag,
    props.codeListType,
    navContext,
    navViewParam
  ).then((codeListData: IParam[]) => {
    items.value = handleLevelCodeList(codeListData);
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
