<script setup lang="ts">
import { Subject } from 'rxjs';
import { SaveOutlined, CloseOutlined } from '@ant-design/icons-vue';
import { ctrlState } from './time-range-search-form-state';
import { SearchFormControl, IActionParam, IParam, ControlAction, IContext } from '@core';

interface Props {
  context: IContext;
  viewParams?: IParam;
  controlAction: ControlAction;
  showBusyIndicator?: boolean;
  viewSubject: Subject<IActionParam>;
}

const props = withDefaults(defineProps<Props>(), {
  viewSubject: () => new Subject<IActionParam>(),
  showBusyIndicator: true,
})

// emit声明
interface CtrlEmit {
  (name: "ctrlEvent", value: IActionParam): void;
}

const emit = defineEmits<CtrlEmit>();

// 安装功能模块，提供状态和能力方法
const { state, onEditorEvent, onComponentEvent, onSearch, loadDraft, onSaveHistoryItem, onCancel, onRemoveHistoryItem } = new SearchFormControl(ctrlState, props, emit).moduleInstall();

</script>
<template>
  <a-form 
    name="TimeRange" 
    class="app-search-form RIGHT-button"
    style=""
    :model="state.data" 
    :rules="state.rules">
    <a-row>
      <a-col>
        <a-row>
<a-col
  :lg="{span: 8, offset: 0 }"
  :md="{span: 8, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.n_orderdate_gtandeq.visible" name="n_orderdate_gtandeq" :required="state.detailsModel.n_orderdate_gtandeq.required" label="订单时间(大于等于(>=))">
<appDatePicker
  name="n_orderdate_gtandeq"
  :disabled="state.detailsModel.n_orderdate_gtandeq.disabled"
  dateFormat="YYYY-MM-DD"
  dateType="date"
  :value="state.data.n_orderdate_gtandeq"
  @editorEvent="onEditorEvent"
/> 
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 8, offset: 0 }"
  :md="{span: 8, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.n_orderdate_ltandeq.visible" name="n_orderdate_ltandeq" :required="state.detailsModel.n_orderdate_ltandeq.required" label="订单时间(小于等于(<=))">
<appDatePicker
  name="n_orderdate_ltandeq"
  :disabled="state.detailsModel.n_orderdate_ltandeq.disabled"
  dateFormat="YYYY-MM-DD"
  dateType="date"
  :value="state.data.n_orderdate_ltandeq"
  @editorEvent="onEditorEvent"
/> 
  </AppFormItem>
</a-col>
      </a-row>
      </a-col>
      <a-col class='search-form-footer'>

        <a-button class='search-button' type="primary">搜索</a-button>
      </a-col>
    </a-row>
  </a-form>
</template>