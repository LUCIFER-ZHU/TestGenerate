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
  <a-form name="Editor" class="app-form" style="width: 500.0px;" :model="state.data" :rules="state.rules">
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
    style=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="true"
    :uIActionGroup="state.detailsModel.group1.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 6, offset: 0 }"
  :sm="{span: 6, offset: 0 }"
  :xs="{span: 6, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem.visible"
    name="formitem"
    :rules="state.rules.formitem"
    :labelWidth="200"
    :required="state.detailsModel.formitem.required"
    label="文本框"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="formitem"
  :disabled="state.detailsModel.formitem.disabled"
  :maxLength="4"
  :showMaxLength="true"
  type="text"
  :value="state.data.formitem"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 6, offset: 0 }"
  :sm="{span: 6, offset: 0 }"
  :xs="{span: 6, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem3.visible"
    name="formitem3"
    :rules="state.rules.formitem3"
    :labelWidth="200"
    :required="state.detailsModel.formitem3.required"
    label="多行输入"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="formitem3"
  :disabled="state.detailsModel.formitem3.disabled"
  :showMaxLength="true"
  type="textarea"
  :value="state.data.formitem3"
  @editorEvent="onEditorEvent"
/> 
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
    v-show="state.detailsModel.formitem1.visible"
    name="formitem1"
    :rules="state.rules.formitem1"
    :labelWidth="200"
    :required="state.detailsModel.formitem1.required"
    label="数值框"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="formitem1"
  :disabled="state.detailsModel.formitem1.disabled"
  type="number"
  :value="state.data.formitem1"
  @editorEvent="onEditorEvent"
/> 
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
    :labelWidth="200"
    :required="state.detailsModel.formitem2.required"
    label="密码框"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="formitem2"
  :disabled="state.detailsModel.formitem2.disabled"
  type="password"
  :value="state.data.formitem2"
  @editorEvent="onEditorEvent"
/> 
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
    v-show="state.detailsModel.formitem22.visible"
    name="formitem22"
    :rules="state.rules.formitem22"
    :labelWidth="200"
    :required="state.detailsModel.formitem22.required"
    label="步进器"
    style="">
      <div class="form-editor-container" style="">
<AppStepper
  name="formitem22"
  :disabled="state.detailsModel.formitem22.disabled"
  :step="1.0"
  :value="state.data.formitem22"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem4.visible"
    name="formitem4"
    :rules="state.rules.formitem4"
    :labelWidth="200"
    :required="state.detailsModel.formitem4.required"
    label="标签"
    style="">
      <div class="form-editor-container" style="">
<AppSpan
  name="formitem4"
  :disabled="state.detailsModel.formitem4.disabled"
  dataType="25"
  :value="state.data.formitem4"
  :context="state.context"
  :viewParams="state.viewParams"/>
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem23.visible"
    name="formitem23"
    :rules="state.rules.formitem23"
    :labelWidth="200"
    :required="state.detailsModel.formitem23.required"
    label="评分器"
    style="">
      <div class="form-editor-container" style="">
<AppRating
  name="formitem23"
  :disabled="state.detailsModel.formitem23.disabled"
  :value="state.data.formitem23"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem24.visible"
    name="formitem24"
    :rules="state.rules.formitem24"
    :labelWidth="200"
    :required="state.detailsModel.formitem24.required"
    label="滑动输入条"
    style="">
      <div class="form-editor-container" style="">
<AppSlider
  name="formitem24"
  :date="state.data"
  :disabled="state.detailsModel.formitem24.disabled"
  :step="1.0"
  :value="state.data.formitem24"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem7.visible"
    name="formitem7"
    :rules="state.rules.formitem7"
    :labelWidth="200"
    :required="state.detailsModel.formitem7.required"
    label="选项框"
    style="">
      <div class="form-editor-container" style="">
<AppCheckbox
  name="formitem7"
  :disabled="state.detailsModel.formitem7.disabled"
  :value="state.data.formitem7"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem9.visible"
    name="formitem9"
    :rules="state.rules.formitem9"
    :labelWidth="200"
    :required="state.detailsModel.formitem9.required"
    label="控制开关"
    style="">
      <div class="form-editor-container" style="">
