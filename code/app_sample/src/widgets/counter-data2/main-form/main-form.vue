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
      title="计算器数据2基本信息"
      :visible="state.detailsModel.group1.visible" 
      :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
      :infoGroupMode="false"
      :titleBarCloseMode="0"
      :showCaption="false"
      :uIActionGroup="state.detailsModel.group1.uIActionGroup"
      @componentEvent="onComponentEvent">
        <AppFormItem 
          name="countertag"
          label="计数1"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.countertag"
          :required="state.detailsModel.countertag.required"
          :visible="state.detailsModel.countertag.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 8,colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppInput
            name="countertag"
            :disabled="state.detailsModel.countertag.disabled"
            type="text"
            :value="state.data.countertag"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="countertag2"
          label="计数2"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.countertag2"
          :required="state.detailsModel.countertag2.required"
          :visible="state.detailsModel.countertag2.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 8,colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppInput
            name="countertag2"
            :disabled="state.detailsModel.countertag2.disabled"
            type="text"
            :value="state.data.countertag2"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="countertag3"
          label="计数3"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.countertag3"
          :required="state.detailsModel.countertag3.required"
          :visible="state.detailsModel.countertag3.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 8,colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppInput
            name="countertag3"
            :disabled="state.detailsModel.countertag3.disabled"
            type="text"
            :value="state.data.countertag3"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="countertag4"
          label="计数4"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.countertag4"
          :required="state.detailsModel.countertag4.required"
          :visible="state.detailsModel.countertag4.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 8,colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppInput
            name="countertag4"
            :disabled="state.detailsModel.countertag4.disabled"
            type="text"
            :value="state.data.countertag4"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="countertag5"
          label="计数5"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.countertag5"
          :required="state.detailsModel.countertag5.required"
          :visible="state.detailsModel.countertag5.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 8,colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppInput
            name="countertag5"
            :disabled="state.detailsModel.countertag5.disabled"
            type="text"
            :value="state.data.countertag5"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="countertag6"
          label="计数6"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.countertag6"
          :required="state.detailsModel.countertag6.required"
          :visible="state.detailsModel.countertag6.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 8,colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppInput
            name="countertag6"
            :disabled="state.detailsModel.countertag6.disabled"
            type="text"
            :value="state.data.countertag6"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="countertag7"
          label="计数7"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.countertag7"
          :required="state.detailsModel.countertag7.required"
          :visible="state.detailsModel.countertag7.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 8,colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppInput
            name="countertag7"
            :disabled="state.detailsModel.countertag7.disabled"
            type="text"
            :value="state.data.countertag7"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="countertag8"
          label="计数8"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.countertag8"
          :required="state.detailsModel.countertag8.required"
          :visible="state.detailsModel.countertag8.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 8,colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppInput
            name="countertag8"
            :disabled="state.detailsModel.countertag8.disabled"
            type="text"
            :value="state.data.countertag8"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="countertag9"
          label="计数9"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.countertag9"
          :required="state.detailsModel.countertag9.required"
          :visible="state.detailsModel.countertag9.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 8,colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppInput
            name="countertag9"
            :disabled="state.detailsModel.countertag9.disabled"
            type="text"
            :value="state.data.countertag9"
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