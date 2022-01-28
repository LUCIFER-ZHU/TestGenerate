<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './row-edit-grid-state';
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
        <template #headerCell="{title, column}">
<div v-if="Object.is(column.dataIndex, 'dropdownlist')" class="header-cell">

    <span class="title">{{title}}</span>
  
</div>
<div v-if="Object.is(column.dataIndex, 'mdropdownlist')" class="header-cell">

    <span class="title">{{title}}</span>
  
</div>
<div v-if="Object.is(column.dataIndex, 'switchval')" class="header-cell">

    <span class="title">{{title}}</span>
  
</div>
<div v-if="Object.is(column.dataIndex, 'numberval')" class="header-cell">

    <span class="title">{{title}}</span>
  
</div>
<div v-if="Object.is(column.dataIndex, 'customername')" class="header-cell">

    <span class="title">{{title}}</span>
  
</div>
<div v-if="Object.is(column.dataIndex, 'customername2')" class="header-cell">

    <span class="title">{{title}}</span>
  
</div>
<div v-if="Object.is(column.dataIndex, 'customername3')" class="header-cell">

    <span class="title">{{title}}</span>
  
</div>
<div v-if="Object.is(column.dataIndex, 'customername4')" class="header-cell">

    <span class="title">{{title}}</span>
  
</div>
<div v-if="Object.is(column.dataIndex, 'customername5')" class="header-cell">

    <span class="title">{{title}}</span>
  
</div>
<div v-if="Object.is(column.dataIndex, 'textbox')" class="header-cell">

    <span class="title">{{title}}</span>
  
</div>
<div v-if="Object.is(column.dataIndex, 'datepicker')" class="header-cell">

    <span class="title">{{title}}</span>
  
</div>
<div v-if="Object.is(column.dataIndex, 'datepickerex_hour')" class="header-cell">

    <span class="title">{{title}}</span>
  
</div>
<div v-if="Object.is(column.dataIndex, 'datepickerex_minute')" class="header-cell">

    <span class="title">{{title}}</span>
  
</div>
<div v-if="Object.is(column.dataIndex, 'datepickerex_noday')" class="header-cell">

    <span class="title">{{title}}</span>
  
</div>
<div v-if="Object.is(column.dataIndex, 'datepickerex_noday_nosecond')" class="header-cell">

    <span class="title">{{title}}</span>
  
</div>
<div v-if="Object.is(column.dataIndex, 'datepickerex_notime')" class="header-cell">

    <span class="title">{{title}}</span>
  
</div>
<div v-if="Object.is(column.dataIndex, 'datepickerex_second')" class="header-cell">

    <span class="title">{{title}}</span>
  
</div>
<div v-if="Object.is(column.dataIndex, 'stepper')" class="header-cell">

    <span class="title">{{title}}</span>
  
</div>
<div v-if="Object.is(column.dataIndex, 'slider')" class="header-cell">

    <span class="title">{{title}}</span>
  
</div>
<div v-if="Object.is(column.dataIndex, 'ac')" class="header-cell">

    <span class="title">{{title}}</span>
  
</div>
<div v-if="Object.is(column.dataIndex, 'rating')" class="header-cell">

    <span class="title">{{title}}</span>
  
</div>
<div v-if="Object.is(column.dataIndex, 'checkbox')" class="header-cell">

    <span class="title">{{title}}</span>
  
</div>
        </template>
        <template #bodyCell="{ column, text, record, index }">
<div v-if="Object.is(column.dataIndex, 'dropdownlist')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
      <AppFormItem
        name="dropdownlist"
        :error="state.gridEditState.dropdownlist?.[index]?.message"
        :rules="state.rules.dropdownlist"
      >
<AppDropdownList
  name="dropdownlist"
  codeListTag="Sample__OrderState"
  codeListType="STATIC"
  
  :context="state.context"
  :viewParams="state.viewParams"
  :value="record.dropdownlist"
  :data="record"
  @editorEvent="onEditorEvent($event,index)"
/> 
    </AppFormItem>
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'mdropdownlist')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
      <AppFormItem
        name="mdropdownlist"
        :error="state.gridEditState.mdropdownlist?.[index]?.message"
        :rules="state.rules.mdropdownlist"
      >
<AppDropdownList
  name="mdropdownlist"
  codeListTag="Sample__OrderState"
  codeListType="STATIC"
  
  :multiple="true"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="record.mdropdownlist"
  :data="record"
  @editorEvent="onEditorEvent($event,index)"
