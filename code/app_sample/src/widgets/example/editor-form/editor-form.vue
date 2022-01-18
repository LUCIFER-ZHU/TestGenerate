<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './editor-form-state';
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
  <a-form name="Editor"
    class="app-form"
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
    title="基础"
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
  <AppFormItem v-show="state.detailsModel.formitem.visible" name="formitem" label="文本框">
<appInput
  name="formitem"
  :maxLength="4"
  :showMaxLength="true"
  type="text"
  :value="state.data.formitem"
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
  <AppFormItem v-show="state.detailsModel.formitem3.visible" name="formitem3" label="多行输入">
<appInput
  name="formitem3"
  :showMaxLength="true"
  type="textarea"
  :value="state.data.formitem3"
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
  <AppFormItem v-show="state.detailsModel.formitem1.visible" name="formitem1" label="数值框">
<appInput
  name="formitem1"
  type="number"
  :value="state.data.formitem1"
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
  <AppFormItem v-show="state.detailsModel.formitem2.visible" name="formitem2" label="密码框">
<appInput
  name="formitem2"
  type="password"
  :value="state.data.formitem2"
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
  <AppFormItem v-show="state.detailsModel.formitem4.visible" name="formitem4" label="标签">
<appSpan
  name="formitem4"
  dataType="25"
  :value="state.data.formitem4"
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
  <AppFormItem v-show="state.detailsModel.formitem22.visible" name="formitem22" label="步进器">
<appStepper
  name="formitem22"
  :step="1.0"
  :value="state.data.formitem22"
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
  <AppFormItem v-show="state.detailsModel.formitem23.visible" name="formitem23" label="评分器">
<appRating
  name="formitem23"
  :value="state.data.formitem23"
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
  <AppFormItem v-show="state.detailsModel.formitem24.visible" name="formitem24" label="滑动输入条">
<appSlider
  name="formitem24"
  :date="state.data"
  :step="1.0"
  :value="state.data.formitem24"
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
  <AppFormItem v-show="state.detailsModel.formitem7.visible" name="formitem7" label="选项框">
<appCheckbox
  name="formitem7"
  :value="state.data.formitem7"
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
  <AppFormItem v-show="state.detailsModel.formitem9.visible" name="formitem9" label="控制开关">
<appSwitch
  name="formitem9"
  :value="state.data.formitem9"
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
  <AppFormItem v-show="state.detailsModel.formitem20.visible" name="formitem20" label="图片">
<appUpload
  name="formitem20"
  :limit="-1"
  accept='image/*'
  listType="picture-card"
  :value="state.data.formitem20"
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
  <AppFormItem v-show="state.detailsModel.formitem47.visible" name="formitem47" label="图片（单项）">
<appUpload
  name="formitem47"
  :limit="1"
  accept='image/*'
  listType="picture-card"
  :value="state.data.formitem47"
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
  <AppFormItem v-show="state.detailsModel.formitem21.visible" name="formitem21" label="文件上传">
<appUpload
  name="formitem21"
  :limit="-1"
  :value="state.data.formitem21"
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
  <AppFormItem v-show="state.detailsModel.formitem48.visible" name="formitem48" label="文件上传（单项）">
<appUpload
  name="formitem48"
  :value="state.data.formitem48"
  @editorEvent="onEditorEvent"
/> 
  </AppFormItem>
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
    v-show="state.detailsModel.grouppanel2.visible" 
    name="grouppanel2" 
    title="代码表"
    titleStyle=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="true"
    :uIActionGroup="state.detailsModel.grouppanel2.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem5.visible" name="formitem5" label="下拉列表框">
<appDropdownList
  name="formitem5"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.formitem5"
  :data="state.data"
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
  <AppFormItem v-show="state.detailsModel.formitem6.visible" name="formitem6" label="下拉列表框（多选）">
<appDropdownList
  name="formitem6"
  :multiple="true"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.formitem6"
  :data="state.data"
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
  <AppFormItem v-show="state.detailsModel.formitem10.visible" name="formitem10" label="单选项列表">
<appRadioGroup
  name="formitem10"
  :data="state.data"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.formitem10"
  @editorEvent="onEditorEvent"
