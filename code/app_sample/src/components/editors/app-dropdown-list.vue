<script setup lang="ts">
import { onBeforeMount, Ref, ref } from "vue";
import { IActionParam, IParam, typeOf, EditorBase, IContext } from "@core";

interface DropdownListProps {
  /**
   * @description 编辑器名称
   */
  name: string;

  /**
   * @description 编辑器值
   */
  value: string;

  /**
   * @description 禁用
   */
  disabled?: boolean;

  /**
   * @description 占位提示信息
   */
  placeholder?: string;

  /**
   * @description 表单数据或表格行数据
   */
  data?: IParam;

  /**
   * @description 上下文
   */
  context?: IContext;

  /**
   * @description 视图参数
   */
  viewParams?: IParam;

  /**
   * @description 局部上下文
   */
  localContext?: IParam;

  /**
   * @description 局部视图参数
   */
  localParam?: IParam;
  
  /**
   * @description 多选
   */
  multiple?: boolean;
 
  /**
   * @description 代码表标识
   */
  codeListTag?: string;
 
  /**
   * @description 代码表类型
   */
  codeListType?: string;
 
  /**
   * @description 值分隔符
   */
  valueSeparator?: string;
}

interface EditorEmit{
    (name: 'editorEvent', value: IActionParam): void
}

const props = withDefaults(defineProps<DropdownListProps>(), {
  multiple: false,
  valueSeparator: ',',
})

const emit = defineEmits<EditorEmit>()
const { handleEditorNavParams, loadCodeListData, handleLevelCodeList } = new EditorBase();
const { navContext, navViewParam } = handleEditorNavParams(props);
let curValue: Ref<any> = ref(
  props.multiple ? 
  props.value?.split(props.valueSeparator) : props.value
);
let items: Ref<IParam[]> = ref([]);
const onChange = (select: any, option: any) => {
  const value = typeOf(select) == 'array' ? select.join(props.valueSeparator) : select;
  emit('editorEvent', { tag: props.name, action: "valueChange", data: value});
}

onBeforeMount(() => {
  loadCodeListData(
    props.codeListTag, 
    props.codeListType, 
    navContext, 
    navViewParam, 
  ).then((codeListData: IParam[]) => {
    items.value = handleLevelCodeList(codeListData);
  })
})

</script>

<template>
  <a-select 
    allowClear
    :class="['app-editor-container', 'app-dropdown-list', `app-dropdown-list-${name}`]"
    v-model:value="curValue"
    :options="items"
    :mode="multiple ? 'multiple': 'combobox'"
    :disabled="disabled"
    @change="onChange"
    :placeholder="placeholder">
  </a-select>
</template>

<style scoped>

</style>