<AppSwitch
  name="formitem9"
  :disabled="state.detailsModel.formitem9.disabled"
  :value="state.data.formitem9"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem20.visible"
    name="formitem20"
    :rules="state.rules.formitem20"
    :labelWidth="200"
    :required="state.detailsModel.formitem20.required"
    label="图片"
    style="">
      <div class="form-editor-container" style="">
<AppUpload
  name="formitem20"
  :disabled="state.detailsModel.formitem20.disabled"
  :limit="-1"
  accept='image/*'
  listType="picture-card"
  :value="state.data.formitem20"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem47.visible"
    name="formitem47"
    :rules="state.rules.formitem47"
    :labelWidth="200"
    :required="state.detailsModel.formitem47.required"
    label="图片（单项）"
    style="">
      <div class="form-editor-container" style="">
<AppUpload
  name="formitem47"
  :disabled="state.detailsModel.formitem47.disabled"
  :limit="1"
  accept='image/*'
  listType="picture-card"
  :value="state.data.formitem47"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem21.visible"
    name="formitem21"
    :rules="state.rules.formitem21"
    :labelWidth="200"
    :required="state.detailsModel.formitem21.required"
    label="文件上传"
    style="">
      <div class="form-editor-container" style="">
<AppUpload
  name="formitem21"
  :disabled="state.detailsModel.formitem21.disabled"
  :limit="-1"
  :value="state.data.formitem21"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem48.visible"
    name="formitem48"
    :rules="state.rules.formitem48"
    :labelWidth="200"
    :required="state.detailsModel.formitem48.required"
    label="文件上传（单项）"
    style="">
      <div class="form-editor-container" style="">
<AppUpload
  name="formitem48"
  :disabled="state.detailsModel.formitem48.disabled"
  :value="state.data.formitem48"
  @editorEvent="onEditorEvent"
/> 
      </div>
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
    style=""
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
  <AppFormItem 
    v-show="state.detailsModel.formitem5.visible"
    name="formitem5"
    :rules="state.rules.formitem5"
    :labelWidth="200"
    :required="state.detailsModel.formitem5.required"
    label="下拉列表框"
    style="">
      <div class="form-editor-container" style="">
<AppDropdownList
  name="formitem5"
  codeListTag="CodeList33"
  codeListType="STATIC"
  
  :disabled="state.detailsModel.formitem5.disabled"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.formitem5"
  :data="state.data"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem6.visible"
    name="formitem6"
    :rules="state.rules.formitem6"
    :labelWidth="200"
    :required="state.detailsModel.formitem6.required"
    label="下拉列表框（多选）"
    style="">
      <div class="form-editor-container" style="">
<AppDropdownList
  name="formitem6"
  codeListTag="CodeList33"
  codeListType="STATIC"
  
  :disabled="state.detailsModel.formitem6.disabled"
  :multiple="true"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.formitem6"
  :data="state.data"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem10.visible"
    name="formitem10"
    :rules="state.rules.formitem10"
    :labelWidth="200"
    :required="state.detailsModel.formitem10.required"
    label="单选项列表"
    style="">
      <div class="form-editor-container" style="">
<AppRadioGroup
  name="formitem10"
  :data="state.data"
  codeListTag="CodeList33"
  codeListType="STATIC"
  
  :disabled="state.detailsModel.formitem10.disabled"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.formitem10"
  @editorEvent="onEditorEvent"
/>       </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem8.visible"
    name="formitem8"
    :rules="state.rules.formitem8"
    :labelWidth="200"
    :required="state.detailsModel.formitem8.required"
    label="选项框列表"
    style="">
      <div class="form-editor-container" style="">
<AppCheckboxList
  name="formitem8"
  :data="state.data"
  :disabled="state.detailsModel.formitem8.disabled"
  codeListTag="CodeList33"
  codeListType="STATIC"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.formitem8"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem11.visible"
    name="formitem11"
    :rules="state.rules.formitem11"
    :labelWidth="200"
    :required="state.detailsModel.formitem11.required"
    label="列表框"
    style="">
      <div class="form-editor-container" style="">
