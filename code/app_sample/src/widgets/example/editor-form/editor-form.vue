<script setup lang="ts">
import { Subject } from 'rxjs';
import { CtrlConfig } from './editor-form-config';
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
    name="Editor" 
    class="ibiz-form"
    style=""
    :model="state.data" 
    :rules="state.rules">
<a-col :span="24">
  <IbizFormGroup name="group1" title="基础">
    <a-row>
<a-col :span="24">
  <IbizFormItem name="formitem" label="文本框">
<IbizInput
  name="formitem"
  :value="state.data.formitem"
  :maxLength="4"
  :showMaxLength="true"
  type="text"
  @editorEvent="handleEditorEvent"/>
    
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem3" label="多行输入">
<IbizInput
  name="formitem3"
  :value="state.data.formitem3"
  :showMaxLength="true"
  type="textarea"
  @editorEvent="handleEditorEvent"/>
    
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem1" label="数值框">
<IbizInput
  name="formitem1"
  :value="state.data.formitem1"
  type="number"
  @editorEvent="handleEditorEvent"/>
    
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem2" label="密码框">
<IbizInput
  name="formitem2"
  :value="state.data.formitem2"
  type="password"
  @editorEvent="handleEditorEvent"/>
    
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem4" label="标签">
<IbizSpan
  name="formitem4"
  :value="state.data.formitem4"
  dataType="25"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem22" label="步进器">
<IbizStepper
  name="formitem22"
  :value="state.data.formitem22"
  :step="1.0"
  @editorEvent="handleEditorEvent"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem23" label="评分器">
<IbizRating
  name="formitem23"
  :value="state.data.formitem23"
  @editorEvent="handleEditorEvent"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem24" label="滑动输入条">
<IbizSlider
  name="formitem24"
  :value="state.data.formitem24"
  :date="state.data"
  :step="1.0"
  @editorEvent="handleEditorEvent"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem7" label="选项框">
<IbizCheckbox
  name="formitem7"
  :value="state.data.formitem7"
  @editorEvent="handleEditorEvent"/>  
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem9" label="控制开关">
<IbizSwitch
  name="formitem9"
  :value="state.data.formitem9"
  @editorEvent="handleEditorEvent"/>  
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem20" label="图片">
<IbizUpload
  name="formitem20"
  :value="state.data.formitem20"
  :limit="-1"
  accept='image/*'
  listType="picture-card"
  @editorEvent="handleEditorEvent"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem47" label="图片（单项）">
<IbizUpload
  name="formitem47"
  :value="state.data.formitem47"
  :limit="1"
  accept='image/*'
  listType="picture-card"
  @editorEvent="handleEditorEvent"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem21" label="文件上传">
<IbizUpload
  name="formitem21"
  :value="state.data.formitem21"
  :limit="-1"
  @editorEvent="handleEditorEvent"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem48" label="文件上传（单项）">
<IbizUpload
  name="formitem48"
  :value="state.data.formitem48"
  @editorEvent="handleEditorEvent"/>
  </IbizFormItem>
</a-col>
    </a-row>
  </IbizFormGroup>
</a-col>
<a-col :span="24">
  <IbizFormGroup name="grouppanel2" title="代码表">
    <a-row>
<a-col :span="24">
  <IbizFormItem name="formitem5" label="下拉列表框">
<IbizDropdownList
  name="formitem5"
  :value="state.data.formitem5"
  :data="state.data"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"
  @editorEvent="handleEditorEvent"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem6" label="下拉列表框（多选）">
<IbizDropdownList
  name="formitem6"
  :value="state.data.formitem6"
  :data="state.data"
  :multiple="true"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"
  @editorEvent="handleEditorEvent"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem10" label="单选项列表">
<IbizRadioGroup
  name="formitem10"
  :value="state.data.formitem10"
  :data="state.data"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"
  @editorEvent="handleEditorEvent"/>  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem8" label="选项框列表">
<IbizCheckboxList
  name="formitem8"
  :value="state.data.formitem8"
  :data="state.data"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"
  @editorEvent="handleEditorEvent"/>  
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem11" label="列表框">
<IbizCheckboxList
  name="formitem11"
  :value="state.data.formitem11"
  :data="state.data"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"
  @editorEvent="handleEditorEvent"/>  
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem12" label="列表框（选择）">
<IbizCheckboxList
  name="formitem12"
  :value="state.data.formitem12"
  :data="state.data"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"
  @editorEvent="handleEditorEvent"/>  
  </IbizFormItem>
</a-col>
    </a-row>
  </IbizFormGroup>
