<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './form-logic-form-state';
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
  <a-form name="FormLogic"
    class="app-form"
    style="" :model="state.data" :rules="state.rules">
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.group2.visible" 
    name="group2" 
    title="基础控制逻辑"
    titleStyle=""
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
  <AppFormGroup 
    v-show="state.detailsModel.grouppanel1_1.visible" 
    name="grouppanel1_1" 
    title="分组面板"
    titleStyle=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="false"
    :uIActionGroup="state.detailsModel.grouppanel1_1.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem.visible" name="formitem" :required="state.detailsModel.formitem.required" label="是否显示">
<appDropdownList
  name="formitem"
  :disabled="state.detailsModel.formitem.disabled"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.formitem"
  :data="state.data"
  @editorEvent="onEditorEvent"
/> 
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 18, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem1.visible" name="formitem1" :required="state.detailsModel.formitem1.required" label="显示项">
<appInput
  name="formitem1"
  :disabled="state.detailsModel.formitem1.disabled"
  type="text"
  :value="state.data.formitem1"
  @editorEvent="onEditorEvent"
/> 
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
    v-show="state.detailsModel.grouppanel2_1.visible" 
    name="grouppanel2_1" 
    title="分组面板"
    titleStyle=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="false"
    :uIActionGroup="state.detailsModel.grouppanel2_1.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem2.visible" name="formitem2" :required="state.detailsModel.formitem2.required" label="是否启用">
<appDropdownList
  name="formitem2"
  :disabled="state.detailsModel.formitem2.disabled"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.formitem2"
  :data="state.data"
  @editorEvent="onEditorEvent"
/> 
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 18, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem3.visible" name="formitem3" :required="state.detailsModel.formitem3.required" label="启用项">
<appInput
  name="formitem3"
  :disabled="state.detailsModel.formitem3.disabled"
  type="text"
  :value="state.data.formitem3"
  @editorEvent="onEditorEvent"
/> 
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
    v-show="state.detailsModel.grouppanel3_1.visible" 
    name="grouppanel3_1" 
    title="分组面板"
    titleStyle=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="false"
    :uIActionGroup="state.detailsModel.grouppanel3_1.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem4.visible" name="formitem4" :required="state.detailsModel.formitem4.required" label="是否空输入">
<appDropdownList
  name="formitem4"
  :disabled="state.detailsModel.formitem4.disabled"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.formitem4"
  :data="state.data"
  @editorEvent="onEditorEvent"
/> 
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 18, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem5.visible" name="formitem5" :required="state.detailsModel.formitem5.required" label="空输入项">
<appInput
  name="formitem5"
  :disabled="state.detailsModel.formitem5.disabled"
  type="text"
  :value="state.data.formitem5"
  @editorEvent="onEditorEvent"
/> 
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
    v-show="state.detailsModel.grouppanel4_1.visible" 
    name="grouppanel4_1" 
    title="分组面板"
    titleStyle=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="false"
    :uIActionGroup="state.detailsModel.grouppanel4_1.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem6.visible" name="formitem6" :required="state.detailsModel.formitem6.required" label="值变化置空">
<appInput
  name="formitem6"
  :disabled="state.detailsModel.formitem6.disabled"
  type="text"
  :value="state.data.formitem6"
  @editorEvent="onEditorEvent"
/> 
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 18, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem7.visible" name="formitem7" :required="state.detailsModel.formitem7.required" label="置空项">
<appInput
  name="formitem7"
  :disabled="state.detailsModel.formitem7.disabled"
  type="text"
  :value="state.data.formitem7"
  @editorEvent="onEditorEvent"
/> 
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.grouppanel8.visible" 
    name="grouppanel8" 
    title="组合逻辑控制"
    titleStyle=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="true"
    :uIActionGroup="state.detailsModel.grouppanel8.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.grouppanel5.visible" 
    name="grouppanel5" 
    title="分组面板"
    titleStyle=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="false"
    :uIActionGroup="state.detailsModel.grouppanel5.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem11.visible" name="formitem11" :required="state.detailsModel.formitem11.required" label="值1">
<appInput
  name="formitem11"
  :disabled="state.detailsModel.formitem11.disabled"
  type="text"
  :value="state.data.formitem11"
  @editorEvent="onEditorEvent"
/> 
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem12.visible" name="formitem12" :required="state.detailsModel.formitem12.required" label="值2">
<appInput
  name="formitem12"
  :disabled="state.detailsModel.formitem12.disabled"
  type="text"
  :value="state.data.formitem12"
  @editorEvent="onEditorEvent"
/> 
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem13.visible" name="formitem13" :required="state.detailsModel.formitem13.required" label="表单项">
<appInput
  name="formitem13"
  :disabled="state.detailsModel.formitem13.disabled"
  placeholder="值1和值2有值时启用"
  type="text"
  :value="state.data.formitem13"
  @editorEvent="onEditorEvent"
