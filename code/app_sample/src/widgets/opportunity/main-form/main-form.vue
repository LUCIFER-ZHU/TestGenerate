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
    title="商机基本信息"
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
    v-show="state.detailsModel.opportunityname.visible"
    name="opportunityname"
    :rules="state.rules.opportunityname"
    :labelWidth="130"
    :required="state.detailsModel.opportunityname.required"
    label="商机名称"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="opportunityname"
  :disabled="state.detailsModel.opportunityname.disabled"
  :maxLength="200"
  type="text"
  :value="state.data.opportunityname"
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
  :lg="{span: 8, offset: 0 }"
  :md="{span: 8, offset: 0 }"
  :sm="{span: 8, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.exprevenue.visible"
    name="exprevenue"
    :rules="state.rules.exprevenue"
    :labelWidth="130"
    :required="state.detailsModel.exprevenue.required"
    label="预期收益"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="exprevenue"
  :disabled="state.detailsModel.exprevenue.disabled"
  type="text"
  :value="state.data.exprevenue"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 8, offset: 0 }"
  :md="{span: 8, offset: 0 }"
  :sm="{span: 8, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.expendtime.visible"
    name="expendtime"
    :rules="state.rules.expendtime"
    :labelWidth="130"
    :required="state.detailsModel.expendtime.required"
    label="预计结束时间"
    style="">
      <div class="form-editor-container" style="">
<AppDatePicker
  name="expendtime"
  :disabled="state.detailsModel.expendtime.disabled"
  dateFormat="YYYY-MM-DD HH:mm:ss"
  dateType="dateTime"
  :value="state.data.expendtime"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 8, offset: 0 }"
  :md="{span: 8, offset: 0 }"
  :sm="{span: 8, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.priority.visible"
    name="priority"
    :rules="state.rules.priority"
    :labelWidth="130"
    :required="state.detailsModel.priority.required"
    label="优先级"
    style="">
      <div class="form-editor-container" style="">
<AppDropdownList
  name="priority"
  codeListTag="Sample__Priority"
  codeListType="STATIC"
  
  :disabled="state.detailsModel.priority.disabled"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.priority"
  :data="state.data"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 8, offset: 0 }"
  :md="{span: 8, offset: 0 }"
  :sm="{span: 8, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.state.visible"
    name="state"
    :rules="state.rules.state"
    :labelWidth="130"
    :required="state.detailsModel.state.required"
    label="商机状态"
    style="">
      <div class="form-editor-container" style="">
<AppDropdownList
  name="state"
  codeListTag="Sample__OpportunityState"
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
  :lg="{span: 8, offset: 0 }"
  :md="{span: 8, offset: 0 }"
  :sm="{span: 8, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.persondataname.visible"
    name="persondataname"
    :rules="state.rules.persondataname"
    :labelWidth="130"
    :required="state.detailsModel.persondataname.required"
    label="销售员"
    style="">
      <div class="form-editor-container" style="">
<AppDataPicker
  name="persondataname"
  :data="state.data"
  valueItem="persondataid"
  :disabled="state.detailsModel.persondataname.disabled"
  :context="state.context"
  :viewParams="state.viewParams"
   pickUpView="ChartDataPickupView"
  :value="state.data.persondataname"
  @editorEvent="onEditorEvent"
/>       </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 8, offset: 0 }"
  :md="{span: 8, offset: 0 }"
  :sm="{span: 8, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.phone.visible"
    name="phone"
    :rules="state.rules.phone"
    :labelWidth="130"
    :required="state.detailsModel.phone.required"
    label="电话"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="phone"
  :disabled="state.detailsModel.phone.disabled"
  :maxLength="100"
  type="text"
  :value="state.data.phone"
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
    v-show="state.detailsModel.email.visible"
    name="email"
    :rules="state.rules.email"
    :labelWidth="130"
    :required="state.detailsModel.email.required"
    label="电子邮件"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="email"
  :disabled="state.detailsModel.email.disabled"
  :maxLength="100"
  type="text"
  :value="state.data.email"
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