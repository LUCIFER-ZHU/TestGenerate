<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './hidden-form-item-form-state';
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
    name="HiddenFormItem"
    class="app-form"
    style=""
    :model="state.data"
    :rules="state.rules"
    ref="xDataCtrl"
  >
    <AppFormGroup 
      name="group1"
      title="示例基本信息"
      :visible="state.detailsModel.group1.visible" 
      :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
      :infoGroupMode="false"
      :titleBarCloseMode="0"
      :showCaption="false"
      :uIActionGroup="state.detailsModel.group1.uIActionGroup"
      @componentEvent="onComponentEvent">
        <AppFormItem 
          name="fieldx"
          label="X值"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.fieldx"
          :required="state.detailsModel.fieldx.required"
          :visible="state.detailsModel.fieldx.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppInput
            name="fieldx"
            :disabled="state.detailsModel.fieldx.disabled"
            type="text"
            :value="state.data.fieldx"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="fieldy"
          label="Y值"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.fieldy"
          :required="state.detailsModel.fieldy.required"
          :visible="state.detailsModel.fieldy.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppInput
            name="fieldy"
            :disabled="state.detailsModel.fieldy.disabled"
            type="text"
            :value="state.data.fieldy"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="fieldz"
          label="Z值"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.fieldz"
          :required="state.detailsModel.fieldz.required"
          :visible="state.detailsModel.fieldz.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppInput
            name="fieldz"
            :disabled="state.detailsModel.fieldz.disabled"
            type="text"
            :value="state.data.fieldz"
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