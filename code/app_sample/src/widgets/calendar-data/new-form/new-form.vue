<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './new-form-state';
import { FormControl, IActionParam, IParam, ControlAction, IContext } from '@core';
interface Props {
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
const { state, onEditorEvent, onComponentEvent } = new FormControl(ctrlState, props, emit).moduleInstall();

// 暴露内部状态及能力
defineExpose({ state, name: 'form' });
</script>
<template>
  <a-form name="New" class="app-form" style="" :model="state.data" :rules="state.rules">
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.group1.visible" 
    name="group1" 
    title="日历示例数据基本信息"
    style=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="false"
    :uIActionGroup="state.detailsModel.group1.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.calendardataname.visible"
    name="calendardataname"
    :rules="state.rules.calendardataname"
    :labelWidth="130"
    :required="state.detailsModel.calendardataname.required"
    label="事项"
    style="">
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
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.begintime.visible"
    name="begintime"
    :rules="state.rules.begintime"
    :labelWidth="130"
    :required="state.detailsModel.begintime.required"
    label="开始时间"
    style="">
      <div class="form-editor-container" style="">
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
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.endtime.visible"
    name="endtime"
    :rules="state.rules.endtime"
    :labelWidth="130"
    :required="state.detailsModel.endtime.required"
    label="结束时间"
    style="">
      <div class="form-editor-container" style="">
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
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.memo.visible"
    name="memo"
    :rules="state.rules.memo"
    :labelWidth="130"
    :required="state.detailsModel.memo.required"
    label="备注"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="memo"
  :disabled="state.detailsModel.memo.disabled"
  :maxLength="1000"
  :showMaxLength="true"
  :value="state.data.memo"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
    </a-row>
  </AppFormGroup>
</a-col>
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