<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './main-3-form-state';
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
  <a-form name="Main_3" class="app-form" style="" :model="state.data" :rules="state.rules">
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.grouppanel1.visible" 
    name="grouppanel1" 
    title="单项选择"
    style=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="true"
    :uIActionGroup="state.detailsModel.grouppanel1.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 12, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem.visible"
    name="formitem"
    :rules="state.rules.formitem"
    :labelWidth="130"
    :required="state.detailsModel.formitem.required"
    label="单项选择表格"
    style="">
      <div class="form-editor-container" style="">
<AppDataPicker
  name="formitem"
  :data="state.data"
  valueItem="formitem1"
  :disabled="state.detailsModel.formitem.disabled"
  :context="state.context"
  :viewParams="state.viewParams"
   pickUpView="ChartDataPickupView"
  :noAC="true"
  :value="state.data.formitem"
  @editorEvent="onEditorEvent"
/>       </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem1.visible"
    name="formitem1"
    :rules="state.rules.formitem1"
    :labelWidth="130"
    :required="state.detailsModel.formitem1.required"
    label="值项"
    style="">
      <div class="form-editor-container" style="">
<AppSpan
  name="formitem1"
  :disabled="state.detailsModel.formitem1.disabled"
  dataType="25"
  :value="state.data.formitem1"
  :context="state.context"
  :viewParams="state.viewParams"/>
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 12, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem2.visible"
    name="formitem2"
    :rules="state.rules.formitem2"
    :labelWidth="130"
    :required="state.detailsModel.formitem2.required"
    label="单选选择树"
    style="">
      <div class="form-editor-container" style="">
<AppDataPicker
  name="formitem2"
  :data="state.data"
  valueItem="formitem3"
  :disabled="state.detailsModel.formitem2.disabled"
  :context="state.context"
  :viewParams="state.viewParams"
   pickUpView="ChartDataPickupView"
  :noAC="true"
  :value="state.data.formitem2"
  @editorEvent="onEditorEvent"
/>       </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 12, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem3.visible"
    name="formitem3"
    :rules="state.rules.formitem3"
    :labelWidth="130"
    :required="state.detailsModel.formitem3.required"
    label="值项"
    style="">
      <div class="form-editor-container" style="">
<AppSpan
  name="formitem3"
  :disabled="state.detailsModel.formitem3.disabled"
  dataType="25"
  :value="state.data.formitem3"
  :context="state.context"
  :viewParams="state.viewParams"/>
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem4.visible"
    name="formitem4"
    :rules="state.rules.formitem4"
    :labelWidth="130"
    :required="state.detailsModel.formitem4.required"
    label="树导航（列表）"
    style="">
      <div class="form-editor-container" style="">
<AppDataPicker
  name="formitem4"
  :data="state.data"
  valueItem="formitem5"
  :disabled="state.detailsModel.formitem4.disabled"
  :context="state.context"
  :viewParams="state.viewParams"
   pickUpView="ChartDataPickupView"
  :noAC="true"
  :value="state.data.formitem4"
  @editorEvent="onEditorEvent"
/>       </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem5.visible"
    name="formitem5"
    :rules="state.rules.formitem5"
    :labelWidth="130"
    :required="state.detailsModel.formitem5.required"
    label="值项"
    style="">
      <div class="form-editor-container" style="">
<AppSpan
  name="formitem5"
  :disabled="state.detailsModel.formitem5.disabled"
  dataType="25"
  :value="state.data.formitem5"
  :context="state.context"
  :viewParams="state.viewParams"/>
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem6.visible"
    name="formitem6"
    :rules="state.rules.formitem6"
    :labelWidth="130"
    :required="state.detailsModel.formitem6.required"
    label="单项选择列表"
    style="">
      <div class="form-editor-container" style="">
<AppDataPicker
  name="formitem6"
  :data="state.data"
  valueItem="formitem7"
  :disabled="state.detailsModel.formitem6.disabled"
  :context="state.context"
  :viewParams="state.viewParams"
   pickUpView="ChartDataPickupView"
  :noAC="true"
  :value="state.data.formitem6"
  @editorEvent="onEditorEvent"
