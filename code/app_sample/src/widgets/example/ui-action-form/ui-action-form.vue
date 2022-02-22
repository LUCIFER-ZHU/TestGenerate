<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './ui-action-form-state';
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
    name="UIAction"
    class="app-form"
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
      value="打开一个模态框（小视图）"
      />
    <AppFormGroup 
      name="group1"
      title="打开模态"
      :visible="state.detailsModel.group1.visible" 
      :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
      :infoGroupMode="false"
      :titleBarCloseMode="0"
      :showCaption="false"
      :uIActionGroup="state.detailsModel.group1.uIActionGroup"
      @componentEvent="onComponentEvent">
        <AppFormButton
          name="button1"
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          :visible="state.detailsModel.button1.visible"
          :showCaption="true"
          caption="前台界面行为（打开模态）" 
          :uIAction="state.detailsModel.button1.uIAction"
          @action="onComponentEvent"
        />
    </AppFormGroup>
    <AppFormRaw 
      name="rawitem2"
      :visible="state.detailsModel.rawitem2.visible"
      class="el-alert el-alert--info is-light"
      contentType="RAW"
      :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
      value="打开一个顶级视图"
      />
    <AppFormGroup 
      name="grouppanel1"
      title="打开顶级视图"
      :visible="state.detailsModel.grouppanel1.visible" 
      :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
      :infoGroupMode="false"
      :titleBarCloseMode="0"
      :showCaption="false"
      :uIActionGroup="state.detailsModel.grouppanel1.uIActionGroup"
      @componentEvent="onComponentEvent">
        <AppFormButton
          name="button2"
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          :visible="state.detailsModel.button2.visible"
          :showCaption="true"
          caption="前台界面行为（打开顶级视图）" 
          :uIAction="state.detailsModel.button2.uIAction"
          @action="onComponentEvent"
        />
    </AppFormGroup>
    <AppFormRaw 
      name="rawitem3"
      :visible="state.detailsModel.rawitem3.visible"
      class="el-alert el-alert--info is-light"
      contentType="RAW"
      :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
      value="打开一个指定的html页面，并将搜索框中的参数传过去"
      />
    <AppFormGroup 
      name="grouppanel2"
      title="打开HTML页面"
      :visible="state.detailsModel.grouppanel2.visible" 
      :layoutOpts="{selfLayout: 'FLEX',parentLayout: 'TABLE_24COL',colMD: 24,}"
      :infoGroupMode="false"
      :titleBarCloseMode="0"
      :showCaption="false"
      :uIActionGroup="state.detailsModel.grouppanel2.uIActionGroup"
      @componentEvent="onComponentEvent">
        <AppFormItem 
          name="wd"
          label="搜索"
          labelPos="LEFT"
          :labelWidth="80"
          :showLabel="true"
          :rules="state.rules.wd"
          :required="state.detailsModel.wd.required"
          :visible="state.detailsModel.wd.visible" 
          :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
          >
          <div class="form-editor-container" style="width: 400.0px;">
          <AppInput
            name="wd"
            :disabled="state.detailsModel.wd.disabled"
            placeholder="输入关键字后点击【前台界面行为（打开HTML页面）】"
            type="text"
            :value="state.data.wd"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormButton
          name="button3"
          :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
          :visible="state.detailsModel.button3.visible"
          :showCaption="true"
          caption="前台界面行为（打开HTML页面）（百度一下）" 
          :uIAction="state.detailsModel.button3.uIAction"
          @action="onComponentEvent"
        />
    </AppFormGroup>
    <AppFormGroup 
      name="grouppanel3"
      title="界面行为（后续界面行为）"
      :visible="state.detailsModel.grouppanel3.visible" 
      :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
      :infoGroupMode="false"
      :titleBarCloseMode="0"
      :showCaption="false"
      :uIActionGroup="state.detailsModel.grouppanel3.uIActionGroup"
      @componentEvent="onComponentEvent">
        <AppFormRaw 
          name="rawitem4"
          :visible="state.detailsModel.rawitem4.visible"
          class="el-alert el-alert--info is-light"
          contentType="RAW"
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          value="数据快速新建通常使用界面行为（后续界面行为，后台处理后打开新界面进行确认或后续操作）"
          />
        <AppFormButton
          name="button4"
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          :visible="state.detailsModel.button4.visible"
          :showCaption="true"
          caption="界面行为（后续界面行为）" 
          :uIAction="state.detailsModel.button4.uIAction"
          @action="onComponentEvent"
        />
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