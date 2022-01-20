<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './main-form-state';
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
  <a-form name="Main" class="app-form" style="" :model="state.data" :rules="state.rules">
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.group1.visible" 
    name="group1" 
    title="示例版本基本信息"
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
    v-show="state.detailsModel.samplevername.visible"
    name="samplevername"
    :rules="state.rules.samplevername"
    :labelWidth="130"
    :required="state.detailsModel.samplevername.required"
    label="标题"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="samplevername"
  :disabled="state.detailsModel.samplevername.disabled"
  :maxLength="200"
  type="text"
  :value="state.data.samplevername"
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
    v-show="state.detailsModel.verstr.visible"
    name="verstr"
    :rules="state.rules.verstr"
    :labelWidth="130"
    :required="state.detailsModel.verstr.required"
    label="版本号"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="verstr"
  :disabled="state.detailsModel.verstr.disabled"
  :maxLength="100"
  type="text"
  :value="state.data.verstr"
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
    v-show="state.detailsModel.type.visible"
    name="type"
    :rules="state.rules.type"
    :labelWidth="130"
    :required="state.detailsModel.type.required"
    label="分类"
    style="">
      <div class="form-editor-container" style="">
<AppDropdownList
  name="type"
  codeListTag="Sample__SampleCat"
  codeListType="STATIC"
  
  :disabled="state.detailsModel.type.disabled"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.type"
  :data="state.data"
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
    v-show="state.detailsModel.content.visible"
    name="content"
    :rules="state.rules.content"
    :labelWidth="130"
    :required="state.detailsModel.content.required"
    label="内容"
    style="">
      <div class="form-editor-container" style="">
      /*未找到模板[MARKDOWN]*/      </div>
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