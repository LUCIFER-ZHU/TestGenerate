<script setup lang="ts">
import { Subject } from 'rxjs';
import { CtrlConfig } from './adv-group-form-config';
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
    name="AdvGroup" 
    class="ibiz-form"
    style=""
    :model="state.data" 
    :rules="state.rules">
      /*未找到模板[RAWITEM]*/<a-col :span="24">
  <IbizFormGroup name="group1" title="收缩分组（默认展开）">
    <a-row>
<a-col :span="24">
  <IbizFormItem name="formitem" label="表单项（默认已展开）">
<IbizInput
  name="formitem"
  :value="state.data.formitem"
  type="text"
  @editorEvent="handleEditorEvent"/>
    
  </IbizFormItem>
</a-col>
    </a-row>
  </IbizFormGroup>
</a-col>
      /*未找到模板[RAWITEM]*/<a-col :span="24">
  <IbizFormGroup name="grouppanel1" title="收缩分组（默认关闭）">
    <a-row>
<a-col :span="24">
  <IbizFormItem name="formitem1" label="表单项（打开才能看到）">
<IbizInput
  name="formitem1"
  :value="state.data.formitem1"
  type="text"
  @editorEvent="handleEditorEvent"/>
    
  </IbizFormItem>
</a-col>
    </a-row>
  </IbizFormGroup>
</a-col>
      /*未找到模板[RAWITEM]*/<a-col :span="24">
  <IbizFormGroup name="grouppanel2" title="表单界面行为组">
    <a-row>
<a-col :span="24">
  <IbizFormItem name="formitem2" label="表单项">
<IbizInput
  name="formitem2"
  :value="state.data.formitem2"
  type="text"
  @editorEvent="handleEditorEvent"/>
    
  </IbizFormItem>
</a-col>
    </a-row>
  </IbizFormGroup>
</a-col>
      /*未找到模板[RAWITEM]*/<a-col :span="24">
  <IbizFormGroup name="grouppanel3" title="更多分组成员">
    <a-row>
<a-col :span="24">
  <IbizFormItem name="formitem3" label="表单项">
<IbizInput
  name="formitem3"
  :value="state.data.formitem3"
  type="text"
  @editorEvent="handleEditorEvent"/>
    
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormGroup name="grouppanel4" title="受控内容">
    <a-row>
<a-col :span="24">
  <IbizFormItem name="formitem4" label="更多表单项1">
<IbizInput
  name="formitem4"
  :value="state.data.formitem4"
  type="text"
  @editorEvent="handleEditorEvent"/>
    
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem5" label="更多表单项2">
<IbizInput
  name="formitem5"
  :value="state.data.formitem5"
  type="text"
  @editorEvent="handleEditorEvent"/>
    
  </IbizFormItem>
</a-col>
    </a-row>
  </IbizFormGroup>
</a-col>
    </a-row>
  </IbizFormGroup>
</a-col>
      /*未找到模板[RAWITEM]*/<a-col :span="24">
  <IbizFormGroup name="grouppanel5" title="隐藏无值表单项">
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
  <IbizFormItem name="fieldz" label="Z值">
<IbizSpan
  name="fieldz"
  :value="state.data.fieldz"
  dataType="6"
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