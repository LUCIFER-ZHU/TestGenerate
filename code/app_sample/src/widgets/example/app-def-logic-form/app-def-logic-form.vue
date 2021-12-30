<script setup lang="ts">
import { Subject } from 'rxjs';
import { CtrlConfig } from './app-def-logic-form-config';
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
    name="AppDEFLogic" 
    class="ibiz-form"
    style=""
    :model="state.data" 
    :rules="state.rules">
<a-col :span="24">
  <IbizFormGroup name="group1" title="属性计算逻辑">
    <a-row>
<a-col :span="24">
  <IbizFormItem name="fieldx" label="X值">
<IbizSpan
  name="fieldx"
  :value="state.data.fieldx"
  dataType="6"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="fieldy" label="Y值">
<IbizSpan
  name="fieldy"
  :value="state.data.fieldy"
  dataType="6"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="appfield" label="XY前端计算值">
<IbizSpan
  name="appfield"
  :value="state.data.appfield"
  dataType="25"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="appfield2" label="XY前端计算值2">
<IbizSpan
  name="appfield2"
  :value="state.data.appfield2"
  dataType="25"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="appfield4" label="XY前端计算值4">
<IbizSpan
  name="appfield4"
  :value="state.data.appfield4"
  dataType="25"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
    </a-row>
  </IbizFormGroup>
</a-col>
      /*未找到模板[RAWITEM]*/<a-col :span="24">
  <IbizFormGroup name="grouppanel1" title="属性变更逻辑">
    <div class="app-form-layout-flex" style="">
<a-col :span="24">
  <IbizFormItem name="appfield3" label="XY前端计算值3">
<IbizInput
  name="appfield3"
  :value="state.data.appfield3"
  type="text"
  @editorEvent="handleEditorEvent"/>
    
  </IbizFormItem>
</a-col>
      /*未找到模板[BUTTON]*/    </div>
  </IbizFormGroup>
</a-col>
      /*未找到模板[RAWITEM]*/  </a-form>
</template>
<style lang="scss">
.ibiz-form {
  margin: 20px !important;
}
</style>