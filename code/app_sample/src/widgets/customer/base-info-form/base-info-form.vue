<script setup lang="ts">
import { Subject } from 'rxjs';
import { CtrlConfig } from './base-info-form-config';
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
    name="BaseInfo" 
    class="ibiz-form ibiz-info-form"
    style=""
    :model="state.data" 
    :rules="state.rules">
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormGroup name="group1" title="客户基本信息">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormGroup name="grouppanel2" title="头部">
    <a-row>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormGroup name="grouppanel7" title="头部左边">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="customername" label="">
<IbizSpan
  name="customername"
  dataType="25"
  :value="state.data.customername"
  :context="state.context"
  :viewParams="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="type" label="">
<IbizSpan
  name="type"
  dataType="25"
  :value="state.data.type"
  :context="state.context"
  :viewParams="state.viewParams"/>
  </IbizFormItem>
</a-col>
    </a-row>
  </IbizFormGroup>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormGroup name="grouppanel8" title="头部右边">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="image" label="图像">
<IbizUpload
  name="image"
  :limit="1"
  accept='image/*'
  listType="picture-card"
  :value="state.data.image"
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
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormGroup name="grouppanel3" title="中间">
    <a-row>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormGroup name="grouppanel6" title="地址">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="pcustomername" label="上级客户">
<IbizSpan
  name="pcustomername"
  dataType="25"
  :value="state.data.pcustomername"
  :context="state.context"
  :viewParams="state.viewParams"/>
  </IbizFormItem>
</a-col>
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
  <IbizFormItem name="provincename" label="公司地址">
<IbizSpan
  name="provincename"
  dataType="25"
  :value="state.data.provincename"
  :context="state.context"
  :viewParams="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col
 >
  <IbizFormItem name="cityname" label="市">
<IbizSpan
  name="cityname"
  dataType="25"
  localParam="[net.ibizsys.model.control.PSNavigateParamImpl@162b3d47]"
  :value="state.data.cityname"
  :context="state.context"
  :viewParams="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col
 >
  <IbizFormItem name="districtname" label="区/县">
<IbizSpan
  name="districtname"
  dataType="25"
  localParam="[net.ibizsys.model.control.PSNavigateParamImpl@783115d9]"
  :value="state.data.districtname"
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
  <IbizFormItem name="street" label="">
<IbizSpan
  name="street"
  dataType="25"
  :value="state.data.street"
  :context="state.context"
  :viewParams="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="taxno" label="税号">
<IbizSpan
  name="taxno"
  dataType="25"
  :value="state.data.taxno"
  :context="state.context"
  :viewParams="state.viewParams"/>
  </IbizFormItem>
</a-col>
    </a-row>
  </IbizFormGroup>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormGroup name="grouppanel4" title="联系方式">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="phone" label="电话">
<IbizSpan
  name="phone"
  dataType="25"
  :value="state.data.phone"
  :context="state.context"
  :viewParams="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="mobile" label="手机">
<IbizSpan
  name="mobile"
  dataType="25"
  :value="state.data.mobile"
  :context="state.context"
  :viewParams="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="email" label="电子邮箱">
<IbizSpan
  name="email"
  dataType="25"
  :value="state.data.email"
  :context="state.context"
  :viewParams="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="website" label="网站地址">
<IbizSpan
  name="website"
  dataType="25"
  :value="state.data.website"
  :context="state.context"
  :viewParams="state.viewParams"/>
  </IbizFormItem>
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
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <a-tabs class="ibiz-form-page">
  </a-tabs>
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