/> 
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
    v-show="state.detailsModel.grouppanel7.visible" 
    name="grouppanel7" 
    title="分组面板"
    titleStyle=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="false"
    :uIActionGroup="state.detailsModel.grouppanel7.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem14.visible" name="formitem14" :required="state.detailsModel.formitem14.required" label="值3">
<appInput
  name="formitem14"
  :disabled="state.detailsModel.formitem14.disabled"
  type="text"
  :value="state.data.formitem14"
  @editorEvent="onEditorEvent"
/> 
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem15.visible" name="formitem15" :required="state.detailsModel.formitem15.required" label="值4">
<appInput
  name="formitem15"
  :disabled="state.detailsModel.formitem15.disabled"
  type="text"
  :value="state.data.formitem15"
  @editorEvent="onEditorEvent"
/> 
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem16.visible" name="formitem16" :required="state.detailsModel.formitem16.required" label="表单项">
<appInput
  name="formitem16"
  :disabled="state.detailsModel.formitem16.disabled"
  placeholder="值3或值4有值时启用"
  type="text"
  :value="state.data.formitem16"
  @editorEvent="onEditorEvent"
/> 
  </AppFormItem>
</a-col>
    </a-row>
  </AppFormGroup>
</a-col>
    </a-row>
  </AppFormGroup>
</a-col>
    </a-row>
  </AppFormGroup>
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
    v-show="state.detailsModel.group1.visible" 
    name="group1" 
    title="层级选择"
    titleStyle=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
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
  <AppFormGroup 
    v-show="state.detailsModel.grouppanel1.visible" 
    name="grouppanel1" 
    title="省市区"
    titleStyle=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="false"
    :uIActionGroup="state.detailsModel.grouppanel1.uIActionGroup"
    @componentEvent="onComponentEvent">
    <div class="app-form-layout-flex" style="">
<a-col
 >
  <AppFormItem v-show="state.detailsModel.provincename.visible" name="provincename" :required="state.detailsModel.provincename.required" label="省份">
<appDataPicker
  name="provincename"
  :data="state.data"
  valueItem="provinceid"
  :disabled="state.detailsModel.provincename.disabled"
  :context="state.context"
  :viewParams="state.viewParams"
   pickUpView="ChartDataPickupView"
  :isDropdown="true"
  :value="state.data.provincename"
  @editorEvent="onEditorEvent"
/>   </AppFormItem>
</a-col>
<a-col
 >
  <AppFormItem v-show="state.detailsModel.cityname.visible" name="cityname" :required="state.detailsModel.cityname.required" label="市">
<appDataPicker
  name="cityname"
  :data="state.data"
  valueItem="cityid"
  :disabled="state.detailsModel.cityname.disabled"
  localParam="{ 'n_provinceid_eq':'%provinceid%' }"
  :context="state.context"
  :viewParams="state.viewParams"
   pickUpView="ChartDataPickupView"
  :isDropdown="true"
  :value="state.data.cityname"
  @editorEvent="onEditorEvent"
/>   </AppFormItem>
</a-col>
<a-col
 >
  <AppFormItem v-show="state.detailsModel.districtname.visible" name="districtname" :required="state.detailsModel.districtname.required" label="区/县">
<appDataPicker
  name="districtname"
  :data="state.data"
  valueItem="districtid"
  :disabled="state.detailsModel.districtname.disabled"
  localParam="{ 'n_cityid_eq':'%cityid%' }"
  :context="state.context"
  :viewParams="state.viewParams"
   pickUpView="ChartDataPickupView"
  :isDropdown="true"
  :value="state.data.districtname"
  @editorEvent="onEditorEvent"
/>   </AppFormItem>
</a-col>
    </div>
  </AppFormGroup>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.cityid.visible" name="cityid" :required="state.detailsModel.cityid.required" label="市标识">
    /*未找到模板[HIDDEN]*/  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.provinceid.visible" name="provinceid" :required="state.detailsModel.provinceid.required" label="省份标识">
    /*未找到模板[HIDDEN]*/  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.districtid.visible" name="districtid" :required="state.detailsModel.districtid.required" label="区标识">
    /*未找到模板[HIDDEN]*/  </AppFormItem>
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
    v-show="state.detailsModel.grouppanel9.visible" 
    name="grouppanel9" 
    title="表单项更新（直接代码）"
    titleStyle=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="true"
    :uIActionGroup="state.detailsModel.grouppanel9.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.grouppanel10.visible" 
    name="grouppanel10" 
    title="分组面板"
    titleStyle=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="false"
    :uIActionGroup="state.detailsModel.grouppanel10.uIActionGroup"
    @componentEvent="onComponentEvent">
    <div class="app-form-layout-flex" style="">
<a-col
 >
  <AppFormItem v-show="state.detailsModel.fieldx1.visible" name="fieldx1" :required="state.detailsModel.fieldx1.required" label="(x值">
