<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './editor-form-state';
import { FormControl, IActionParam, IParam, ControlAction, IContext } from '@core';
import EditorValueUsr2GridView from '@views/sample/editor-value-usr2-grid-view';
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
  <AppFormItem v-show="state.detailsModel.formitem.visible" name="formitem" :required="state.detailsModel.formitem.required" label="文本框">
<appInput
  name="formitem"
  :disabled="state.detailsModel.formitem.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem3.visible" name="formitem3" :required="state.detailsModel.formitem3.required" label="多行输入">
<appInput
  name="formitem3"
  :disabled="state.detailsModel.formitem3.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem1.visible" name="formitem1" :required="state.detailsModel.formitem1.required" label="数值框">
<appInput
  name="formitem1"
  :disabled="state.detailsModel.formitem1.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem2.visible" name="formitem2" :required="state.detailsModel.formitem2.required" label="密码框">
<appInput
  name="formitem2"
  :disabled="state.detailsModel.formitem2.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem4.visible" name="formitem4" :required="state.detailsModel.formitem4.required" label="标签">
<appSpan
  name="formitem4"
  :disabled="state.detailsModel.formitem4.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem22.visible" name="formitem22" :required="state.detailsModel.formitem22.required" label="步进器">
<appStepper
  name="formitem22"
  :disabled="state.detailsModel.formitem22.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem23.visible" name="formitem23" :required="state.detailsModel.formitem23.required" label="评分器">
<appRating
  name="formitem23"
  :disabled="state.detailsModel.formitem23.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem24.visible" name="formitem24" :required="state.detailsModel.formitem24.required" label="滑动输入条">
<appSlider
  name="formitem24"
  :date="state.data"
  :disabled="state.detailsModel.formitem24.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem7.visible" name="formitem7" :required="state.detailsModel.formitem7.required" label="选项框">
<appCheckbox
  name="formitem7"
  :disabled="state.detailsModel.formitem7.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem9.visible" name="formitem9" :required="state.detailsModel.formitem9.required" label="控制开关">
<appSwitch
  name="formitem9"
  :disabled="state.detailsModel.formitem9.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem20.visible" name="formitem20" :required="state.detailsModel.formitem20.required" label="图片">
<appUpload
  name="formitem20"
  :disabled="state.detailsModel.formitem20.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem47.visible" name="formitem47" :required="state.detailsModel.formitem47.required" label="图片（单项）">
<appUpload
  name="formitem47"
  :disabled="state.detailsModel.formitem47.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem21.visible" name="formitem21" :required="state.detailsModel.formitem21.required" label="文件上传">
<appUpload
  name="formitem21"
  :disabled="state.detailsModel.formitem21.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem48.visible" name="formitem48" :required="state.detailsModel.formitem48.required" label="文件上传（单项）">
<appUpload
  name="formitem48"
  :disabled="state.detailsModel.formitem48.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem5.visible" name="formitem5" :required="state.detailsModel.formitem5.required" label="下拉列表框">
<appDropdownList
  name="formitem5"
  :disabled="state.detailsModel.formitem5.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem6.visible" name="formitem6" :required="state.detailsModel.formitem6.required" label="下拉列表框（多选）">
<appDropdownList
  name="formitem6"
  :disabled="state.detailsModel.formitem6.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem10.visible" name="formitem10" :required="state.detailsModel.formitem10.required" label="单选项列表">
<appRadioGroup
  name="formitem10"
  :data="state.data"
  :disabled="state.detailsModel.formitem10.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem8.visible" name="formitem8" :required="state.detailsModel.formitem8.required" label="选项框列表">
<appCheckboxList
  name="formitem8"
  :data="state.data"
  :disabled="state.detailsModel.formitem8.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem11.visible" name="formitem11" :required="state.detailsModel.formitem11.required" label="列表框">
<appListBox
  name="formitem11"
  :data="state.data"
  :server="state.controlService"
  :deMajorField="state.appDeMajorFieldName"
  :deKeyField="state.appDeKeyFieldName"
  editorType='LISTBOX'
  :disabled="state.detailsModel.formitem11.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem12.visible" name="formitem12" :required="state.detailsModel.formitem12.required" label="列表框（选择）">
<appListBox
  name="formitem12"
  :data="state.data"
  :server="state.controlService"
  :deMajorField="state.appDeMajorFieldName"
  :deKeyField="state.appDeKeyFieldName"
  editorType='LISTBOXPICKUP'
  :disabled="state.detailsModel.formitem12.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem52.visible" name="formitem52" :required="state.detailsModel.formitem52.required" label="默认">
<appAutoComplete
  name="formitem52"
  :data="state.data"
  :disabled="state.detailsModel.formitem52.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem51.visible" name="formitem51" :required="state.detailsModel.formitem51.required" label="只能选择">
