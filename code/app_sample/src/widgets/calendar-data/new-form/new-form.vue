<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './new-form-state';
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
    name="New"
    class="app-form"
    style=""
    :model="state.data"
    :rules="state.rules"
    ref="xDataCtrl"
  >
    <AppFormGroup 
      name="group1"
      title="日历示例数据基本信息"
      :visible="state.detailsModel.group1.visible" 
      :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
      :infoGroupMode="false"
      :titleBarCloseMode="0"
      :showCaption="false"
      :uIActionGroup="state.detailsModel.group1.uIActionGroup"
      @componentEvent="onComponentEvent">
        <AppFormItem 
          name="calendardataname"
          label="事项"
          labelPos="LEFT"
          :labelWidth="130"
          :showLabel="true"
          :rules="state.rules.calendardataname"
          :required="state.detailsModel.calendardataname.required"
          :visible="state.detailsModel.calendardataname.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 24,colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppInput
            name="calendardataname"
            :disabled="state.detailsModel.calendardataname.disabled"
            :maxLength="200"
            type="text"
            :value="state.data.calendardataname"
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