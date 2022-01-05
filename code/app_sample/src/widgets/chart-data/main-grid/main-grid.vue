<script setup lang="ts">
import { Subject } from 'rxjs';
import { CtrlConfig } from './main-grid-config';
import { GridControl, IActionParam, IParam, IContext, ControlAction, deepCopy } from '@core';

interface Props {
  context: IContext;
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
const { state, load, handleEditorEvent, handleToolbarEvent, custom } = new GridControl(CtrlConfig).moduleInstall(props, emit);
const { scrollOption, rowKey, rowClassName, customRow, rowSelectionOption, resizeColumn, handleGridChange } = custom;

</script>
<template>
  <a-table 
    bordered
    sticky
    class="ibiz-grid"
    :rowKey="rowKey"
    :showHeader="true"
    :scroll="scrollOption"
    :sortDirections="['ascend', 'descend']"
    :data-source="state.data"
    :row-selection="rowSelectionOption"
    :columns="state.columnsModel"
    :pagination="state.gridPaging.pagination"
    :customRow="customRow"
    :rowClassName="rowClassName"
    @change="handleGridChange"
    @resizeColumn="resizeColumn">
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
<IbizDatePicker
  name="chartdate"
  dateFormat="YYYY-MM-DD HH:mm:ss"
  dateType="dateTime"
  :value="record.chartdate"
  @editorEvent="($event) => handleEditorEvent(index,$event)"
/> 
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'datatype')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<IbizDropdownList
  name="datatype"
  :data="state.data"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="record.datatype"
  @editorEvent="($event) => handleEditorEvent(index,$event)"
/> 
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'year')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<IbizInput
  name="year"
  type="text"
  :value="record.year"
  @editorEvent="($event) => handleEditorEvent(index,$event)"
/> 
    
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'data')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<IbizInput
  name="data"
  type="number"
  :value="record.data"
  @editorEvent="($event) => handleEditorEvent(index,$event)"
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
<IbizDatePicker
  name="datetime"
  dateFormat="YYYY-MM-DD HH:mm:ss"
  dateType="dateTime"
  :value="record.datetime"
  @editorEvent="($event) => handleEditorEvent(index,$event)"
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
  <ibizToolbar
    mode="link"
    name="uagridcolumn1"
    :actionModel="record.uagridcolumn1"
    @toolbarEvent="($event) => handleToolbarEvent(record, $event)"/>
</div>
    </template>

  </a-table>
</template>
<style lang="scss">
.ibiz-grid {
  height: 100%;
  padding-top: 8px;
  .table-striped {
    background-color: #fafafa;
  }
}
</style>