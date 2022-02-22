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
    <a-tabs class="app-form-page">
      <AppFormPage
        name="formpage1"
        :layoutOpts="{selfLayout: 'TABLE_24COL',}"
        :visible="state.detailsModel.formpage1.visible"
        key="formpage1"
        tab="基本信息"  
      >
        <template #tab>
          <AppIconText text="基本信息"/>
        </template>
        <AppFormGroup 
          name="group1"
          title="看板数据基本信息"
          :visible="state.detailsModel.group1.visible" 
          :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
          :infoGroupMode="false"
          :titleBarCloseMode="0"
          :showCaption="false"
          :uIActionGroup="state.detailsModel.group1.uIActionGroup"
          @componentEvent="onComponentEvent">
            <AppFormItem 
              name="kanbandataname"
              label="任务名称"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.kanbandataname"
              :required="state.detailsModel.kanbandataname.required"
              :visible="state.detailsModel.kanbandataname.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 24,}"
              >
              <div class="form-editor-container" style="">
              <AppInput
                name="kanbandataname"
                :disabled="state.detailsModel.kanbandataname.disabled"
                :maxLength="200"
                type="text"
                :value="state.data.kanbandataname"
                @editorEvent="onEditorEvent"
              />
              </div>
            </AppFormItem>
            <AppFormItem 
              name="taskstatus"
              label="任务状态"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.taskstatus"
              :required="state.detailsModel.taskstatus.required"
              :visible="state.detailsModel.taskstatus.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 24,}"
              >
              <div class="form-editor-container" style="">
              <AppDropdownList
                name="taskstatus"
                codeListTag="Sample__TaskStatus"
                codeListType="STATIC"
                :disabled="state.detailsModel.taskstatus.disabled"
                :context="state.context"
                :viewParams="state.viewParams"
                :value="state.data.taskstatus"
                :data="state.data"
                @editorEvent="onEditorEvent"
              /> 
              </div>
            </AppFormItem>
            <AppFormItem 
              name="begintime"
              label="开始时间"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.begintime"
              :required="state.detailsModel.begintime.required"
              :visible="state.detailsModel.begintime.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 24,}"
              >
              <div class="form-editor-container" style="width: 160.0px;">
              <AppDatePicker
                name="begintime"
                :disabled="state.detailsModel.begintime.disabled"
                dateFormat="YYYY-MM-DD HH:mm:ss"
                dateType="dateTime"
                :value="state.data.begintime"
                @editorEvent="onEditorEvent"
              />
              </div>
            </AppFormItem>
            <AppFormItem 
              name="endtime"
              label="结束时间"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.endtime"
              :required="state.detailsModel.endtime.required"
              :visible="state.detailsModel.endtime.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 24,}"
              >
              <div class="form-editor-container" style="width: 160.0px;">
              <AppDatePicker
                name="endtime"
                :disabled="state.detailsModel.endtime.disabled"
                dateFormat="YYYY-MM-DD HH:mm:ss"
                dateType="dateTime"
                :value="state.data.endtime"
                @editorEvent="onEditorEvent"
              />
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
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 24,colMD: 24,}"
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
      </AppFormPage>
      <AppFormPage
        name="formpage2"
        :layoutOpts="{selfLayout: 'TABLE_24COL',}"
        :visible="state.detailsModel.formpage2.visible"
        key="formpage2"
        tab="其它"  
      >
        <template #tab>
          <AppIconText text="其它"/>
        </template>
        <AppFormGroup 
          name="group2"
          title="操作信息"
          :visible="state.detailsModel.group2.visible" 
          :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
          :infoGroupMode="false"
          :titleBarCloseMode="0"
          :showCaption="true"
          :uIActionGroup="state.detailsModel.group2.uIActionGroup"
          @componentEvent="onComponentEvent">
            <AppFormItem 
              name="createman"
              label="建立人"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.createman"
              :required="state.detailsModel.createman.required"
              :visible="state.detailsModel.createman.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
              >
              <div class="form-editor-container" style="">
              <AppSpan
                name="createman"
                :disabled="state.detailsModel.createman.disabled"
                codeListTag="SysOperator"
                codeListType="DYNAMIC"
                dataType="25"
                :value="state.data.createman"
                :context="state.context"
                :viewParams="state.viewParams"/>
              </div>
            </AppFormItem>
            <AppFormItem 
              name="createdate"
              label="建立时间"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.createdate"
              :required="state.detailsModel.createdate.required"
              :visible="state.detailsModel.createdate.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
              >
              <div class="form-editor-container" style="">
              <AppSpan
                name="createdate"
                :disabled="state.detailsModel.createdate.disabled"
                dataType="5"
                valueFormat="YYYY-MM-DD HH:mm:ss"
                :value="state.data.createdate"
                :context="state.context"
                :viewParams="state.viewParams"/>
              </div>
            </AppFormItem>
            <AppFormItem 
              name="updateman"
              label="更新人"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.updateman"
              :required="state.detailsModel.updateman.required"
              :visible="state.detailsModel.updateman.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
              >
              <div class="form-editor-container" style="">
              <AppSpan
                name="updateman"
                :disabled="state.detailsModel.updateman.disabled"
                codeListTag="SysOperator"
                codeListType="DYNAMIC"
                dataType="25"
                :value="state.data.updateman"
                :context="state.context"
                :viewParams="state.viewParams"/>
              </div>
            </AppFormItem>
            <AppFormItem 
              name="updatedate"
              label="更新时间"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.updatedate"
              :required="state.detailsModel.updatedate.required"
              :visible="state.detailsModel.updatedate.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
              >
              <div class="form-editor-container" style="">
              <AppSpan
                name="updatedate"
                :disabled="state.detailsModel.updatedate.disabled"
                dataType="5"
                valueFormat="YYYY-MM-DD HH:mm:ss"
                :value="state.data.updatedate"
                :context="state.context"
                :viewParams="state.viewParams"/>
              </div>
            </AppFormItem>
        </AppFormGroup>
      </AppFormPage>
    </a-tabs>
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