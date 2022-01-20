<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './css-and-icon-form-state';
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
  <a-form name="CssAndIcon" class="app-form form-noborder" style="" :model="state.data" :rules="state.rules">
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppRaw 
    name="rawitem1"
    v-show="state.detailsModel.rawitem1.visible"
    class="el-alert el-alert--info is-light"
    
    contentType="RAW"
    style="height: -1.0px;width: -1.0px"
    value="表单样式表分为：容器样式表、标题样式表、编辑器样式；作用优先级采用就近原则"/>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.group1.visible" 
    name="group1" 
    title="收文样式"
    class="form-red-border"
    style=""
    titleStyle="formgroup-bold-center"
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="true"
    :uIActionGroup="state.detailsModel.group1.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem.visible"
    titleStyle="formitem-left"
    name="formitem"
    :rules="state.rules.formitem"
    :labelWidth="130"
    :required="state.detailsModel.formitem.required"
    label="收文单位"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="formitem"
  :disabled="state.detailsModel.formitem.disabled"
  type="text"
  :value="state.data.formitem"
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
    v-show="state.detailsModel.formitem1.visible"
    name="formitem1"
    :rules="state.rules.formitem1"
    :labelWidth="130"
    :required="state.detailsModel.formitem1.required"
    label="收文编号"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="formitem1"
  :disabled="state.detailsModel.formitem1.disabled"
  type="text"
  :value="state.data.formitem1"
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
    v-show="state.detailsModel.formitem2.visible"
    name="formitem2"
    :rules="state.rules.formitem2"
    :labelWidth="130"
    :required="state.detailsModel.formitem2.required"
    label="收文内容"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="formitem2"
  :disabled="state.detailsModel.formitem2.disabled"
  :showMaxLength="true"
  type="textarea"
  :value="state.data.formitem2"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
    </a-row>
  </AppFormGroup>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppRaw 
    name="rawitem2"
    v-show="state.detailsModel.rawitem2.visible"
    class="el-alert el-alert--info is-light"
    
    contentType="RAW"
    style="height: -1.0px;width: -1.0px"
    value="表单中的分组和表单项标签都可以设置图标，编辑器样式则可以定义编辑器的绘制"/>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.grouppanel1.visible" 
    name="grouppanel1" 
    title="分组图标"
    style=""
    iconClass="fa fa-stethoscope"
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="true"
    :uIActionGroup="state.detailsModel.grouppanel1.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem3.visible"
    name="formitem3"
    :rules="state.rules.formitem3"
    :labelWidth="130"
    :required="state.detailsModel.formitem3.required"
    label="标签图标"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="formitem3"
  :disabled="state.detailsModel.formitem3.disabled"
  type="text"
  :value="state.data.formitem3"
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
    v-show="state.detailsModel.formitem4.visible"
    name="formitem4"
    :rules="state.rules.formitem4"
    :labelWidth="130"
    :required="state.detailsModel.formitem4.required"
    label="无边框浅蓝背景"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="formitem4"
  :disabled="state.detailsModel.formitem4.disabled"
  type="text"
  :value="state.data.formitem4"
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