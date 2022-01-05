<script setup lang="ts">
import { Subject } from 'rxjs';
import { CtrlConfig } from './editor-form-config';
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
    name="Editor" 
    class="ibiz-form"
    style=""
    :model="state.data" 
    :rules="state.rules">
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormGroup name="group1" title="基础">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="formitem" label="文本框">
<IbizInput
  name="formitem"
  :maxLength="4"
  :showMaxLength="true"
  type="text"
  :value="state.data.formitem"
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
  <IbizFormItem name="formitem3" label="多行输入">
<IbizInput
  name="formitem3"
  :showMaxLength="true"
  type="textarea"
  :value="state.data.formitem3"
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
  <IbizFormItem name="formitem1" label="数值框">
<IbizInput
  name="formitem1"
  type="number"
  :value="state.data.formitem1"
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
  <IbizFormItem name="formitem2" label="密码框">
<IbizInput
  name="formitem2"
  type="password"
  :value="state.data.formitem2"
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
  <IbizFormItem name="formitem4" label="标签">
<IbizSpan
  name="formitem4"
  dataType="25"
  :value="state.data.formitem4"
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
  <IbizFormItem name="formitem22" label="步进器">
<IbizStepper
  name="formitem22"
  :step="1.0"
  :value="state.data.formitem22"
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
  <IbizFormItem name="formitem23" label="评分器">
<IbizRating
  name="formitem23"
  :value="state.data.formitem23"
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
  <IbizFormItem name="formitem24" label="滑动输入条">
<IbizSlider
  name="formitem24"
  :date="state.data"
  :step="1.0"
  :value="state.data.formitem24"
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
  <IbizFormItem name="formitem7" label="选项框">
<IbizCheckbox
  name="formitem7"
  :value="state.data.formitem7"
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
  <IbizFormItem name="formitem9" label="控制开关">
<IbizSwitch
  name="formitem9"
  :value="state.data.formitem9"
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
  <IbizFormItem name="formitem20" label="图片">
<IbizUpload
  name="formitem20"
  :limit="-1"
  accept='image/*'
  listType="picture-card"
  :value="state.data.formitem20"
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
  <IbizFormItem name="formitem47" label="图片（单项）">
<IbizUpload
  name="formitem47"
  :limit="1"
  accept='image/*'
  listType="picture-card"
  :value="state.data.formitem47"
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
  <IbizFormItem name="formitem21" label="文件上传">
<IbizUpload
  name="formitem21"
  :limit="-1"
  :value="state.data.formitem21"
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
  <IbizFormItem name="formitem48" label="文件上传（单项）">
<IbizUpload
  name="formitem48"
  :value="state.data.formitem48"
  @editorEvent="handleEditorEvent"
/> 
  </IbizFormItem>
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
  <IbizFormGroup name="grouppanel2" title="代码表">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="formitem5" label="下拉列表框">
<IbizDropdownList
  name="formitem5"
  :data="state.data"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.formitem5"
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
  <IbizFormItem name="formitem6" label="下拉列表框（多选）">
<IbizDropdownList
  name="formitem6"
  :data="state.data"
  :multiple="true"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.formitem6"
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
  <IbizFormItem name="formitem10" label="单选项列表">
<IbizRadioGroup
  name="formitem10"
  :data="state.data"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.formitem10"
  @editorEvent="handleEditorEvent"
/>   </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="formitem8" label="选项框列表">
<IbizCheckboxList
  name="formitem8"
  :data="state.data"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.formitem8"
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
  <IbizFormItem name="formitem11" label="列表框">
<IbizCheckboxList
  name="formitem11"
  :data="state.data"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.formitem11"
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
  <IbizFormItem name="formitem12" label="列表框（选择）">
<IbizCheckboxList
  name="formitem12"
  :data="state.data"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.formitem12"
  @editorEvent="handleEditorEvent"
/> 
  </IbizFormItem>
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
  <IbizFormGroup name="grouppanel5" title="自动填充">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="formitem52" label="默认">
<IbizAutoComplete
  name="formitem52"
  :data="state.data"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.formitem52"
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
  <IbizFormItem name="formitem51" label="只能选择">
<IbizAutoComplete
  name="formitem51"
  :data="state.data"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.formitem51"
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
  <IbizFormItem name="formitem50" label="无按钮">
