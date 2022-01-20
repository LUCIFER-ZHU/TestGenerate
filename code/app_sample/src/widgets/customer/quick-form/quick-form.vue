<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './quick-form-state';
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
  <a-form name="Quick" class="app-form" style="" :model="state.data" :rules="state.rules">
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.group1.visible" 
    name="group1" 
    title="快速新建"
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
    v-show="state.detailsModel.customername.visible"
    name="customername"
    :rules="state.rules.customername"
    :labelWidth="130"
    :required="state.detailsModel.customername.required"
    label="客户名称"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="customername"
  :disabled="state.detailsModel.customername.disabled"
  :maxLength="200"
  type="text"
  :value="state.data.customername"
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
    v-show="state.detailsModel.pcustomername.visible"
    name="pcustomername"
    :rules="state.rules.pcustomername"
    :labelWidth="130"
    :required="state.detailsModel.pcustomername.required"
    label="上级客户"
    style="">
      <div class="form-editor-container" style="">
<AppDataPicker
  name="pcustomername"
  :data="state.data"
  valueItem="pcustomerid"
  :disabled="state.detailsModel.pcustomername.disabled"
  :context="state.context"
  :viewParams="state.viewParams"
   pickUpView="ChartDataPickupView"
  :value="state.data.pcustomername"
  @editorEvent="onEditorEvent"
/>       </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.type.visible"
    name="type"
    :rules="state.rules.type"
    :labelWidth="130"
    :required="state.detailsModel.type.required"
    label="类型"
    style="">
      <div class="form-editor-container" style="">
<AppRadioGroup
  name="type"
  :data="state.data"
  codeListTag="Sample__CustomerType"
  codeListType="STATIC"
  
  :disabled="state.detailsModel.type.disabled"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.type"
  @editorEvent="onEditorEvent"
/>       </div>
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