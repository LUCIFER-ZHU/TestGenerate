<script setup lang="ts">
import { onBeforeMount, Ref, ref } from 'vue';
import { SearchOutlined, ExportOutlined } from '@ant-design/icons-vue';
import { deepCopy, IParam, IActionParam, EditorBase, IContext } from '@core';
interface DataPickerViewProps {
  /**
   * @description 编辑器名称
   */
  name: string;

  /**
   * @description 值项
   */
  valueItem: string;

  /**
   * @description 编辑器值
   */
  value: any;

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
   * @description 主信息属性
   */
  deMajorField?: string;

  /**
   * @description 主键属性
   */
  deKeyField?: string;

  /**
   * @description 选择视图
   */
  pickUpView?: IParam;

  /**
   * @description 链接视图
   */
  linkView?: IParam;

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

  linkOnly?: boolean;

  isAC?: boolean;

  isDropdown?: boolean;
}
interface EditorEmit {
  (name: 'editorEvent', value: IActionParam): void;
}
const props = withDefaults(defineProps<DataPickerViewProps>(), {
  deMajorField: 'srfmajortext',
  deKeyField: 'srfkey',
  linkOnly: false,
  isAC: false,
  isDropdown: false,
});
const emit = defineEmits<EditorEmit>();
const { handleEditorNavParams, openLinkView, openPickUpView } = new EditorBase();
const { navContext, navViewParam } = handleEditorNavParams(props);
let items: Ref<any[]> = ref([]);

/**
 * @description 初始化items
 */
const initItems = () => {
  if (props.valueItem && props.data) {
    items.value.push({
      [props.deMajorField!]: props.value,
      [props.deKeyField!]: props.data[props.valueItem],
    });
  }
};

/**
 * @description 填充外键值附加数据
 * @param item 选中数据
 */
const fillPickUpData = (item: IParam) => {
  if (props.pickUpData) {
    let pickUpDataArray: string[] = props.pickUpData.split(';');
    if (pickUpDataArray && pickUpDataArray.length > 0) {
      for (let i = 0; i < pickUpDataArray.length; i++) {
        if (item) {
          emit('editorEvent', {
            tag: pickUpDataArray[i],
            action: 'valueChange',
            data: item[pickUpDataArray[i]],
          });
        } else {
          emit('editorEvent', {
            tag: pickUpDataArray[i],
            action: 'valueChange',
            data: null,
          });
        }
      }
    }
  }
};

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
      srfkey: '4646',
      srfmajortext: 'Jack',
    },
    {
      srfkey: '49897',
      srfmajortext: 'Lucy',
    },
    {
      srfkey: '164646',
      srfmajortext: 'Disabled',
    },
    {
      srfkey: '4646',
      srfmajortext: 'Yiminghe',
    },
  ];
};

const filterOption = (inputValue: string, option: IParam) => {
  return option[props.deMajorField].toUpperCase().indexOf(inputValue.toUpperCase()) >= 0;
};

const onSelect = (value: any) => {
  const selectItem = items.value.find((item: IParam) => Object.is(item[props.deKeyField!], value));
  emit('editorEvent', {
    tag: props.name,
    action: 'valueChange',
    data: selectItem[props.deMajorField!],
  });
  emit('editorEvent', { tag: props.valueItem, action: 'valueChange', data: selectItem[props.deKeyField!] });
  fillPickUpData(selectItem);
};

const onChange = (date: string, dateString: string) => {
  // todo
};

</script>

<template>
    <a-select
      :class="['app-editor-container', 'app-data-picker-view', `app-data-picker-view-${name}`]"
      allowClear
      showSearch
      v-model:value="value"
      :disabled="disabled"
      :filterOption="false"
      :options="items"
      @change="onChange"
      @search="onSearch"
      :placeholder="placeholder"
    >
      <template #suffixIcon>
        <SearchOutlined v-if="linkView" @click="openLinkView" />
      </template>
      <template #option="item">
        
      </template>
    </a-select>
</template>

<style scoped></style>
