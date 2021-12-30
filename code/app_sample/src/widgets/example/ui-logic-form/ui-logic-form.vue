<script setup lang="ts">
import { Subject } from 'rxjs';
import { CtrlConfig } from './ui-logic-form-config';
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
    name="UILogic" 
    class="ibiz-form"
    style=""
    :model="state.data" 
    :rules="state.rules">
      /*未找到模板[RAWITEM]*/<a-col :span="24">
  <IbizFormGroup name="grouppanel1" title="分组面板">
    <div class="app-form-layout-flex" style="">
<a-col :span="24">
  <IbizFormItem name="inputtext" label="输入提示">
<IbizInput
  name="inputtext"
  :value="state.data.inputtext"
  type="text"
  @editorEvent="handleEditorEvent"/>
    
  </IbizFormItem>
</a-col>
      /*未找到模板[BUTTON]*/    </div>
  </IbizFormGroup>
</a-col>
      /*未找到模板[RAWITEM]*/<a-col :span="24">
  <IbizFormGroup name="grouppanel2" title="分组面板">
    <a-row>
<a-col :span="24">
  <IbizFormGroup name="grouppanel5" title="分组面板">
    <div class="app-form-layout-flex" style="">
<a-col :span="24">
  <IbizFormItem name="exampleid" label="数据主键">
<IbizInput
  name="exampleid"
  :value="state.data.exampleid"
  type="text"
  @editorEvent="handleEditorEvent"/>
    
  </IbizFormItem>
</a-col>
      /*未找到模板[BUTTON]*/<a-col :span="24">
  <IbizFormItem name="fieldx" label="X值回显">
<IbizSpan
  name="fieldx"
  :value="state.data.fieldx"
  dataType="25"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
    </div>
  </IbizFormGroup>
</a-col>
<a-col :span="24">
  <IbizFormGroup name="grouppanel6" title="分组面板">
    <div class="app-form-layout-flex" style="">
<a-col :span="24">
  <IbizFormItem name="formitem" label="">
<IbizSpan
  name="formitem"
  :value="state.data.formitem"
  dataType="25"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
      /*未找到模板[BUTTON]*/<a-col :span="24">
  <IbizFormItem name="fieldz" label="Z值回显">
<IbizSpan
  name="fieldz"
  :value="state.data.fieldz"
  dataType="25"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="currentdate" label="当前日期">
<IbizSpan
  name="currentdate"
  :value="state.data.currentdate"
  dataType="5"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
    </div>
  </IbizFormGroup>
</a-col>
    </a-row>
  </IbizFormGroup>
</a-col>
      /*未找到模板[RAWITEM]*/<a-col :span="24">
  <IbizFormGroup name="grouppanel3" title="分组面板">
    <div class="app-form-layout-flex" style="">
<a-col :span="24">
  <IbizFormItem name="fieldupdate" label="更新值回显">
<IbizInput
  name="fieldupdate"
  :value="state.data.fieldupdate"
  type="number"
  @editorEvent="handleEditorEvent"/>
    
  </IbizFormItem>
</a-col>
      /*未找到模板[BUTTON]*/    </div>
  </IbizFormGroup>
</a-col>
  </a-form>
</template>
<style lang="scss">
.ibiz-form {
  margin: 20px !important;
}
</style>