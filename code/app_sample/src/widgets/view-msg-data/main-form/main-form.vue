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
    title="视图消息数据基本信息"
    style=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="false"
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
    v-show="state.detailsModel.viewmsgdataname.visible"
    name="viewmsgdataname"
    :rules="state.rules.viewmsgdataname"
    :labelWidth="130"
    :required="state.detailsModel.viewmsgdataname.required"
    label="视图消息标题"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="viewmsgdataname"
  :disabled="state.detailsModel.viewmsgdataname.disabled"
  :maxLength="200"
  type="text"
  :value="state.data.viewmsgdataname"
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
    v-show="state.detailsModel.type.visible"
    name="type"
    :rules="state.rules.type"
    :labelWidth="130"
    :required="state.detailsModel.type.required"
    label="视图消息类型"
    style="">
      <div class="form-editor-container" style="">
<AppDropdownList
  name="type"
  codeListTag="Sample__CodeListViewMsgType"
  codeListType="STATIC"
  
  :disabled="state.detailsModel.type.disabled"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.type"
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
    v-show="state.detailsModel.location.visible"
    name="location"
    :rules="state.rules.location"
    :labelWidth="130"
    :required="state.detailsModel.location.required"
    label="视图消息位置"
    style="">
      <div class="form-editor-container" style="">
<AppDropdownList
  name="location"
  codeListTag="Sample__CodeListViewMsgLocation"
  codeListType="STATIC"
  
  :disabled="state.detailsModel.location.disabled"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.location"
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
    v-show="state.detailsModel.content.visible"
    name="content"
    :rules="state.rules.content"
    :labelWidth="130"
    :required="state.detailsModel.content.required"
    label="视图消息内容"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="content"
  :disabled="state.detailsModel.content.disabled"
  :maxLength="1000"
  :showMaxLength="true"
  type="textarea"
  :value="state.data.content"
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