/>       </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem7.visible"
    name="formitem7"
    :rules="state.rules.formitem7"
    :labelWidth="130"
    :required="state.detailsModel.formitem7.required"
    label="值项"
    style="">
      <div class="form-editor-container" style="">
<AppSpan
  name="formitem7"
  :disabled="state.detailsModel.formitem7.disabled"
  dataType="25"
  :value="state.data.formitem7"
  :context="state.context"
  :viewParams="state.viewParams"/>
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem8.visible"
    name="formitem8"
    :rules="state.rules.formitem8"
    :labelWidth="130"
    :required="state.detailsModel.formitem8.required"
    label="单选卡片"
    style="">
      <div class="form-editor-container" style="">
<AppDataPicker
  name="formitem8"
  :data="state.data"
  valueItem="formitem9"
  :disabled="state.detailsModel.formitem8.disabled"
  :context="state.context"
  :viewParams="state.viewParams"
   pickUpView="ChartDataPickupView"
  :noAC="true"
  :value="state.data.formitem8"
  @editorEvent="onEditorEvent"
/>       </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem9.visible"
    name="formitem9"
    :rules="state.rules.formitem9"
    :labelWidth="130"
    :required="state.detailsModel.formitem9.required"
    label="值项"
    style="">
      <div class="form-editor-container" style="">
<AppSpan
  name="formitem9"
  :disabled="state.detailsModel.formitem9.disabled"
  dataType="25"
  :value="state.data.formitem9"
  :context="state.context"
  :viewParams="state.viewParams"/>
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem10.visible"
    name="formitem10"
    :rules="state.rules.formitem10"
    :labelWidth="130"
    :required="state.detailsModel.formitem10.required"
    label="树导航（卡片）"
    style="">
      <div class="form-editor-container" style="">
<AppDataPicker
  name="formitem10"
  :data="state.data"
  valueItem="formitem11"
  :disabled="state.detailsModel.formitem10.disabled"
  :context="state.context"
  :viewParams="state.viewParams"
   pickUpView="ChartDataPickupView"
  :noAC="true"
  :value="state.data.formitem10"
  @editorEvent="onEditorEvent"
/>       </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem11.visible"
    name="formitem11"
    :rules="state.rules.formitem11"
    :labelWidth="130"
    :required="state.detailsModel.formitem11.required"
    label="值项"
    style="">
      <div class="form-editor-container" style="">
<AppSpan
  name="formitem11"
  :disabled="state.detailsModel.formitem11.disabled"
  dataType="25"
  :value="state.data.formitem11"
  :context="state.context"
  :viewParams="state.viewParams"/>
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem12.visible"
    name="formitem12"
    :rules="state.rules.formitem12"
    :labelWidth="130"
    :required="state.detailsModel.formitem12.required"
    label="树导航（表格）"
    style="">
      <div class="form-editor-container" style="">
<AppDataPicker
  name="formitem12"
  :data="state.data"
  valueItem="formitem13"
  :disabled="state.detailsModel.formitem12.disabled"
  :context="state.context"
  :viewParams="state.viewParams"
   pickUpView="ChartDataPickupView"
  :noAC="true"
  :value="state.data.formitem12"
  @editorEvent="onEditorEvent"
/>       </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem13.visible"
    name="formitem13"
    :rules="state.rules.formitem13"
    :labelWidth="130"
    :required="state.detailsModel.formitem13.required"
    label="值项"
    style="">
      <div class="form-editor-container" style="">
<AppSpan
  name="formitem13"
  :disabled="state.detailsModel.formitem13.disabled"
  dataType="25"
  :value="state.data.formitem13"
  :context="state.context"
  :viewParams="state.viewParams"/>
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem14.visible"
    name="formitem14"
    :rules="state.rules.formitem14"
    :labelWidth="130"
    :required="state.detailsModel.formitem14.required"
    label="表单项a"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="formitem14"
  :disabled="state.detailsModel.formitem14.disabled"
  type="text"
  :value="state.data.formitem14"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem15.visible"
    name="formitem15"
    :rules="state.rules.formitem15"
    :labelWidth="130"
    :required="state.detailsModel.formitem15.required"
    label="表单项b"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="formitem15"
  :disabled="state.detailsModel.formitem15.disabled"
  type="text"
  :value="state.data.formitem15"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
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