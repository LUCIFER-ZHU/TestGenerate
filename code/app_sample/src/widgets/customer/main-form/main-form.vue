<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './main-form-state';
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
    title="客户基本信息"
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
  <AppFormGroup 
    v-show="state.detailsModel.grouppanel2.visible" 
    name="grouppanel2" 
    title="头部"
    style=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="false"
    :uIActionGroup="state.detailsModel.grouppanel2.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.grouppanel7.visible" 
    name="grouppanel7" 
    title="头部左边"
    style=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="false"
    :uIActionGroup="state.detailsModel.grouppanel7.uIActionGroup"
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
    label=""
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
    v-show="state.detailsModel.type.visible"
    name="type"
    :rules="state.rules.type"
    :labelWidth="130"
    :required="state.detailsModel.type.required"
    label=""
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
    </a-row>
  </AppFormGroup>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.grouppanel8.visible" 
    name="grouppanel8" 
    title="头部右边"
    style=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="false"
    :uIActionGroup="state.detailsModel.grouppanel8.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.image.visible"
    name="image"
    :rules="state.rules.image"
    :labelWidth="130"
    :required="state.detailsModel.image.required"
    label="图像"
    style="">
      <div class="form-editor-container" style="">
<AppUpload
  name="image"
  :disabled="state.detailsModel.image.disabled"
  :limit="1"
  accept='image/*'
  listType="picture-card"
  :value="state.data.image"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
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
    v-show="state.detailsModel.grouppanel3.visible" 
    name="grouppanel3" 
    title="中间"
    style=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="false"
    :uIActionGroup="state.detailsModel.grouppanel3.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.grouppanel6.visible" 
    name="grouppanel6" 
    title="地址"
    style=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="false"
    :uIActionGroup="state.detailsModel.grouppanel6.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
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
  <AppFormGroup 
    v-show="state.detailsModel.grouppanel1.visible" 
    name="grouppanel1" 
    title="省市区"
    style=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="false"
    :uIActionGroup="state.detailsModel.grouppanel1.uIActionGroup"
    @componentEvent="onComponentEvent">
    <div class="app-form-layout-flex" style="">
<a-col
 >
  <AppFormItem 
    v-show="state.detailsModel.provincename.visible"
    name="provincename"
    :rules="state.rules.provincename"
    :labelWidth="130"
    :required="state.detailsModel.provincename.required"
    label="公司地址"
    style="">
      <div class="form-editor-container" style="">
<AppDataPicker
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
/>       </div>
  </AppFormItem>
</a-col>
<a-col
 >
  <AppFormItem 
    v-show="state.detailsModel.cityname.visible"
    name="cityname"
    :rules="state.rules.cityname"
    :labelWidth="0"
    :required="state.detailsModel.cityname.required"
    label="市"
    style="">
      <div class="form-editor-container" style="">
<AppDataPicker
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
/>       </div>
  </AppFormItem>
</a-col>
<a-col
 >
  <AppFormItem 
    v-show="state.detailsModel.districtname.visible"
    name="districtname"
    :rules="state.rules.districtname"
    :labelWidth="0"
    :required="state.detailsModel.districtname.required"
    label="区/县"
    style="">
      <div class="form-editor-container" style="">
<AppDataPicker
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
/>       </div>
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
  <AppFormItem 
    v-show="state.detailsModel.street.visible"
    name="street"
    :rules="state.rules.street"
    :labelWidth="130"
    :required="state.detailsModel.street.required"
    label=""
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="street"
  :disabled="state.detailsModel.street.disabled"
  placeholder="街道"
  :maxLength="100"
  type="text"
  :value="state.data.street"
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
    v-show="state.detailsModel.taxno.visible"
    name="taxno"
    :rules="state.rules.taxno"
    :labelWidth="130"
    :required="state.detailsModel.taxno.required"
    label="税号"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="taxno"
  :disabled="state.detailsModel.taxno.disabled"
  :maxLength="100"
  type="text"
  :value="state.data.taxno"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
    </a-row>
  </AppFormGroup>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.grouppanel4.visible" 
    name="grouppanel4" 
    title="联系方式"
    style=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="false"
    :uIActionGroup="state.detailsModel.grouppanel4.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.phone.visible"
    name="phone"
    :rules="state.rules.phone"
    :labelWidth="130"
    :required="state.detailsModel.phone.required"
    label="电话"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="phone"
  :disabled="state.detailsModel.phone.disabled"
  :maxLength="100"
  type="text"
  :value="state.data.phone"
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
    v-show="state.detailsModel.mobile.visible"
    name="mobile"
    :rules="state.rules.mobile"
    :labelWidth="130"
    :required="state.detailsModel.mobile.required"
    label="手机"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="mobile"
  :disabled="state.detailsModel.mobile.disabled"
  :maxLength="100"
  type="text"
  :value="state.data.mobile"
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
    v-show="state.detailsModel.email.visible"
    name="email"
    :rules="state.rules.email"
    :labelWidth="130"
    :required="state.detailsModel.email.required"
    label="电子邮箱"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="email"
  :disabled="state.detailsModel.email.disabled"
  :maxLength="100"
  type="text"
  :value="state.data.email"
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
    v-show="state.detailsModel.website.visible"
    name="website"
    :rules="state.rules.website"
    :labelWidth="130"
    :required="state.detailsModel.website.required"
    label="网站地址"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="website"
  :disabled="state.detailsModel.website.disabled"
  :maxLength="100"
  type="text"
  :value="state.data.website"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
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
  <a-tabs class="app-form-page">
  </a-tabs>
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