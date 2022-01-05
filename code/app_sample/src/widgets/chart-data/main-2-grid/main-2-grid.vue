<script setup lang="ts">
import { Subject } from 'rxjs';
import { CtrlConfig } from './main-2-grid-config';
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
<div v-if="Object.is(column.dataIndex, 'chartname')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<IbizInput
  name="chartdataname"
  :maxLength="200"
  type="text"
  :value="record.chartdataname"
  @editorEvent="($event) => handleEditorEvent(index,$event)"
/> 
    
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'date')" class="table-cell">
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
<div v-if="Object.is(column.dataIndex, 'type')" class="table-cell">

  <div class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'nian')" class="table-cell">
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
<div v-if="Object.is(column.dataIndex, 'testdata')" class="table-cell">
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
<div v-if="Object.is(column.dataIndex, 'time')" class="table-cell">
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
<div v-if="Object.is(column.dataIndex, 'person')" class="table-cell">

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
.ibiz-grid {
  height: 100%;
  padding-top: 8px;
  .table-striped {
    background-color: #fafafa;
  }
}
</style>