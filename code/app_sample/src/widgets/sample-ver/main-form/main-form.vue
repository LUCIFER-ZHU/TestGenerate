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
<a-col :span="24">
  <IbizFormGroup name="group1" title="示例版本基本信息">
    <a-row>
<a-col :span="24">
  <IbizFormItem name="samplevername" label="标题">
<IbizInput
  name="samplevername"
  :value="state.data.samplevername"
  :maxLength="200"
  type="text"
  @editorEvent="handleEditorEvent"/>
    
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="verstr" label="版本号">
<IbizInput
  name="verstr"
  :value="state.data.verstr"
  :maxLength="100"
  type="text"
  @editorEvent="handleEditorEvent"/>
    
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="type" label="分类">
<IbizDropdownList
  name="type"
  :value="state.data.type"
  :data="state.data"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"
  @editorEvent="handleEditorEvent"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="content" label="内容">
    /*未找到模板[MARKDOWN]*/  </IbizFormItem>
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