<appInput
  name="fieldx1"
  :disabled="state.detailsModel.fieldx1.disabled"
  type="number"
  :value="state.data.fieldx1"
  @editorEvent="onEditorEvent"
/> 
  </AppFormItem>
</a-col>
<a-col
 >
  <AppFormItem v-show="state.detailsModel.fieldy1.visible" name="fieldy1" :required="state.detailsModel.fieldy1.required" label="+Y值">
<appInput
  name="fieldy1"
  :disabled="state.detailsModel.fieldy1.disabled"
  type="number"
  :value="state.data.fieldy1"
  @editorEvent="onEditorEvent"
/> 
  </AppFormItem>
</a-col>
<a-col
 >
  <AppFormItem v-show="state.detailsModel.fieldz1.visible" name="fieldz1" :required="state.detailsModel.fieldz1.required" label=")*2=Z值">
<appSpan
  name="fieldz1"
  :disabled="state.detailsModel.fieldz1.disabled"
  dataType="25"
  :value="state.data.fieldz1"
  :context="state.context"
  :viewParams="state.viewParams"/>
  </AppFormItem>
</a-col>
    </div>
  </AppFormGroup>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem18.visible" name="formitem18" :required="state.detailsModel.formitem18.required" label="">
<appSpan
  name="formitem18"
  :disabled="state.detailsModel.formitem18.disabled"
  dataType="25"
  :value="state.data.formitem18"
  :context="state.context"
  :viewParams="state.viewParams"/>
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
    v-show="state.detailsModel.grouppanel2.visible" 
    name="grouppanel2" 
    title="表单项更新（调用行为）"
    titleStyle=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="true"
    :uIActionGroup="state.detailsModel.grouppanel2.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.grouppanel6.visible" 
    name="grouppanel6" 
    title="分组面板"
    titleStyle=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="false"
    :uIActionGroup="state.detailsModel.grouppanel6.uIActionGroup"
    @componentEvent="onComponentEvent">
    <div class="app-form-layout-flex" style="">
<a-col
 >
  <AppFormItem v-show="state.detailsModel.fieldx.visible" name="fieldx" :required="state.detailsModel.fieldx.required" label="(x值">
<appInput
  name="fieldx"
  :disabled="state.detailsModel.fieldx.disabled"
  type="text"
  :value="state.data.fieldx"
  @editorEvent="onEditorEvent"
/> 
  </AppFormItem>
</a-col>
<a-col
 >
  <AppFormItem v-show="state.detailsModel.fieldy.visible" name="fieldy" :required="state.detailsModel.fieldy.required" label="+Y值">
<appInput
  name="fieldy"
  :disabled="state.detailsModel.fieldy.disabled"
  type="text"
  :value="state.data.fieldy"
  @editorEvent="onEditorEvent"
/> 
  </AppFormItem>
</a-col>
<a-col
 >
  <AppFormItem v-show="state.detailsModel.fieldz.visible" name="fieldz" :required="state.detailsModel.fieldz.required" label=")*2=Z值">
<appSpan
  name="fieldz"
  :disabled="state.detailsModel.fieldz.disabled"
  dataType="6"
  :value="state.data.fieldz"
  :context="state.context"
  :viewParams="state.viewParams"/>
  </AppFormItem>
</a-col>
    </div>
  </AppFormGroup>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem17.visible" name="formitem17" :required="state.detailsModel.formitem17.required" label="">
<appSpan
  name="formitem17"
  :disabled="state.detailsModel.formitem17.disabled"
  dataType="25"
  :value="state.data.formitem17"
  :context="state.context"
  :viewParams="state.viewParams"/>
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
    v-show="state.detailsModel.grouppanel3.visible" 
    name="grouppanel3" 
    title="动态分组标题"
    titleStyle=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="true"
    :uIActionGroup="state.detailsModel.grouppanel3.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem8.visible" name="formitem8" :required="state.detailsModel.formitem8.required" label="">
<appInput
  name="formitem8"
  :disabled="state.detailsModel.formitem8.disabled"
  type="text"
  :value="state.data.formitem8"
  @editorEvent="onEditorEvent"
/> 
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
    v-show="state.detailsModel.grouppanel4.visible" 
    name="grouppanel4" 
    title="动态表单项标签标题"
    titleStyle=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="true"
    :uIActionGroup="state.detailsModel.grouppanel4.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem10.visible" name="formitem10" :required="state.detailsModel.formitem10.required" label="">
<appInput
  name="formitem10"
  :disabled="state.detailsModel.formitem10.disabled"
  placeholder="请输入信息以触发"
  type="text"
  :value="state.data.formitem10"
  @editorEvent="onEditorEvent"
/> 
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem9.visible" name="formitem9" :required="state.detailsModel.formitem9.required" label="">
<appInput
  name="formitem9"
  :disabled="state.detailsModel.formitem9.disabled"
  type="text"
  :value="state.data.formitem9"
  @editorEvent="onEditorEvent"
/> 
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