</a-col>
<a-col :span="24">
  <IbizFormGroup name="grouppanel5" title="自动填充">
    <a-row>
<a-col :span="24">
  <IbizFormItem name="formitem52" label="默认">
<IbizAutoComplete
  name="formitem52"
  :value="state.data.formitem52"
  :data="state.data"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"
  @editorEvent="handleEditorEvent"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem51" label="只能选择">
<IbizAutoComplete
  name="formitem51"
  :value="state.data.formitem51"
  :data="state.data"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"
  @editorEvent="handleEditorEvent"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem50" label="无按钮">
<IbizAutoComplete
  name="formitem50"
  :value="state.data.formitem50"
  :data="state.data"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"
  :showButton="false"
  @editorEvent="handleEditorEvent"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem49" label="只能选择、无按钮">
<IbizAutoComplete
  name="formitem49"
  :value="state.data.formitem49"
  :data="state.data"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"
  :showButton="false"
  @editorEvent="handleEditorEvent"/>
  </IbizFormItem>
</a-col>
    </a-row>
  </IbizFormGroup>
</a-col>
<a-col :span="24">
  <IbizFormGroup name="grouppanel4" title="时间选择器">
    <a-row>
<a-col :span="24">
  <IbizFormItem name="formitem19" label="HH:mm">
<IbizDatePicker
  name="formitem19"
  :value="state.data.formitem19"
  dateFormat="HH:mm"
  dateType="time"
  @editorEvent="handleEditorEvent"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem29" label="HH:mm:ss">
<IbizDatePicker
  name="formitem29"
  :value="state.data.formitem29"
  dateFormat="HH:mm:ss"
  dateType="time"
  @editorEvent="handleEditorEvent"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem15" label="YYYY-MM-DD">
<IbizDatePicker
  name="formitem15"
  :value="state.data.formitem15"
  dateFormat="YYYY-MM-DD"
  dateType="date"
  @editorEvent="handleEditorEvent"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem27" label="YYYY-MM-DD HH">
<IbizDatePicker
  name="formitem27"
  :value="state.data.formitem27"
  dateFormat="YYYY-MM-DD HH"
  dateType="dateTime"
  @editorEvent="handleEditorEvent"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem28" label="YYYY-MM-DD HH:mm">
<IbizDatePicker
  name="formitem28"
  :value="state.data.formitem28"
  dateFormat="YYYY-MM-DD HH:mm"
  dateType="dateTime"
  @editorEvent="handleEditorEvent"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem14" label="YYYY-MM-DD HH:mm:ss">
<IbizDatePicker
  name="formitem14"
  :value="state.data.formitem14"
  dateFormat="YYYY-MM-DD HH:mm:ss"
  dateType="dateTime"
  @editorEvent="handleEditorEvent"/>
  </IbizFormItem>
</a-col>
    </a-row>
  </IbizFormGroup>
</a-col>
<a-col :span="24">
  <IbizFormGroup name="grouppanel3" title="数据选择">
    <a-row>
<a-col :span="24">
  <IbizFormItem name="formitem26" label="默认">
<IbizDataPicker
  name="formitem26"
  :value="state.data.formitem26"
  :data="state.data"
  valueItem="formitem17"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"
  @editorEvent="handleEditorEvent"/>  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem17" label="">
<IbizSpan
  name="formitem17"
  :value="state.data.formitem17"
  dataType="25"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem33" label="数据链接">
<IbizDataPicker
  name="formitem33"
  :value="state.data.formitem33"
  :data="state.data"
  valueItem="formitem39"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"
  :linkOnly="true"
  @editorEvent="handleEditorEvent"/>  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem39" label="">
<IbizSpan
  name="formitem39"
  :value="state.data.formitem39"
  dataType="25"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem32" label="无AC">
<IbizDataPicker
  name="formitem32"
  :value="state.data.formitem32"
  :data="state.data"
  valueItem="formitem40"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"
  :noAC="true"
  @editorEvent="handleEditorEvent"/>  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem40" label="">
<IbizSpan
  name="formitem40"
  :value="state.data.formitem40"
  dataType="25"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem31" label="无AC、数据链接">
<IbizDataPicker
  name="formitem31"
  :value="state.data.formitem31"
  :data="state.data"
  valueItem="formitem36"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"
  :noAC="true"
  @editorEvent="handleEditorEvent"/>  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem36" label="">
<IbizSpan
  name="formitem36"
  :value="state.data.formitem36"
  dataType="25"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem30" label="下拉">
<IbizDataPickerView
  name="formitem30"
  :value="state.data.formitem30"
  :data="state.data"
  valueItem="formitem41"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"
  @editorEvent="handleEditorEvent"/>  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem41" label="">
