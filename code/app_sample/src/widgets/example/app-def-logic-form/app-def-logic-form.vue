<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './app-def-logic-form-state';
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
    name="AppDEFLogic"
    class="app-form"
    style=""
    :model="state.data"
    :rules="state.rules"
    ref="xDataCtrl"
  >
    <AppFormGroup 
      name="group1"
      title="属性计算逻辑"
      :visible="state.detailsModel.group1.visible" 
      :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
      :infoGroupMode="false"
      :titleBarCloseMode="0"
      :showCaption="true"
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
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 6,colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppSpan
            name="fieldx"
            :disabled="state.detailsModel.fieldx.disabled"
            dataType="6"
            :value="state.data.fieldx"
            :context="state.context"
            :viewParams="state.viewParams"/>
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
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 6,colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppSpan
            name="fieldy"
            :disabled="state.detailsModel.fieldy.disabled"
            dataType="6"
            :value="state.data.fieldy"
            :context="state.context"
            :viewParams="state.viewParams"/>
          </div>
        </AppFormItem>
        <AppFormItem 
          name="appfield"
          label="XY前端计算值"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.appfield"
          :required="state.detailsModel.appfield.required"
          :visible="state.detailsModel.appfield.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 6,colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppSpan
            name="appfield"
            :disabled="state.detailsModel.appfield.disabled"
            dataType="25"
            :value="state.data.appfield"
            :context="state.context"
            :viewParams="state.viewParams"/>
          </div>
        </AppFormItem>
        <AppFormItem 
          name="appfield2"
          label="XY前端计算值2"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.appfield2"
          :required="state.detailsModel.appfield2.required"
          :visible="state.detailsModel.appfield2.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 6,colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppSpan
            name="appfield2"
            :disabled="state.detailsModel.appfield2.disabled"
            dataType="25"
            :value="state.data.appfield2"
            :context="state.context"
            :viewParams="state.viewParams"/>
          </div>
        </AppFormItem>
        <AppFormItem 
          name="appfield4"
          label="XY前端计算值4"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.appfield4"
          :required="state.detailsModel.appfield4.required"
          :visible="state.detailsModel.appfield4.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 6,colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppSpan
            name="appfield4"
            :disabled="state.detailsModel.appfield4.disabled"
            dataType="25"
            :value="state.data.appfield4"
            :context="state.context"
            :viewParams="state.viewParams"/>
          </div>
        </AppFormItem>
    </AppFormGroup>
    <AppFormRaw 
      name="rawitem1"
      :visible="state.detailsModel.rawitem1.visible"
      class="el-alert el-alert--info is-light"
      contentType="HTML"
      :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 24,colMD: 24,}"
      :value="`<p>1.XY前端计算值：由前台处理逻辑（计算式）取值计算式：${fieldx} + ${fieldy} <br />2.XY前端计算值2：由前台处理逻辑（脚本代码）取值脚本代码：data.appfield2=data.fieldx+data.fieldy <br />3.XY前端计算值4：由前端处理逻辑（脚本代码）取值脚本代码： if(data.fieldx &amp;&amp; data.fieldz) { data.appfield4=data.fieldx + '(' +Number((data.fieldx/data.fieldz)*100).toFixed(2) + '%)'; } <br />注：表单加载后即计算完成进行显示</p>`"
      />
    <AppFormGroup 
      name="grouppanel1"
      title="属性变更逻辑"
      :visible="state.detailsModel.grouppanel1.visible" 
      :layoutOpts="{selfLayout: 'FLEX',parentLayout: 'TABLE_24COL',colMD: 24,}"
      :infoGroupMode="false"
      :titleBarCloseMode="0"
      :showCaption="true"
      :uIActionGroup="state.detailsModel.grouppanel1.uIActionGroup"
      @componentEvent="onComponentEvent">
        <AppFormItem 
          name="appfield3"
          label="XY前端计算值3"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.appfield3"
          :required="state.detailsModel.appfield3.required"
          :visible="state.detailsModel.appfield3.visible" 
          :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
          >
          <div class="form-editor-container" style="">
          <AppInput
            name="appfield3"
            :disabled="state.detailsModel.appfield3.disabled"
            type="text"
            :value="state.data.appfield3"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormButton
          name="button1"
          :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
          :visible="state.detailsModel.button1.visible"
          :showCaption="true"
          caption="保存" 
          :uIAction="state.detailsModel.button1.uIAction"
          @action="onComponentEvent"
        />
    </AppFormGroup>
    <AppFormRaw 
      name="rawitem2"
      :visible="state.detailsModel.rawitem2.visible"
      class="el-alert el-alert--info is-light"
      contentType="HTML"
      :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
      :value="`<p>XY前端计算值3输入值后点击保存按钮，触发前台处理逻辑（脚本代码），重新给X值和Y值赋值 <br />脚本代码： <br />data.filedx=Math.random()*data.appfield3; <br />data.filedy=Math.random()*data.appfield3;</p>`"
      />
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