/> 
    </AppFormItem>
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'switchval')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
      <AppFormItem
        name="switchval"
        :error="state.gridEditState.switchval?.[index]?.message"
        :rules="state.rules.switchval"
      >
<AppSwitch
  name="switchval"
  :value="record.switchval"
  @editorEvent="onEditorEvent($event,index)"
/> 
    </AppFormItem>
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'numberval')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
      <AppFormItem
        name="numberval"
        :error="state.gridEditState.numberval?.[index]?.message"
        :rules="state.rules.numberval"
      >
<AppInput
  name="numberval"
  type="text"
  :value="record.numberval"
  @editorEvent="onEditorEvent($event,index)"
/> 
    </AppFormItem>
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'customername')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
      <AppFormItem
        name="customername"
        :error="state.gridEditState.customername?.[index]?.message"
        :rules="state.rules.customername"
      >
<AppDataPicker
  name="customername"
  :data="state.data"
  valueItem="customerid"
  :context="state.context"
  :viewParams="state.viewParams"
   pickUpView="ChartDataPickupView"
  :value="record.customername"
  @editorEvent="onEditorEvent($event,index)"
/>     </AppFormItem>
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'customername2')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
      <AppFormItem
        name="customername2"
        :error="state.gridEditState.customername2?.[index]?.message"
        :rules="state.rules.customername2"
      >
<AppDataPickerView
  name="customername2"
  :data="state.data"
  valueItem="customerid2"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="record.customername2"
  @editorEvent="onEditorEvent($event,index)"
/>     </AppFormItem>
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'customername3')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
      <AppFormItem
        name="customername3"
        :error="state.gridEditState.customername3?.[index]?.message"
        :rules="state.rules.customername3"
      >
<AppDataPicker
  name="customername3"
  :data="state.data"
  valueItem="customerid3"
  :context="state.context"
  :viewParams="state.viewParams"
   pickUpView="ChartDataPickupView"
  :isDropdown="true"
  :value="record.customername3"
  @editorEvent="onEditorEvent($event,index)"
/>     </AppFormItem>
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'customername4')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
      <AppFormItem
        name="customername4"
        :error="state.gridEditState.customername4?.[index]?.message"
        :rules="state.rules.customername4"
      >
<AppDataPicker
  name="customername4"
  :data="state.data"
  valueItem="customerid4"
  :context="state.context"
  :viewParams="state.viewParams"
   pickUpView="ChartDataPickupView"
  :noAC="true"
  :value="record.customername4"
  @editorEvent="onEditorEvent($event,index)"
/>     </AppFormItem>
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'customername5')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
      <AppFormItem
        name="customername5"
        :error="state.gridEditState.customername5?.[index]?.message"
        :rules="state.rules.customername5"
      >
<AppDataPicker
  name="customername5"
  :data="state.data"
  valueItem="customerid5"
  :context="state.context"
  :viewParams="state.viewParams"
   pickUpView="ChartDataPickupView"
  :value="record.customername5"
  @editorEvent="onEditorEvent($event,index)"
/>     </AppFormItem>
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'textbox')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
      <AppFormItem
        name="textbox"
        :error="state.gridEditState.textbox?.[index]?.message"
        :rules="state.rules.textbox"
      >
<AppInput
  name="textbox"
  :maxLength="100"
  type="text"
  :value="record.textbox"
  @editorEvent="onEditorEvent($event,index)"
/> 
    </AppFormItem>
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'datepicker')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
      <AppFormItem
        name="datepicker"
        :error="state.gridEditState.datepicker?.[index]?.message"
        :rules="state.rules.datepicker"
      >
<AppDatePicker
  name="datepicker"
  dateFormat="YYYY-MM-DD HH:mm:ss"
  dateType="dateTime"
  :value="record.datepicker"
  @editorEvent="onEditorEvent($event,index)"
/> 
    </AppFormItem>
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'datepickerex_hour')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
      <AppFormItem
        name="datepickerex_hour"
        :error="state.gridEditState.datepickerex_hour?.[index]?.message"
        :rules="state.rules.datepickerex_hour"
      >
<AppDatePicker
  name="datepickerex_hour"
  dateFormat="YYYY-MM-DD HH"
  dateType="dateTime"
  :value="record.datepickerex_hour"
  @editorEvent="onEditorEvent($event,index)"