<appAutoComplete
  name="formitem51"
  :data="state.data"
  :disabled="state.detailsModel.formitem51.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem50.visible" name="formitem50" :required="state.detailsModel.formitem50.required" label="无按钮">
<appAutoComplete
  name="formitem50"
  :data="state.data"
  :disabled="state.detailsModel.formitem50.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem49.visible" name="formitem49" :required="state.detailsModel.formitem49.required" label="只能选择、无按钮">
<appAutoComplete
  name="formitem49"
  :data="state.data"
  :disabled="state.detailsModel.formitem49.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem19.visible" name="formitem19" :required="state.detailsModel.formitem19.required" label="HH:mm">
<appDatePicker
  name="formitem19"
  :disabled="state.detailsModel.formitem19.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem29.visible" name="formitem29" :required="state.detailsModel.formitem29.required" label="HH:mm:ss">
<appDatePicker
  name="formitem29"
  :disabled="state.detailsModel.formitem29.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem15.visible" name="formitem15" :required="state.detailsModel.formitem15.required" label="YYYY-MM-DD">
<appDatePicker
  name="formitem15"
  :disabled="state.detailsModel.formitem15.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem27.visible" name="formitem27" :required="state.detailsModel.formitem27.required" label="YYYY-MM-DD HH">
<appDatePicker
  name="formitem27"
  :disabled="state.detailsModel.formitem27.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem28.visible" name="formitem28" :required="state.detailsModel.formitem28.required" label="YYYY-MM-DD HH:mm">
<appDatePicker
  name="formitem28"
  :disabled="state.detailsModel.formitem28.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem14.visible" name="formitem14" :required="state.detailsModel.formitem14.required" label="YYYY-MM-DD HH:mm:ss">
<appDatePicker
  name="formitem14"
  :disabled="state.detailsModel.formitem14.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem26.visible" name="formitem26" :required="state.detailsModel.formitem26.required" label="默认">
<appDataPicker
  name="formitem26"
  :data="state.data"
  valueItem="formitem17"
  :disabled="state.detailsModel.formitem26.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem17.visible" name="formitem17" :required="state.detailsModel.formitem17.required" label="">
<appSpan
  name="formitem17"
  :disabled="state.detailsModel.formitem17.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem33.visible" name="formitem33" :required="state.detailsModel.formitem33.required" label="数据链接">
<appDataPicker
  name="formitem33"
  :data="state.data"
  valueItem="formitem39"
  :disabled="state.detailsModel.formitem33.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem39.visible" name="formitem39" :required="state.detailsModel.formitem39.required" label="">
<appSpan
  name="formitem39"
  :disabled="state.detailsModel.formitem39.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem32.visible" name="formitem32" :required="state.detailsModel.formitem32.required" label="无AC">
<appDataPicker
  name="formitem32"
  :data="state.data"
  valueItem="formitem40"
  :disabled="state.detailsModel.formitem32.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem40.visible" name="formitem40" :required="state.detailsModel.formitem40.required" label="">
<appSpan
  name="formitem40"
  :disabled="state.detailsModel.formitem40.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem31.visible" name="formitem31" :required="state.detailsModel.formitem31.required" label="无AC、数据链接">
<appDataPicker
  name="formitem31"
  :data="state.data"
  valueItem="formitem36"
  :disabled="state.detailsModel.formitem31.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem36.visible" name="formitem36" :required="state.detailsModel.formitem36.required" label="">
<appSpan
  name="formitem36"
  :disabled="state.detailsModel.formitem36.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem30.visible" name="formitem30" :required="state.detailsModel.formitem30.required" label="下拉">
<appDataPickerView
  name="formitem30"
  :data="state.data"
  valueItem="formitem41"
  :disabled="state.detailsModel.formitem30.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem41.visible" name="formitem41" :required="state.detailsModel.formitem41.required" label="">
<appSpan
  name="formitem41"
  :disabled="state.detailsModel.formitem41.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem35.visible" name="formitem35" :required="state.detailsModel.formitem35.required" label="下拉、数据链接">
<appDataPicker
  name="formitem35"
  :data="state.data"
  valueItem="formitem42"
  :disabled="state.detailsModel.formitem35.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem42.visible" name="formitem42" :required="state.detailsModel.formitem42.required" label="">
<appSpan
  name="formitem42"
  :disabled="state.detailsModel.formitem42.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem37.visible" name="formitem37" :required="state.detailsModel.formitem37.required" label="无按钮">
<appDataPicker
  name="formitem37"
  :data="state.data"
  valueItem="formitem43"
  :disabled="state.detailsModel.formitem37.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem43.visible" name="formitem43" :required="state.detailsModel.formitem43.required" label="">
<appSpan
  name="formitem43"
  :disabled="state.detailsModel.formitem43.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem38.visible" name="formitem38" :required="state.detailsModel.formitem38.required" label="下拉视图">
