<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './info-form-state';
import { FormControl, IActionParam, IParam, ControlAction, IContext } from '@core';
interface Props {
  name:string,
  context: IContext;
  viewParams?: IParam;
  controlAction: ControlAction;
  showBusyIndicator?: boolean;
  viewSubject: Subject<IActionParam>;
}

const props = withDefaults(defineProps < Props > (), {
  viewSubject: () => new Subject < IActionParam > (),
  showBusyIndicator: true,
})

// emit声明
interface CtrlEmit {
  (name: "ctrlEvent", value: IActionParam): void;
}

const emit = defineEmits <CtrlEmit> ();

// 安装功能模块，提供状态和能力方法
const { name, state, load, loadDraft, save, remove, refresh, onEditorEvent, onComponentEvent, getData } = new FormControl(ctrlState, props, emit).moduleInstall();

// 暴露内部状态及能力
defineExpose({ name, state, load, loadDraft, save, remove, refresh, getData });
</script>
<template>
  <a-form name="Info" class="app-form app-info-form" style="" :model="state.data" :rules="state.rules">
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.group1.visible" 
    name="group1" 
    title="订单基本信息"
    style=""
    :infoGroupMode="true"
    :titleBarCloseMode="0"
    :showCaption="false"
    :uIActionGroup="state.detailsModel.group1.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.customername.visible"
    name="customername"
    :rules="state.rules.customername"
    :labelWidth="130"
    :required="state.detailsModel.customername.required"
    label="客户"
    style="">
      <div class="form-editor-container" style="">
<AppSpan
  name="customername"
  :disabled="state.detailsModel.customername.disabled"
  dataType="25"
  :value="state.data.customername"
  :context="state.context"
  :viewParams="state.viewParams"/>
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.ordername.visible"
    name="ordername"
    :rules="state.rules.ordername"
    :labelWidth="130"
    :required="state.detailsModel.ordername.required"
    label="订单号"
    style="">
      <div class="form-editor-container" style="">
<AppSpan
  name="ordername"
  :disabled="state.detailsModel.ordername.disabled"
  dataType="25"
  :value="state.data.ordername"
  :context="state.context"
  :viewParams="state.viewParams"/>
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.orderdate.visible"
    name="orderdate"
    :rules="state.rules.orderdate"
    :labelWidth="130"
    :required="state.detailsModel.orderdate.required"
    label="订单时间"
    style="">
      <div class="form-editor-container" style="">
<AppSpan
  name="orderdate"
  :disabled="state.detailsModel.orderdate.disabled"
  dataType="5"
  valueFormat="YYYY-MM-DD"
  :value="state.data.orderdate"
  :context="state.context"
  :viewParams="state.viewParams"/>
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.state.visible"
    name="state"
    :rules="state.rules.state"
    :labelWidth="130"
    :required="state.detailsModel.state.required"
    label="订单状态"
    style="">
      <div class="form-editor-container" style="">
<AppSpan
  name="state"
  :disabled="state.detailsModel.state.disabled"
  codeListTag="Sample__OrderState"
  codeListType="STATIC"
  dataType="25"
  :value="state.data.state"
  :context="state.context"
  :viewParams="state.viewParams"/>
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.amount.visible"
    name="amount"
    :rules="state.rules.amount"
    :labelWidth="130"
    :required="state.detailsModel.amount.required"
    label="金额"
    style="">
      <div class="form-editor-container" style="">
<AppSpan
  name="amount"
  :disabled="state.detailsModel.amount.disabled"
  dataType="7"
  :value="state.data.amount"
  :context="state.context"
  :viewParams="state.viewParams"/>
      </div>
  </AppFormItem>
</a-col>
    </a-row>
  </AppFormGroup>
</a-col>
  </a-form>
</template>
<style lang="scss">
  .app-form {
    .ant-card-head {
      padding: 0;
      margin: 0 10px;
    }
  }
</style>