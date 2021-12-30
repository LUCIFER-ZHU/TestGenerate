<script setup lang="ts">
import { Subject } from 'rxjs';
import { CtrlConfig } from './main-form-config';
import { FormControl, IActionParam, IParam, ControlAction } from '@ibiz-core';

interface Props {
  context: IParam;
  viewParams?: IParam;
  controlAction: ControlAction;
  showBusyIndicator?: boolean;
  viewSubject: Subject<IActionParam>;
}

const props = withDefaults(defineProps<Props>(), {
  viewSubject: () => new Subject<IActionParam>(),
  showBusyIndicator: true,
})

// emit声明
interface CtrlEmit {
  (name: "ctrlEvent", value: IActionParam): void;
}

const emit = defineEmits<CtrlEmit>();

// 安装功能模块，提供状态和能力方法
const { state, handleEditorEvent } = new FormControl(CtrlConfig).moduleInstall(props);

</script>
<template>
  <a-form 
    name="Main" 
    class="ibiz-form"
    style=""
    :model="state.data" 
    :rules="state.rules">
    <a-tabs class="app-form-page">

<a-tab-pane key="formpage1" tab="基本信息">
  <a-row>
<a-col :span="24">
  <IbizFormGroup name="group1" title="看板数据基本信息">
    <a-row>
<a-col :span="24">
  <IbizFormItem name="kanbandataname" label="任务名称">
<IbizInput
  name="kanbandataname"
  :value="state.data.kanbandataname"
  :maxLength="200"
  type="text"
  @editorEvent="handleEditorEvent"/>
    
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="taskstatus" label="任务状态">
<IbizDropdownList
  name="taskstatus"
  :value="state.data.taskstatus"
  :data="state.data"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"
  @editorEvent="handleEditorEvent"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="begintime" label="开始时间">
<IbizDatePicker
  name="begintime"
  :value="state.data.begintime"
  dateFormat="YYYY-MM-DD HH:mm:ss"
  dateType="dateTime"
  @editorEvent="handleEditorEvent"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="endtime" label="结束时间">
<IbizDatePicker
  name="endtime"
  :value="state.data.endtime"
  dateFormat="YYYY-MM-DD HH:mm:ss"
  dateType="dateTime"
  @editorEvent="handleEditorEvent"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="memo" label="备注">
<IbizInput
  name="memo"
  :value="state.data.memo"
  :maxLength="1000"
  :showMaxLength="true"
  @editorEvent="handleEditorEvent"/>
    
  </IbizFormItem>
</a-col>
    </a-row>
  </IbizFormGroup>
</a-col>
  </a-row>
</a-tab-pane>
<a-tab-pane key="formpage2" tab="其它">
  <a-row>
<a-col :span="24">
  <IbizFormGroup name="group2" title="操作信息">
    <a-row>
<a-col :span="24">
  <IbizFormItem name="createman" label="建立人">
<IbizSpan
  name="createman"
  :value="state.data.createman"
  dataType="25"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="createdate" label="建立时间">
<IbizSpan
  name="createdate"
  :value="state.data.createdate"
  dataType="5"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="updateman" label="更新人">
<IbizSpan
  name="updateman"
  :value="state.data.updateman"
  dataType="25"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="updatedate" label="更新时间">
<IbizSpan
  name="updatedate"
  :value="state.data.updatedate"
  dataType="5"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
    </a-row>
  </IbizFormGroup>
</a-col>
  </a-row>
</a-tab-pane>    </a-tabs>
  </a-form>
</template>
<style lang="scss">
.ibiz-form {
  margin: 20px !important;
}
</style>