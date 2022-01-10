<script setup lang="ts">
import { Subject } from 'rxjs';
import { CtrlConfig } from './main-form-config';
import { FormControl, IActionParam, IParam, ControlAction, IContext } from '@core';

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
const { state, handleEditorEvent } = new FormControl(CtrlConfig).moduleInstall(props, emit);

</script>
<template>
  <a-form 
    name="Main" 
    class="ibiz-form"
    style=""
    :model="state.data" 
    :rules="state.rules">
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormGroup v-show="state.detailsModel.group1.visible" name="group1" title="订单基本信息">
    <a-row>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 8, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem v-show="state.detailsModel.ordername.visible" name="ordername" label="订单号">
<IbizInput
  name="ordername"
  :maxLength="200"
  type="text"
  :value="state.data.ordername"
  @editorEvent="handleEditorEvent"
/> 
    
  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 18, offset: 0 }"
  :md="{span: 18, offset: 0 }"
  :sm="{span: 18, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem v-show="state.detailsModel.customername.visible" name="customername" label="客户">
<IbizDataPicker
  name="customername"
  :data="state.data"
  valueItem="customerid"
  :context="state.context"
  :viewParams="state.viewParams"
   pickUpView="ChartDataPickupView"
  :value="state.data.customername"
  @editorEvent="handleEditorEvent"
/>   </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 8, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem v-show="state.detailsModel.orderdate.visible" name="orderdate" label="订单时间">
<IbizDatePicker
  name="orderdate"
  dateFormat="YYYY-MM-DD"
  dateType="date"
  :value="state.data.orderdate"
  @editorEvent="handleEditorEvent"
/> 
  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 8, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem v-show="state.detailsModel.amount.visible" name="amount" label="金额">
<IbizInput
  name="amount"
  type="text"
  :value="state.data.amount"
  @editorEvent="handleEditorEvent"
/> 
    
  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 8, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem v-show="state.detailsModel.state.visible" name="state" label="订单状态">
<IbizDropdownList
  name="state"
  :data="state.data"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.state"
  @editorEvent="handleEditorEvent"
/> 
  </IbizFormItem>
</a-col>
    </a-row>
  </IbizFormGroup>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormGroup v-show="state.detailsModel.grouppanel1.visible" name="grouppanel1" title="订单明细">
    <a-row>
关系界面未实现    </a-row>
  </IbizFormGroup>
</a-col>
  </a-form>
</template>
<style lang="scss">
  .ibiz-form {
    .ant-card-head {
      padding: 0;
      margin: 0 10px;
    }
  }
</style>