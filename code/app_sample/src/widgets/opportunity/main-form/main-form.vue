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
  <IbizFormGroup name="group1" title="商机基本信息">
    <a-row>
<a-col :span="24">
  <IbizFormItem name="opportunityname" label="商机名称">
<IbizInput
  name="opportunityname"
  :value="state.data.opportunityname"
  :maxLength="200"
  type="text"
  @editorEvent="handleEditorEvent"/>
    
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="customername" label="客户名称">
<IbizDataPicker
  name="customername"
  :value="state.data.customername"
  :data="state.data"
  valueItem="customerid"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"
  @editorEvent="handleEditorEvent"/>  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="exprevenue" label="预期收益">
<IbizInput
  name="exprevenue"
  :value="state.data.exprevenue"
  type="text"
  @editorEvent="handleEditorEvent"/>
    
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="expendtime" label="预计结束时间">
<IbizDatePicker
  name="expendtime"
  :value="state.data.expendtime"
  dateFormat="YYYY-MM-DD HH:mm:ss"
  dateType="dateTime"
  @editorEvent="handleEditorEvent"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="priority" label="优先级">
<IbizDropdownList
  name="priority"
  :value="state.data.priority"
  :data="state.data"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"
  @editorEvent="handleEditorEvent"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="state" label="商机状态">
<IbizDropdownList
  name="state"
  :value="state.data.state"
  :data="state.data"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"
  @editorEvent="handleEditorEvent"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="persondataname" label="销售员">
<IbizDataPicker
  name="persondataname"
  :value="state.data.persondataname"
  :data="state.data"
  valueItem="persondataid"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"
  @editorEvent="handleEditorEvent"/>  </IbizFormItem>
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
  <IbizFormItem name="email" label="电子邮件">
<IbizInput
  name="email"
  :value="state.data.email"
  :maxLength="100"
  type="text"
  @editorEvent="handleEditorEvent"/>
    
  </IbizFormItem>
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