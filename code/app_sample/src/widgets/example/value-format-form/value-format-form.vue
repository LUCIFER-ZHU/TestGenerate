<script setup lang="ts">
import { Subject } from 'rxjs';
import { CtrlConfig } from './value-format-form-config';
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
    name="ValueFormat" 
    class="ibiz-form"
    style=""
    :model="state.data" 
    :rules="state.rules">
<a-col :span="24">
  <IbizFormGroup name="group1" title="分组">
    <a-row>
      /*未找到模板[RAWITEM]*/<a-col :span="24">
  <IbizFormItem name="format1" label="数值编辑器格式化">
<IbizInput
  name="format1"
  :value="state.data.format1"
  type="number"
  @editorEvent="handleEditorEvent"/>
    
  </IbizFormItem>
</a-col>
      /*未找到模板[RAWITEM]*/<a-col :span="24">
  <IbizFormItem name="format2" label="标签编辑器格式化">
<IbizSpan
  name="format2"
  :value="state.data.format2"
  dataType="6"
  :precision="4"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
      /*未找到模板[RAWITEM]*/<a-col :span="24">
  <IbizFormItem name="datatype" label="表单项">
<IbizSpan
  name="datatype"
  :value="state.data.datatype"
  dataType="25"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
      /*未找到模板[RAWITEM]*/<a-col :span="24">
  <IbizFormItem name="formitem" label="表单项">
<IbizSpan
  name="formitem"
  :value="state.data.formitem"
  dataType="25"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
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