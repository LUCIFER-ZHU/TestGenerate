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
    <a-tabs class="app-form-page">
<a-tab-pane v-show="state.detailsModel.formpage1.visible"  key="formpage1">
  <template #tab>
    <AppIconText text="基本信息"/>
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
    style=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="true"
    :uIActionGroup="state.detailsModel.group1.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 8, offset: 0 }"
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
  :lg="{span: 8, offset: 0 }"
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
<a-col
  :lg="{span: 8, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.season.visible"
    name="season"
    :rules="state.rules.season"
    :labelWidth="130"
    :required="state.detailsModel.season.required"
    label="季度"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="season"
  :disabled="state.detailsModel.season.disabled"
  type="text"
  :value="state.data.season"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 8, offset: 0 }"
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
  :lg="{span: 8, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.month.visible"
    name="month"
    :rules="state.rules.month"
    :labelWidth="130"
    :required="state.detailsModel.month.required"
    label="月份"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="month"
  :disabled="state.detailsModel.month.disabled"
  type="text"
  :value="state.data.month"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 8, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.latitude.visible"
    name="latitude"
    :rules="state.rules.latitude"
    :labelWidth="130"
    :required="state.detailsModel.latitude.required"
    label="纬度"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="latitude"
  :disabled="state.detailsModel.latitude.disabled"
  type="text"
  :value="state.data.latitude"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 8, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.longitude.visible"
    name="longitude"
    :rules="state.rules.longitude"
    :labelWidth="130"
    :required="state.detailsModel.longitude.required"
    label="经度"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="longitude"
  :disabled="state.detailsModel.longitude.disabled"
  type="text"
  :value="state.data.longitude"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 8, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.datetime.visible"
    name="datetime"
    :rules="state.rules.datetime"
    :labelWidth="130"
    :required="state.detailsModel.datetime.required"
    label="数据时间"
    style="">
      <div class="form-editor-container" style="">
<AppDatePicker
  name="datetime"
  :disabled="state.detailsModel.datetime.disabled"
  dateFormat="YYYY-MM-DD HH:mm:ss"
  dateType="dateTime"
  :value="state.data.datetime"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 8, offset: 0 }"
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
<AppDropdownList
  name="datatype"
  codeListTag="Sample__DataType"
  codeListType="STATIC"
  
  :disabled="state.detailsModel.datatype.disabled"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.datatype"
  :data="state.data"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 8, offset: 0 }"
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
<AppInput
  name="data"
  :disabled="state.detailsModel.data.disabled"
  type="number"
  :value="state.data.data"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 8, offset: 0 }"
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
  :lg="{span: 8, offset: 0 }"
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
  :lg="{span: 8, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.open.visible"
    name="open"
    :rules="state.rules.open"
    :labelWidth="130"
    :required="state.detailsModel.open.required"
    label="开盘值"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="open"
  :disabled="state.detailsModel.open.disabled"
  type="text"
  :value="state.data.open"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 8, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.close.visible"
    name="close"
    :rules="state.rules.close"
    :labelWidth="130"
    :required="state.detailsModel.close.required"
    label="收盘值"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="close"
  :disabled="state.detailsModel.close.disabled"
  type="text"
  :value="state.data.close"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 8, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.lowest.visible"
    name="lowest"
    :rules="state.rules.lowest"
    :labelWidth="130"
    :required="state.detailsModel.lowest.required"
    label="最小值"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="lowest"
  :disabled="state.detailsModel.lowest.disabled"
  type="text"
  :value="state.data.lowest"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 8, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.highest.visible"
    name="highest"
    :rules="state.rules.highest"
    :labelWidth="130"
    :required="state.detailsModel.highest.required"
    label="最大值"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="highest"
  :disabled="state.detailsModel.highest.disabled"
  type="text"
  :value="state.data.highest"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 8, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.planincome.visible"
    name="planincome"
    :rules="state.rules.planincome"
    :labelWidth="130"
    :required="state.detailsModel.planincome.required"
    label="计划收入"
    style="">
      <div class="form-editor-container" style="">
