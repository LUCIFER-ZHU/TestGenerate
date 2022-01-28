<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './roweditgrid-grid-state';
import { GridControl, IActionParam, IParam, IContext, ControlAction, deepCopy } from '@core';

interface Props {
  name:string,
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
const { name, state, useCustom, onEditorEvent, onToolbarEvent, newRow, remove, save, load, refresh, getData } = new GridControl(ctrlState, props, emit).moduleInstall();
const { useScrollOption, useRowKey, useRowClassName, useCustomRow, useRowSelectionOption, onResizeColumn, onGridChange } = useCustom;

// 暴露内部状态及能力
defineExpose({ name, state, newRow, remove, save, load, refresh, getData });
</script>
<template>
    <a-form name="grid" class="app-grid-form"  >
      <a-table
        bordered
        sticky
        class="app-grid list-css"
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
        <template #headerCell="{title, column}">
<div v-if="Object.is(column.dataIndex, 'chartdataname')" class="header-cell">

    <span class="title">{{title}}</span>
  
</div>
<div v-if="Object.is(column.dataIndex, 'chartdate')" class="header-cell">

    <span class="title">{{title}}</span>
  
</div>
<div v-if="Object.is(column.dataIndex, 'datatype')" class="header-cell">

    <span class="title">{{title}}</span>
  
</div>
<div v-if="Object.is(column.dataIndex, 'year')" class="header-cell">

    <span class="title">{{title}}</span>
  
</div>
<div v-if="Object.is(column.dataIndex, 'data')" class="header-cell">

    <span class="title">{{title}}</span>
  
</div>
<div v-if="Object.is(column.dataIndex, 'datetime')" class="header-cell">

    <span class="title">{{title}}</span>
  
</div>
<div v-if="Object.is(column.dataIndex, 'updateman')" class="header-cell">

    <span class="title">{{title}}</span>
  
</div>
<div v-if="Object.is(column.dataIndex, 'updatedate')" class="header-cell">

    <span class="title">{{title}}</span>
  
</div>
        </template>
        <template #bodyCell="{ column, text, record, index }">
<div v-if="Object.is(column.dataIndex, 'chartdataname')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
      <AppFormItem
        name="name"
        :error="state.gridEditState.name?.[index]?.message"
        :rules="state.rules.name"
      >
<AppInput
  name="name"
  :maxLength="200"
  type="text"
  :value="record.name"
  @editorEvent="onEditorEvent($event,index)"
/> 
    </AppFormItem>
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'chartdate')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
      <AppFormItem
        name="chartdate"
        :error="state.gridEditState.chartdate?.[index]?.message"
        :rules="state.rules.chartdate"
      >
<AppDatePicker
  name="chartdate"
  dateFormat="YYYY-MM-DD HH:mm:ss"
  dateType="dateTime"
  :value="record.chartdate"
  @editorEvent="onEditorEvent($event,index)"
/> 
    </AppFormItem>
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'datatype')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
      <AppFormItem
        name="datatype"
        :error="state.gridEditState.datatype?.[index]?.message"
        :rules="state.rules.datatype"
      >
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
    </AppFormItem>
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'year')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
      <AppFormItem
        name="year"
        :error="state.gridEditState.year?.[index]?.message"
        :rules="state.rules.year"
      >
<AppInput
  name="year"
  type="text"
  :value="record.year"
  @editorEvent="onEditorEvent($event,index)"
/> 
    </AppFormItem>
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'data')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
      <AppFormItem
        name="testData"
        :error="state.gridEditState.testData?.[index]?.message"
        :rules="state.rules.testData"
      >
<AppInput
  name="testData"
  type="number"
  :value="record.testData"
  @editorEvent="onEditorEvent($event,index)"
/> 
    </AppFormItem>
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'datetime')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
      <AppFormItem
        name="datetime"
        :error="state.gridEditState.datetime?.[index]?.message"
        :rules="state.rules.datetime"
      >
<AppDatePicker
  name="datetime"
  dateFormat="YYYY-MM-DD HH:mm:ss"
  dateType="dateTime"
  :value="record.datetime"
  @editorEvent="onEditorEvent($event,index)"
/> 
    </AppFormItem>
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
  </a-form>
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