<AppListBox
  name="formitem11"
  :data="state.data"
  :server="state.controlService"
  :deMajorField="state.appDeMajorFieldName"
  :deKeyField="state.appDeKeyFieldName"
  editorType='LISTBOX'
  :disabled="state.detailsModel.formitem11.disabled"
  codeListTag="CodeList33"
  codeListType="STATIC"
  
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.formitem11"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem12.visible"
    name="formitem12"
    :rules="state.rules.formitem12"
    :labelWidth="200"
    :required="state.detailsModel.formitem12.required"
    label="列表框（选择）"
    style="height: 300.0px">
      <div class="form-editor-container" style="">
<AppListBox
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
      </div>
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
    style=""
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
  <AppFormItem 
    v-show="state.detailsModel.formitem52.visible"
    name="formitem52"
    :rules="state.rules.formitem52"
    :labelWidth="200"
    :required="state.detailsModel.formitem52.required"
    label="默认"
    style="">
      <div class="form-editor-container" style="">
<AppAutoComplete
  name="formitem52"
  :data="state.data"
  :disabled="state.detailsModel.formitem52.disabled"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.formitem52"
  @editorEvent="onEditorEvent"
/>
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem51.visible"
    name="formitem51"
    :rules="state.rules.formitem51"
    :labelWidth="200"
    :required="state.detailsModel.formitem51.required"
    label="只能选择"
    style="">
      <div class="form-editor-container" style="">
<AppAutoComplete
  name="formitem51"
  :data="state.data"
  :disabled="state.detailsModel.formitem51.disabled"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.formitem51"
  @editorEvent="onEditorEvent"
/>
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem50.visible"
    name="formitem50"
    :rules="state.rules.formitem50"
    :labelWidth="200"
    :required="state.detailsModel.formitem50.required"
    label="无按钮"
    style="">
      <div class="form-editor-container" style="">
<AppAutoComplete
  name="formitem50"
  :data="state.data"
  :disabled="state.detailsModel.formitem50.disabled"
  :context="state.context"
  :viewParams="state.viewParams"
  :showButton="false"
  :value="state.data.formitem50"
  @editorEvent="onEditorEvent"
/>
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem49.visible"
    name="formitem49"
    :rules="state.rules.formitem49"
    :labelWidth="200"
    :required="state.detailsModel.formitem49.required"
    label="只能选择、无按钮"
    style="">
      <div class="form-editor-container" style="">
<AppAutoComplete
  name="formitem49"
  :data="state.data"
  :disabled="state.detailsModel.formitem49.disabled"
  :context="state.context"
  :viewParams="state.viewParams"
  :showButton="false"
  :value="state.data.formitem49"
  @editorEvent="onEditorEvent"
/>
      </div>
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
    style=""
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
  <AppFormItem 
    v-show="state.detailsModel.formitem19.visible"
    name="formitem19"
    :rules="state.rules.formitem19"
    :labelWidth="200"
    :required="state.detailsModel.formitem19.required"
    label="HH:mm"
    style="">
      <div class="form-editor-container" style="">
<AppDatePicker
  name="formitem19"
  :disabled="state.detailsModel.formitem19.disabled"
  dateFormat="HH:mm"
  dateType="time"
  :value="state.data.formitem19"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem29.visible"
    name="formitem29"
    :rules="state.rules.formitem29"
    :labelWidth="200"
    :required="state.detailsModel.formitem29.required"
    label="HH:mm:ss"
    style="">
      <div class="form-editor-container" style="">
<AppDatePicker
  name="formitem29"
  :disabled="state.detailsModel.formitem29.disabled"
  dateFormat="HH:mm:ss"
  dateType="time"
  :value="state.data.formitem29"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem15.visible"
    name="formitem15"
    :rules="state.rules.formitem15"
    :labelWidth="200"
    :required="state.detailsModel.formitem15.required"
    label="YYYY-MM-DD"
    style="">
      <div class="form-editor-container" style="">
<AppDatePicker
  name="formitem15"
  :disabled="state.detailsModel.formitem15.disabled"
  dateFormat="YYYY-MM-DD"
  dateType="date"
  :value="state.data.formitem15"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem27.visible"
    name="formitem27"
    :rules="state.rules.formitem27"
    :labelWidth="200"
    :required="state.detailsModel.formitem27.required"
    label="YYYY-MM-DD HH"
    style="">
      <div class="form-editor-container" style="">
