<script setup lang="ts">
import { Subject } from 'rxjs';
import { CtrlConfig } from './main-3-form-config';
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
    name="Main_3" 
    class="ibiz-form"
    style=""
    :model="state.data" 
    :rules="state.rules">
<a-col :span="24">
  <IbizFormGroup name="grouppanel1" title="单项选择">
    <a-row>
<a-col :span="24">
  <IbizFormItem name="formitem" label="单项选择表格">
<IbizDataPicker
  name="formitem"
  :value="state.data.formitem"
  :data="state.data"
  valueItem="formitem1"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"
  :noAC="true"
  @editorEvent="handleEditorEvent"/>  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem1" label="值项">
<IbizSpan
  name="formitem1"
  :value="state.data.formitem1"
  dataType="25"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem2" label="单选选择树">
<IbizDataPicker
  name="formitem2"
  :value="state.data.formitem2"
  :data="state.data"
  valueItem="formitem3"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"
  :noAC="true"
  @editorEvent="handleEditorEvent"/>  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem3" label="值项">
<IbizSpan
  name="formitem3"
  :value="state.data.formitem3"
  dataType="25"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem4" label="树导航（列表）">
<IbizDataPicker
  name="formitem4"
  :value="state.data.formitem4"
  :data="state.data"
  valueItem="formitem5"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"
  :noAC="true"
  @editorEvent="handleEditorEvent"/>  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem5" label="值项">
<IbizSpan
  name="formitem5"
  :value="state.data.formitem5"
  dataType="25"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem6" label="单项选择列表">
<IbizDataPicker
  name="formitem6"
  :value="state.data.formitem6"
  :data="state.data"
  valueItem="formitem7"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"
  :noAC="true"
  @editorEvent="handleEditorEvent"/>  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem7" label="值项">
<IbizSpan
  name="formitem7"
  :value="state.data.formitem7"
  dataType="25"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem8" label="单选卡片">
<IbizDataPicker
  name="formitem8"
  :value="state.data.formitem8"
  :data="state.data"
  valueItem="formitem9"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"
  :noAC="true"
  @editorEvent="handleEditorEvent"/>  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem9" label="值项">
<IbizSpan
  name="formitem9"
  :value="state.data.formitem9"
  dataType="25"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem10" label="树导航（卡片）">
<IbizDataPicker
  name="formitem10"
  :value="state.data.formitem10"
  :data="state.data"
  valueItem="formitem11"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"
  :noAC="true"
  @editorEvent="handleEditorEvent"/>  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem11" label="值项">
<IbizSpan
  name="formitem11"
  :value="state.data.formitem11"
  dataType="25"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem12" label="树导航（表格）">
<IbizDataPicker
  name="formitem12"
  :value="state.data.formitem12"
  :data="state.data"
  valueItem="formitem13"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"
  :noAC="true"
  @editorEvent="handleEditorEvent"/>  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem13" label="值项">
<IbizSpan
  name="formitem13"
  :value="state.data.formitem13"
  dataType="25"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem14" label="表单项a">
<IbizInput
  name="formitem14"
  :value="state.data.formitem14"
  type="text"
  @editorEvent="handleEditorEvent"/>
    
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem15" label="表单项b">
<IbizInput
  name="formitem15"
  :value="state.data.formitem15"
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