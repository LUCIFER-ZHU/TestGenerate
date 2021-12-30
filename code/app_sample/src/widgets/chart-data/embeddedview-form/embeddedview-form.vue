<script setup lang="ts">
import { Subject } from 'rxjs';
import { CtrlConfig } from './embeddedview-form-config';
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
    name="Embeddedview" 
    class="ibiz-form"
    style=""
    :model="state.data" 
    :rules="state.rules">
<a-col :span="24">
  <IbizFormGroup name="grouppanel2" title="看板">
    <a-row>
      /*未找到模板[DRUIPART]*/    </a-row>
  </IbizFormGroup>
</a-col>
<a-col :span="24">
  <IbizFormGroup name="grouppanel1" title="树">
    <a-row>
      /*未找到模板[DRUIPART]*/      /*未找到模板[DRUIPART]*/    </a-row>
  </IbizFormGroup>
</a-col>
<a-col :span="24">
  <IbizFormGroup name="group1" title="列表">
    <a-row>
      /*未找到模板[DRUIPART]*/      /*未找到模板[DRUIPART]*/    </a-row>
  </IbizFormGroup>
</a-col>
<a-col :span="24">
  <IbizFormGroup name="grouppanel3" title="数据视图">
    <a-row>
      /*未找到模板[DRUIPART]*/      /*未找到模板[DRUIPART]*/    </a-row>
  </IbizFormGroup>
</a-col>
<a-col :span="24">
  <IbizFormGroup name="grouppanel4" title="树表格">
    <a-row>
      /*未找到模板[DRUIPART]*/    </a-row>
  </IbizFormGroup>
</a-col>
  </a-form>
</template>
<style lang="scss">
.ibiz-form {
  margin: 20px !important;
}
</style>