<AppDatePicker
  name="formitem27"
  :disabled="state.detailsModel.formitem27.disabled"
  dateFormat="YYYY-MM-DD HH"
  dateType="dateTime"
  :value="state.data.formitem27"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem28.visible"
    name="formitem28"
    :rules="state.rules.formitem28"
    :labelWidth="200"
    :required="state.detailsModel.formitem28.required"
    label="YYYY-MM-DD HH:mm"
    style="">
      <div class="form-editor-container" style="">
<AppDatePicker
  name="formitem28"
  :disabled="state.detailsModel.formitem28.disabled"
  dateFormat="YYYY-MM-DD HH:mm"
  dateType="dateTime"
  :value="state.data.formitem28"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem14.visible"
    name="formitem14"
    :rules="state.rules.formitem14"
    :labelWidth="200"
    :required="state.detailsModel.formitem14.required"
    label="YYYY-MM-DD HH:mm:ss"
    style="">
      <div class="form-editor-container" style="">
<AppDatePicker
  name="formitem14"
  :disabled="state.detailsModel.formitem14.disabled"
  dateFormat="YYYY-MM-DD HH:mm:ss"
  dateType="dateTime"
  :value="state.data.formitem14"
  @editorEvent="onEditorEvent"
/> 
      </div>
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
    style=""
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
  <AppFormItem 
    v-show="state.detailsModel.formitem26.visible"
    name="formitem26"
    :rules="state.rules.formitem26"
    :labelWidth="200"
    :required="state.detailsModel.formitem26.required"
    label="默认"
    style="">
      <div class="form-editor-container" style="">
<AppDataPicker
  name="formitem26"
  :data="state.data"
  valueItem="formitem17"
  :disabled="state.detailsModel.formitem26.disabled"
  :context="state.context"
  :viewParams="state.viewParams"
   pickUpView="ChartDataPickupView"
  :value="state.data.formitem26"
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
    v-show="state.detailsModel.formitem17.visible"
    name="formitem17"
    :rules="state.rules.formitem17"
    :labelWidth="0"
    :required="state.detailsModel.formitem17.required"
    label=""
    style="">
      <div class="form-editor-container" style="">
<AppSpan
  name="formitem17"
  :disabled="state.detailsModel.formitem17.disabled"
  dataType="25"
  :value="state.data.formitem17"
  :context="state.context"
  :viewParams="state.viewParams"/>
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem33.visible"
    name="formitem33"
    :rules="state.rules.formitem33"
    :labelWidth="200"
    :required="state.detailsModel.formitem33.required"
    label="数据链接"
    style="">
      <div class="form-editor-container" style="">
<AppDataPicker
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
    v-show="state.detailsModel.formitem39.visible"
    name="formitem39"
    :rules="state.rules.formitem39"
    :labelWidth="0"
    :required="state.detailsModel.formitem39.required"
    label=""
    style="">
      <div class="form-editor-container" style="">
<AppSpan
  name="formitem39"
  :disabled="state.detailsModel.formitem39.disabled"
  dataType="25"
  :value="state.data.formitem39"
  :context="state.context"
  :viewParams="state.viewParams"/>
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem32.visible"
    name="formitem32"
    :rules="state.rules.formitem32"
    :labelWidth="200"
    :required="state.detailsModel.formitem32.required"
    label="无AC"
    style="">
      <div class="form-editor-container" style="">
<AppDataPicker
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
    v-show="state.detailsModel.formitem40.visible"
    name="formitem40"
    :rules="state.rules.formitem40"
    :labelWidth="0"
    :required="state.detailsModel.formitem40.required"
    label=""
    style="">
      <div class="form-editor-container" style="">
<AppSpan
  name="formitem40"
  :disabled="state.detailsModel.formitem40.disabled"
  dataType="25"
  :value="state.data.formitem40"
  :context="state.context"
  :viewParams="state.viewParams"/>
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem31.visible"
    name="formitem31"
    :rules="state.rules.formitem31"
    :labelWidth="200"
    :required="state.detailsModel.formitem31.required"
    label="无AC、数据链接"
    style="">
      <div class="form-editor-container" style="">