<appDataPickerView
  name="formitem38"
  :data="state.data"
  valueItem="formitem44"
  :disabled="state.detailsModel.formitem38.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem44.visible" name="formitem44" :required="state.detailsModel.formitem44.required" label="">
<appSpan
  name="formitem44"
  :disabled="state.detailsModel.formitem44.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem61.visible" name="formitem61" :required="state.detailsModel.formitem61.required" label="下拉树视图">
<appDataPickerView
  name="formitem61"
  :data="state.data"
  valueItem="formitem62"
  :disabled="state.detailsModel.formitem61.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem62.visible" name="formitem62" :required="state.detailsModel.formitem62.required" label="">
<appSpan
  name="formitem62"
  :disabled="state.detailsModel.formitem62.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem34.visible" name="formitem34" :required="state.detailsModel.formitem34.required" label="下拉视图、数据链接">
<appDataPickerView
  name="formitem34"
  :data="state.data"
  valueItem="formitem45"
  :disabled="state.detailsModel.formitem34.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem45.visible" name="formitem45" :required="state.detailsModel.formitem45.required" label="">
<appSpan
  name="formitem45"
  :disabled="state.detailsModel.formitem45.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem16.visible" name="formitem16" :required="state.detailsModel.formitem16.required" label="嵌入选择视图">
<appDataPickerView
  name="formitem16"
  :data="state.data"
  valueItem="formitem46"
  :disabled="state.detailsModel.formitem16.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem46.visible" name="formitem46" :required="state.detailsModel.formitem46.required" label="">
<appSpan
  name="formitem46"
  :disabled="state.detailsModel.formitem46.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem13.visible" name="formitem13" :required="state.detailsModel.formitem13.required" label="数据多选">
<appDataPicker
  name="formitem13"
  :data="state.data"
  :disabled="state.detailsModel.formitem13.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem57.visible" name="formitem57" :required="state.detailsModel.formitem57.required" label="直接内容（RAW）">
<AppRaw
  name="formitem57"
  :date="state.data"
  :disabled="state.detailsModel.formitem57.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem58.visible" name="formitem58" :required="state.detailsModel.formitem58.required" label="直接内容（HTML）">
<AppRaw
  name="formitem58"
  :date="state.data"
  :disabled="state.detailsModel.formitem58.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem59.visible" name="formitem59" :required="state.detailsModel.formitem59.required" label="直接内容（IMAGE）">
<AppRaw
  name="formitem59"
  :date="state.data"
  :disabled="state.detailsModel.formitem59.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem60.visible" name="formitem60" :required="state.detailsModel.formitem60.required" label="直接内容（MARKDOWN）">
<AppRaw
  name="formitem60"
  :date="state.data"
  :disabled="state.detailsModel.formitem60.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem25.visible" name="formitem25" :required="state.detailsModel.formitem25.required" label="IP地址">
<appInputIp
  name="formitem25"
  :disabled="state.detailsModel.formitem25.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem18.visible" name="formitem18" :required="state.detailsModel.formitem18.required" label="HTML编辑框">
<appRichText
  name="formitem18"
  :disabled="state.detailsModel.formitem18.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem55.visible" name="formitem55" :required="state.detailsModel.formitem55.required" label="代码编辑框">
<appCode
  name="formitem55"
  :disabled="state.detailsModel.formitem55.disabled"
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
  <AppFormItem v-show="state.detailsModel.formitem54.visible" name="formitem54" :required="state.detailsModel.formitem54.required" label="MD编辑器（预览）">
    /*未找到模板[MARKDOWN]*/  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem53.visible" name="formitem53" :required="state.detailsModel.formitem53.required" label="MD编辑器（编辑）">
    /*未找到模板[MARKDOWN]*/  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem56.visible" name="formitem56" :required="state.detailsModel.formitem56.required" label="MD编辑器（即时预览）">
    /*未找到模板[MARKDOWN]*/  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormDruipart v-show="state.detailsModel.druipart1.visible" name="druipart1" title="关系界面" v-slot="druipartParams">
    <EditorValueUsr2GridView
      :class="['app-view-layout--from-druipart']"
      :context="druipartParams.context"
      :viewParams="druipartParams.viewParams"
      :viewDefaultUsage="false"
      :noViewCaption="true"
      @viewEvent="druipartParams.viewEvent"
    >
    </EditorValueUsr2GridView>
  </AppFormDruipart>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.format8.visible" name="format8" :required="state.detailsModel.format8.required" label="文本占位符（@）">
<appInput
  name="format8"
  :disabled="state.detailsModel.format8.disabled"
  :maxLength="100"
  type="text"
  :value="state.data.format8"
  @editorEvent="onEditorEvent"
/> 
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