<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './main-form-state';
import { FormControl, IActionParam, IParam, ControlAction, IContext } from '@core';
interface Props {
  name:string,
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
const { name, state, load, loadDraft, save, remove, refresh, onEditorEvent, onComponentEvent, getData } = new FormControl(ctrlState, props, emit).moduleInstall();

// 暴露内部状态及能力
defineExpose({ name, state, load, loadDraft, save, remove, refresh, getData });
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
    title="订单报表数据基本信息"
    style=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="true"
    :uIActionGroup="state.detailsModel.group1.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 8, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.customerid.visible"
    name="customerid"
    :rules="state.rules.customerid"
    :labelWidth="130"
    :required="state.detailsModel.customerid.required"
    label="客户标识"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="customerid"
  :disabled="state.detailsModel.customerid.disabled"
  :maxLength="100"
  type="text"
  :value="state.data.customerid"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 8, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
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
<AppInput
  name="customername"
  :disabled="state.detailsModel.customername.disabled"
  :maxLength="100"
  type="text"
  :value="state.data.customername"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 8, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.monthval.visible"
    name="monthval"
    :rules="state.rules.monthval"
    :labelWidth="130"
    :required="state.detailsModel.monthval.required"
    label="月份"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="monthval"
  :disabled="state.detailsModel.monthval.disabled"
  type="text"
  :value="state.data.monthval"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 8, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.quarterval.visible"
    name="quarterval"
    :rules="state.rules.quarterval"
    :labelWidth="130"
    :required="state.detailsModel.quarterval.required"
    label="季度"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="quarterval"
  :disabled="state.detailsModel.quarterval.disabled"
  type="text"
  :value="state.data.quarterval"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 8, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.yearval.visible"
    name="yearval"
    :rules="state.rules.yearval"
    :labelWidth="130"
    :required="state.detailsModel.yearval.required"
    label="年份"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="yearval"
  :disabled="state.detailsModel.yearval.disabled"
  type="text"
  :value="state.data.yearval"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 8, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.totalval.visible"
    name="totalval"
    :rules="state.rules.totalval"
    :labelWidth="130"
    :required="state.detailsModel.totalval.required"
    label="合计"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="totalval"
  :disabled="state.detailsModel.totalval.disabled"
  type="text"
  :value="state.data.totalval"
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