<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './main-form-state';
import { FormControl, IActionParam, IParam, ControlAction, IContext } from '@core';
import OrderDetailLineEditGridView from '@views/sample/order-detail-line-edit-grid-view';
interface Props {
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
const { state, onEditorEvent, onComponentEvent } = new FormControl(ctrlState, props, emit).moduleInstall();

// 暴露内部状态及能力
defineExpose({ state, name: 'form' });
</script>
<template>
  <a-form name="Main" class="app-form" style="" :model="state.data" :rules="state.rules">
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
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="false"
    :uIActionGroup="state.detailsModel.group1.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 8, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
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
<AppInput
  name="ordername"
  :disabled="state.detailsModel.ordername.disabled"
  :maxLength="200"
  type="text"
  :value="state.data.ordername"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 18, offset: 0 }"
  :md="{span: 18, offset: 0 }"
  :sm="{span: 18, offset: 0 }"
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
<AppDataPicker
  name="customername"
  :data="state.data"
  valueItem="customerid"
  :disabled="state.detailsModel.customername.disabled"
  :context="state.context"
  :viewParams="state.viewParams"
   pickUpView="ChartDataPickupView"
  :value="state.data.customername"
  @editorEvent="onEditorEvent"
/>       </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 8, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
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
<AppDatePicker
  name="orderdate"
  :disabled="state.detailsModel.orderdate.disabled"
  dateFormat="YYYY-MM-DD"
  dateType="date"
  :value="state.data.orderdate"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 8, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
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
<AppInput
  name="amount"
  :disabled="state.detailsModel.amount.disabled"
  type="text"
  :value="state.data.amount"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 8, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
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
<AppDropdownList
  name="state"
  codeListTag="Sample__OrderState"
  codeListType="STATIC"
  
  :disabled="state.detailsModel.state.disabled"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.state"
  :data="state.data"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
    </a-row>
  </AppFormGroup>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.grouppanel1.visible" 
    name="grouppanel1" 
    title="订单明细"
    style=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="false"
    :uIActionGroup="state.detailsModel.grouppanel1.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormDruipart 
    v-show="state.detailsModel.druipart1.visible" 
    
    style=""
    name="druipart1" 
    title="" 
    :context="context"
    :viewParams="viewParams"
    :data="state.data"
    :viewSubject="state.viewSubject"
    v-slot="druipartParams">
    <OrderDetailLineEditGridView
      :class="['app-view-layout--from-druipart']"
      :context="druipartParams.context"
      :viewParams="druipartParams.viewParams"
      :viewDefaultUsage="false"
      :noViewCaption="true"
      @viewEvent="druipartParams.viewEvent"
    >
    </OrderDetailLineEditGridView>
  </AppFormDruipart>
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