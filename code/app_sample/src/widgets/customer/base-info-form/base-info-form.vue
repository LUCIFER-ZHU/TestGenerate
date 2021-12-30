<script setup lang="ts">
import { Subject } from 'rxjs';
import { CtrlConfig } from './base-info-form-config';
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
    name="BaseInfo" 
    class="ibiz-form ibiz-info-form"
    style=""
    :model="state.data" 
    :rules="state.rules">
<a-col :span="24">
  <IbizFormGroup name="group1" title="客户基本信息">
    <a-row>
<a-col :span="24">
  <IbizFormGroup name="grouppanel2" title="头部">
    <a-row>
<a-col :span="24">
  <IbizFormGroup name="grouppanel7" title="头部左边">
    <a-row>
<a-col :span="24">
  <IbizFormItem name="customername" label="">
<IbizSpan
  name="customername"
  :value="state.data.customername"
  dataType="25"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="type" label="">
<IbizSpan
  name="type"
  :value="state.data.type"
  dataType="25"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
    </a-row>
  </IbizFormGroup>
</a-col>
<a-col :span="24">
  <IbizFormGroup name="grouppanel8" title="头部右边">
    <a-row>
<a-col :span="24">
  <IbizFormItem name="image" label="图像">
<IbizUpload
  name="image"
  :value="state.data.image"
  :limit="1"
  accept='image/*'
  listType="picture-card"
  @editorEvent="handleEditorEvent"/>
  </IbizFormItem>
</a-col>
    </a-row>
  </IbizFormGroup>
</a-col>
    </a-row>
  </IbizFormGroup>
</a-col>
<a-col :span="24">
  <IbizFormGroup name="grouppanel3" title="中间">
    <a-row>
<a-col :span="24">
  <IbizFormGroup name="grouppanel6" title="地址">
    <a-row>
<a-col :span="24">
  <IbizFormItem name="pcustomername" label="上级客户">
<IbizSpan
  name="pcustomername"
  :value="state.data.pcustomername"
  dataType="25"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormGroup name="grouppanel1" title="省市区">
    <div class="app-form-layout-flex" style="">
<a-col :span="24">
  <IbizFormItem name="provincename" label="公司地址">
<IbizSpan
  name="provincename"
  :value="state.data.provincename"
  dataType="25"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="cityname" label="市">
<IbizSpan
  name="cityname"
  :value="state.data.cityname"
  dataType="25"
  localParam="[net.ibizsys.model.control.PSNavigateParamImpl@2cec704c]"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="districtname" label="区/县">
<IbizSpan
  name="districtname"
  :value="state.data.districtname"
  dataType="25"
  localParam="[net.ibizsys.model.control.PSNavigateParamImpl@771cbb1a]"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
    </div>
  </IbizFormGroup>
</a-col>
<a-col :span="24">
  <IbizFormItem name="street" label="">
<IbizSpan
  name="street"
  :value="state.data.street"
  dataType="25"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="taxno" label="税号">
<IbizSpan
  name="taxno"
  :value="state.data.taxno"
  dataType="25"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
    </a-row>
  </IbizFormGroup>
</a-col>
<a-col :span="24">
  <IbizFormGroup name="grouppanel4" title="联系方式">
    <a-row>
<a-col :span="24">
  <IbizFormItem name="phone" label="电话">
<IbizSpan
  name="phone"
  :value="state.data.phone"
  dataType="25"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="mobile" label="手机">
<IbizSpan
  name="mobile"
  :value="state.data.mobile"
  dataType="25"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="email" label="电子邮箱">
<IbizSpan
  name="email"
  :value="state.data.email"
  dataType="25"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="website" label="网站地址">
<IbizSpan
  name="website"
  :value="state.data.website"
  dataType="25"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
    </a-row>
  </IbizFormGroup>
</a-col>
    </a-row>
  </IbizFormGroup>
</a-col>
<a-col :span="24">
  <IbizFormItem name="cityid" label="市标识">
    /*未找到模板[HIDDEN]*/  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="provinceid" label="省份标识">
    /*未找到模板[HIDDEN]*/  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="districtid" label="区标识">
    /*未找到模板[HIDDEN]*/  </IbizFormItem>
</a-col>
      /*未找到模板[TABPANEL]*/    </a-row>
  </IbizFormGroup>
</a-col>
  </a-form>
</template>
<style lang="scss">
.ibiz-form {
  margin: 20px !important;
}
</style>