<AppDropdownList
  name="planincome"
  :disabled="state.detailsModel.planincome.disabled"
  localContext="{ 'textctxdyna':'app','testctx':'1111111' }"
  localParam="{ 'testviewparamdyna':'app','testviewparam':'22222' }"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.planincome"
  :data="state.data"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 8, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.realincome.visible"
    name="realincome"
    :rules="state.rules.realincome"
    :labelWidth="130"
    :required="state.detailsModel.realincome.required"
    label="实际收入"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="realincome"
  :disabled="state.detailsModel.realincome.disabled"
  type="text"
  :value="state.data.realincome"
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
  <AppFormGroup 
    v-show="state.detailsModel.grouppanel1.visible" 
    name="grouppanel1" 
    title="分组面板"
    style=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="true"
    :uIActionGroup="state.detailsModel.grouppanel1.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 8, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.deptid.visible"
    name="deptid"
    :rules="state.rules.deptid"
    :labelWidth="130"
    :required="state.detailsModel.deptid.required"
    label="组织部门标识"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="deptid"
  :disabled="state.detailsModel.deptid.disabled"
  :maxLength="60"
  type="text"
  :value="state.data.deptid"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 8, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.orgid.visible"
    name="orgid"
    :rules="state.rules.orgid"
    :labelWidth="130"
    :required="state.detailsModel.orgid.required"
    label="组织机构标识"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="orgid"
  :disabled="state.detailsModel.orgid.disabled"
  :maxLength="60"
  type="text"
  :value="state.data.orgid"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 8, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.imagepath.visible"
    name="imagepath"
    :rules="state.rules.imagepath"
    :labelWidth="130"
    :required="state.detailsModel.imagepath.required"
    label="图片路径"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="imagepath"
  :disabled="state.detailsModel.imagepath.disabled"
  :maxLength="100"
  type="text"
  :value="state.data.imagepath"
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
    <AppIconText text="其它"/>
  </template>
  <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.group2.visible" 
    name="group2" 
    title="操作信息"
    style=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="true"
    :uIActionGroup="state.detailsModel.group2.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.createman.visible"
    name="createman"
    :rules="state.rules.createman"
    :labelWidth="130"
    :required="state.detailsModel.createman.required"
    label="建立人"
    style="">
      <div class="form-editor-container" style="">
<AppSpan
  name="createman"
  :disabled="state.detailsModel.createman.disabled"
  codeListTag="SysOperator"
  codeListType="DYNAMIC"
  dataType="25"
  :value="state.data.createman"
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
    v-show="state.detailsModel.createdate.visible"
    name="createdate"
    :rules="state.rules.createdate"
    :labelWidth="130"
    :required="state.detailsModel.createdate.required"
    label="建立时间"
    style="">
      <div class="form-editor-container" style="">
<AppSpan
  name="createdate"
  :disabled="state.detailsModel.createdate.disabled"
  dataType="5"
  valueFormat="YYYY-MM-DD HH:mm:ss"
  :value="state.data.createdate"
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
    v-show="state.detailsModel.updateman.visible"
    name="updateman"
    :rules="state.rules.updateman"
    :labelWidth="130"
    :required="state.detailsModel.updateman.required"
    label="更新人"
    style="">
      <div class="form-editor-container" style="">
<AppSpan
  name="updateman"
  :disabled="state.detailsModel.updateman.disabled"
  codeListTag="SysOperator"
  codeListType="DYNAMIC"
  dataType="25"
  :value="state.data.updateman"
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
    v-show="state.detailsModel.updatedate.visible"
    name="updatedate"
    :rules="state.rules.updatedate"
    :labelWidth="130"
    :required="state.detailsModel.updatedate.required"
    label="更新时间"
    style="">
      <div class="form-editor-container" style="">
<AppSpan
  name="updatedate"
  :disabled="state.detailsModel.updatedate.disabled"
  dataType="5"
  valueFormat="YYYY-MM-DD HH:mm:ss"
  :value="state.data.updatedate"
  :context="state.context"
  :viewParams="state.viewParams"/>
      </div>
  </AppFormItem>
</a-col>
    </a-row>
  </AppFormGroup>
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