<AppDataPicker
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
    v-show="state.detailsModel.formitem36.visible"
    name="formitem36"
    :rules="state.rules.formitem36"
    :labelWidth="0"
    :required="state.detailsModel.formitem36.required"
    label=""
    style="">
      <div class="form-editor-container" style="">
<AppSpan
  name="formitem36"
  :disabled="state.detailsModel.formitem36.disabled"
  dataType="25"
  :value="state.data.formitem36"
  :context="state.context"
  :viewParams="state.viewParams"/>
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem30.visible"
    name="formitem30"
    :rules="state.rules.formitem30"
    :labelWidth="200"
    :required="state.detailsModel.formitem30.required"
    label="下拉"
    style="">
      <div class="form-editor-container" style="">
<AppDataPickerView
  name="formitem30"
  :data="state.data"
  valueItem="formitem41"
  :disabled="state.detailsModel.formitem30.disabled"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.formitem30"
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
    v-show="state.detailsModel.formitem41.visible"
    name="formitem41"
    :rules="state.rules.formitem41"
    :labelWidth="0"
    :required="state.detailsModel.formitem41.required"
    label=""
    style="">
      <div class="form-editor-container" style="">
<AppSpan
  name="formitem41"
  :disabled="state.detailsModel.formitem41.disabled"
  dataType="25"
  :value="state.data.formitem41"
  :context="state.context"
  :viewParams="state.viewParams"/>
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem35.visible"
    name="formitem35"
    :rules="state.rules.formitem35"
    :labelWidth="200"
    :required="state.detailsModel.formitem35.required"
    label="下拉、数据链接"
    style="">
      <div class="form-editor-container" style="">
<AppDataPicker
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
    v-show="state.detailsModel.formitem42.visible"
    name="formitem42"
    :rules="state.rules.formitem42"
    :labelWidth="0"
    :required="state.detailsModel.formitem42.required"
    label=""
    style="">
      <div class="form-editor-container" style="">
<AppSpan
  name="formitem42"
  :disabled="state.detailsModel.formitem42.disabled"
  dataType="25"
  :value="state.data.formitem42"
  :context="state.context"
  :viewParams="state.viewParams"/>
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem37.visible"
    name="formitem37"
    :rules="state.rules.formitem37"
    :labelWidth="200"
    :required="state.detailsModel.formitem37.required"
    label="无按钮"
    style="">
      <div class="form-editor-container" style="">
<AppDataPicker
  name="formitem37"
  :data="state.data"
  valueItem="formitem43"
  :disabled="state.detailsModel.formitem37.disabled"
  :context="state.context"
  :viewParams="state.viewParams"
   pickUpView="ChartDataPickupView"
  :value="state.data.formitem37"
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
    v-show="state.detailsModel.formitem43.visible"
    name="formitem43"
    :rules="state.rules.formitem43"
    :labelWidth="0"
    :required="state.detailsModel.formitem43.required"
    label=""
    style="">
      <div class="form-editor-container" style="">
<AppSpan
  name="formitem43"
  :disabled="state.detailsModel.formitem43.disabled"
  dataType="25"
  :value="state.data.formitem43"
  :context="state.context"
  :viewParams="state.viewParams"/>
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem38.visible"
    name="formitem38"
    :rules="state.rules.formitem38"
    :labelWidth="200"
    :required="state.detailsModel.formitem38.required"
    label="下拉视图"
    style="">
      <div class="form-editor-container" style="">
<AppDataPickerView
  name="formitem38"
  :data="state.data"
  valueItem="formitem44"
  :disabled="state.detailsModel.formitem38.disabled"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.formitem38"
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
    v-show="state.detailsModel.formitem44.visible"
    name="formitem44"
    :rules="state.rules.formitem44"
    :labelWidth="0"
    :required="state.detailsModel.formitem44.required"
    label=""
    style="">
      <div class="form-editor-container" style="">
