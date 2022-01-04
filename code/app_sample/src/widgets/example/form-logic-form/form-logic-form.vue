<script setup lang="ts">
import { Subject } from 'rxjs';
import { CtrlConfig } from './form-logic-form-config';
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
    name="FormLogic" 
    class="ibiz-form"
    style=""
    :model="state.data" 
    :rules="state.rules">
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormGroup name="group2" title="基础控制逻辑">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormGroup name="grouppanel1_1" title="分组面板">
    <a-row>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="formitem" label="是否显示">
<IbizDropdownList
  name="formitem"
  :data="state.data"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"
  :value="state.data.formitem"
  @editorEvent="handleEditorEvent"
/> 
  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 18, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="formitem1" label="显示项">
<IbizInput
  name="formitem1"
  type="text"
  :value="state.data.formitem1"
  @editorEvent="handleEditorEvent"
/> 
    
  </IbizFormItem>
</a-col>
    </a-row>
  </IbizFormGroup>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormGroup name="grouppanel2_1" title="分组面板">
    <a-row>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="formitem2" label="是否启用">
<IbizDropdownList
  name="formitem2"
  :data="state.data"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"
  :value="state.data.formitem2"
  @editorEvent="handleEditorEvent"
/> 
  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 18, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="formitem3" label="启用项">
<IbizInput
  name="formitem3"
  type="text"
  :value="state.data.formitem3"
  @editorEvent="handleEditorEvent"
/> 
    
  </IbizFormItem>
</a-col>
    </a-row>
  </IbizFormGroup>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormGroup name="grouppanel3_1" title="分组面板">
    <a-row>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="formitem4" label="是否空输入">
<IbizDropdownList
  name="formitem4"
  :data="state.data"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"
  :value="state.data.formitem4"
  @editorEvent="handleEditorEvent"
/> 
  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 18, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="formitem5" label="空输入项">
<IbizInput
  name="formitem5"
  type="text"
  :value="state.data.formitem5"
  @editorEvent="handleEditorEvent"
/> 
    
  </IbizFormItem>
</a-col>
    </a-row>
  </IbizFormGroup>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormGroup name="grouppanel4_1" title="分组面板">
    <a-row>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="formitem6" label="值变化置空">
<IbizInput
  name="formitem6"
  type="text"
  :value="state.data.formitem6"
  @editorEvent="handleEditorEvent"
/> 
    
  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 18, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="formitem7" label="置空项">
<IbizInput
  name="formitem7"
  type="text"
  :value="state.data.formitem7"
  @editorEvent="handleEditorEvent"
/> 
    
  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormGroup name="grouppanel8" title="组合逻辑控制">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormGroup name="grouppanel5" title="分组面板">
    <a-row>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="formitem11" label="值1">
<IbizInput
  name="formitem11"
  type="text"
  :value="state.data.formitem11"
  @editorEvent="handleEditorEvent"
/> 
    
  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="formitem12" label="值2">
<IbizInput
  name="formitem12"
  type="text"
  :value="state.data.formitem12"
  @editorEvent="handleEditorEvent"
/> 
    
  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="formitem13" label="表单项">
<IbizInput
  name="formitem13"
  placeholder="值1和值2有值时启用"
  type="text"
  :value="state.data.formitem13"
  @editorEvent="handleEditorEvent"
/> 
    
  </IbizFormItem>
</a-col>
    </a-row>
  </IbizFormGroup>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormGroup name="grouppanel7" title="分组面板">
    <a-row>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="formitem14" label="值3">
<IbizInput
  name="formitem14"
  type="text"
  :value="state.data.formitem14"
  @editorEvent="handleEditorEvent"
/> 
    
  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="formitem15" label="值4">
<IbizInput
  name="formitem15"
  type="text"
  :value="state.data.formitem15"
  @editorEvent="handleEditorEvent"
/> 
    
  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="formitem16" label="表单项">
<IbizInput
  name="formitem16"
  placeholder="值3或值4有值时启用"
  type="text"
  :value="state.data.formitem16"
  @editorEvent="handleEditorEvent"
/> 
    
  </IbizFormItem>
</a-col>
    </a-row>
  </IbizFormGroup>
</a-col>
    </a-row>
  </IbizFormGroup>
</a-col>
    </a-row>
  </IbizFormGroup>
</a-col>
    </a-row>
  </IbizFormGroup>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormGroup name="group1" title="层级选择">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormGroup name="grouppanel1" title="省市区">
    <div class="app-form-layout-flex" style="">
<a-col
 >
  <IbizFormItem name="provincename" label="省份">
<IbizDataPicker
  name="provincename"
  :data="state.data"
  valueItem="provinceid"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"
  :isDropdown="true"
  :value="state.data.provincename"
  @editorEvent="handleEditorEvent"
