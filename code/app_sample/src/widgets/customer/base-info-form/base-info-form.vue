<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './base-info-form-state';
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
  <a-form name="BaseInfo"
    class="app-form app-info-form"
    style="" :model="state.data" :rules="state.rules">
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
    titleStyle=""
    :infoGroupMode="true"
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
    titleStyle=""
    :infoGroupMode="true"
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
    titleStyle=""
    :infoGroupMode="true"
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
  <AppFormItem v-show="state.detailsModel.customername.visible" name="customername" :required="state.detailsModel.customername.required" label="">
<appSpan
  name="customername"
  :disabled="state.detailsModel.customername.disabled"
  dataType="25"
  :value="state.data.customername"
  :context="state.context"
  :viewParams="state.viewParams"/>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.type.visible" name="type" :required="state.detailsModel.type.required" label="">
<appSpan
  name="type"
  :disabled="state.detailsModel.type.disabled"
  dataType="25"
  :value="state.data.type"
  :context="state.context"
  :viewParams="state.viewParams"/>
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
    titleStyle=""
    :infoGroupMode="true"
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
  <AppFormItem v-show="state.detailsModel.image.visible" name="image" :required="state.detailsModel.image.required" label="图像">
<appUpload
  name="image"
  :disabled="state.detailsModel.image.disabled"
  :limit="1"
  accept='image/*'
  listType="picture-card"
  :value="state.data.image"
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
    titleStyle=""
    :infoGroupMode="true"
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
    titleStyle=""
    :infoGroupMode="true"
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
  <AppFormItem v-show="state.detailsModel.pcustomername.visible" name="pcustomername" :required="state.detailsModel.pcustomername.required" label="上级客户">
<appSpan
  name="pcustomername"
  :disabled="state.detailsModel.pcustomername.disabled"
  dataType="25"
  :value="state.data.pcustomername"
  :context="state.context"
  :viewParams="state.viewParams"/>
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
    titleStyle=""
    :infoGroupMode="true"
    :titleBarCloseMode="0"
    :showCaption="false"
    :uIActionGroup="state.detailsModel.grouppanel1.uIActionGroup"
    @componentEvent="onComponentEvent">
    <div class="app-form-layout-flex" style="">
<a-col
 >
  <AppFormItem v-show="state.detailsModel.provincename.visible" name="provincename" :required="state.detailsModel.provincename.required" label="公司地址">
<appSpan
  name="provincename"
  :disabled="state.detailsModel.provincename.disabled"
  dataType="25"
  :value="state.data.provincename"
  :context="state.context"
  :viewParams="state.viewParams"/>
  </AppFormItem>
</a-col>
<a-col
 >
  <AppFormItem v-show="state.detailsModel.cityname.visible" name="cityname" :required="state.detailsModel.cityname.required" label="市">
<appSpan
  name="cityname"
  :disabled="state.detailsModel.cityname.disabled"
  dataType="25"
  localParam="{ 'n_provinceid_eq':'%provinceid%' }"
  :value="state.data.cityname"
  :context="state.context"
  :viewParams="state.viewParams"/>
  </AppFormItem>
</a-col>
<a-col
 >
  <AppFormItem v-show="state.detailsModel.districtname.visible" name="districtname" :required="state.detailsModel.districtname.required" label="区/县">
<appSpan
  name="districtname"
  :disabled="state.detailsModel.districtname.disabled"
  dataType="25"
  localParam="{ 'n_cityid_eq':'%cityid%' }"
  :value="state.data.districtname"
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
  <AppFormItem v-show="state.detailsModel.street.visible" name="street" :required="state.detailsModel.street.required" label="">
<appSpan
  name="street"
  :disabled="state.detailsModel.street.disabled"
  dataType="25"
  :value="state.data.street"
  :context="state.context"
  :viewParams="state.viewParams"/>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.taxno.visible" name="taxno" :required="state.detailsModel.taxno.required" label="税号">
<appSpan
  name="taxno"
  :disabled="state.detailsModel.taxno.disabled"
  dataType="25"
  :value="state.data.taxno"
  :context="state.context"
  :viewParams="state.viewParams"/>
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
    titleStyle=""
    :infoGroupMode="true"
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
  <AppFormItem v-show="state.detailsModel.phone.visible" name="phone" :required="state.detailsModel.phone.required" label="电话">
<appSpan
  name="phone"
  :disabled="state.detailsModel.phone.disabled"
  dataType="25"
  :value="state.data.phone"
  :context="state.context"
  :viewParams="state.viewParams"/>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.mobile.visible" name="mobile" :required="state.detailsModel.mobile.required" label="手机">
<appSpan
  name="mobile"
  :disabled="state.detailsModel.mobile.disabled"
  dataType="25"
  :value="state.data.mobile"
  :context="state.context"
  :viewParams="state.viewParams"/>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.email.visible" name="email" :required="state.detailsModel.email.required" label="电子邮箱">
<appSpan
  name="email"
  :disabled="state.detailsModel.email.disabled"
  dataType="25"
  :value="state.data.email"
  :context="state.context"
  :viewParams="state.viewParams"/>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.website.visible" name="website" :required="state.detailsModel.website.required" label="网站地址">
<appSpan
  name="website"
  :disabled="state.detailsModel.website.disabled"
  dataType="25"
  :value="state.data.website"
  :context="state.context"
  :viewParams="state.viewParams"/>
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