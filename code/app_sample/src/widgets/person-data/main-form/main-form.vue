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
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.group1.visible" 
    name="group1" 
    title="人员数据基本信息"
    style=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="false"
    :uIActionGroup="state.detailsModel.group1.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 16, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.grouppanel1.visible" 
    name="grouppanel1" 
    title="分组面板"
    style=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="false"
    :uIActionGroup="state.detailsModel.grouppanel1.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.persondataname.visible"
    name="persondataname"
    :rules="state.rules.persondataname"
    :labelWidth="130"
    :required="state.detailsModel.persondataname.required"
    label="姓名"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="persondataname"
  :disabled="state.detailsModel.persondataname.disabled"
  :maxLength="200"
  type="text"
  :value="state.data.persondataname"
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
    v-show="state.detailsModel.orgdataname.visible"
    name="orgdataname"
    :rules="state.rules.orgdataname"
    :labelWidth="130"
    :required="state.detailsModel.orgdataname.required"
    label="组织名称"
    style="">
      <div class="form-editor-container" style="">
<AppSpan
  name="orgdataname"
  :disabled="state.detailsModel.orgdataname.disabled"
  dataType="25"
  :value="state.data.orgdataname"
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
    v-show="state.detailsModel.deptdataname.visible"
    name="deptdataname"
    :rules="state.rules.deptdataname"
    :labelWidth="130"
    :required="state.detailsModel.deptdataname.required"
    label="部门名称"
    style="">
      <div class="form-editor-container" style="">
<AppSpan
  name="deptdataname"
  :disabled="state.detailsModel.deptdataname.disabled"
  dataType="25"
  :value="state.data.deptdataname"
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
    v-show="state.detailsModel.idcard.visible"
    name="idcard"
    :rules="state.rules.idcard"
    :labelWidth="130"
    :required="state.detailsModel.idcard.required"
    label="身份证"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="idcard"
  :disabled="state.detailsModel.idcard.disabled"
  :maxLength="18"
  type="text"
  :value="state.data.idcard"
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
    v-show="state.detailsModel.gender.visible"
    name="gender"
    :rules="state.rules.gender"
    :labelWidth="130"
    :required="state.detailsModel.gender.required"
    label="性别"
    style="">
      <div class="form-editor-container" style="">
<AppDropdownList
  name="gender"
  codeListTag="Sample__Gender"
  codeListType="STATIC"
  
  :disabled="state.detailsModel.gender.disabled"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.gender"
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
    v-show="state.detailsModel.age.visible"
    name="age"
    :rules="state.rules.age"
    :labelWidth="130"
    :required="state.detailsModel.age.required"
    label="年龄"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="age"
  :disabled="state.detailsModel.age.disabled"
  type="text"
  :value="state.data.age"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
    </a-row>
  </AppFormGroup>
</a-col>
<a-col
  :lg="{span: 8, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.avatar.visible"
    name="avatar"
    :rules="state.rules.avatar"
    :labelWidth="130"
    :required="state.detailsModel.avatar.required"
    label="头像"
    style="width: 300.0px;height: 300.0px">
      <div class="form-editor-container" style="">
<AppUpload
  name="avatar"
  :disabled="state.detailsModel.avatar.disabled"
  :limit="1"
  accept='image/*'
  listType="picture-card"
  :value="state.data.avatar"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
    </a-row>
  </AppFormGroup>
</a-col>
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