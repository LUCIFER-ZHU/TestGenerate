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
  <IbizFormGroup name="group1" title="订单明细基本信息">
    <a-row>
<a-col :span="24">
  <IbizFormItem name="productname" label="产品">
<IbizDataPicker
  name="productname"
  :value="state.data.productname"
  :data="state.data"
  valueItem="productid"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"
  @editorEvent="handleEditorEvent"/>  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="price" label="单价">
<IbizInput
  name="price"
  :value="state.data.price"
  type="text"
  @editorEvent="handleEditorEvent"/>
    
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="qty" label="数量">
<IbizInput
  name="qty"
  :value="state.data.qty"
  type="text"
  @editorEvent="handleEditorEvent"/>
    
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="amount" label="小计">
<IbizInput
  name="amount"
  :value="state.data.amount"
  type="text"
  @editorEvent="handleEditorEvent"/>
    
  </IbizFormItem>
</a-col>
    </a-row>
  </IbizFormGroup>
</a-col>
  </a-form>
</template>
<style lang="scss">
.ibiz-form {
  margin: 20px !important;
}
</style>