<IbizAutoComplete
  name="formitem50"
  :data="state.data"
  :context="state.context"
  :viewParams="state.viewParams"
  :showButton="false"
  :value="state.data.formitem50"
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
  <IbizFormItem name="formitem49" label="只能选择、无按钮">
<IbizAutoComplete
  name="formitem49"
  :data="state.data"
  :context="state.context"
  :viewParams="state.viewParams"
  :showButton="false"
  :value="state.data.formitem49"
  @editorEvent="handleEditorEvent"
/>
  </IbizFormItem>
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
  <IbizFormGroup name="grouppanel4" title="时间选择器">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="formitem19" label="HH:mm">
<IbizDatePicker
  name="formitem19"
  dateFormat="HH:mm"
  dateType="time"
  :value="state.data.formitem19"
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
  <IbizFormItem name="formitem29" label="HH:mm:ss">
<IbizDatePicker
  name="formitem29"
  dateFormat="HH:mm:ss"
  dateType="time"
  :value="state.data.formitem29"
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
  <IbizFormItem name="formitem15" label="YYYY-MM-DD">
<IbizDatePicker
  name="formitem15"
  dateFormat="YYYY-MM-DD"
  dateType="date"
  :value="state.data.formitem15"
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
  <IbizFormItem name="formitem27" label="YYYY-MM-DD HH">
<IbizDatePicker
  name="formitem27"
  dateFormat="YYYY-MM-DD HH"
  dateType="dateTime"
  :value="state.data.formitem27"
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
  <IbizFormItem name="formitem28" label="YYYY-MM-DD HH:mm">
<IbizDatePicker
  name="formitem28"
  dateFormat="YYYY-MM-DD HH:mm"
  dateType="dateTime"
  :value="state.data.formitem28"
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
  <IbizFormItem name="formitem14" label="YYYY-MM-DD HH:mm:ss">
<IbizDatePicker
  name="formitem14"
  dateFormat="YYYY-MM-DD HH:mm:ss"
  dateType="dateTime"
  :value="state.data.formitem14"
  @editorEvent="handleEditorEvent"
/> 
  </IbizFormItem>
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
  <IbizFormGroup name="grouppanel3" title="数据选择">
    <a-row>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="formitem26" label="默认">
<IbizDataPicker
  name="formitem26"
  :data="state.data"
  valueItem="formitem17"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.formitem26"
  @editorEvent="handleEditorEvent"
/>   </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="formitem17" label="">
<IbizSpan
  name="formitem17"
  dataType="25"
  :value="state.data.formitem17"
  :context="state.context"
  :viewParams="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="formitem33" label="数据链接">
<IbizDataPicker
  name="formitem33"
  :data="state.data"
  valueItem="formitem39"
  :context="state.context"
  :viewParams="state.viewParams"
  :linkOnly="true"
  :value="state.data.formitem33"
  @editorEvent="handleEditorEvent"
/>   </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="formitem39" label="">
<IbizSpan
  name="formitem39"
  dataType="25"
  :value="state.data.formitem39"
  :context="state.context"
  :viewParams="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="formitem32" label="无AC">
<IbizDataPicker
  name="formitem32"
  :data="state.data"
  valueItem="formitem40"
  :context="state.context"
  :viewParams="state.viewParams"
  :noAC="true"
  :value="state.data.formitem32"
  @editorEvent="handleEditorEvent"
/>   </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="formitem40" label="">
<IbizSpan
  name="formitem40"
  dataType="25"
  :value="state.data.formitem40"
  :context="state.context"
  :viewParams="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="formitem31" label="无AC、数据链接">
<IbizDataPicker
  name="formitem31"
  :data="state.data"
  valueItem="formitem36"
  :context="state.context"
  :viewParams="state.viewParams"
  :noAC="true"
  :value="state.data.formitem31"
  @editorEvent="handleEditorEvent"
/>   </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="formitem36" label="">
<IbizSpan
  name="formitem36"
  dataType="25"
  :value="state.data.formitem36"
  :context="state.context"
  :viewParams="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="formitem30" label="下拉">
<IbizDataPickerView
  name="formitem30"
  :data="state.data"
  valueItem="formitem41"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.formitem30"
  @editorEvent="handleEditorEvent"
/>   </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="formitem41" label="">
<IbizSpan
  name="formitem41"
  dataType="25"
  :value="state.data.formitem41"
  :context="state.context"
  :viewParams="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="formitem35" label="下拉、数据链接">
