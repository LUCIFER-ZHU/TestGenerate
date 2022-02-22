<script setup lang="ts">
import { IActionParam, IParam, EditorBase, IContext } from '@core';
import { onBeforeMount, ref, Ref } from 'vue';
interface RadioGroupProps {
  /**
   * 值
   *
   * @type {*}
   * @memberof AppCheckBox
   */
  value?: any;

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
   * 代码表标识
   *
   * @type {string}
   * @memberof AppCheckBox
   */
  codeListTag?: string;

  /**
   * 代码表类型
   *
   * @type {string}
   * @memberof AppCheckBox
   */
  codeListType?: string;

  /**
   * 视图上下文
   *
   * @type {*}
   * @memberof AppCheckBox
   */
  context: IContext;

  /**
   * 视图参数
   *
   * @type {*}
   * @memberof AppCheckBox
   */
  viewParams: IParam;

  /**
   * 局部上下文导航参数
   *
   * @type {any}
   * @memberof AppCheckBox
   */
  localContext?: IParam;

  /**
   * 局部导航参数
   *
   * @type {any}
   * @memberof AppCheckBox
   */
  localParam?: IParam;

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
  (name: 'editorEvent', value: IActionParam): void;
}

const props = withDefaults(defineProps<RadioGroupProps>(), {
  disabled: false,
  readonly: false,
});
const emit = defineEmits<EditorEmit>();
const { handleEditorNavParams, loadCodeListData } = new EditorBase();
const { navContext, navViewParam } = handleEditorNavParams(props);
let items: Ref<IParam[]> = ref([]);

const onChange = ($event: any) => {
  const value = $event.target.value;
  emit('editorEvent', {
    tag: props.name,
    action: 'valueChange',
    data: value,
  });
};
onBeforeMount(() => {
  loadCodeListData(props.codeListTag, navContext, navViewParam).then((codeListData: IParam[]) => {
    items.value = codeListData;
  });
});
</script>

<template>
  <div :class="['app-editor-container', 'app-radio-group', `app-radio-group-${name}`]">
    <a-radio-group @change="onChange" :value="value" :options="items" :disabled="disabled || readonly"></a-radio-group>
  </div>
</template>

<style scoped>
.app-editor-container {
  width: fit-content;
}
</style>