<AppSpan
  name="formitem44"
  :disabled="state.detailsModel.formitem44.disabled"
  dataType="25"
  :value="state.data.formitem44"
  :context="state.context"
  :viewParams="state.viewParams"/>
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem61.visible"
    name="formitem61"
    :rules="state.rules.formitem61"
    :labelWidth="200"
    :required="state.detailsModel.formitem61.required"
    label="下拉树视图"
    style="">
      <div class="form-editor-container" style="">
<AppDataPickerView
  name="formitem61"
  :data="state.data"
  valueItem="formitem62"
  :disabled="state.detailsModel.formitem61.disabled"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.formitem61"
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
    v-show="state.detailsModel.formitem62.visible"
    name="formitem62"
    :rules="state.rules.formitem62"
    :labelWidth="0"
    :required="state.detailsModel.formitem62.required"
    label=""
    style="">
      <div class="form-editor-container" style="">
<AppSpan
  name="formitem62"
  :disabled="state.detailsModel.formitem62.disabled"
  dataType="25"
  :value="state.data.formitem62"
  :context="state.context"
  :viewParams="state.viewParams"/>
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem34.visible"
    name="formitem34"
    :rules="state.rules.formitem34"
    :labelWidth="200"
    :required="state.detailsModel.formitem34.required"
    label="下拉视图、数据链接"
    style="">
      <div class="form-editor-container" style="">
<AppDataPickerView
  name="formitem34"
  :data="state.data"
  valueItem="formitem45"
  :disabled="state.detailsModel.formitem34.disabled"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.formitem34"
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
    v-show="state.detailsModel.formitem45.visible"
    name="formitem45"
    :rules="state.rules.formitem45"
    :labelWidth="0"
    :required="state.detailsModel.formitem45.required"
    label=""
    style="">
      <div class="form-editor-container" style="">
<AppSpan
  name="formitem45"
  :disabled="state.detailsModel.formitem45.disabled"
  dataType="25"
  :value="state.data.formitem45"
  :context="state.context"
  :viewParams="state.viewParams"/>
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem16.visible"
    name="formitem16"
    :rules="state.rules.formitem16"
    :labelWidth="200"
    :required="state.detailsModel.formitem16.required"
    label="嵌入选择视图"
    style="">
      <div class="form-editor-container" style="">
<AppDataPickerView
  name="formitem16"
  :data="state.data"
  valueItem="formitem46"
  :disabled="state.detailsModel.formitem16.disabled"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.formitem16"
  @editorEvent="onEditorEvent"
/>       </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem46.visible"
    name="formitem46"
    :rules="state.rules.formitem46"
    :labelWidth="0"
    :required="state.detailsModel.formitem46.required"
    label=""
    style="">
      <div class="form-editor-container" style="">
<AppSpan
  name="formitem46"
  :disabled="state.detailsModel.formitem46.disabled"
  dataType="25"
  :value="state.data.formitem46"
  :context="state.context"
  :viewParams="state.viewParams"/>
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem13.visible"
    name="formitem13"
    :rules="state.rules.formitem13"
    :labelWidth="200"
    :required="state.detailsModel.formitem13.required"
    label="数据多选"
    style="">
      <div class="form-editor-container" style="">
<AppDataPicker
  name="formitem13"
  :data="state.data"
  :disabled="state.detailsModel.formitem13.disabled"
  :context="state.context"
  :viewParams="state.viewParams"
   pickUpView="ChartDataPickupView"
  :multiple="true"
  :value="state.data.formitem13"
  @editorEvent="onEditorEvent"
/>       </div>
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
    v-show="state.detailsModel.grouppanel6.visible" 
    name="grouppanel6" 
    title="直接内容"
    style=""
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
  <AppFormItem 
    v-show="state.detailsModel.formitem57.visible"
    name="formitem57"
    :rules="state.rules.formitem57"
    :labelWidth="200"
    :required="state.detailsModel.formitem57.required"
    label="直接内容（RAW）"
    style="">
      <div class="form-editor-container" style="">
<AppRaw
  name="formitem57"
  :date="state.data"
  :disabled="state.detailsModel.formitem57.disabled"
  :value="state.data.formitem57"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem58.visible"
    name="formitem58"
    :rules="state.rules.formitem58"
    :labelWidth="200"
    :required="state.detailsModel.formitem58.required"
    label="直接内容（HTML）"
    style="">
      <div class="form-editor-container" style="">
