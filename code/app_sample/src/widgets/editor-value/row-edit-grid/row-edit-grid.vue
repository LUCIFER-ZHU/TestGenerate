<script setup lang="ts">
import { Subject } from 'rxjs';
import { CtrlConfig } from './row-edit-grid-config';
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
<div v-if="Object.is(column.dataIndex, 'dropdownlist')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<IbizDropdownList
  name="dropdownlist"
  :data="state.data"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="record.dropdownlist"
  @editorEvent="($event) => handleEditorEvent(index,$event)"
/> 
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'mdropdownlist')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<IbizDropdownList
  name="mdropdownlist"
  :data="state.data"
  :multiple="true"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="record.mdropdownlist"
  @editorEvent="($event) => handleEditorEvent(index,$event)"
/> 
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'switchval')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<IbizSwitch
  name="switchval"
  :value="record.switchval"
  @editorEvent="($event) => handleEditorEvent(index,$event)"
/> 
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'numberval')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<IbizInput
  name="numberval"
  type="text"
  :value="record.numberval"
  @editorEvent="($event) => handleEditorEvent(index,$event)"
/> 
    
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'customername')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<IbizDataPicker
  name="customername"
  :data="state.data"
  valueItem="customerid"
  :context="state.context"
  :viewParams="state.viewParams"
   pickUpView="ChartDataPickupView"
  :value="record.customername"
  @editorEvent="($event) => handleEditorEvent(index,$event)"
/>   </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'customername2')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<IbizDataPickerView
  name="customername2"
  :data="state.data"
  valueItem="customerid2"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="record.customername2"
  @editorEvent="($event) => handleEditorEvent(index,$event)"
/>   </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'customername3')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<IbizDataPicker
  name="customername3"
  :data="state.data"
  valueItem="customerid3"
  :context="state.context"
  :viewParams="state.viewParams"
   pickUpView="ChartDataPickupView"
  :isDropdown="true"
  :value="record.customername3"
  @editorEvent="($event) => handleEditorEvent(index,$event)"
/>   </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'customername4')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<IbizDataPicker
  name="customername4"
  :data="state.data"
  valueItem="customerid4"
  :context="state.context"
  :viewParams="state.viewParams"
   pickUpView="ChartDataPickupView"
  :noAC="true"
  :value="record.customername4"
  @editorEvent="($event) => handleEditorEvent(index,$event)"
/>   </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'customername5')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<IbizDataPicker
  name="customername5"
  :data="state.data"
  valueItem="customerid5"
  :context="state.context"
  :viewParams="state.viewParams"
   pickUpView="ChartDataPickupView"
  :value="record.customername5"
  @editorEvent="($event) => handleEditorEvent(index,$event)"
/>   </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'textbox')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<IbizInput
  name="textbox"
  :maxLength="100"
  type="text"
  :value="record.textbox"
  @editorEvent="($event) => handleEditorEvent(index,$event)"
/> 
    
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'datepicker')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<IbizDatePicker
  name="datepicker"
  dateFormat="YYYY-MM-DD HH:mm:ss"
  dateType="dateTime"
  :value="record.datepicker"
  @editorEvent="($event) => handleEditorEvent(index,$event)"
/> 
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'datepickerex_hour')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<IbizDatePicker
  name="datepickerex_hour"
  dateFormat="YYYY-MM-DD HH"
  dateType="dateTime"
  :value="record.datepickerex_hour"
  @editorEvent="($event) => handleEditorEvent(index,$event)"
/> 
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'datepickerex_minute')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<IbizDatePicker
  name="datepickerex_minute"
  dateFormat="YYYY-MM-DD HH:mm"
  dateType="dateTime"
  :value="record.datepickerex_minute"
  @editorEvent="($event) => handleEditorEvent(index,$event)"
/> 
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'datepickerex_noday')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<IbizDatePicker
  name="datepickerex_noday"
  dateFormat="HH:mm:ss"
  dateType="time"
  :value="record.datepickerex_noday"
  @editorEvent="($event) => handleEditorEvent(index,$event)"
/> 
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'datepickerex_noday_nosecond')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<IbizDatePicker
  name="datepickerex_noday_nosecond"
  dateFormat="HH:mm"
  dateType="time"
  :value="record.datepickerex_noday_nosecond"
  @editorEvent="($event) => handleEditorEvent(index,$event)"
/> 
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'datepickerex_notime')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<IbizDatePicker
  name="datepickerex_notime"
  dateFormat="YYYY-MM-DD"
  dateType="date"
  :value="record.datepickerex_notime"
  @editorEvent="($event) => handleEditorEvent(index,$event)"
/> 
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'datepickerex_second')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<IbizDatePicker
  name="datepickerex_second"
  dateFormat="YYYY-MM-DD HH:mm:ss"
  dateType="dateTime"
  :value="record.datepickerex_second"
  @editorEvent="($event) => handleEditorEvent(index,$event)"
/> 
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'stepper')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<IbizStepper
  name="stepper"
  :step="1.0"
  :value="record.stepper"
  @editorEvent="($event) => handleEditorEvent(index,$event)"
/> 
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'slider')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<IbizSlider
  name="slider"
  :date="state.data"
  :step="1.0"
  :value="record.slider"
  @editorEvent="($event) => handleEditorEvent(index,$event)"
/> 
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'ac')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<IbizAutoComplete
  name="ac"
  :data="state.data"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="record.ac"
  @editorEvent="($event) => handleEditorEvent(index,$event)"
/>
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'rating')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<IbizRating
  name="rating"
  :value="record.rating"
  @editorEvent="($event) => handleEditorEvent(index,$event)"
/> 
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'checkbox')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<IbizCheckbox
  name="checkbox"
  :value="record.checkbox"
  @editorEvent="($event) => handleEditorEvent(index,$event)"
/> 
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
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