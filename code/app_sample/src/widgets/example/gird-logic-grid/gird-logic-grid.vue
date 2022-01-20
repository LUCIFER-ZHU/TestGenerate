<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './gird-logic-grid-state';
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
defineExpose({ state, name: 'grid2' });
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
<div v-if="Object.is(column.dataIndex, 'fieldx')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<AppInput
  name="fieldx"
  type="text"
  :value="record.fieldx"
  @editorEvent="onEditorEvent($event,index)"
/> 
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'fieldy')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<AppInput
  name="fieldy"
  type="text"
  :value="record.fieldy"
  @editorEvent="onEditorEvent($event,index)"
/> 
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'fieldz')" class="table-cell">

  <div class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
    </template>
    <template #summary>
      <a-table-summary>
        <a-table-summary-row>
          <a-table-summary-cell align="center">数据聚合</a-table-summary-cell>
          <a-table-summary-cell v-for="(item, index) in state.gridAgg.aggData" :key="index">
            <span>{{item}}</span>
          </a-table-summary-cell>
        </a-table-summary-row>
      </a-table-summary>
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