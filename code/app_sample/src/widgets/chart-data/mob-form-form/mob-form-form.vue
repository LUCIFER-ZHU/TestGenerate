<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './mob-form-form-state';
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
  <a-form name="MobForm" class="app-form" style="" :model="state.data" :rules="state.rules">
    <a-tabs class="app-form-page">
<a-tab-pane v-show="state.detailsModel.formpage1.visible" class="form-red-border" key="formpage1">
  <template #tab>
    <AppIconText class="h2-title" :iconClass="ribbon" text="基本信息"/>
  </template>
  <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.group1.visible" 
    name="group1" 
    title="图表基本信息"
    class="form-red-border"
    style=""
    iconClass="browsers"
    titleStyle="h1-title"
    :infoGroupMode="false"
    :titleBarCloseMode="1"
    :showCaption="true"
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
    v-show="state.detailsModel.chartdataname.visible"
    name="chartdataname"
    :rules="state.rules.chartdataname"
    :labelWidth="130"
    :required="state.detailsModel.chartdataname.required"
    label="图表名称"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="chartdataname"
  :disabled="state.detailsModel.chartdataname.disabled"
  :maxLength="200"
  type="text"
  :value="state.data.chartdataname"
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
    v-show="state.detailsModel.data.visible"
    name="data"
    :rules="state.rules.data"
    :labelWidth="130"
    :required="state.detailsModel.data.required"
    label="数据"
    style="">
      <div class="form-editor-container" style="">
      /*未找到模板[MOBTEXT]*/      </div>
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
  <AppFormItem 
    v-show="state.detailsModel.season.visible"
    class="form-red-border"
    titleStyle="h2-title"
    name="season"
    :rules="state.rules.season"
    :labelWidth="130"
    :required="state.detailsModel.season.required"
    label="季度"
    style="">
      <div class="form-editor-container" style="">
      /*未找到模板[MOBTEXTAREA]*/      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.totalprice.visible"
    name="totalprice"
    :rules="state.rules.totalprice"
    :labelWidth="130"
    :required="state.detailsModel.totalprice.required"
    label="总计价格"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="totalprice"
  :disabled="state.detailsModel.totalprice.disabled"
  :maxLength="100"
  type="text"
  :value="state.data.totalprice"
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
    v-show="state.detailsModel.datatype.visible"
    name="datatype"
    :rules="state.rules.datatype"
    :labelWidth="130"
    :required="state.detailsModel.datatype.required"
    label="数据分类"
    style="">
      <div class="form-editor-container" style="">
      /*未找到模板[MOBRADIOLIST]*/      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
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
    label="评分器"
    style="">
      <div class="form-editor-container" style="">
      /*未找到模板[MOBRATING]*/      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.data1.visible"
    name="data1"
    :rules="state.rules.data1"
    :labelWidth="130"
    :required="state.detailsModel.data1.required"
    label="步进器"
    style="">
      <div class="form-editor-container" style="">
      /*未找到模板[MOBSTEPPER]*/      </div>
  </AppFormItem>
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
    label="数据选择"
    style="">
      <div class="form-editor-container" style="">
      /*未找到模板[MOBPICKER]*/      </div>
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
    label="值项"
    style="">
      <div class="form-editor-container" style="">
      /*未找到模板[HIDDEN]*/      </div>
  </AppFormItem>
</a-col>
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
    label="标签"
    style="">
      <div class="form-editor-container" style="">