<IbizDataPicker
  name="formitem35"
  :data="state.data"
  valueItem="formitem42"
  :context="state.context"
  :viewParams="state.viewParams"
  :isDropdown="true"
  :value="state.data.formitem35"
  @editorEvent="handleEditorEvent"
/>   </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="formitem42" label="">
<IbizSpan
  name="formitem42"
  dataType="25"
  :value="state.data.formitem42"
  :context="state.context"
  :viewParams="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="formitem37" label="无按钮">
<IbizDataPicker
  name="formitem37"
  :data="state.data"
  valueItem="formitem43"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.formitem37"
  @editorEvent="handleEditorEvent"
/>   </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="formitem43" label="">
<IbizSpan
  name="formitem43"
  dataType="25"
  :value="state.data.formitem43"
  :context="state.context"
  :viewParams="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="formitem38" label="下拉视图">
<IbizDataPickerView
  name="formitem38"
  :data="state.data"
  valueItem="formitem44"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.formitem38"
  @editorEvent="handleEditorEvent"
/>   </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="formitem44" label="">
<IbizSpan
  name="formitem44"
  dataType="25"
  :value="state.data.formitem44"
  :context="state.context"
  :viewParams="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="formitem61" label="下拉树视图">
<IbizDataPickerView
  name="formitem61"
  :data="state.data"
  valueItem="formitem62"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.formitem61"
  @editorEvent="handleEditorEvent"
/>   </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="formitem62" label="">
<IbizSpan
  name="formitem62"
  dataType="25"
  :value="state.data.formitem62"
  :context="state.context"
  :viewParams="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="formitem34" label="下拉视图、数据链接">
<IbizDataPickerView
  name="formitem34"
  :data="state.data"
  valueItem="formitem45"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.formitem34"
  @editorEvent="handleEditorEvent"
/>   </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="formitem45" label="">
<IbizSpan
  name="formitem45"
  dataType="25"
  :value="state.data.formitem45"
  :context="state.context"
  :viewParams="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="formitem16" label="嵌入选择视图">
<IbizDataPickerView
  name="formitem16"
  :data="state.data"
  valueItem="formitem46"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.formitem16"
  @editorEvent="handleEditorEvent"
/>   </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="formitem46" label="">
<IbizSpan
  name="formitem46"
  dataType="25"
  :value="state.data.formitem46"
  :context="state.context"
  :viewParams="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 12, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="formitem13" label="数据多选">
<IbizDataPicker
  name="formitem13"
  :data="state.data"
  :context="state.context"
  :viewParams="state.viewParams"
  :multiple="true"
  :value="state.data.formitem13"
  @editorEvent="handleEditorEvent"
/>   </IbizFormItem>
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
  <IbizFormGroup name="grouppanel6" title="直接内容">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
<IbizRaw 
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
  <IbizFormItem name="formitem57" label="直接内容（RAW）">
<IbizRaw
  name="formitem57"
  :date="state.data"
  :value="state.data.formitem57"
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
  <IbizFormItem name="formitem58" label="直接内容（HTML）">
<IbizRaw
  name="formitem58"
  :date="state.data"
  :value="state.data.formitem58"
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
  <IbizFormItem name="formitem59" label="直接内容（IMAGE）">
<IbizRaw
  name="formitem59"
  :date="state.data"
  :value="state.data.formitem59"
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
  <IbizFormItem name="formitem60" label="直接内容（MARKDOWN）">
<IbizRaw
  name="formitem60"
  :date="state.data"
  :value="state.data.formitem60"
  @editorEvent="handleEditorEvent"
/> 
  </IbizFormItem>
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
  <IbizFormGroup name="grouppanel1" title="高级">
    <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="formitem25" label="IP地址">
<IbizInputIp
  name="formitem25"
  :value="state.data.formitem25"
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
  <IbizFormItem name="formitem18" label="HTML编辑框">
    /*未找到模板[HTMLEDITOR]*/  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="formitem55" label="代码编辑框">
    /*未找到模板[CODE]*/  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="formitem54" label="MD编辑器（预览）">
    /*未找到模板[MARKDOWN]*/  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="formitem53" label="MD编辑器（编辑）">
    /*未找到模板[MARKDOWN]*/  </IbizFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <IbizFormItem name="formitem56" label="MD编辑器（即时预览）">
    /*未找到模板[MARKDOWN]*/  </IbizFormItem>
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