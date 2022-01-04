<script setup lang="ts">
import { Subject } from 'rxjs';
import { CtrlConfig } from './main-grid-config';
import { GridControl, IActionParam, IParam, ControlAction, deepCopy } from '@ibiz-core';

interface Props {
  context: IParam;
  multiple: boolean;
  rowEditState: boolean;
  rowActiveMode: 0 | 1 | 2;
  selectedData: IParam[];
  selectFirstDefault: boolean;
  viewParams?: IParam;
  controlAction: ControlAction;
  showBusyIndicator?: boolean;
  viewSubject: Subject<IActionParam>;
}

const props = withDefaults(defineProps<Props>(), {
  viewSubject: () => new Subject<IActionParam>(),
  showBusyIndicator: true,
  multiple: false,
  rowEditState: false,
  rowActiveMode: 0,
  selectFirstDefault: false,
})

// emit声明
interface CtrlEmit {
  (name: "ctrlEvent", value: IActionParam): void;
}
const emit = defineEmits<CtrlEmit>();
// 安装功能模块，提供状态和能力方法
const { state, load, handleEditorEvent, handleToolbarEvent } = new GridControl(CtrlConfig).moduleInstall(props);
// 表格滚动条配置
const gridScrollOption = computed(() => {
  return {
    scrollToFirstRowOnChange: true,
    x: '110%',
    y: '690px',
  }
});
// 表格行key
const rowKey = (record: IParam) => {
  return record.srfkey;
}
// 表格行样式(斑马纹)
const rowClassName = (record: IParam, index: number) => {
  return index % 2 === 1 ? "table-striped" : null;
}
// 表格行选中
const customRow = (record: IParam, index: number) => {
  return {
    onClick: () => {
      if (!props.rowEditState) {
        state.selectedRowKeys = [record.srfkey];
        if (!record.children) {
          emit("ctrlEvent",{ tag: state.controlName, action: "selectionChange", data: [deepCopy(record)] })
          if (Object.is(props.rowActiveMode, 1)) {
            emit("ctrlEvent",{ tag: state.controlName, action: "rowClick", data: [deepCopy(record)] })
          }
        }
      }
    },
    onDblclick: () => {
      if (!record.children && Object.is(props.rowActiveMode, 2)) {
        emit("ctrlEvent",{ tag: state.controlName, action: "rowDbClick", data: [deepCopy(record)] })
      }
    }
  };
}
// 表格选择功能配置
const rowSelectionOption = computed(() => {
  if (props.selectFirstDefault) {
    return false;
  }
  return {
    columnWidth: 50,
    selectedRowKeys: state.selectedRowKeys,
    checkStrictly: props.multiple ? false : true,
    onChange: (selectedRowKeys: string[], selectedRows: IParam[]) => {
      state.selectedRowKeys = selectedRowKeys;
      const selection: IParam[] = [];
      selectedRows.forEach((select: IParam) => {
        if (!select.children) {
          selection.push(select);
        }
      })
      emit("ctrlEvent",{ tag: state.controlName, action: "selectionChange", data: selection })
    },
  };
});
// 处理拖动列
const handleResizeColumn = (width: number, column: IParam) => {
  column.width = width;
}
// 处理表格变化（分页，过滤，排序）
const handleChange = (pagination: IParam, filters: IParam, sorter: IParam, data: IParam) => {
  const { current, pageSize } = pagination;
  state.current = current;
  state.pageSize = pageSize;
  load();
}
</script>
<template>
  <a-table 
    bordered
    sticky
    class="ibiz-grid"
    :rowKey="rowKey"
    :showHeader="true"
    :scroll="gridScrollOption"
    :sortDirections="['ascend', 'descend']"
    :data-source="state.items"
    :row-selection="rowSelectionOption"
    :columns="state.columnsModel"
    :pagination="state.pagination"
    :customRow="customRow"
    :rowClassName="rowClassName"
    @change="handleChange"
    @resizeColumn="handleResizeColumn">
    <template #emptyText>
      <div class="not-data">
        <span class="empty-text">
          无数据
        </span>
      </div>
    </template>
    <template #bodyCell="{ column, text, record, index }">
<div v-if="Object.is(column.dataIndex, 'region')" class="table-cell">

  <div class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'code')" class="table-cell">

  <div class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'logicvaliddataname')" class="table-cell">

  <div class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'updateman')" class="table-cell">

  <div class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'updatedate')" class="table-cell">

  <div class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
    </template>

  </a-table>
</template>
<style lang="scss">
.ibiz-grid {
  height: 100%;
  .table-striped {
    background-color: #fafafa;
  }
}
</style>