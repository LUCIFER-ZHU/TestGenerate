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
      title="向导数据基本信息"
      :visible="state.detailsModel.group1.visible" 
      :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
      :infoGroupMode="false"
      :titleBarCloseMode="0"
      :showCaption="false"
      :uIActionGroup="state.detailsModel.group1.uIActionGroup"
      @componentEvent="onComponentEvent">
        <AppFormItem 
          name="textfield"
          label="文本属性"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.textfield"
          :required="state.detailsModel.textfield.required"
          :visible="state.detailsModel.textfield.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppInput
            name="textfield"
            :disabled="state.detailsModel.textfield.disabled"
            :maxLength="100"
            type="text"
            :value="state.data.textfield"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="timefield"
          label="时间属性"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.timefield"
          :required="state.detailsModel.timefield.required"
          :visible="state.detailsModel.timefield.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="width: 160.0px;">
          <AppDatePicker
            name="timefield"
            :disabled="state.detailsModel.timefield.disabled"
            dateFormat="YYYY-MM-DD HH:mm:ss"
            dateType="dateTime"
            :value="state.data.timefield"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="numfield"
          label="数值属性"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.numfield"
          :required="state.detailsModel.numfield.required"
          :visible="state.detailsModel.numfield.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppInput
            name="numfield"
            :disabled="state.detailsModel.numfield.disabled"
            type="text"
            :value="state.data.numfield"
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