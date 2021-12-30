<script setup lang="ts">
import { Subject } from 'rxjs';
import { CtrlConfig } from './main-form-config';
import { FormControl, IActionParam, IParam, ControlAction } from '@ibiz-core';

interface Props {
  context: IParam;
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
const { state, handleEditorEvent } = new FormControl(CtrlConfig).moduleInstall(props);

</script>
<template>
  <a-form 
    name="Main" 
    class="ibiz-form"
    style=""
    :model="state.data" 
    :rules="state.rules">
<a-col :span="24">
  <IbizFormGroup name="group1" title="订单基本信息">
    <a-row>
<a-col :span="24">
  <IbizFormItem name="ordername" label="订单号">
<IbizInput
  name="ordername"
  :value="state.data.ordername"
  :maxLength="200"
  type="text"
  @editorEvent="handleEditorEvent"/>
    
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="customername" label="客户">
<IbizDataPicker
  name="customername"
  :value="state.data.customername"
  :data="state.data"
  valueItem="customerid"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"
  @editorEvent="handleEditorEvent"/>  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="orderdate" label="订单时间">
<IbizDatePicker
  name="orderdate"
  :value="state.data.orderdate"
  dateFormat="YYYY-MM-DD"
  dateType="date"
  @editorEvent="handleEditorEvent"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="amount" label="金额">
<IbizInput
  name="amount"
  :value="state.data.amount"
  type="text"
  @editorEvent="handleEditorEvent"/>
    
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="state" label="订单状态">
<IbizDropdownList
  name="state"
  :value="state.data.state"
  :data="state.data"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"
  @editorEvent="handleEditorEvent"/>
  </IbizFormItem>
</a-col>
    </a-row>
  </IbizFormGroup>
</a-col>
<a-col :span="24">
  <IbizFormGroup name="grouppanel1" title="订单明细">
    <a-row>
      /*未找到模板[DRUIPART]*/    </a-row>
  </IbizFormGroup>
</a-col>
  </a-form>
</template>
<style lang="scss">
.ibiz-form {
  margin: 20px !important;
}
</style>