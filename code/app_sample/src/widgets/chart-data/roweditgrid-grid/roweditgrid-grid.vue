<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './roweditgrid-grid-state';
import { GridControl, IActionParam, IParam, IContext, ControlAction, deepCopy } from '@core';

interface Props {
  context: IContext;
  viewParams: IParam;
  multiple: boolean;
  rowEditState: boolean;
  rowActiveMode: 0 | 1 | 2;
  selectedData?: IParam[];
  isSelectDefault?: boolean;
  controlAction: ControlAction;
  showBusyIndicator: boolean;
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
    class="app-grid list-css"
    :rowKey="rowKey"
    :showHeader="true"
    :scroll="scrollOption"
    :sortDirections="['ascend', 'descend']"
    :data-source="state.items"
    :row-selection="rowSelectionOption"
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
<div v-if="Object.is(column.dataIndex, 'chartdataname')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<appInput
  name="name"
  :maxLength="200"
  type="text"
  :value="record.name"
  @editorEvent="onEditorEvent($event,index)"
/> 
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'chartdate')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<appDatePicker
  name="chartdate"
  dateFormat="YYYY-MM-DD HH:mm:ss"
  dateType="dateTime"
  :value="record.chartdate"
  @editorEvent="onEditorEvent($event,index)"
/> 
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'datatype')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<appDropdownList
  name="datatype"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="record.datatype"
  :data="record"
  @editorEvent="onEditorEvent($event,index)"
/> 
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'year')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<appInput
  name="year"
  type="text"
  :value="record.year"
  @editorEvent="onEditorEvent($event,index)"
/> 
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'data')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<appInput
  name="testData"
  type="number"
  :value="record.testData"
  @editorEvent="onEditorEvent($event,index)"
/> 
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'datetime')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<appDatePicker
  name="datetime"
  dateFormat="YYYY-MM-DD HH:mm:ss"
  dateType="dateTime"
  :value="record.datetime"
  @editorEvent="onEditorEvent($event,index)"
/> 
  </div>
  <div v-else class="text-cell">
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