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
      title="示例版本基本信息"
      :visible="state.detailsModel.group1.visible" 
      :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
      :infoGroupMode="false"
      :titleBarCloseMode="0"
      :showCaption="false"
      :uIActionGroup="state.detailsModel.group1.uIActionGroup"
      @componentEvent="onComponentEvent">
        <AppFormItem 
          name="samplevername"
          label="标题"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.samplevername"
          :required="state.detailsModel.samplevername.required"
          :visible="state.detailsModel.samplevername.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppInput
            name="samplevername"
            :disabled="state.detailsModel.samplevername.disabled"
            :maxLength="200"
            type="text"
            :value="state.data.samplevername"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="verstr"
          label="版本号"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.verstr"
          :required="state.detailsModel.verstr.required"
          :visible="state.detailsModel.verstr.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppInput
            name="verstr"
            :disabled="state.detailsModel.verstr.disabled"
            :maxLength="100"
            type="text"
            :value="state.data.verstr"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="type"
          label="分类"
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
            codeListTag="Sample__SampleCat"
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
          name="content"
          label="内容"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.content"
          :required="state.detailsModel.content.required"
          :visible="state.detailsModel.content.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          </div>
        </AppFormItem>
        <AppFormItem 
          name="memo"
          label="备注"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.memo"
          :required="state.detailsModel.memo.required"
          :visible="state.detailsModel.memo.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="height: 200.0px">
          <AppInput
            name="memo"
            :disabled="state.detailsModel.memo.disabled"
            :maxLength="1000"
            :showMaxLength="true"
            type="textarea"
            :value="state.data.memo"
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