<AppRaw
  name="formitem58"
  :date="state.data"
  :disabled="state.detailsModel.formitem58.disabled"
  :value="state.data.formitem58"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem59.visible"
    name="formitem59"
    :rules="state.rules.formitem59"
    :labelWidth="200"
    :required="state.detailsModel.formitem59.required"
    label="直接内容（IMAGE）"
    style="">
      <div class="form-editor-container" style="">
<AppRaw
  name="formitem59"
  :date="state.data"
  :disabled="state.detailsModel.formitem59.disabled"
  :value="state.data.formitem59"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem60.visible"
    name="formitem60"
    :rules="state.rules.formitem60"
    :labelWidth="200"
    :required="state.detailsModel.formitem60.required"
    label="直接内容（MARKDOWN）"
    style="">
      <div class="form-editor-container" style="">
<AppRaw
  name="formitem60"
  :date="state.data"
  :disabled="state.detailsModel.formitem60.disabled"
  :value="state.data.formitem60"
  @editorEvent="onEditorEvent"
/> 
      </div>
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
    style=""
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
  <AppFormItem 
    v-show="state.detailsModel.formitem25.visible"
    name="formitem25"
    :rules="state.rules.formitem25"
    :labelWidth="200"
    :required="state.detailsModel.formitem25.required"
    label="IP地址"
    style="">
      <div class="form-editor-container" style="">
<AppInputIp
  name="formitem25"
  :disabled="state.detailsModel.formitem25.disabled"
  :value="state.data.formitem25"
  @editorEvent="onEditorEvent"
/> 
    
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem18.visible"
    name="formitem18"
    :rules="state.rules.formitem18"
    :labelWidth="200"
    :required="state.detailsModel.formitem18.required"
    label="HTML编辑框"
    style="">
      <div class="form-editor-container" style="">
<AppRichText
  name="formitem18"
  :disabled="state.detailsModel.formitem18.disabled"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.formitem18"
  :data="state.data"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem55.visible"
    name="formitem55"
    :rules="state.rules.formitem55"
    :labelWidth="200"
    :required="state.detailsModel.formitem55.required"
    label="代码编辑框"
    style="">
      <div class="form-editor-container" style="">
<AppCode
  name="formitem55"
  :disabled="state.detailsModel.formitem55.disabled"
  :value="state.data.formitem55"
  @editorEvent="onEditorEvent"
  :context="state.context"
  :viewParams="state.viewParams"/>      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem54.visible"
    name="formitem54"
    :rules="state.rules.formitem54"
    :labelWidth="200"
    :required="state.detailsModel.formitem54.required"
    label="MD编辑器（预览）"
    style="">
      <div class="form-editor-container" style="">
      /*未找到模板[MARKDOWN]*/      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem53.visible"
    name="formitem53"
    :rules="state.rules.formitem53"
    :labelWidth="200"
    :required="state.detailsModel.formitem53.required"
    label="MD编辑器（编辑）"
    style="">
      <div class="form-editor-container" style="">
      /*未找到模板[MARKDOWN]*/      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.formitem56.visible"
    name="formitem56"
    :rules="state.rules.formitem56"
    :labelWidth="200"
    :required="state.detailsModel.formitem56.required"
    label="MD编辑器（即时预览）"
    style="">
      <div class="form-editor-container" style="">
      /*未找到模板[MARKDOWN]*/      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormDruipart 
    v-show="state.detailsModel.druipart1.visible" 
    
    style=""
    name="druipart1" 
    title="关系界面" 
    :context="context"
    :viewParams="viewParams"
    :data="state.data"
    :viewSubject="state.viewSubject"
    v-slot="druipartParams">
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
  <AppFormItem 
    v-show="state.detailsModel.format8.visible"
    name="format8"
    :rules="state.rules.format8"
    :labelWidth="200"
    :required="state.detailsModel.format8.required"
    label="文本占位符（@）"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="format8"
  :disabled="state.detailsModel.format8.disabled"
  :maxLength="100"
  type="text"
  :value="state.data.format8"
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