/> 
    </AppFormItem>
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'datepickerex_minute')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
      <AppFormItem
        name="datepickerex_minute"
        :error="state.gridEditState.datepickerex_minute?.[index]?.message"
        :rules="state.rules.datepickerex_minute"
      >
<AppDatePicker
  name="datepickerex_minute"
  dateFormat="YYYY-MM-DD HH:mm"
  dateType="dateTime"
  :value="record.datepickerex_minute"
  @editorEvent="onEditorEvent($event,index)"
/> 
    </AppFormItem>
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'datepickerex_noday')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
      <AppFormItem
        name="datepickerex_noday"
        :error="state.gridEditState.datepickerex_noday?.[index]?.message"
        :rules="state.rules.datepickerex_noday"
      >
<AppDatePicker
  name="datepickerex_noday"
  dateFormat="HH:mm:ss"
  dateType="time"
  :value="record.datepickerex_noday"
  @editorEvent="onEditorEvent($event,index)"
/> 
    </AppFormItem>
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'datepickerex_noday_nosecond')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
      <AppFormItem
        name="datepickerex_noday_nosecond"
        :error="state.gridEditState.datepickerex_noday_nosecond?.[index]?.message"
        :rules="state.rules.datepickerex_noday_nosecond"
      >
<AppDatePicker
  name="datepickerex_noday_nosecond"
  dateFormat="HH:mm"
  dateType="time"
  :value="record.datepickerex_noday_nosecond"
  @editorEvent="onEditorEvent($event,index)"
/> 
    </AppFormItem>
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'datepickerex_notime')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
      <AppFormItem
        name="datepickerex_notime"
        :error="state.gridEditState.datepickerex_notime?.[index]?.message"
        :rules="state.rules.datepickerex_notime"
      >
<AppDatePicker
  name="datepickerex_notime"
  dateFormat="YYYY-MM-DD"
  dateType="date"
  :value="record.datepickerex_notime"
  @editorEvent="onEditorEvent($event,index)"
/> 
    </AppFormItem>
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'datepickerex_second')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
      <AppFormItem
        name="datepickerex_second"
        :error="state.gridEditState.datepickerex_second?.[index]?.message"
        :rules="state.rules.datepickerex_second"
      >
<AppDatePicker
  name="datepickerex_second"
  dateFormat="YYYY-MM-DD HH:mm:ss"
  dateType="dateTime"
  :value="record.datepickerex_second"
  @editorEvent="onEditorEvent($event,index)"
/> 
    </AppFormItem>
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'stepper')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
      <AppFormItem
        name="stepper"
        :error="state.gridEditState.stepper?.[index]?.message"
        :rules="state.rules.stepper"
      >
<AppStepper
  name="stepper"
  :step="1.0"
  :value="record.stepper"
  @editorEvent="onEditorEvent($event,index)"
/> 
    </AppFormItem>
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'slider')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
      <AppFormItem
        name="slider"
        :error="state.gridEditState.slider?.[index]?.message"
        :rules="state.rules.slider"
      >
<AppSlider
  name="slider"
  :date="state.data"
  :step="1.0"
  :value="record.slider"
  @editorEvent="onEditorEvent($event,index)"
/> 
    </AppFormItem>
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'ac')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
      <AppFormItem
        name="ac"
        :error="state.gridEditState.ac?.[index]?.message"
        :rules="state.rules.ac"
      >
<AppAutoComplete
  name="ac"
  :data="state.data"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="record.ac"
  @editorEvent="onEditorEvent($event,index)"
/>
    </AppFormItem>
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'rating')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
      <AppFormItem
        name="rating"
        :error="state.gridEditState.rating?.[index]?.message"
        :rules="state.rules.rating"
      >
<AppRating
  name="rating"
  :max="5.0"
  :value="record.rating"
  @editorEvent="onEditorEvent($event,index)"
/> 
    </AppFormItem>
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
<div v-if="Object.is(column.dataIndex, 'checkbox')" class="table-cell">
  <div v-if="state.rowEditState" class="editor-cell">
      <AppFormItem
        name="checkbox"
        :error="state.gridEditState.checkbox?.[index]?.message"
        :rules="state.rules.checkbox"
      >
<AppCheckbox
  name="checkbox"
  :value="record.checkbox"
  @editorEvent="onEditorEvent($event,index)"
/> 
    </AppFormItem>
  </div>
  <div v-else class="text-cell">
    <span class="text">{{text}}</span>
  </div>
    
</div>
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