<IbizSpan
  name="formitem41"
  :value="state.data.formitem41"
  dataType="25"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem35" label="下拉、数据链接">
<IbizDataPicker
  name="formitem35"
  :value="state.data.formitem35"
  :data="state.data"
  valueItem="formitem42"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"
  :isDropdown="true"
  @editorEvent="handleEditorEvent"/>  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem42" label="">
<IbizSpan
  name="formitem42"
  :value="state.data.formitem42"
  dataType="25"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem37" label="无按钮">
<IbizDataPicker
  name="formitem37"
  :value="state.data.formitem37"
  :data="state.data"
  valueItem="formitem43"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"
  @editorEvent="handleEditorEvent"/>  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem43" label="">
<IbizSpan
  name="formitem43"
  :value="state.data.formitem43"
  dataType="25"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem38" label="下拉视图">
<IbizDataPickerView
  name="formitem38"
  :value="state.data.formitem38"
  :data="state.data"
  valueItem="formitem44"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"
  @editorEvent="handleEditorEvent"/>  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem44" label="">
<IbizSpan
  name="formitem44"
  :value="state.data.formitem44"
  dataType="25"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem61" label="下拉树视图">
<IbizDataPickerView
  name="formitem61"
  :value="state.data.formitem61"
  :data="state.data"
  valueItem="formitem62"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"
  @editorEvent="handleEditorEvent"/>  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem62" label="">
<IbizSpan
  name="formitem62"
  :value="state.data.formitem62"
  dataType="25"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem34" label="下拉视图、数据链接">
<IbizDataPickerView
  name="formitem34"
  :value="state.data.formitem34"
  :data="state.data"
  valueItem="formitem45"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"
  @editorEvent="handleEditorEvent"/>  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem45" label="">
<IbizSpan
  name="formitem45"
  :value="state.data.formitem45"
  dataType="25"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem16" label="嵌入选择视图">
<IbizDataPickerView
  name="formitem16"
  :value="state.data.formitem16"
  :data="state.data"
  valueItem="formitem46"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"
  @editorEvent="handleEditorEvent"/>  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem46" label="">
<IbizSpan
  name="formitem46"
  :value="state.data.formitem46"
  dataType="25"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem13" label="数据多选">
<IbizDataPicker
  name="formitem13"
  :value="state.data.formitem13"
  :data="state.data"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"
  :multiple="true"
  @editorEvent="handleEditorEvent"/>  </IbizFormItem>
</a-col>
    </a-row>
  </IbizFormGroup>
</a-col>
<a-col :span="24">
  <IbizFormGroup name="grouppanel6" title="直接内容">
    <a-row>
      /*未找到模板[RAWITEM]*/<a-col :span="24">
  <IbizFormItem name="formitem57" label="直接内容（RAW）">
<IbizRaw
  name="formitem57"
  :value="state.data.formitem57"
  :date="state.data"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"
  @editorEvent="handleEditorEvent"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem58" label="直接内容（HTML）">
<IbizRaw
  name="formitem58"
  :value="state.data.formitem58"
  :date="state.data"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"
  @editorEvent="handleEditorEvent"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem59" label="直接内容（IMAGE）">
<IbizRaw
  name="formitem59"
  :value="state.data.formitem59"
  :date="state.data"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"
  @editorEvent="handleEditorEvent"/>
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem60" label="直接内容（MARKDOWN）">
<IbizRaw
  name="formitem60"
  :value="state.data.formitem60"
  :date="state.data"
  :contextProp="state.context"
  :viewParamsProp="state.viewParams"
  @editorEvent="handleEditorEvent"/>
  </IbizFormItem>
</a-col>
    </a-row>
  </IbizFormGroup>
</a-col>
<a-col :span="24">
  <IbizFormGroup name="grouppanel1" title="高级">
    <a-row>
<a-col :span="24">
  <IbizFormItem name="formitem25" label="IP地址">
<IbizInputIp
  name="formitem25"
  :value="state.data.formitem25"
  @editorEvent="handleEditorEvent"/>
    
  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem18" label="HTML编辑框">
    /*未找到模板[HTMLEDITOR]*/  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem55" label="代码编辑框">
    /*未找到模板[CODE]*/  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem54" label="MD编辑器（预览）">
    /*未找到模板[MARKDOWN]*/  </IbizFormItem>
</a-col>
<a-col :span="24">
  <IbizFormItem name="formitem53" label="MD编辑器（编辑）">
    /*未找到模板[MARKDOWN]*/  </IbizFormItem>
</a-col>
<a-col :span="24">
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
  margin: 20px !important;
}
</style>