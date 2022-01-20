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
<div v-if="Object.is(column.dataIndex, 'chartdataname')" class="table-cell">

  <div class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'chartdate')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<AppDatePicker
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
<AppDropdownList
  name="datatype"
  codeListTag="Sample__DataType"
  codeListType="STATIC"
  
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
<AppInput
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
<AppInput
  name="data"
  type="number"
  :value="record.data"
  @editorEvent="onEditorEvent($event,index)"
/> 
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'planincome')" class="table-cell">

  <div class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'realincome')" class="table-cell">

  <div class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'datetime')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<AppDatePicker
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
<div v-if="Object.is(column.dataIndex, 'uagridcolumn1')" class="table-cell">
  <AppToolbar
    mode="link"
    name="uagridcolumn1"
    :actionModel="record.uagridcolumn1"
    @onToolbarEvent="onToolbarEvent($event, record)"/>
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