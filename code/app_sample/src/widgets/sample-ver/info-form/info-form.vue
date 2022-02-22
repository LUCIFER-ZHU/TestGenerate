<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './info-form-state';
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
    name="Info"
    class="app-form formitem-full-height"
    style=""
    :model="state.data"
    :rules="state.rules"
    ref="xDataCtrl"
  >
    <AppFormGroup 
      name="group1"
      title="示例版本基本信息"
      :visible="state.detailsModel.group1.visible" 
      :layoutOpts="{selfLayout: 'FLEX',dir: 'column', 
parentLayout: 'TABLE_24COL',colMD: 24,}"
      :infoGroupMode="false"
      :titleBarCloseMode="0"
      :showCaption="false"
      :uIActionGroup="state.detailsModel.group1.uIActionGroup"
      @componentEvent="onComponentEvent">
        <AppFormItem 
          name="samplevername"
          label="标题"
          labelPos="NONE"
          :labelWidth="0"
          :showLabel="false"
          :rules="state.rules.samplevername"
          :required="state.detailsModel.samplevername.required"
          :visible="state.detailsModel.samplevername.visible" 
          :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
          class="h2-title"
          >
          <div class="form-editor-container" style="">
          <AppSpan
            name="samplevername"
            :disabled="state.detailsModel.samplevername.disabled"
            dataType="25"
            :value="state.data.samplevername"
            :context="state.context"
            :viewParams="state.viewParams"/>
          </div>
        </AppFormItem>
        <AppFormItem 
          name="content"
          label="内容"
          labelPos="NONE"
          :labelWidth="0"
          :showLabel="false"
          :rules="state.rules.content"
          :required="state.detailsModel.content.required"
          :visible="state.detailsModel.content.visible" 
          :layoutOpts="{parentLayout: 'FLEX',grow: 1,}"
          >
          <div class="form-editor-container" style="">
          <AppRaw
            name="content"
            :date="state.data"
            :disabled="state.detailsModel.content.disabled"
            contentType="RAW"
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