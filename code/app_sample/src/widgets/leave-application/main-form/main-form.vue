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
    <a-tabs class="app-form-page">

<a-tab-pane key="formpage1" tab="基本信息">
  <a-row>
<a-col :span="24">
  <IbizFormGroup name="group1" title="请假申请基本信息">
    <a-row>
<a-col :span="24">
  <IbizFormItem name="leaveapplicationname" label="请假申请名称">
<IbizInput
  name="leaveapplicationname"
  :value="state.data.leaveapplicationname"
  :maxLength="200"
  type="text"
  @editorEvent="handleEditorEvent"/>
    
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="state" label="申请状态">
<IbizDropdownList
  name="state"
  :value="state.data.state"
  :data="state.data"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"
  @editorEvent="handleEditorEvent"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="step" label="审批步骤">
<IbizInput
  name="step"
  :value="state.data.step"
  :maxLength="100"
  type="text"
  @editorEvent="handleEditorEvent"/>
    
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="customername" label="客户名称">
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
  <IbizFormItem name="ext_data" label="扩展数据">
<IbizInput
  name="ext_data"
  :value="state.data.ext_data"
  :maxLength="100"
  type="text"
  @editorEvent="handleEditorEvent"/>
    
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="ext_param" label="扩展参数">
<IbizInput
  name="ext_param"
  :value="state.data.ext_param"
  :maxLength="100"
  type="text"
  @editorEvent="handleEditorEvent"/>
    
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="ext_param2" label="扩展参数2">
<IbizInput
  name="ext_param2"
  :value="state.data.ext_param2"
  :maxLength="100"
  type="text"
  @editorEvent="handleEditorEvent"/>
    
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="deptid" label="组织部门标识">
<IbizInput
  name="deptid"
  :value="state.data.deptid"
  :maxLength="60"
  type="text"
  @editorEvent="handleEditorEvent"/>
    
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="orgid" label="组织机构标识">
<IbizInput
  name="orgid"
  :value="state.data.orgid"
  :maxLength="60"
  type="text"
  @editorEvent="handleEditorEvent"/>
    
  </IbizFormItem>
</a-col>
    </a-row>
  </IbizFormGroup>
</a-col>
  </a-row>
</a-tab-pane>
<a-tab-pane key="formpage2" tab="其它">
  <a-row>
<a-col :span="24">
  <IbizFormGroup name="group2" title="操作信息">
    <a-row>
<a-col :span="24">
  <IbizFormItem name="createman" label="建立人">
<IbizSpan
  name="createman"
  :value="state.data.createman"
  dataType="25"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="createdate" label="建立时间">
<IbizSpan
  name="createdate"
  :value="state.data.createdate"
  dataType="5"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="updateman" label="更新人">
<IbizSpan
  name="updateman"
  :value="state.data.updateman"
  dataType="25"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="updatedate" label="更新时间">
<IbizSpan
  name="updatedate"
  :value="state.data.updatedate"
  dataType="5"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
    </a-row>
  </IbizFormGroup>
</a-col>
  </a-row>
</a-tab-pane>    </a-tabs>
  </a-form>
</template>
<style lang="scss">
.ibiz-form {
  margin: 20px !important;
}
</style>