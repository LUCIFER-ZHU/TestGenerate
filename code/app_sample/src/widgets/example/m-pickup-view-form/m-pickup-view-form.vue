<script setup lang="ts">
import { Subject } from 'rxjs';
import { CtrlConfig } from './m-pickup-view-form-config';
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
    name="MPickupView" 
    class="ibiz-form"
    style=""
    :model="state.data" 
    :rules="state.rules">
<a-col :span="24">
  <IbizFormGroup name="group1" title="多项选择">
    <a-row>
<a-col :span="24">
  <IbizFormItem name="formitem" label="多项选择表格视图">
<IbizDataPicker
  name="formitem"
  :value="state.data.formitem"
  :data="state.data"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"
  :multiple="true"
  @editorEvent="handleEditorEvent"/>  </IbizFormItem>
</a-col>
    </a-row>
  </IbizFormGroup>
</a-col>
<a-col :span="24">
  <IbizFormGroup name="grouppanel1" title="多项选择树">
    <a-row>
<a-col :span="24">
  <IbizFormItem name="formitem2" label="多项选择树视图">
<IbizDataPicker
  name="formitem2"
  :value="state.data.formitem2"
  :data="state.data"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"
  :multiple="true"
  @editorEvent="handleEditorEvent"/>  </IbizFormItem>
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