<script setup lang="ts">
import { Subject } from 'rxjs';
import { CtrlConfig } from './main-form-config';
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
    name="Main" 
    class="ibiz-form"
    style=""
    :model="state.data" 
    :rules="state.rules">
    <a-tabs class="app-form-page">

<a-tab-pane key="formpage1" tab="基本信息">
  <a-row>
<a-col :span="24">
  <IbizFormGroup name="group1" title="联系人基本信息">
    <a-row>
<a-col :span="24">
  <IbizFormGroup name="grouppanel1" title="分组面板">
    <a-row>
<a-col :span="24">
  <IbizFormItem name="image" label="头像">
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
<a-col :span="24">
  <IbizFormGroup name="grouppanel2" title="分组面板">
    <a-row>
<a-col :span="24">
  <IbizFormItem name="contactname" label="联系人姓名">
<IbizInput
  name="contactname"
  :value="state.data.contactname"
  :maxLength="200"
  type="text"
  @editorEvent="handleEditorEvent"/>
    
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="post" label="工作岗位">
<IbizInput
  name="post"
  :value="state.data.post"
  :maxLength="100"
  type="text"
  @editorEvent="handleEditorEvent"/>
    
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="phone" label="电话">
<IbizInput
  name="phone"
  :value="state.data.phone"
  :maxLength="100"
  type="text"
  @editorEvent="handleEditorEvent"/>
    
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="mobile" label="手机">
<IbizInput
  name="mobile"
  :value="state.data.mobile"
  :maxLength="100"
  type="text"
  @editorEvent="handleEditorEvent"/>
    
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="email" label="电子邮箱">
<IbizInput
  name="email"
  :value="state.data.email"
  :maxLength="100"
  type="text"
  @editorEvent="handleEditorEvent"/>
    
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="customerid" label="客户标识">
    /*未找到模板[HIDDEN]*/  </IbizFormItem>
</a-col>
    </a-row>
  </IbizFormGroup>
</a-col>
    </a-row>
  </IbizFormGroup>
</a-col>
  </a-row>
</a-tab-pane>
<a-tab-pane key="formpage2" tab="其它">
  <a-row>
<a-col :span="24">
  <IbizFormGroup name="group2" title="操作信息">
    <a-row>
<a-col :span="24">
  <IbizFormItem name="createman" label="建立人">
<IbizSpan
  name="createman"
  :value="state.data.createman"
  dataType="25"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="createdate" label="建立时间">
<IbizSpan
  name="createdate"
  :value="state.data.createdate"
  dataType="5"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="updateman" label="更新人">
<IbizSpan
  name="updateman"
  :value="state.data.updateman"
  dataType="25"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="updatedate" label="更新时间">
<IbizSpan
  name="updatedate"
  :value="state.data.updatedate"
  dataType="5"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
    </a-row>
  </IbizFormGroup>
</a-col>
  </a-row>
</a-tab-pane>    </a-tabs>
  </a-form>
</template>
<style lang="scss">
.ibiz-form {
  margin: 20px !important;
}
</style>