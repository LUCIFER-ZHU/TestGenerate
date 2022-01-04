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
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormGroup name="group1" title="商机基本信息">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="opportunityname" label="商机名称">
<IbizInput
  name="opportunityname"
  :maxLength="200"
  type="text"
  :value="state.data.opportunityname"
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
  <IbizFormItem name="customername" label="客户名称">
<IbizDataPicker
  name="customername"
  :data="state.data"
  valueItem="customerid"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"
  :value="state.data.customername"
  @editorEvent="handleEditorEvent"
/>   </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 8, offset: 0 }"
  :md="{span: 8, offset: 0 }"
  :sm="{span: 8, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="exprevenue" label="预期收益">
<IbizInput
  name="exprevenue"
  type="text"
  :value="state.data.exprevenue"
  @editorEvent="handleEditorEvent"
/> 
    
  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 8, offset: 0 }"
  :md="{span: 8, offset: 0 }"
  :sm="{span: 8, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="expendtime" label="预计结束时间">
<IbizDatePicker
  name="expendtime"
  dateFormat="YYYY-MM-DD HH:mm:ss"
  dateType="dateTime"
  :value="state.data.expendtime"
  @editorEvent="handleEditorEvent"
/> 
  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 8, offset: 0 }"
  :md="{span: 8, offset: 0 }"
  :sm="{span: 8, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="priority" label="优先级">
<IbizDropdownList
  name="priority"
  :data="state.data"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"
  :value="state.data.priority"
  @editorEvent="handleEditorEvent"
/> 
  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 8, offset: 0 }"
  :md="{span: 8, offset: 0 }"
  :sm="{span: 8, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="state" label="商机状态">
<IbizDropdownList
  name="state"
  :data="state.data"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"
  :value="state.data.state"
  @editorEvent="handleEditorEvent"
/> 
  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 8, offset: 0 }"
  :md="{span: 8, offset: 0 }"
  :sm="{span: 8, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="persondataname" label="销售员">
<IbizDataPicker
  name="persondataname"
  :data="state.data"
  valueItem="persondataid"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"
  :value="state.data.persondataname"
  @editorEvent="handleEditorEvent"
/>   </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 8, offset: 0 }"
  :md="{span: 8, offset: 0 }"
  :sm="{span: 8, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="phone" label="电话">
<IbizInput
  name="phone"
  :maxLength="100"
  type="text"
  :value="state.data.phone"
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
  <IbizFormItem name="email" label="电子邮件">
<IbizInput
  name="email"
  :maxLength="100"
  type="text"
  :value="state.data.email"
  @editorEvent="handleEditorEvent"
/> 
    
  </IbizFormItem>
</a-col>
    </a-row>
  </IbizFormGroup>
</a-col>
  </a-row>
</a-tab-pane>
<a-tab-pane key="formpage2" tab="其它">
  <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormGroup name="group2" title="操作信息">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="createman" label="建立人">
<IbizSpan
  name="createman"
  dataType="25"
  :value="state.data.createman"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="createdate" label="建立时间">
<IbizSpan
  name="createdate"
  dataType="5"
  :value="state.data.createdate"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="updateman" label="更新人">
<IbizSpan
  name="updateman"
  dataType="25"
  :value="state.data.updateman"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="updatedate" label="更新时间">
<IbizSpan
  name="updatedate"
  dataType="5"
  :value="state.data.updatedate"
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
    .ant-card-head {
      padding: 0;
      margin: 0 10px;
    }
  }
</style>