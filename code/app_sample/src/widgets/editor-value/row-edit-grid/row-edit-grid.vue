<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './row-edit-grid-state';
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
    class="app-grid"
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
<div v-if="Object.is(column.dataIndex, 'dropdownlist')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<appDropdownList
  name="dropdownlist"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="record.dropdownlist"
  :data="record"
  @editorEvent="onEditorEvent($event,index)"
/> 
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'mdropdownlist')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<appDropdownList
  name="mdropdownlist"
  :multiple="true"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="record.mdropdownlist"
  :data="record"
  @editorEvent="onEditorEvent($event,index)"
/> 
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'switchval')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<appSwitch
  name="switchval"
  :value="record.switchval"
  @editorEvent="onEditorEvent($event,index)"
/> 
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'numberval')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<appInput
  name="numberval"
  type="text"
  :value="record.numberval"
  @editorEvent="onEditorEvent($event,index)"
/> 
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'customername')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<appDataPicker
  name="customername"
  :data="state.data"
  valueItem="customerid"
  :context="state.context"
  :viewParams="state.viewParams"
   pickUpView="ChartDataPickupView"
  :value="record.customername"
  @editorEvent="onEditorEvent($event,index)"
/>   </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'customername2')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<appDataPickerView
  name="customername2"
  :data="state.data"
  valueItem="customerid2"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="record.customername2"
  @editorEvent="onEditorEvent($event,index)"
/>   </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'customername3')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<appDataPicker
  name="customername3"
  :data="state.data"
  valueItem="customerid3"
  :context="state.context"
  :viewParams="state.viewParams"
   pickUpView="ChartDataPickupView"
  :isDropdown="true"
  :value="record.customername3"
  @editorEvent="onEditorEvent($event,index)"
/>   </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'customername4')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<appDataPicker
  name="customername4"
  :data="state.data"
  valueItem="customerid4"
  :context="state.context"
  :viewParams="state.viewParams"
   pickUpView="ChartDataPickupView"
  :noAC="true"
  :value="record.customername4"
  @editorEvent="onEditorEvent($event,index)"
/>   </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'customername5')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<appDataPicker
  name="customername5"
  :data="state.data"
  valueItem="customerid5"
  :context="state.context"
  :viewParams="state.viewParams"
   pickUpView="ChartDataPickupView"
  :value="record.customername5"
  @editorEvent="onEditorEvent($event,index)"
/>   </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'textbox')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<appInput
  name="textbox"
  :maxLength="100"
  type="text"
  :value="record.textbox"
  @editorEvent="onEditorEvent($event,index)"
/> 
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'datepicker')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<appDatePicker
  name="datepicker"
  dateFormat="YYYY-MM-DD HH:mm:ss"
  dateType="dateTime"
  :value="record.datepicker"
  @editorEvent="onEditorEvent($event,index)"
/> 
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'datepickerex_hour')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<appDatePicker
  name="datepickerex_hour"
  dateFormat="YYYY-MM-DD HH"
  dateType="dateTime"
  :value="record.datepickerex_hour"
  @editorEvent="onEditorEvent($event,index)"
/> 
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'datepickerex_minute')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<appDatePicker
  name="datepickerex_minute"
  dateFormat="YYYY-MM-DD HH:mm"
  dateType="dateTime"
  :value="record.datepickerex_minute"
  @editorEvent="onEditorEvent($event,index)"
/> 
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'datepickerex_noday')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<appDatePicker
  name="datepickerex_noday"
  dateFormat="HH:mm:ss"
  dateType="time"
  :value="record.datepickerex_noday"
  @editorEvent="onEditorEvent($event,index)"
/> 
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'datepickerex_noday_nosecond')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<appDatePicker
  name="datepickerex_noday_nosecond"
  dateFormat="HH:mm"
  dateType="time"
  :value="record.datepickerex_noday_nosecond"
  @editorEvent="onEditorEvent($event,index)"
/> 
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'datepickerex_notime')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<appDatePicker
  name="datepickerex_notime"
  dateFormat="YYYY-MM-DD"
  dateType="date"
  :value="record.datepickerex_notime"
  @editorEvent="onEditorEvent($event,index)"
/> 
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'datepickerex_second')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<appDatePicker
  name="datepickerex_second"
  dateFormat="YYYY-MM-DD HH:mm:ss"
  dateType="dateTime"
  :value="record.datepickerex_second"
  @editorEvent="onEditorEvent($event,index)"
/> 
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'stepper')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<appStepper
  name="stepper"
  :step="1.0"
  :value="record.stepper"
  @editorEvent="onEditorEvent($event,index)"
/> 
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'slider')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<appSlider
  name="slider"
  :date="state.data"
  :step="1.0"
  :value="record.slider"
  @editorEvent="onEditorEvent($event,index)"
/> 
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'ac')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<appAutoComplete
  name="ac"
  :data="state.data"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="record.ac"
  @editorEvent="onEditorEvent($event,index)"
/>
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'rating')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<appRating
  name="rating"
  :value="record.rating"
  @editorEvent="onEditorEvent($event,index)"
/> 
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'checkbox')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
<appCheckbox
  name="checkbox"
  :value="record.checkbox"
  @editorEvent="onEditorEvent($event,index)"
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
  .app-grid {
    height: 100%;
    padding-top: 8px;

    .table-striped {
      background-color: #fafafa;
    }
  }
</style>