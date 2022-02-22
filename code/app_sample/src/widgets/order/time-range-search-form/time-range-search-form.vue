<script setup lang="ts">
import { Subject } from 'rxjs';
import { SaveOutlined, CloseOutlined } from '@ant-design/icons-vue';
import { ctrlState } from './time-range-search-form-state';
import { SearchFormControl, IActionParam, IParam, ControlAction, IContext } from '@core';

interface Props {
  name:string,
  parent: IParam;
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
const { name, state, getData, onEditorEvent, onComponentEvent, onSearch, loadDraft, onSaveHistoryItem, onCancel, onRemoveHistoryItem } = new SearchFormControl(ctrlState, props, emit).moduleInstall();
defineExpose({ name, state, getData });
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
          <AppFormItem 
            name="n_orderdate_gtandeq"
            label="订单时间(大于等于(>=))"
            labelPos="LEFT"
            :labelWidth="130"
            :showLabel="true"
            :rules="state.rules.n_orderdate_gtandeq"
            :required="state.detailsModel.n_orderdate_gtandeq.required"
            :visible="state.detailsModel.n_orderdate_gtandeq.visible" 
            :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 8,colMD: 8,colSM: 12,}"
            >
            <div class="form-editor-container" style="">
            <AppDatePicker
              name="n_orderdate_gtandeq"
              :disabled="state.detailsModel.n_orderdate_gtandeq.disabled"
              dateFormat="YYYY-MM-DD"
              dateType="date"
              :value="state.data.n_orderdate_gtandeq"
              @editorEvent="onEditorEvent"
            />
            </div>
          </AppFormItem>
          <AppFormItem 
            name="n_orderdate_ltandeq"
            label="订单时间(小于等于(<=))"
            labelPos="LEFT"
            :labelWidth="130"
            :showLabel="true"
            :rules="state.rules.n_orderdate_ltandeq"
            :required="state.detailsModel.n_orderdate_ltandeq.required"
            :visible="state.detailsModel.n_orderdate_ltandeq.visible" 
            :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 8,colMD: 8,colSM: 12,}"
            >
            <div class="form-editor-container" style="">
            <AppDatePicker
              name="n_orderdate_ltandeq"
              :disabled="state.detailsModel.n_orderdate_ltandeq.disabled"
              dateFormat="YYYY-MM-DD"
              dateType="date"
              :value="state.data.n_orderdate_ltandeq"
              @editorEvent="onEditorEvent"
            />
            </div>
          </AppFormItem>
      </a-row>
      </a-col>
      <a-col class='search-form-footer'>

        <a-button class='search-button' type="primary">搜索</a-button>
      </a-col>
    </a-row>
  </a-form>
</template>