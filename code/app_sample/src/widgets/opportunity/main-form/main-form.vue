<script setup lang="ts">
import { Subject } from 'rxjs';
import { CtrlConfig } from './main-form-config';
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
    name="Main" 
    class="ibiz-form"
    style=""
    :model="state.data" 
    :rules="state.rules">
    <a-tabs class="ibiz-form-page">
<a-tab-pane v-show="state.detailsModel.formpage1.visible" key="formpage1" tab="基本信息">
  <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormGroup v-show="state.detailsModel.group1.visible" name="group1" title="商机基本信息">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem v-show="state.detailsModel.opportunityname.visible" name="opportunityname" label="商机名称">
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
  <IbizFormItem v-show="state.detailsModel.customername.visible" name="customername" label="客户名称">
<IbizDataPicker
  name="customername"
  :data="state.data"
  valueItem="customerid"
  :context="state.context"
  :viewParams="state.viewParams"
   pickUpView="ChartDataPickupView"
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
  <IbizFormItem v-show="state.detailsModel.exprevenue.visible" name="exprevenue" label="预期收益">
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
  <IbizFormItem v-show="state.detailsModel.expendtime.visible" name="expendtime" label="预计结束时间">
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
  <IbizFormItem v-show="state.detailsModel.priority.visible" name="priority" label="优先级">
<IbizDropdownList
  name="priority"
  :data="state.data"
  :context="state.context"
  :viewParams="state.viewParams"
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
  <IbizFormItem v-show="state.detailsModel.state.visible" name="state" label="商机状态">
<IbizDropdownList
  name="state"
  :data="state.data"
  :context="state.context"
  :viewParams="state.viewParams"
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
  <IbizFormItem v-show="state.detailsModel.persondataname.visible" name="persondataname" label="销售员">
<IbizDataPicker
  name="persondataname"
  :data="state.data"
  valueItem="persondataid"
  :context="state.context"
  :viewParams="state.viewParams"
   pickUpView="ChartDataPickupView"
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
  <IbizFormItem v-show="state.detailsModel.phone.visible" name="phone" label="电话">
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
  <IbizFormItem v-show="state.detailsModel.email.visible" name="email" label="电子邮件">
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
<a-tab-pane v-show="state.detailsModel.formpage2.visible" key="formpage2" tab="其它">
  <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormGroup v-show="state.detailsModel.group2.visible" name="group2" title="操作信息">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem v-show="state.detailsModel.createman.visible" name="createman" label="建立人">
<IbizSpan
  name="createman"
  dataType="25"
  :value="state.data.createman"
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
  <IbizFormItem v-show="state.detailsModel.createdate.visible" name="createdate" label="建立时间">
<IbizSpan
  name="createdate"
  dataType="5"
  :value="state.data.createdate"
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
  <IbizFormItem v-show="state.detailsModel.updateman.visible" name="updateman" label="更新人">
<IbizSpan
  name="updateman"
  dataType="25"
  :value="state.data.updateman"
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
  <IbizFormItem v-show="state.detailsModel.updatedate.visible" name="updatedate" label="更新时间">
<IbizSpan
  name="updatedate"
  dataType="5"
  :value="state.data.updatedate"
  :context="state.context"
  :viewParams="state.viewParams"/>
  </IbizFormItem>
</a-col>
    </a-row>
  </IbizFormGroup>
</a-col>
  </a-row>
</a-tab-pane>
    </a-tabs>
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