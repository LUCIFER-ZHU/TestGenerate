<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './main-form-state';
import { FormControl, IActionParam, IParam, ControlAction, IContext } from '@core';
interface Props {
  name:string,
  parent: IParam;
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
const { name, state, load, loadDraft, save, remove, refresh, onEditorEvent, onComponentEvent, getData, xDataCtrl } = new FormControl(ctrlState, props, emit).moduleInstall();

// 暴露内部状态及能力
defineExpose({ name, state, load, loadDraft, save, remove, refresh, getData });
</script>
<template>
  <a-form
    name="Main"
    class="app-form"
    style=""
    :model="state.data"
    :rules="state.rules"
    ref="xDataCtrl"
  >
    <AppFormGroup 
      name="group1"
      title="视图消息数据基本信息"
      :visible="state.detailsModel.group1.visible" 
      :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
      :infoGroupMode="false"
      :titleBarCloseMode="0"
      :showCaption="false"
      :uIActionGroup="state.detailsModel.group1.uIActionGroup"
      @componentEvent="onComponentEvent">
        <AppFormItem 
          name="viewmsgdataname"
          label="视图消息标题"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.viewmsgdataname"
          :required="state.detailsModel.viewmsgdataname.required"
          :visible="state.detailsModel.viewmsgdataname.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
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
        <AppFormItem 
          name="type"
          label="视图消息类型"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.type"
          :required="state.detailsModel.type.required"
          :visible="state.detailsModel.type.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
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
        <AppFormItem 
          name="location"
          label="视图消息位置"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.location"
          :required="state.detailsModel.location.required"
          :visible="state.detailsModel.location.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
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
        <AppFormItem 
          name="content"
          label="视图消息内容"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.content"
          :required="state.detailsModel.content.required"
          :visible="state.detailsModel.content.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="height: 200.0px">
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
    </AppFormGroup>
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