/>   </IbizFormItem>
</a-col>
<a-col
 >
  <IbizFormItem name="cityname" label="市">
<IbizDataPicker
  name="cityname"
  :data="state.data"
  valueItem="cityid"
  localParam="[net.ibizsys.model.control.PSNavigateParamImpl@6d5037a9]"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"
  :isDropdown="true"
  :value="state.data.cityname"
  @editorEvent="handleEditorEvent"
/>   </IbizFormItem>
</a-col>
<a-col
 >
  <IbizFormItem name="districtname" label="区/县">
<IbizDataPicker
  name="districtname"
  :data="state.data"
  valueItem="districtid"
  localParam="[net.ibizsys.model.control.PSNavigateParamImpl@422b8438]"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"
  :isDropdown="true"
  :value="state.data.districtname"
  @editorEvent="handleEditorEvent"
/>   </IbizFormItem>
</a-col>
    </div>
  </IbizFormGroup>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="cityid" label="市标识">
    /*未找到模板[HIDDEN]*/  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="provinceid" label="省份标识">
    /*未找到模板[HIDDEN]*/  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="districtid" label="区标识">
    /*未找到模板[HIDDEN]*/  </IbizFormItem>
</a-col>
    </a-row>
  </IbizFormGroup>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormGroup name="grouppanel9" title="表单项更新（直接代码）">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormGroup name="grouppanel10" title="分组面板">
    <div class="app-form-layout-flex" style="">
<a-col
 >
  <IbizFormItem name="fieldx1" label="(x值">
<IbizInput
  name="fieldx1"
  type="number"
  :value="state.data.fieldx1"
  @editorEvent="handleEditorEvent"
/> 
    
  </IbizFormItem>
</a-col>
<a-col
 >
  <IbizFormItem name="fieldy1" label="+Y值">
<IbizInput
  name="fieldy1"
  type="number"
  :value="state.data.fieldy1"
  @editorEvent="handleEditorEvent"
/> 
    
  </IbizFormItem>
</a-col>
<a-col
 >
  <IbizFormItem name="fieldz1" label=")*2=Z值">
<IbizSpan
  name="fieldz1"
  dataType="25"
  :value="state.data.fieldz1"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
    </div>
  </IbizFormGroup>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="formitem18" label="">
<IbizSpan
  name="formitem18"
  dataType="25"
  :value="state.data.formitem18"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
    </a-row>
  </IbizFormGroup>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormGroup name="grouppanel2" title="表单项更新（调用行为）">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormGroup name="grouppanel6" title="分组面板">
    <div class="app-form-layout-flex" style="">
<a-col
 >
  <IbizFormItem name="fieldx" label="(x值">
<IbizInput
  name="fieldx"
  type="text"
  :value="state.data.fieldx"
  @editorEvent="handleEditorEvent"
/> 
    
  </IbizFormItem>
</a-col>
<a-col
 >
  <IbizFormItem name="fieldy" label="+Y值">
<IbizInput
  name="fieldy"
  type="text"
  :value="state.data.fieldy"
  @editorEvent="handleEditorEvent"
/> 
    
  </IbizFormItem>
</a-col>
<a-col
 >
  <IbizFormItem name="fieldz" label=")*2=Z值">
<IbizSpan
  name="fieldz"
  dataType="6"
  :value="state.data.fieldz"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
    </div>
  </IbizFormGroup>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="formitem17" label="">
<IbizSpan
  name="formitem17"
  dataType="25"
  :value="state.data.formitem17"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
    </a-row>
  </IbizFormGroup>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormGroup name="grouppanel3" title="动态分组标题">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="formitem8" label="">
<IbizInput
  name="formitem8"
  type="text"
  :value="state.data.formitem8"
  @editorEvent="handleEditorEvent"
/> 
    
  </IbizFormItem>
</a-col>
    </a-row>
  </IbizFormGroup>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormGroup name="grouppanel4" title="动态表单项标签标题">
    <a-row>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="formitem10" label="">
<IbizInput
  name="formitem10"
  placeholder="请输入信息以触发"
  type="text"
  :value="state.data.formitem10"
  @editorEvent="handleEditorEvent"
/> 
    
  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="formitem9" label="">
<IbizInput
  name="formitem9"
  type="text"
  :value="state.data.formitem9"
  @editorEvent="handleEditorEvent"
/> 
    
  </IbizFormItem>
</a-col>
    </a-row>
  </IbizFormGroup>
</a-col>
  </a-form>
</template>
<style lang="scss">
  .ibiz-form {
    .ant-card-head {
      padding: 0;
      margin: 0 10px;
    }
  }
</style>