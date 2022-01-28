<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './mob-main-form-state';
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
  <a-form name="Mob_main" class="app-form" style="" :model="state.data" :rules="state.rules">
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
    title="省份基本信息"
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
    v-show="state.detailsModel.provincename.visible"
    name="provincename"
    :rules="state.rules.provincename"
    :labelWidth="130"
    :required="state.detailsModel.provincename.required"
    label="省份名称"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="provincename"
  :disabled="state.detailsModel.provincename.disabled"
  :maxLength="200"
  type="text"
  :value="state.data.provincename"
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