/>   </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem8.visible" name="formitem8" label="选项框列表">
<appCheckboxList
  name="formitem8"
  :data="state.data"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.formitem8"
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
  <AppFormItem v-show="state.detailsModel.formitem11.visible" name="formitem11" label="列表框">
<appListBox
  name="formitem11"
  :data="state.data"
  :server="state.controlService"
  :deMajorField="state.appDeMajorFieldName"
  :deKeyField="state.appDeKeyFieldName"
  editorType='LISTBOX'
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.formitem11"
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
  <AppFormItem v-show="state.detailsModel.formitem12.visible" name="formitem12" label="列表框（选择）">
<appListBox
  name="formitem12"
  :data="state.data"
  :server="state.controlService"
  :deMajorField="state.appDeMajorFieldName"
  :deKeyField="state.appDeKeyFieldName"
  editorType='LISTBOXPICKUP'
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.formitem12"
  @editorEvent="onEditorEvent"
/> 
  </AppFormItem>
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
    v-show="state.detailsModel.grouppanel5.visible" 
    name="grouppanel5" 
    title="自动填充"
    titleStyle=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="true"
    :uIActionGroup="state.detailsModel.grouppanel5.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem52.visible" name="formitem52" label="默认">
<appAutoComplete
  name="formitem52"
  :data="state.data"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.formitem52"
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
  <AppFormItem v-show="state.detailsModel.formitem51.visible" name="formitem51" label="只能选择">
<appAutoComplete
  name="formitem51"
  :data="state.data"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.formitem51"
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
  <AppFormItem v-show="state.detailsModel.formitem50.visible" name="formitem50" label="无按钮">
<appAutoComplete
  name="formitem50"
  :data="state.data"
  :context="state.context"
  :viewParams="state.viewParams"
  :showButton="false"
  :value="state.data.formitem50"
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
  <AppFormItem v-show="state.detailsModel.formitem49.visible" name="formitem49" label="只能选择、无按钮">
<appAutoComplete
  name="formitem49"
  :data="state.data"
  :context="state.context"
  :viewParams="state.viewParams"
  :showButton="false"
  :value="state.data.formitem49"
  @editorEvent="onEditorEvent"
/>
  </AppFormItem>
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
    v-show="state.detailsModel.grouppanel4.visible" 
    name="grouppanel4" 
    title="时间选择器"
    titleStyle=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="true"
    :uIActionGroup="state.detailsModel.grouppanel4.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem19.visible" name="formitem19" label="HH:mm">
<appDatePicker
  name="formitem19"
  dateFormat="HH:mm"
  dateType="time"
  :value="state.data.formitem19"
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
  <AppFormItem v-show="state.detailsModel.formitem29.visible" name="formitem29" label="HH:mm:ss">
<appDatePicker
  name="formitem29"
  dateFormat="HH:mm:ss"
  dateType="time"
  :value="state.data.formitem29"
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
  <AppFormItem v-show="state.detailsModel.formitem15.visible" name="formitem15" label="YYYY-MM-DD">
<appDatePicker
  name="formitem15"
  dateFormat="YYYY-MM-DD"
  dateType="date"
  :value="state.data.formitem15"
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
  <AppFormItem v-show="state.detailsModel.formitem27.visible" name="formitem27" label="YYYY-MM-DD HH">
<appDatePicker
  name="formitem27"
  dateFormat="YYYY-MM-DD HH"
  dateType="dateTime"
  :value="state.data.formitem27"
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
  <AppFormItem v-show="state.detailsModel.formitem28.visible" name="formitem28" label="YYYY-MM-DD HH:mm">
<appDatePicker
  name="formitem28"
  dateFormat="YYYY-MM-DD HH:mm"
  dateType="dateTime"
  :value="state.data.formitem28"
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
  <AppFormItem v-show="state.detailsModel.formitem14.visible" name="formitem14" label="YYYY-MM-DD HH:mm:ss">
<appDatePicker
  name="formitem14"
  dateFormat="YYYY-MM-DD HH:mm:ss"
  dateType="dateTime"
  :value="state.data.formitem14"
  @editorEvent="onEditorEvent"
/> 
  </AppFormItem>
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
    title="数据选择"
    titleStyle=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="true"
    :uIActionGroup="state.detailsModel.grouppanel3.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem26.visible" name="formitem26" label="默认">
