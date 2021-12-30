<script setup lang="ts">
import { Subject } from 'rxjs';
import { CtrlConfig } from './new-form-config';
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
    name="New" 
    class="ibiz-form"
    style=""
    :model="state.data" 
    :rules="state.rules">
<a-col :span="24">
  <IbizFormGroup name="group1" title="日历示例数据基本信息">
    <a-row>
<a-col :span="24">
  <IbizFormItem name="calendardataname" label="事项">
<IbizInput
  name="calendardataname"
  :value="state.data.calendardataname"
  :maxLength="200"
  type="text"
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
  </a-form>
</template>
<style lang="scss">
.ibiz-form {
  margin: 20px !important;
}
</style>