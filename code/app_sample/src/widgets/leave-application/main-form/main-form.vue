<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './main-form-state';
import { FormControl, IActionParam, IParam, ControlAction, IContext } from '@core';
interface Props {
  context: IContext;
  viewParams?: IParam;
  controlAction: ControlAction;
  showBusyIndicator?: boolean;
  viewSubject: Subject<IActionParam>;
}

const props = withDefaults(defineProps < Props > (), {
  viewSubject: () => new Subject < IActionParam > (),
  showBusyIndicator: true,
})

// emit声明
interface CtrlEmit {
  (name: "ctrlEvent", value: IActionParam): void;
}

const emit = defineEmits <CtrlEmit> ();

// 安装功能模块，提供状态和能力方法
const { state, onEditorEvent, onComponentEvent } = new FormControl(ctrlState, props, emit).moduleInstall();

// 暴露内部状态及能力
defineExpose({ state, name: 'form' });
</script>
<template>
  <a-form name="Main" class="app-form" style="" :model="state.data" :rules="state.rules">
    <a-tabs class="app-form-page">
<a-tab-pane v-show="state.detailsModel.formpage1.visible"  key="formpage1">
  <template #tab>
    <AppIconText text="基本信息"/>
  </template>
  <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.group1.visible" 
    name="group1" 
    title="请假申请基本信息"
    style=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="true"
    :uIActionGroup="state.detailsModel.group1.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.leaveapplicationname.visible"
    name="leaveapplicationname"
    :rules="state.rules.leaveapplicationname"
    :labelWidth="130"
    :required="state.detailsModel.leaveapplicationname.required"
    label="请假申请名称"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="leaveapplicationname"
  :disabled="state.detailsModel.leaveapplicationname.disabled"
  :maxLength="200"
  type="text"
  :value="state.data.leaveapplicationname"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.state.visible"
    name="state"
    :rules="state.rules.state"
    :labelWidth="130"
    :required="state.detailsModel.state.required"
    label="申请状态"
    style="">
      <div class="form-editor-container" style="">
<AppDropdownList
  name="state"
  codeListTag="Sample__LeaveApplicationState"
  codeListType="STATIC"
  
  :disabled="state.detailsModel.state.disabled"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.state"
  :data="state.data"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.step.visible"
    name="step"
    :rules="state.rules.step"
    :labelWidth="130"
    :required="state.detailsModel.step.required"
    label="审批步骤"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="step"
  :disabled="state.detailsModel.step.disabled"
  :maxLength="100"
  type="text"
  :value="state.data.step"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.customername.visible"
    name="customername"
    :rules="state.rules.customername"
    :labelWidth="130"
    :required="state.detailsModel.customername.required"
    label="客户名称"
    style="">
      <div class="form-editor-container" style="">
<AppDataPicker
  name="customername"
  :data="state.data"
  valueItem="customerid"
  :disabled="state.detailsModel.customername.disabled"
  :context="state.context"
  :viewParams="state.viewParams"
   pickUpView="ChartDataPickupView"
  :value="state.data.customername"
  @editorEvent="onEditorEvent"
/>       </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.ext_data.visible"
    name="ext_data"
    :rules="state.rules.ext_data"
    :labelWidth="130"
    :required="state.detailsModel.ext_data.required"
    label="扩展数据"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="ext_data"
  :disabled="state.detailsModel.ext_data.disabled"
  :maxLength="100"
  type="text"
  :value="state.data.ext_data"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.ext_param.visible"
    name="ext_param"
    :rules="state.rules.ext_param"
    :labelWidth="130"
    :required="state.detailsModel.ext_param.required"
    label="扩展参数"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="ext_param"
  :disabled="state.detailsModel.ext_param.disabled"
  :maxLength="100"
  type="text"
  :value="state.data.ext_param"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.ext_param2.visible"
    name="ext_param2"
    :rules="state.rules.ext_param2"
    :labelWidth="130"
    :required="state.detailsModel.ext_param2.required"
    label="扩展参数2"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="ext_param2"
  :disabled="state.detailsModel.ext_param2.disabled"
  :maxLength="100"
  type="text"
  :value="state.data.ext_param2"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.deptid.visible"
    name="deptid"
    :rules="state.rules.deptid"
    :labelWidth="130"
    :required="state.detailsModel.deptid.required"
    label="组织部门标识"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="deptid"
  :disabled="state.detailsModel.deptid.disabled"
  :maxLength="60"
  type="text"
  :value="state.data.deptid"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.orgid.visible"
    name="orgid"
    :rules="state.rules.orgid"
    :labelWidth="130"
    :required="state.detailsModel.orgid.required"
    label="组织机构标识"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="orgid"
  :disabled="state.detailsModel.orgid.disabled"
  :maxLength="60"
  type="text"
  :value="state.data.orgid"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
    </a-row>
  </AppFormGroup>
</a-col>
  </a-row>
</a-tab-pane>
<a-tab-pane v-show="state.detailsModel.formpage2.visible"  key="formpage2">
  <template #tab>
    <AppIconText text="其它"/>
  </template>
  <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.group2.visible" 
    name="group2" 
    title="操作信息"
    style=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="true"
    :uIActionGroup="state.detailsModel.group2.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.createman.visible"
    name="createman"
    :rules="state.rules.createman"
    :labelWidth="130"
    :required="state.detailsModel.createman.required"
    label="建立人"
    style="">
      <div class="form-editor-container" style="">
<AppSpan
  name="createman"
  :disabled="state.detailsModel.createman.disabled"
  codeListTag="SysOperator"
  codeListType="DYNAMIC"
  dataType="25"
  :value="state.data.createman"
  :context="state.context"
  :viewParams="state.viewParams"/>
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.createdate.visible"
    name="createdate"
    :rules="state.rules.createdate"
    :labelWidth="130"
    :required="state.detailsModel.createdate.required"
    label="建立时间"
    style="">
      <div class="form-editor-container" style="">
<AppSpan
  name="createdate"
  :disabled="state.detailsModel.createdate.disabled"
  dataType="5"
  valueFormat="YYYY-MM-DD HH:mm:ss"
  :value="state.data.createdate"
  :context="state.context"
  :viewParams="state.viewParams"/>
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.updateman.visible"
    name="updateman"
    :rules="state.rules.updateman"
    :labelWidth="130"
    :required="state.detailsModel.updateman.required"
    label="更新人"
    style="">
      <div class="form-editor-container" style="">
<AppSpan
  name="updateman"
  :disabled="state.detailsModel.updateman.disabled"
  codeListTag="SysOperator"
  codeListType="DYNAMIC"
  dataType="25"
  :value="state.data.updateman"
  :context="state.context"
  :viewParams="state.viewParams"/>
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.updatedate.visible"
    name="updatedate"
    :rules="state.rules.updatedate"
    :labelWidth="130"
    :required="state.detailsModel.updatedate.required"
    label="更新时间"
    style="">
      <div class="form-editor-container" style="">
<AppSpan
  name="updatedate"
  :disabled="state.detailsModel.updatedate.disabled"
  dataType="5"
  valueFormat="YYYY-MM-DD HH:mm:ss"
  :value="state.data.updatedate"
  :context="state.context"
  :viewParams="state.viewParams"/>
      </div>
  </AppFormItem>
</a-col>
    </a-row>
  </AppFormGroup>
</a-col>
  </a-row>
</a-tab-pane>
    </a-tabs>
  </a-form>
</template>
<style lang="scss">
  .app-form {
    .ant-card-head {
      padding: 0;
      margin: 0 10px;
    }
  }
</style>