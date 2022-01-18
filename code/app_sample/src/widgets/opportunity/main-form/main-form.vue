<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './main-form-state';
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
  <a-form name="Main"
    class="app-form"
    style="" :model="state.data" :rules="state.rules">
    <a-tabs class="app-form-page">
<a-tab-pane v-show="state.detailsModel.formpage1.visible" key="formpage1" tab="基本信息">
  <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.group1.visible" 
    name="group1" 
    title="商机基本信息"
    titleStyle=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="true"
    :uIActionGroup="state.detailsModel.group1.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.opportunityname.visible" name="opportunityname" label="商机名称">
<appInput
  name="opportunityname"
  :maxLength="200"
  type="text"
  :value="state.data.opportunityname"
  @editorEvent="onEditorEvent"
/> 
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.customername.visible" name="customername" label="客户名称">
<appDataPicker
  name="customername"
  :data="state.data"
  valueItem="customerid"
  :context="state.context"
  :viewParams="state.viewParams"
   pickUpView="ChartDataPickupView"
  :value="state.data.customername"
  @editorEvent="onEditorEvent"
/>   </AppFormItem>
</a-col>
<a-col
  :lg="{span: 8, offset: 0 }"
  :md="{span: 8, offset: 0 }"
  :sm="{span: 8, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.exprevenue.visible" name="exprevenue" label="预期收益">
<appInput
  name="exprevenue"
  type="text"
  :value="state.data.exprevenue"
  @editorEvent="onEditorEvent"
/> 
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 8, offset: 0 }"
  :md="{span: 8, offset: 0 }"
  :sm="{span: 8, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.expendtime.visible" name="expendtime" label="预计结束时间">
<appDatePicker
  name="expendtime"
  dateFormat="YYYY-MM-DD HH:mm:ss"
  dateType="dateTime"
  :value="state.data.expendtime"
  @editorEvent="onEditorEvent"
/> 
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 8, offset: 0 }"
  :md="{span: 8, offset: 0 }"
  :sm="{span: 8, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.priority.visible" name="priority" label="优先级">
<appDropdownList
  name="priority"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.priority"
  :data="state.data"
  @editorEvent="onEditorEvent"
/> 
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 8, offset: 0 }"
  :md="{span: 8, offset: 0 }"
  :sm="{span: 8, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.state.visible" name="state" label="商机状态">
<appDropdownList
  name="state"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.state"
  :data="state.data"
  @editorEvent="onEditorEvent"
/> 
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 8, offset: 0 }"
  :md="{span: 8, offset: 0 }"
  :sm="{span: 8, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.persondataname.visible" name="persondataname" label="销售员">
<appDataPicker
  name="persondataname"
  :data="state.data"
  valueItem="persondataid"
  :context="state.context"
  :viewParams="state.viewParams"
   pickUpView="ChartDataPickupView"
  :value="state.data.persondataname"
  @editorEvent="onEditorEvent"
/>   </AppFormItem>
</a-col>
<a-col
  :lg="{span: 8, offset: 0 }"
  :md="{span: 8, offset: 0 }"
  :sm="{span: 8, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.phone.visible" name="phone" label="电话">
<appInput
  name="phone"
  :maxLength="100"
  type="text"
  :value="state.data.phone"
  @editorEvent="onEditorEvent"
/> 
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.email.visible" name="email" label="电子邮件">
<appInput
  name="email"
  :maxLength="100"
  type="text"
  :value="state.data.email"
  @editorEvent="onEditorEvent"
/> 
  </AppFormItem>
</a-col>
    </a-row>
  </AppFormGroup>
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
  <AppFormGroup 
    v-show="state.detailsModel.group2.visible" 
    name="group2" 
    title="操作信息"
    titleStyle=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="true"
    :uIActionGroup="state.detailsModel.group2.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.createman.visible" name="createman" label="建立人">
<appSpan
  name="createman"
  dataType="25"
  :value="state.data.createman"
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
  <AppFormItem v-show="state.detailsModel.createdate.visible" name="createdate" label="建立时间">
<appSpan
  name="createdate"
  dataType="5"
  :value="state.data.createdate"
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
  <AppFormItem v-show="state.detailsModel.updateman.visible" name="updateman" label="更新人">
<appSpan
  name="updateman"
  dataType="25"
  :value="state.data.updateman"
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
  <AppFormItem v-show="state.detailsModel.updatedate.visible" name="updatedate" label="更新时间">
<appSpan
  name="updatedate"
  dataType="5"
  :value="state.data.updatedate"
  :context="state.context"
  :viewParams="state.viewParams"/>
  </AppFormItem>
</a-col>
    </a-row>
  </AppFormGroup>
</a-col>
  </a-row>
</a-tab-pane>
    </a-tabs>
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