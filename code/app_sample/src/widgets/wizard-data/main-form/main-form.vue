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
  <IbizFormGroup name="group1" title="向导数据基本信息">
    <a-row>
<a-col :span="24">
  <IbizFormItem name="textfield" label="文本属性">
<IbizInput
  name="textfield"
  :value="state.data.textfield"
  :maxLength="100"
  type="text"
  @editorEvent="handleEditorEvent"/>
    
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="timefield" label="时间属性">
<IbizDatePicker
  name="timefield"
  :value="state.data.timefield"
  dateFormat="YYYY-MM-DD HH:mm:ss"
  dateType="dateTime"
  @editorEvent="handleEditorEvent"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="numfield" label="数值属性">
<IbizInput
  name="numfield"
  :value="state.data.numfield"
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