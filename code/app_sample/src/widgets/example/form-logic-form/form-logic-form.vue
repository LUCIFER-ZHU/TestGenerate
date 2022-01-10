<script setup lang="ts">
import { Subject } from 'rxjs';
import { CtrlConfig } from './form-logic-form-config';
import { FormControl, IActionParam, IParam, ControlAction, IContext } from '@core';

interface Props {
  context: IContext;
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
const { state, handleEditorEvent } = new FormControl(CtrlConfig).moduleInstall(props, emit);

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
  <IbizFormGroup v-show="state.detailsModel.group2.visible" name="group2" title="基础控制逻辑">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormGroup v-show="state.detailsModel.grouppanel1_1.visible" name="grouppanel1_1" title="分组面板">
    <a-row>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem v-show="state.detailsModel.formitem.visible" name="formitem" label="是否显示">
<IbizDropdownList
  name="formitem"
  :data="state.data"
  :context="state.context"
  :viewParams="state.viewParams"
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
  <IbizFormItem v-show="state.detailsModel.formitem1.visible" name="formitem1" label="显示项">
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
  <IbizFormGroup v-show="state.detailsModel.grouppanel2_1.visible" name="grouppanel2_1" title="分组面板">
    <a-row>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem v-show="state.detailsModel.formitem2.visible" name="formitem2" label="是否启用">
<IbizDropdownList
  name="formitem2"
  :data="state.data"
  :context="state.context"
  :viewParams="state.viewParams"
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
  <IbizFormItem v-show="state.detailsModel.formitem3.visible" name="formitem3" label="启用项">
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
  <IbizFormGroup v-show="state.detailsModel.grouppanel3_1.visible" name="grouppanel3_1" title="分组面板">
    <a-row>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem v-show="state.detailsModel.formitem4.visible" name="formitem4" label="是否空输入">
<IbizDropdownList
  name="formitem4"
  :data="state.data"
  :context="state.context"
  :viewParams="state.viewParams"
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
  <IbizFormItem v-show="state.detailsModel.formitem5.visible" name="formitem5" label="空输入项">
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
  <IbizFormGroup v-show="state.detailsModel.grouppanel4_1.visible" name="grouppanel4_1" title="分组面板">
    <a-row>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem v-show="state.detailsModel.formitem6.visible" name="formitem6" label="值变化置空">
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
  <IbizFormItem v-show="state.detailsModel.formitem7.visible" name="formitem7" label="置空项">
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
  <IbizFormGroup v-show="state.detailsModel.grouppanel8.visible" name="grouppanel8" title="组合逻辑控制">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormGroup v-show="state.detailsModel.grouppanel5.visible" name="grouppanel5" title="分组面板">
    <a-row>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem v-show="state.detailsModel.formitem11.visible" name="formitem11" label="值1">
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
  <IbizFormItem v-show="state.detailsModel.formitem12.visible" name="formitem12" label="值2">
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
  <IbizFormItem v-show="state.detailsModel.formitem13.visible" name="formitem13" label="表单项">
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
  <IbizFormGroup v-show="state.detailsModel.grouppanel7.visible" name="grouppanel7" title="分组面板">
    <a-row>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem v-show="state.detailsModel.formitem14.visible" name="formitem14" label="值3">
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
  <IbizFormItem v-show="state.detailsModel.formitem15.visible" name="formitem15" label="值4">
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
  <IbizFormItem v-show="state.detailsModel.formitem16.visible" name="formitem16" label="表单项">
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
  <IbizFormGroup v-show="state.detailsModel.group1.visible" name="group1" title="层级选择">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormGroup v-show="state.detailsModel.grouppanel1.visible" name="grouppanel1" title="省市区">
    <div class="app-form-layout-flex" style="">
<a-col
 >
  <IbizFormItem v-show="state.detailsModel.provincename.visible" name="provincename" label="省份">
<IbizDataPicker
  name="provincename"
  :data="state.data"
  valueItem="provinceid"
  :context="state.context"
  :viewParams="state.viewParams"
   pickUpView="ChartDataPickupView"
  :isDropdown="true"
  :value="state.data.provincename"
  @editorEvent="handleEditorEvent"
/>   </IbizFormItem>
</a-col>
<a-col
 >
  <IbizFormItem v-show="state.detailsModel.cityname.visible" name="cityname" label="市">
<IbizDataPicker
  name="cityname"
  :data="state.data"
  valueItem="cityid"
  localParam="{ 'n_provinceid_eq':'%provinceid%' }"
  :context="state.context"
  :viewParams="state.viewParams"
   pickUpView="ChartDataPickupView"
  :isDropdown="true"
  :value="state.data.cityname"
  @editorEvent="handleEditorEvent"
/>   </IbizFormItem>
</a-col>
<a-col
 >
  <IbizFormItem v-show="state.detailsModel.districtname.visible" name="districtname" label="区/县">
<IbizDataPicker
  name="districtname"
  :data="state.data"
  valueItem="districtid"
  localParam="{ 'n_cityid_eq':'%cityid%' }"
  :context="state.context"
  :viewParams="state.viewParams"
   pickUpView="ChartDataPickupView"
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
  <IbizFormItem v-show="state.detailsModel.cityid.visible" name="cityid" label="市标识">
    /*未找到模板[HIDDEN]*/  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem v-show="state.detailsModel.provinceid.visible" name="provinceid" label="省份标识">
    /*未找到模板[HIDDEN]*/  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem v-show="state.detailsModel.districtid.visible" name="districtid" label="区标识">
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
  <IbizFormGroup v-show="state.detailsModel.grouppanel9.visible" name="grouppanel9" title="表单项更新（直接代码）">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormGroup v-show="state.detailsModel.grouppanel10.visible" name="grouppanel10" title="分组面板">
    <div class="app-form-layout-flex" style="">
<a-col
 >
  <IbizFormItem v-show="state.detailsModel.fieldx1.visible" name="fieldx1" label="(x值">
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
  <IbizFormItem v-show="state.detailsModel.fieldy1.visible" name="fieldy1" label="+Y值">
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
  <IbizFormItem v-show="state.detailsModel.fieldz1.visible" name="fieldz1" label=")*2=Z值">
<IbizSpan
  name="fieldz1"
  dataType="25"
  :value="state.data.fieldz1"
  :context="state.context"
  :viewParams="state.viewParams"/>
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
  <IbizFormItem v-show="state.detailsModel.formitem18.visible" name="formitem18" label="">
<IbizSpan
  name="formitem18"
  dataType="25"
  :value="state.data.formitem18"
  :context="state.context"
  :viewParams="state.viewParams"/>
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
  <IbizFormGroup v-show="state.detailsModel.grouppanel2.visible" name="grouppanel2" title="表单项更新（调用行为）">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormGroup v-show="state.detailsModel.grouppanel6.visible" name="grouppanel6" title="分组面板">
    <div class="app-form-layout-flex" style="">
<a-col
 >
  <IbizFormItem v-show="state.detailsModel.fieldx.visible" name="fieldx" label="(x值">
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
  <IbizFormItem v-show="state.detailsModel.fieldy.visible" name="fieldy" label="+Y值">
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
  <IbizFormItem v-show="state.detailsModel.fieldz.visible" name="fieldz" label=")*2=Z值">
<IbizSpan
  name="fieldz"
  dataType="6"
  :value="state.data.fieldz"
  :context="state.context"
  :viewParams="state.viewParams"/>
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
  <IbizFormItem v-show="state.detailsModel.formitem17.visible" name="formitem17" label="">
<IbizSpan
  name="formitem17"
  dataType="25"
  :value="state.data.formitem17"
  :context="state.context"
  :viewParams="state.viewParams"/>
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
  <IbizFormGroup v-show="state.detailsModel.grouppanel3.visible" name="grouppanel3" title="动态分组标题">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem v-show="state.detailsModel.formitem8.visible" name="formitem8" label="">
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
  <IbizFormGroup v-show="state.detailsModel.grouppanel4.visible" name="grouppanel4" title="动态表单项标签标题">
    <a-row>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem v-show="state.detailsModel.formitem10.visible" name="formitem10" label="">
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
  <IbizFormItem v-show="state.detailsModel.formitem9.visible" name="formitem9" label="">
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