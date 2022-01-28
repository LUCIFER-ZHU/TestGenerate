<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './value-format-form-state';
import { FormControl, IActionParam, IParam, ControlAction, IContext } from '@core';
interface Props {
  name:string,
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
const { name, state, load, loadDraft, save, remove, refresh, onEditorEvent, onComponentEvent, getData } = new FormControl(ctrlState, props, emit).moduleInstall();

// 暴露内部状态及能力
defineExpose({ name, state, load, loadDraft, save, remove, refresh, getData });
</script>
<template>
  <a-form name="ValueFormat" class="app-form" style="" :model="state.data" :rules="state.rules">
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.group1.visible" 
    name="group1" 
    title="分组"
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
  <AppRaw 
    name="rawitem1"
    v-show="state.detailsModel.rawitem1.visible"
    class="el-alert el-alert--info is-light"
    contentType="RAW"
    style="height: -1.0px;width: -1.0px"
    value="值【1234.1】，使用【#.#\元】进行格式化，预期效果【1234.1元】"/>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.format1.visible"
    name="format1"
    :rules="state.rules.format1"
    :labelWidth="130"
    :required="state.detailsModel.format1.required"
    label="数值编辑器格式化"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="format1"
  :disabled="state.detailsModel.format1.disabled"
  :precision="4"
  type="number"
  :value="state.data.format1"
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
  <AppRaw 
    name="rawitem2"
    v-show="state.detailsModel.rawitem2.visible"
    class="el-alert el-alert--info is-light"
    contentType="RAW"
    style="height: -1.0px;width: -1.0px"
    value="值【100.14】，使用【¥*-#.##】进行格式化，预期效果【¥----------100.14】"/>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.format2.visible"
    name="format2"
    :rules="state.rules.format2"
    :labelWidth="130"
    :required="state.detailsModel.format2.required"
    label="标签编辑器格式化"
    style="width: 500.0px;">
      <div class="form-editor-container" style="">
<AppSpan
  name="format2"
  :disabled="state.detailsModel.format2.disabled"
  dataType="6"
  valueFormat="¥*-#.##"
  :precision="4"
  :value="state.data.format2"
  :context="state.context"
  :viewParams="state.viewParams"/>
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppRaw 
    name="rawitem3"
    v-show="state.detailsModel.rawitem3.visible"
    class="el-alert el-alert--info is-light"
    contentType="RAW"
    style="height: -1.0px;width: -1.0px"
    value="标签显示属性代码表原值"/>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.datatype.visible"
    name="datatype"
    :rules="state.rules.datatype"
    :labelWidth="130"
    :required="state.detailsModel.datatype.required"
    label="表单项"
    style="">
      <div class="form-editor-container" style="">
<AppSpan
  name="datatype"
  :disabled="state.detailsModel.datatype.disabled"
  codeListTag="Sample__ExampleDataType"
  codeListType="STATIC"
  dataType="25"
  :value="state.data.datatype"
  :context="state.context"
  :viewParams="state.viewParams"/>
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppRaw 
    name="rawitem4"
    v-show="state.detailsModel.rawitem4.visible"
    class="el-alert el-alert--info is-light"
    contentType="RAW"
    style="height: -1.0px;width: -1.0px"
    value="标签显示属性代码表值文本"/>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem.visible"
    name="formitem"
    :rules="state.rules.formitem"
    :labelWidth="130"
    :required="state.detailsModel.formitem.required"
    label="表单项"
    style="">
      <div class="form-editor-container" style="">
<AppSpan
  name="formitem"
  :disabled="state.detailsModel.formitem.disabled"
  codeListTag="Sample__ExampleDataType"
  codeListType="STATIC"
  dataType="25"
  :value="state.data.formitem"
  :context="state.context"
  :viewParams="state.viewParams"/>
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