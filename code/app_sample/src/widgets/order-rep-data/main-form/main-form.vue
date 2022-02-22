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
          title="订单报表数据基本信息"
          :visible="state.detailsModel.group1.visible" 
          :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
          :infoGroupMode="false"
          :titleBarCloseMode="0"
          :showCaption="true"
          :uIActionGroup="state.detailsModel.group1.uIActionGroup"
          @componentEvent="onComponentEvent">
            <AppFormItem 
              name="customerid"
              label="客户标识"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.customerid"
              :required="state.detailsModel.customerid.required"
              :visible="state.detailsModel.customerid.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 6,colMD: 8,colSM: 12,}"
              >
              <div class="form-editor-container" style="">
              <AppInput
                name="customerid"
                :disabled="state.detailsModel.customerid.disabled"
                :maxLength="100"
                type="text"
                :value="state.data.customerid"
                @editorEvent="onEditorEvent"
              />
              </div>
            </AppFormItem>
            <AppFormItem 
              name="customername"
              label="客户名称"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.customername"
              :required="state.detailsModel.customername.required"
              :visible="state.detailsModel.customername.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 6,colMD: 8,colSM: 12,}"
              >
              <div class="form-editor-container" style="">
              <AppInput
                name="customername"
                :disabled="state.detailsModel.customername.disabled"
                :maxLength="100"
                type="text"
                :value="state.data.customername"
                @editorEvent="onEditorEvent"
              />
              </div>
            </AppFormItem>
            <AppFormItem 
              name="monthval"
              label="月份"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.monthval"
              :required="state.detailsModel.monthval.required"
              :visible="state.detailsModel.monthval.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 6,colMD: 8,colSM: 12,}"
              >
              <div class="form-editor-container" style="">
              <AppInput
                name="monthval"
                :disabled="state.detailsModel.monthval.disabled"
                type="text"
                :value="state.data.monthval"
                @editorEvent="onEditorEvent"
              />
              </div>
            </AppFormItem>
            <AppFormItem 
              name="quarterval"
              label="季度"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.quarterval"
              :required="state.detailsModel.quarterval.required"
              :visible="state.detailsModel.quarterval.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 6,colMD: 8,colSM: 12,}"
              >
              <div class="form-editor-container" style="">
              <AppInput
                name="quarterval"
                :disabled="state.detailsModel.quarterval.disabled"
                type="text"
                :value="state.data.quarterval"
                @editorEvent="onEditorEvent"
              />
              </div>
            </AppFormItem>
            <AppFormItem 
              name="yearval"
              label="年份"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.yearval"
              :required="state.detailsModel.yearval.required"
              :visible="state.detailsModel.yearval.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 6,colMD: 8,colSM: 12,}"
              >
              <div class="form-editor-container" style="">
              <AppInput
                name="yearval"
                :disabled="state.detailsModel.yearval.disabled"
                type="text"
                :value="state.data.yearval"
                @editorEvent="onEditorEvent"
              />
              </div>
            </AppFormItem>
            <AppFormItem 
              name="totalval"
              label="合计"
              labelPos="LEFT"
              :labelWidth="130"
              :showLabel="true"
              :rules="state.rules.totalval"
              :required="state.detailsModel.totalval.required"
              :visible="state.detailsModel.totalval.visible" 
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 6,colMD: 8,colSM: 12,}"
              >
              <div class="form-editor-container" style="">
              <AppInput
                name="totalval"
                :disabled="state.detailsModel.totalval.disabled"
                type="text"
                :value="state.data.totalval"
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