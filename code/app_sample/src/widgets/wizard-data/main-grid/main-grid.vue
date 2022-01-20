<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './main-grid-state';
import { GridControl, IActionParam, IParam, IContext, ControlAction, deepCopy } from '@core';

interface Props {
  context: IContext;
  viewParams: IParam;
  multiple?: boolean;
  rowEditState?: boolean;
  rowActiveMode?: 0 | 1 | 2;
  selectedData?: IParam[];
  selectFirstDefault?: boolean;
  controlAction: ControlAction;
  showBusyIndicator?: boolean;
  viewSubject: Subject<IActionParam>;
}

const props = withDefaults(defineProps < Props > (), {
  viewSubject: () => new Subject < IActionParam > (),
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

// emit声明
const emit = defineEmits<CtrlEmit>();

// 安装功能模块，提供状态和能力
const { state, useCustom, onEditorEvent, onToolbarEvent } = new GridControl(ctrlState, props, emit).moduleInstall();
const { useScrollOption, useRowKey, useRowClassName, useCustomRow, useRowSelectionOption, onResizeColumn, onGridChange } = useCustom;

// 暴露内部状态及能力
defineExpose({ state, name: 'grid' });
</script>
<template>
  <a-table
    bordered
    sticky
    class="app-grid"
    :rowKey="useRowKey"
    :showHeader="true"
    :scroll="useScrollOption"
    :sortDirections="['ascend', 'descend']"
    :data-source="state.items"
    :row-selection="useRowSelectionOption"
    :columns="state.columnsModel"
    :pagination="state.mdCtrlPaging.pagination"
    :customRow="useCustomRow"
    :rowClassName="useRowClassName"
    @change="onGridChange"
    @resizeColumn="onResizeColumn"
  >
    <template #emptyText>
      <div class="not-data">
        <span class="empty-text">
          无数据
        </span>
      </div>
    </template>
    <template #bodyCell="{ column, text, record, index }">
<div v-if="Object.is(column.dataIndex, 'textfield')" class="table-cell">

  <div class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'timefield')" class="table-cell">

  <div class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'numfield')" class="table-cell">

  <div class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'srfnextform')" class="table-cell">

  <div class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
    </template>

  </a-table>
</template>
<style lang="scss">
  .app-grid {
    height: 100%;
    padding-top: 8px;

    .table-striped {
      background-color: #fafafa;
    }
  }
</style>