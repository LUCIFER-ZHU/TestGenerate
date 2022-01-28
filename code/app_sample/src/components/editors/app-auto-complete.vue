<script setup lang="ts">
import { onBeforeMount, Ref, ref } from "vue";
import { SearchOutlined } from '@ant-design/icons-vue';
import { deepCopy, IParam, IActionParam, EditorBase, IContext } from "@core";
interface AutoCompleteProps {
  /**
   * @description 表单数据或表格行数据
   */
  data: IParam;
  /**
   * @description 编辑器值
   */
  value?: IParam;

  /**
   * @description 编辑器名称
   */
  name: string;

  /**
   * @description 占位提示信息
   */
  placeholder?: string;

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
   * @description 主信息属性
   */
  deMajorField?: string;

  /**
   * @description 主键属性
   */
  deKeyField?: string;

  /**
   * @description ac参数
   */
  acParams?: IParam;

  /**
   * @description 排序
   */
  sort?: string;

  /**
   * @description 外键值附加数据
   */
  pickUpData?: string;

  /**
   * @description 是否默认展开
   */
  defaultOpen?: boolean;

  /**
   * @description 是否显示按钮
   */
  showButton?: boolean;

  /**
   * @description 禁用
   */
  disabled?: boolean;

  /**
   * @description 只读
   */
  readonly?: boolean;
}
interface EditorEmit {
  (name: "editorEvent", value: IActionParam): void;
}
const { handleEditorNavParams } = new EditorBase();
const props = withDefaults(defineProps<AutoCompleteProps>(), {
  deMajorField: "srfmajortext",
  deKeyField: "srfkey",
  disabled: false,
  readonly: false,
  showButton: true,
  defaultOpen: true,
});
const emit = defineEmits<EditorEmit>();
const { navContext, navViewParam } = handleEditorNavParams(props);
let items: Ref<any[]> = ref([]);

/**
 * @description 搜索
 * @param value 搜索值
 */
const onSearch = (value: string) => {
  let _navContext = deepCopy(navContext);
  let _navViewParam = deepCopy(navViewParam);
  Object.assign(_navViewParam, { query: value, size: 1000 });
  if (props.sort) {
    Object.assign(_navViewParam, { sort: props.sort });
  }
  // TODO数据服务请求数据
  items.value = [
    {
      srfkey: "4646",
      srfmajortext: "Jack",
    },
    {
      srfkey: "49897",
      srfmajortext: "Lucy",
    },
    {
      srfkey: "164646",
      srfmajortext: "Disabled",
    },
    {
      srfkey: "4646",
      srfmajortext: "Yiminghe",
    },
  ];
};

const filterOption= (inputValue: string,option: IParam) => {
  return option[props.deMajorField].toUpperCase().indexOf(inputValue.toUpperCase()) >= 0;
}

const onSelect = (value: any) => {
  const selectItem = items.value.find((item: IParam) =>
    Object.is(item[props.deKeyField!], value)
  );
  emit("editorEvent", {
    tag: props.name,
    action: "valueChange",
    data: selectItem[props.deMajorField!],
  });
}

</script>

<template>
  <a-auto-complete
    :class="['app-editor-container', 'app-auto-complete', `app-auto-complete-${name}`]"
    :allowClear="true"
    v-model:value="value"
    :placeholder="placeholder"
    :options="items"
    :filterOption="filterOption"
    :disabled="disabled || readonly"
    @search="onSearch"
    :defaultOpen="true"
  >
    <template #option="option">
      <div @click="onSelect(option[deKeyField!])">\{{option[deMajorField!]}}</div>
    </template>
    <a-input :placeholder="placeholder">
      <template #suffix><search-outlined v-if="showButton" class="certain-category-icon" /></template>
    </a-input>
  </a-auto-complete>
</template>

<style scoped></style>