<AppSpan
  name="formitem3"
  :disabled="state.detailsModel.formitem3.disabled"
  dataType="25"
  :value="state.data.formitem3"
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
  <AppFormItem 
    v-show="state.detailsModel.formitem4.visible"
    name="formitem4"
    :rules="state.rules.formitem4"
    :labelWidth="130"
    :required="state.detailsModel.formitem4.required"
    label="滑动输入条"
    style="">
      <div class="form-editor-container" style="">
      /*未找到模板[MOBSLIDER]*/      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem5.visible"
    name="formitem5"
    :rules="state.rules.formitem5"
    :labelWidth="130"
    :required="state.detailsModel.formitem5.required"
    label="开关"
    style="">
      <div class="form-editor-container" style="">
      /*未找到模板[MOBSWITCH]*/      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem6.visible"
    name="formitem6"
    :rules="state.rules.formitem6"
    :labelWidth="130"
    :required="state.detailsModel.formitem6.required"
    label="下拉列表框"
    style="">
      <div class="form-editor-container" style="">
      /*未找到模板[MOBDROPDOWNLIST]*/      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem7.visible"
    name="formitem7"
    :rules="state.rules.formitem7"
    :labelWidth="130"
    :required="state.detailsModel.formitem7.required"
    label="时间选择"
    style="">
      <div class="form-editor-container" style="">
      /*未找到模板[MOBDATE]*/      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <a-button 
    type="primary"
    v-show="state.detailsModel.button1.visible"
    class="app-form-button"
    style="">
      <span >保存</span>
  </a-button>
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
    title="数据选择测试"
    style=""
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
    v-show="state.detailsModel.formitem8.visible"
    name="formitem8"
    :rules="state.rules.formitem8"
    :labelWidth="130"
    :required="state.detailsModel.formitem8.required"
    label="多数据单选"
    style="">
      <div class="form-editor-container" style="">
      /*未找到模板[MOBPICKER]*/      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem9.visible"
    name="formitem9"
    :rules="state.rules.formitem9"
    :labelWidth="130"
    :required="state.detailsModel.formitem9.required"
    label="值项"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="formitem9"
  :disabled="state.detailsModel.formitem9.disabled"
  type="text"
  :value="state.data.formitem9"
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
    v-show="state.detailsModel.formitem10.visible"
    name="formitem10"
    :rules="state.rules.formitem10"
    :labelWidth="130"
    :required="state.detailsModel.formitem10.required"
    label="多数据多选"
    style="">
      <div class="form-editor-container" style="">
      /*未找到模板[MOBMPICKER]*/      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem11.visible"
    name="formitem11"
    :rules="state.rules.formitem11"
    :labelWidth="130"
    :required="state.detailsModel.formitem11.required"
    label="值项"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="formitem11"
  :disabled="state.detailsModel.formitem11.disabled"
  type="text"
  :value="state.data.formitem11"
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
    v-show="state.detailsModel.formitem12.visible"
    name="formitem12"
    :rules="state.rules.formitem12"
    :labelWidth="130"
    :required="state.detailsModel.formitem12.required"
    label="树单选"
    style="">
      <div class="form-editor-container" style="">
      /*未找到模板[MOBPICKER]*/      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem13.visible"
    name="formitem13"
    :rules="state.rules.formitem13"
    :labelWidth="130"
    :required="state.detailsModel.formitem13.required"
    label="值项"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="formitem13"
  :disabled="state.detailsModel.formitem13.disabled"
  type="text"
  :value="state.data.formitem13"
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
    v-show="state.detailsModel.formitem14.visible"
    name="formitem14"
    :rules="state.rules.formitem14"
    :labelWidth="130"
    :required="state.detailsModel.formitem14.required"
    label="树多选"
    style="">
      <div class="form-editor-container" style="">
      /*未找到模板[MOBMPICKER]*/      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem15.visible"
    name="formitem15"
    :rules="state.rules.formitem15"
    :labelWidth="130"
    :required="state.detailsModel.formitem15.required"
    label="值项"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="formitem15"
  :disabled="state.detailsModel.formitem15.disabled"
  type="text"
  :value="state.data.formitem15"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
    </a-row>
  </AppFormGroup>
</a-col>
  </a-row>
</a-tab-pane>
<a-tab-pane v-show="state.detailsModel.formpage2.visible"  key="formpage2">
  <template #tab>
    <AppIconText text="表单分页"/>
  </template>
  <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.year.visible"
    name="year"
    :rules="state.rules.year"
    :labelWidth="130"
    :required="state.detailsModel.year.required"
    label="年份"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="year"
  :disabled="state.detailsModel.year.disabled"
  type="text"
  :value="state.data.year"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
  </a-row>
</a-tab-pane>
    </a-tabs>
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