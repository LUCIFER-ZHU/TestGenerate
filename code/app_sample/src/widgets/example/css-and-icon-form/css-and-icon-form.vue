<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './css-and-icon-form-state';
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
    name="CssAndIcon"
    class="app-form form-noborder"
    style=""
    :model="state.data"
    :rules="state.rules"
    ref="xDataCtrl"
  >
    <AppFormRaw 
      name="rawitem1"
      :visible="state.detailsModel.rawitem1.visible"
      class="el-alert el-alert--info is-light"
      contentType="RAW"
      :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
      value="表单样式表分为：容器样式表、标题样式表、编辑器样式；作用优先级采用就近原则"
      />
    <AppFormGroup 
      name="group1"
      title="收文样式"
      :visible="state.detailsModel.group1.visible" 
      :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
      class="form-red-border"
      titleClass="formgroup-bold-center"
      :infoGroupMode="false"
      :titleBarCloseMode="0"
      :showCaption="true"
      :uIActionGroup="state.detailsModel.group1.uIActionGroup"
      @componentEvent="onComponentEvent">
        <AppFormItem 
          name="formitem"
          label="收文单位"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.formitem"
          :required="state.detailsModel.formitem.required"
          :visible="state.detailsModel.formitem.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 24,}"
          labelClass="formitem-left"
          >
          <div class="form-editor-container" style="">
          <AppInput
            name="formitem"
            :disabled="state.detailsModel.formitem.disabled"
            type="text"
            :value="state.data.formitem"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem1"
          label="收文编号"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.formitem1"
          :required="state.detailsModel.formitem1.required"
          :visible="state.detailsModel.formitem1.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppInput
            name="formitem1"
            :disabled="state.detailsModel.formitem1.disabled"
            type="text"
            :value="state.data.formitem1"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem2"
          label="收文内容"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.formitem2"
          :required="state.detailsModel.formitem2.required"
          :visible="state.detailsModel.formitem2.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 24,colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppInput
            name="formitem2"
            :disabled="state.detailsModel.formitem2.disabled"
            :showMaxLength="true"
            type="textarea"
            :value="state.data.formitem2"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
    </AppFormGroup>
    <AppFormRaw 
      name="rawitem2"
      :visible="state.detailsModel.rawitem2.visible"
      class="el-alert el-alert--info is-light"
      contentType="RAW"
      :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
      value="表单中的分组和表单项标签都可以设置图标，编辑器样式则可以定义编辑器的绘制"
      />
    <AppFormGroup 
      name="grouppanel1"
      title="分组图标"
      :visible="state.detailsModel.grouppanel1.visible" 
      :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
      iconClass="fa fa-stethoscope"
      :infoGroupMode="false"
      :titleBarCloseMode="0"
      :showCaption="true"
      :uIActionGroup="state.detailsModel.grouppanel1.uIActionGroup"
      @componentEvent="onComponentEvent">
        <AppFormItem 
          name="formitem3"
          label="标签图标"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.formitem3"
          :required="state.detailsModel.formitem3.required"
          :visible="state.detailsModel.formitem3.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppInput
            name="formitem3"
            :disabled="state.detailsModel.formitem3.disabled"
            type="text"
            :value="state.data.formitem3"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem4"
          label="无边框浅蓝背景"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.formitem4"
          :required="state.detailsModel.formitem4.required"
          :visible="state.detailsModel.formitem4.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppInput
            name="formitem4"
            :disabled="state.detailsModel.formitem4.disabled"
            type="text"
            :value="state.data.formitem4"
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