<appDataPicker
  name="formitem26"
  :data="state.data"
  valueItem="formitem17"
  :context="state.context"
  :viewParams="state.viewParams"
   pickUpView="ChartDataPickupView"
  :value="state.data.formitem26"
  @editorEvent="onEditorEvent"
/>   </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem17.visible" name="formitem17" label="">
<appSpan
  name="formitem17"
  dataType="25"
  :value="state.data.formitem17"
  :context="state.context"
  :viewParams="state.viewParams"/>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem33.visible" name="formitem33" label="数据链接">
<appDataPicker
  name="formitem33"
  :data="state.data"
  valueItem="formitem39"
  :context="state.context"
  :viewParams="state.viewParams"
   pickUpView="ChartDataPickupView"
  :linkOnly="true"
  :value="state.data.formitem33"
  @editorEvent="onEditorEvent"
/>   </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem39.visible" name="formitem39" label="">
<appSpan
  name="formitem39"
  dataType="25"
  :value="state.data.formitem39"
  :context="state.context"
  :viewParams="state.viewParams"/>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem32.visible" name="formitem32" label="无AC">
<appDataPicker
  name="formitem32"
  :data="state.data"
  valueItem="formitem40"
  :context="state.context"
  :viewParams="state.viewParams"
   pickUpView="ChartDataPickupView"
  :noAC="true"
  :value="state.data.formitem32"
  @editorEvent="onEditorEvent"
/>   </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem40.visible" name="formitem40" label="">
<appSpan
  name="formitem40"
  dataType="25"
  :value="state.data.formitem40"
  :context="state.context"
  :viewParams="state.viewParams"/>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem31.visible" name="formitem31" label="无AC、数据链接">
<appDataPicker
  name="formitem31"
  :data="state.data"
  valueItem="formitem36"
  :context="state.context"
  :viewParams="state.viewParams"
   pickUpView="ChartDataPickupView"
  :noAC="true"
  :value="state.data.formitem31"
  @editorEvent="onEditorEvent"
/>   </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem36.visible" name="formitem36" label="">
<appSpan
  name="formitem36"
  dataType="25"
  :value="state.data.formitem36"
  :context="state.context"
  :viewParams="state.viewParams"/>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem30.visible" name="formitem30" label="下拉">
<appDataPickerView
  name="formitem30"
  :data="state.data"
  valueItem="formitem41"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.formitem30"
  @editorEvent="onEditorEvent"
/>   </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem41.visible" name="formitem41" label="">
<appSpan
  name="formitem41"
  dataType="25"
  :value="state.data.formitem41"
  :context="state.context"
  :viewParams="state.viewParams"/>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem35.visible" name="formitem35" label="下拉、数据链接">
<appDataPicker
  name="formitem35"
  :data="state.data"
  valueItem="formitem42"
  :context="state.context"
  :viewParams="state.viewParams"
   pickUpView="ChartDataPickupView"
  :isDropdown="true"
  :value="state.data.formitem35"
  @editorEvent="onEditorEvent"
/>   </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem42.visible" name="formitem42" label="">
<appSpan
  name="formitem42"
  dataType="25"
  :value="state.data.formitem42"
  :context="state.context"
  :viewParams="state.viewParams"/>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem37.visible" name="formitem37" label="无按钮">
<appDataPicker
  name="formitem37"
  :data="state.data"
  valueItem="formitem43"
  :context="state.context"
  :viewParams="state.viewParams"
   pickUpView="ChartDataPickupView"
  :value="state.data.formitem37"
  @editorEvent="onEditorEvent"
/>   </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem43.visible" name="formitem43" label="">
<appSpan
  name="formitem43"
  dataType="25"
  :value="state.data.formitem43"
  :context="state.context"
  :viewParams="state.viewParams"/>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem38.visible" name="formitem38" label="下拉视图">
<appDataPickerView
  name="formitem38"
  :data="state.data"
  valueItem="formitem44"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.formitem38"
  @editorEvent="onEditorEvent"
/>   </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem44.visible" name="formitem44" label="">
<appSpan
  name="formitem44"
  dataType="25"
  :value="state.data.formitem44"
  :context="state.context"
  :viewParams="state.viewParams"/>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem61.visible" name="formitem61" label="下拉树视图">
