<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './ui-logic-form-state';
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
    name="UILogic"
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
      value="表单项输入数据后点击【显示对话框】按钮"
      />
    <AppFormGroup 
      name="grouppanel1"
      title="分组面板"
      :visible="state.detailsModel.grouppanel1.visible" 
      :layoutOpts="{selfLayout: 'FLEX',parentLayout: 'TABLE_24COL',colMD: 24,}"
      :infoGroupMode="false"
      :titleBarCloseMode="0"
      :showCaption="false"
      :uIActionGroup="state.detailsModel.grouppanel1.uIActionGroup"
      @componentEvent="onComponentEvent">
        <AppFormItem 
          name="inputtext"
          label="输入提示"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.inputtext"
          :required="state.detailsModel.inputtext.required"
          :visible="state.detailsModel.inputtext.visible" 
          :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
          >
          <div class="form-editor-container" style="">
          <AppInput
            name="inputtext"
            :disabled="state.detailsModel.inputtext.disabled"
            type="text"
            :value="state.data.inputtext"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormButton
          name="button1"
          :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
          :visible="state.detailsModel.button1.visible"
          :showCaption="true"
          caption="显示对话框" 
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
      :value="`<p>1.通过【数据主键】打开视图，在视图中编辑X值后点击视图中的【保存并关闭】按钮，刚才编辑的X值回显到【X值回显】 <br />2.点击【动态设置上下文并获取数据】，通过数据主键获取数据回显到【Z值回显】、设置当前时间为当前日期</p>`"
      />
    <AppFormGroup 
      name="grouppanel2"
      title="分组面板"
      :visible="state.detailsModel.grouppanel2.visible" 
      :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
      :infoGroupMode="false"
      :titleBarCloseMode="0"
      :showCaption="false"
      :uIActionGroup="state.detailsModel.grouppanel2.uIActionGroup"
      @componentEvent="onComponentEvent">
        <AppFormGroup 
          name="grouppanel5"
          title="分组面板"
          :visible="state.detailsModel.grouppanel5.visible" 
          :layoutOpts="{selfLayout: 'FLEX',parentLayout: 'TABLE_24COL',colMD: 24,}"
          :infoGroupMode="false"
          :titleBarCloseMode="0"
          :showCaption="false"
          :uIActionGroup="state.detailsModel.grouppanel5.uIActionGroup"
          @componentEvent="onComponentEvent">
            <AppFormItem 
              name="exampleid"
              label="数据主键"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.exampleid"
              :required="state.detailsModel.exampleid.required"
              :visible="state.detailsModel.exampleid.visible" 
              :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
              >
              <div class="form-editor-container" style="">
              <AppInput
                name="exampleid"
                :disabled="state.detailsModel.exampleid.disabled"
                type="text"
                :value="state.data.exampleid"
                @editorEvent="onEditorEvent"
              />
              </div>
            </AppFormItem>
            <AppFormButton
              name="button2"
              :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
              :visible="state.detailsModel.button2.visible"
              :showCaption="true"
              caption="调用界面行为打开视图" 
              :uIAction="state.detailsModel.button2.uIAction"
              @action="onComponentEvent"
            />
            <AppFormItem 
              name="fieldx"
              label="X值回显"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.fieldx"
              :required="state.detailsModel.fieldx.required"
              :visible="state.detailsModel.fieldx.visible" 
              :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
              >
              <div class="form-editor-container" style="">
              <AppSpan
                name="fieldx"
                :disabled="state.detailsModel.fieldx.disabled"
                dataType="25"
                :value="state.data.fieldx"
                :context="state.context"
                :viewParams="state.viewParams"/>
              </div>
            </AppFormItem>
        </AppFormGroup>
        <AppFormGroup 
          name="grouppanel6"
          title="分组面板"
          :visible="state.detailsModel.grouppanel6.visible" 
          :layoutOpts="{selfLayout: 'FLEX',parentLayout: 'TABLE_24COL',colMD: 24,}"
          :infoGroupMode="false"
          :titleBarCloseMode="0"
          :showCaption="false"
          :uIActionGroup="state.detailsModel.grouppanel6.uIActionGroup"
          @componentEvent="onComponentEvent">
            <AppFormItem 
              name="formitem"
              label=""
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.formitem"
              :required="state.detailsModel.formitem.required"
              :visible="state.detailsModel.formitem.visible" 
              :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
              >
              <div class="form-editor-container" style="">
              <AppSpan
                name="formitem"
                :disabled="state.detailsModel.formitem.disabled"
                dataType="25"
                :value="state.data.formitem"
                :context="state.context"
                :viewParams="state.viewParams"/>
              </div>
            </AppFormItem>
            <AppFormButton
              name="button4"
              :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
              :visible="state.detailsModel.button4.visible"
              :showCaption="true"
              caption="动态设置上下文并获取数据" 
              :uIAction="state.detailsModel.button4.uIAction"
              @action="onComponentEvent"
            />
            <AppFormItem 
              name="fieldz"
              label="Z值回显"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.fieldz"
              :required="state.detailsModel.fieldz.required"
              :visible="state.detailsModel.fieldz.visible" 
              :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
              >
              <div class="form-editor-container" style="">
              <AppSpan
                name="fieldz"
                :disabled="state.detailsModel.fieldz.disabled"
                dataType="25"
                :value="state.data.fieldz"
                :context="state.context"
                :viewParams="state.viewParams"/>
              </div>
            </AppFormItem>
            <AppFormItem 
              name="currentdate"
              label="当前日期"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.currentdate"
              :required="state.detailsModel.currentdate.required"
              :visible="state.detailsModel.currentdate.visible" 
              :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
              >
              <div class="form-editor-container" style="">
              <AppSpan
                name="currentdate"
                :disabled="state.detailsModel.currentdate.disabled"
                dataType="5"
                valueFormat="YYYY-MM-DD"
                :value="state.data.currentdate"
                :context="state.context"
                :viewParams="state.viewParams"/>
              </div>
            </AppFormItem>
        </AppFormGroup>
    </AppFormGroup>
    <AppFormRaw 
      name="rawitem3"
      :visible="state.detailsModel.rawitem3.visible"
      class="el-alert el-alert--info is-light"
      contentType="RAW"
      :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
      value="通过【数据主键】和【更新值回显】更新指定数据的值属性，更新完成后打开视图显示，视图中对属性【更新值】修改后将回显【更新值回显】"
      />
    <AppFormGroup 
      name="grouppanel3"
      title="分组面板"
      :visible="state.detailsModel.grouppanel3.visible" 
      :layoutOpts="{selfLayout: 'FLEX',parentLayout: 'TABLE_24COL',colMD: 24,}"
      :infoGroupMode="false"
      :titleBarCloseMode="0"
      :showCaption="false"
      :uIActionGroup="state.detailsModel.grouppanel3.uIActionGroup"
      @componentEvent="onComponentEvent">
        <AppFormItem 
          name="fieldupdate"
          label="更新值回显"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.fieldupdate"
          :required="state.detailsModel.fieldupdate.required"
          :visible="state.detailsModel.fieldupdate.visible" 
          :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
          >
          <div class="form-editor-container" style="">
          <AppInput
            name="fieldupdate"
            :disabled="state.detailsModel.fieldupdate.disabled"
            type="number"
            :value="state.data.fieldupdate"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormButton
          name="button3"
          :layoutOpts="{parentLayout: 'FLEX',grow: -1,}"
          :visible="state.detailsModel.button3.visible"
          :showCaption="true"
          caption="调用后台更新值" 
          :uIAction="state.detailsModel.button3.uIAction"
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