<appDataPickerView
  name="formitem61"
  :data="state.data"
  valueItem="formitem62"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.formitem61"
  @editorEvent="onEditorEvent"
/>   </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem62.visible" name="formitem62" label="">
<appSpan
  name="formitem62"
  dataType="25"
  :value="state.data.formitem62"
  :context="state.context"
  :viewParams="state.viewParams"/>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem34.visible" name="formitem34" label="下拉视图、数据链接">
<appDataPickerView
  name="formitem34"
  :data="state.data"
  valueItem="formitem45"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.formitem34"
  @editorEvent="onEditorEvent"
/>   </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem45.visible" name="formitem45" label="">
<appSpan
  name="formitem45"
  dataType="25"
  :value="state.data.formitem45"
  :context="state.context"
  :viewParams="state.viewParams"/>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem16.visible" name="formitem16" label="嵌入选择视图">
<appDataPickerView
  name="formitem16"
  :data="state.data"
  valueItem="formitem46"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.formitem16"
  @editorEvent="onEditorEvent"
/>   </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem46.visible" name="formitem46" label="">
<appSpan
  name="formitem46"
  dataType="25"
  :value="state.data.formitem46"
  :context="state.context"
  :viewParams="state.viewParams"/>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem13.visible" name="formitem13" label="数据多选">
<appDataPicker
  name="formitem13"
  :data="state.data"
  :context="state.context"
  :viewParams="state.viewParams"
   pickUpView="ChartDataPickupView"
  :multiple="true"
  :value="state.data.formitem13"
  @editorEvent="onEditorEvent"
/>   </AppFormItem>
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
    v-show="state.detailsModel.grouppanel6.visible" 
    name="grouppanel6" 
    title="直接内容"
    titleStyle=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="true"
    :uIActionGroup="state.detailsModel.grouppanel6.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppRaw 
    name="rawitem1"
    v-show="state.detailsModel.rawitem1.visible"
    class="el-alert el-alert--info is-light"
    
    contentType="RAW"
    style="height: -1.0px;width: -1.0px"
    value="直接内容编辑器一般用于面板绘制呈现"/>
  </a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem57.visible" name="formitem57" label="直接内容（RAW）">
<AppRaw
  name="formitem57"
  :date="state.data"
  :value="state.data.formitem57"
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
  <AppFormItem v-show="state.detailsModel.formitem58.visible" name="formitem58" label="直接内容（HTML）">
<AppRaw
  name="formitem58"
  :date="state.data"
  :value="state.data.formitem58"
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
  <AppFormItem v-show="state.detailsModel.formitem59.visible" name="formitem59" label="直接内容（IMAGE）">
<AppRaw
  name="formitem59"
  :date="state.data"
  :value="state.data.formitem59"
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
  <AppFormItem v-show="state.detailsModel.formitem60.visible" name="formitem60" label="直接内容（MARKDOWN）">
<AppRaw
  name="formitem60"
  :date="state.data"
  :value="state.data.formitem60"
  @editorEvent="onEditorEvent"
/> 
  </AppFormItem>
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
    v-show="state.detailsModel.grouppanel1.visible" 
    name="grouppanel1" 
    title="高级"
    titleStyle=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="true"
    :uIActionGroup="state.detailsModel.grouppanel1.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem25.visible" name="formitem25" label="IP地址">
<appInputIp
  name="formitem25"
  :value="state.data.formitem25"
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
  <AppFormItem v-show="state.detailsModel.formitem18.visible" name="formitem18" label="HTML编辑框">
<appRichText
  name="formitem18"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.formitem18"
  :data="state.data"
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
  <AppFormItem v-show="state.detailsModel.formitem55.visible" name="formitem55" label="代码编辑框">
<appCode
  name="formitem55"
  :value="state.data.formitem55"
  @editorEvent="onEditorEvent"
  :context="state.context"
  :viewParams="state.viewParams"/>  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem54.visible" name="formitem54" label="MD编辑器（预览）">
    /*未找到模板[MARKDOWN]*/  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem53.visible" name="formitem53" label="MD编辑器（编辑）">
    /*未找到模板[MARKDOWN]*/  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem56.visible" name="formitem56" label="MD编辑器（即时预览）">
    /*未找到模板[MARKDOWN]*/  </AppFormItem>
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