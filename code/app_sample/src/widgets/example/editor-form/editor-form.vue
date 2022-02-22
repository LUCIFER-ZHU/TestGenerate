<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './editor-form-state';
import { FormControl, IActionParam, IParam, ControlAction, IContext } from '@core';
import EditorValueUsr2GridView from '@views/sample/editor-value-usr2-grid-view';
interface Props {
  name:string,
  parent: IParam;
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
const { name, state, load, loadDraft, save, remove, refresh, onEditorEvent, onComponentEvent, getData, xDataCtrl } = new FormControl(ctrlState, props, emit).moduleInstall();

// 暴露内部状态及能力
defineExpose({ name, state, load, loadDraft, save, remove, refresh, getData });
</script>
<template>
  <a-form
    name="Editor"
    class="app-form"
    style=""
    :model="state.data"
    :rules="state.rules"
    ref="xDataCtrl"
  >
    <AppFormGroup 
      name="group1"
      title="基础"
      :visible="state.detailsModel.group1.visible" 
      :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
      :infoGroupMode="false"
      :titleBarCloseMode="0"
      :showCaption="true"
      :uIActionGroup="state.detailsModel.group1.uIActionGroup"
      @componentEvent="onComponentEvent">
        <AppFormItem 
          name="formitem"
          label="文本框"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.formitem"
          :required="state.detailsModel.formitem.required"
          :visible="state.detailsModel.formitem.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 6,colMD: 6,colSM: 6,colXS: 6,}"
          class="test"
          >
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
        <AppFormItem 
          name="formitem3"
          label="多行输入"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.formitem3"
          :required="state.detailsModel.formitem3.required"
          :visible="state.detailsModel.formitem3.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 9,colMD: 9,colSM: 9,colXS: 9,}"
          >
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
        <AppFormItem 
          name="formitem1"
          label="数值框"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.formitem1"
          :required="state.detailsModel.formitem1.required"
          :visible="state.detailsModel.formitem1.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 9,colMD: 9,colSM: 9,colXS: 9,}"
          >
          <div class="form-editor-container" style="width: 150.0px;">
          <AppInput
            name="formitem1"
            :disabled="state.detailsModel.formitem1.disabled"
            type="number"
            :value="state.data.formitem1"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem2"
          label="密码框"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.formitem2"
          :required="state.detailsModel.formitem2.required"
          :visible="state.detailsModel.formitem2.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 12,colSM: 12,colXS: 12,}"
          >
          <div class="form-editor-container" style="width: 150.0px;">
          <AppInput
            name="formitem2"
            :disabled="state.detailsModel.formitem2.disabled"
            type="password"
            :value="state.data.formitem2"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem22"
          label="步进器"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.formitem22"
          :required="state.detailsModel.formitem22.required"
          :visible="state.detailsModel.formitem22.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 12,colSM: 12,colXS: 12,}"
          >
          <div class="form-editor-container" style="width: 150.0px;">
          <AppStepper
            name="formitem22"
            :disabled="state.detailsModel.formitem22.disabled"
            :value="state.data.formitem22"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem4"
          label="标签"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.formitem4"
          :required="state.detailsModel.formitem4.required"
          :visible="state.detailsModel.formitem4.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="width: 150.0px;">
          <AppSpan
            name="formitem4"
            :disabled="state.detailsModel.formitem4.disabled"
            dataType="25"
            :value="state.data.formitem4"
            :context="state.context"
            :viewParams="state.viewParams"/>
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem23"
          label="评分器"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.formitem23"
          :required="state.detailsModel.formitem23.required"
          :visible="state.detailsModel.formitem23.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="width: 150.0px;">
          <AppRating
            name="formitem23"
            :disabled="state.detailsModel.formitem23.disabled"
            :value="state.data.formitem23"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem24"
          label="滑动输入条"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.formitem24"
          :required="state.detailsModel.formitem24.required"
          :visible="state.detailsModel.formitem24.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="width: 150.0px;">
          <AppSlider
            name="formitem24"
            :date="state.data"
            :disabled="state.detailsModel.formitem24.disabled"
            :value="state.data.formitem24"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem7"
          label="选项框"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.formitem7"
          :required="state.detailsModel.formitem7.required"
          :visible="state.detailsModel.formitem7.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppCheckbox
            name="formitem7"
            :disabled="state.detailsModel.formitem7.disabled"
            :value="state.data.formitem7"
            @editorEvent="onEditorEvent"
          /> 
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem9"
          label="控制开关"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.formitem9"
          :required="state.detailsModel.formitem9.required"
          :visible="state.detailsModel.formitem9.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppSwitch
            name="formitem9"
            :disabled="state.detailsModel.formitem9.disabled"
            :value="state.data.formitem9"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem20"
          label="图片"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.formitem20"
          :required="state.detailsModel.formitem20.required"
          :visible="state.detailsModel.formitem20.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
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
        <AppFormItem 
          name="formitem47"
          label="图片（单项）"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.formitem47"
          :required="state.detailsModel.formitem47.required"
          :visible="state.detailsModel.formitem47.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
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
        <AppFormItem 
          name="formitem21"
          label="文件上传"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.formitem21"
          :required="state.detailsModel.formitem21.required"
          :visible="state.detailsModel.formitem21.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
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
        <AppFormItem 
          name="formitem48"
          label="文件上传（单项）"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.formitem48"
          :required="state.detailsModel.formitem48.required"
          :visible="state.detailsModel.formitem48.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppUpload
            name="formitem48"
            :disabled="state.detailsModel.formitem48.disabled"
            :value="state.data.formitem48"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
    </AppFormGroup>
    <AppFormGroup 
      name="grouppanel2"
      title="代码表"
      :visible="state.detailsModel.grouppanel2.visible" 
      :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
      :infoGroupMode="false"
      :titleBarCloseMode="0"
      :showCaption="true"
      :uIActionGroup="state.detailsModel.grouppanel2.uIActionGroup"
      @componentEvent="onComponentEvent">
        <AppFormItem 
          name="formitem5"
          label="下拉列表框"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.formitem5"
          :required="state.detailsModel.formitem5.required"
          :visible="state.detailsModel.formitem5.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="width: 150.0px;">
          <AppDropdownList
            name="formitem5"
            codeListTag="Sample__CodeList"
            codeListType="DYNAMIC"
            :disabled="state.detailsModel.formitem5.disabled"
            :context="state.context"
            :viewParams="state.viewParams"
            :value="state.data.formitem5"
            :data="state.data"
            @editorEvent="onEditorEvent"
          /> 
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem6"
          label="下拉列表框（多选）"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.formitem6"
          :required="state.detailsModel.formitem6.required"
          :visible="state.detailsModel.formitem6.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
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
        <AppFormItem 
          name="formitem10"
          label="单选项列表"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.formitem10"
          :required="state.detailsModel.formitem10.required"
          :visible="state.detailsModel.formitem10.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
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
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem8"
          label="选项框列表"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.formitem8"
          :required="state.detailsModel.formitem8.required"
          :visible="state.detailsModel.formitem8.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
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
        <AppFormItem 
          name="formitem11"
          label="列表框"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.formitem11"
          :required="state.detailsModel.formitem11.required"
          :visible="state.detailsModel.formitem11.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
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
        <AppFormItem 
          name="formitem12"
          label="列表框（选择）"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.formitem12"
          :required="state.detailsModel.formitem12.required"
          :visible="state.detailsModel.formitem12.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          style="height: 300.0px;"
          >
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
    </AppFormGroup>
    <AppFormGroup 
      name="grouppanel5"
      title="自动填充"
      :visible="state.detailsModel.grouppanel5.visible" 
      :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
      :infoGroupMode="false"
      :titleBarCloseMode="0"
      :showCaption="true"
      :uIActionGroup="state.detailsModel.grouppanel5.uIActionGroup"
      @componentEvent="onComponentEvent">
        <AppFormItem 
          name="formitem52"
          label="默认"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.formitem52"
          :required="state.detailsModel.formitem52.required"
          :visible="state.detailsModel.formitem52.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="width: 200.0px;">
          <AppAutoComplete
            name="formitem52"
            :data="state.data"
            :disabled="state.detailsModel.formitem52.disabled"
            :context="state.context"
            :viewParams="state.viewParams"
            deMajorField="customername"
            deKeyField="customerid"
            :value="state.data.formitem52"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem51"
          label="只能选择"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.formitem51"
          :required="state.detailsModel.formitem51.required"
          :visible="state.detailsModel.formitem51.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="width: 200.0px;">
          <AppAutoComplete
            name="formitem51"
            :data="state.data"
            :disabled="state.detailsModel.formitem51.disabled"
            :context="state.context"
            :viewParams="state.viewParams"
            deMajorField="customername"
            deKeyField="customerid"
            :value="state.data.formitem51"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem50"
          label="无按钮"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.formitem50"
          :required="state.detailsModel.formitem50.required"
          :visible="state.detailsModel.formitem50.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="width: 200.0px;">
          <AppAutoComplete
            name="formitem50"
            :data="state.data"
            :disabled="state.detailsModel.formitem50.disabled"
            :context="state.context"
            :viewParams="state.viewParams"
            deMajorField="customername"
            deKeyField="customerid"
            :showButton="false"
            :value="state.data.formitem50"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem49"
          label="只能选择、无按钮"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.formitem49"
          :required="state.detailsModel.formitem49.required"
          :visible="state.detailsModel.formitem49.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="width: 200.0px;">
          <AppAutoComplete
            name="formitem49"
            :data="state.data"
            :disabled="state.detailsModel.formitem49.disabled"
            :context="state.context"
            :viewParams="state.viewParams"
            deMajorField="customername"
            deKeyField="customerid"
            :showButton="false"
            :value="state.data.formitem49"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
    </AppFormGroup>
    <AppFormGroup 
      name="grouppanel4"
      title="时间选择器"
      :visible="state.detailsModel.grouppanel4.visible" 
      :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
      :infoGroupMode="false"
      :titleBarCloseMode="0"
      :showCaption="true"
      :uIActionGroup="state.detailsModel.grouppanel4.uIActionGroup"
      @componentEvent="onComponentEvent">
        <AppFormItem 
          name="formitem19"
          label="HH:mm"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.formitem19"
          :required="state.detailsModel.formitem19.required"
          :visible="state.detailsModel.formitem19.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="width: 70.0px;">
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
        <AppFormItem 
          name="formitem29"
          label="HH:mm:ss"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.formitem29"
          :required="state.detailsModel.formitem29.required"
          :visible="state.detailsModel.formitem29.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="width: 90.0px;">
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
        <AppFormItem 
          name="formitem15"
          label="YYYY-MM-DD"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.formitem15"
          :required="state.detailsModel.formitem15.required"
          :visible="state.detailsModel.formitem15.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="width: 100.0px;">
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
        <AppFormItem 
          name="formitem27"
          label="YYYY-MM-DD HH"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.formitem27"
          :required="state.detailsModel.formitem27.required"
          :visible="state.detailsModel.formitem27.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="width: 120.0px;">
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
        <AppFormItem 
          name="formitem28"
          label="YYYY-MM-DD HH:mm"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.formitem28"
          :required="state.detailsModel.formitem28.required"
          :visible="state.detailsModel.formitem28.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="width: 140.0px;">
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
        <AppFormItem 
          name="formitem14"
          label="YYYY-MM-DD HH:mm:ss"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.formitem14"
          :required="state.detailsModel.formitem14.required"
          :visible="state.detailsModel.formitem14.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="width: 160.0px;">
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
    </AppFormGroup>
    <AppFormGroup 
      name="grouppanel3"
      title="数据选择"
      :visible="state.detailsModel.grouppanel3.visible" 
      :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
      :infoGroupMode="false"
      :titleBarCloseMode="0"
      :showCaption="true"
      :uIActionGroup="state.detailsModel.grouppanel3.uIActionGroup"
      @componentEvent="onComponentEvent">
        <AppFormItem 
          name="formitem26"
          label="默认"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.formitem26"
          :required="state.detailsModel.formitem26.required"
          :visible="state.detailsModel.formitem26.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 12,colSM: 12,}"
          >
          <div class="form-editor-container" style="width: 200.0px;">
          <AppDataPicker
            name="formitem26"
            :data="state.data"
            valueItem="formitem17"
            :disabled="state.detailsModel.formitem26.disabled"
            :context="state.context"
            :viewParams="state.viewParams"
            deMajorField="customername"
            deKeyField="customerid"
            pickUpView="CustomerPickupView"
            :value="state.data.formitem26"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem17"
          label=""
          labelPos="NONE"
          :labelWidth="0"
          :showLabel="false"
          :rules="state.rules.formitem17"
          :required="state.detailsModel.formitem17.required"
          :visible="state.detailsModel.formitem17.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 12,colSM: 12,}"
          >
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
        <AppFormItem 
          name="formitem33"
          label="数据链接"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.formitem33"
          :required="state.detailsModel.formitem33.required"
          :visible="state.detailsModel.formitem33.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 12,colSM: 12,}"
          >
          <div class="form-editor-container" style="width: 200.0px;">
          <AppDataPicker
            name="formitem33"
            :data="state.data"
            valueItem="formitem39"
            :disabled="state.detailsModel.formitem33.disabled"
            :context="state.context"
            :viewParams="state.viewParams"
            deMajorField="customername"
            deKeyField="customerid"
            pickUpView="CustomerPickupView"
            :linkOnly="true"
            :value="state.data.formitem33"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem39"
          label=""
          labelPos="NONE"
          :labelWidth="0"
          :showLabel="false"
          :rules="state.rules.formitem39"
          :required="state.detailsModel.formitem39.required"
          :visible="state.detailsModel.formitem39.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 12,colSM: 12,}"
          >
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
        <AppFormItem 
          name="formitem32"
          label="无AC"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.formitem32"
          :required="state.detailsModel.formitem32.required"
          :visible="state.detailsModel.formitem32.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 12,colSM: 12,}"
          >
          <div class="form-editor-container" style="width: 200.0px;">
          <AppDataPicker
            name="formitem32"
            :data="state.data"
            valueItem="formitem40"
            :disabled="state.detailsModel.formitem32.disabled"
            :context="state.context"
            :viewParams="state.viewParams"
            deMajorField="customername"
            deKeyField="customerid"
            pickUpView="CustomerPickupView"
            :noAC="true"
            :value="state.data.formitem32"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem40"
          label=""
          labelPos="NONE"
          :labelWidth="0"
          :showLabel="false"
          :rules="state.rules.formitem40"
          :required="state.detailsModel.formitem40.required"
          :visible="state.detailsModel.formitem40.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 12,colSM: 12,}"
          >
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
        <AppFormItem 
          name="formitem31"
          label="无AC、数据链接"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.formitem31"
          :required="state.detailsModel.formitem31.required"
          :visible="state.detailsModel.formitem31.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 12,colSM: 12,}"
          >
          <div class="form-editor-container" style="width: 200.0px;">
          <AppDataPicker
            name="formitem31"
            :data="state.data"
            valueItem="formitem36"
            :disabled="state.detailsModel.formitem31.disabled"
            :context="state.context"
            :viewParams="state.viewParams"
            deMajorField="customername"
            deKeyField="customerid"
            pickUpView="CustomerPickupView"
            :noAC="true"
            :value="state.data.formitem31"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem36"
          label=""
          labelPos="NONE"
          :labelWidth="0"
          :showLabel="false"
          :rules="state.rules.formitem36"
          :required="state.detailsModel.formitem36.required"
          :visible="state.detailsModel.formitem36.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 12,colSM: 12,}"
          >
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
        <AppFormItem 
          name="formitem30"
          label="下拉"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.formitem30"
          :required="state.detailsModel.formitem30.required"
          :visible="state.detailsModel.formitem30.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 12,colSM: 12,}"
          >
          <div class="form-editor-container" style="width: 200.0px;">
          <AppDataPickerView
            name="formitem30"
            :data="state.data"
            valueItem="formitem41"
            :disabled="state.detailsModel.formitem30.disabled"
            :context="state.context"
            :viewParams="state.viewParams"
            :value="state.data.formitem30"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem41"
          label=""
          labelPos="NONE"
          :labelWidth="0"
          :showLabel="false"
          :rules="state.rules.formitem41"
          :required="state.detailsModel.formitem41.required"
          :visible="state.detailsModel.formitem41.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 12,colSM: 12,}"
          >
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
        <AppFormItem 
          name="formitem35"
          label="下拉、数据链接"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.formitem35"
          :required="state.detailsModel.formitem35.required"
          :visible="state.detailsModel.formitem35.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 12,colSM: 12,}"
          >
          <div class="form-editor-container" style="width: 200.0px;">
          <AppDataPicker
            name="formitem35"
            :data="state.data"
            valueItem="formitem42"
            :disabled="state.detailsModel.formitem35.disabled"
            :context="state.context"
            :viewParams="state.viewParams"
            deMajorField="customername"
            deKeyField="customerid"
            :isDropdown="true"
            :value="state.data.formitem35"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem42"
          label=""
          labelPos="NONE"
          :labelWidth="0"
          :showLabel="false"
          :rules="state.rules.formitem42"
          :required="state.detailsModel.formitem42.required"
          :visible="state.detailsModel.formitem42.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 12,colSM: 12,}"
          >
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
        <AppFormItem 
          name="formitem37"
          label="无按钮"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.formitem37"
          :required="state.detailsModel.formitem37.required"
          :visible="state.detailsModel.formitem37.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 12,colSM: 12,}"
          >
          <div class="form-editor-container" style="width: 200.0px;">
          <AppDataPicker
            name="formitem37"
            :data="state.data"
            valueItem="formitem43"
            :disabled="state.detailsModel.formitem37.disabled"
            :context="state.context"
            :viewParams="state.viewParams"
            deMajorField="customername"
            deKeyField="customerid"
            :value="state.data.formitem37"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem43"
          label=""
          labelPos="NONE"
          :labelWidth="0"
          :showLabel="false"
          :rules="state.rules.formitem43"
          :required="state.detailsModel.formitem43.required"
          :visible="state.detailsModel.formitem43.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 12,colSM: 12,}"
          >
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
        <AppFormItem 
          name="formitem38"
          label="下拉视图"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.formitem38"
          :required="state.detailsModel.formitem38.required"
          :visible="state.detailsModel.formitem38.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 12,colSM: 12,}"
          >
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
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem44"
          label=""
          labelPos="NONE"
          :labelWidth="0"
          :showLabel="false"
          :rules="state.rules.formitem44"
          :required="state.detailsModel.formitem44.required"
          :visible="state.detailsModel.formitem44.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 12,colSM: 12,}"
          >
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
        <AppFormItem 
          name="formitem61"
          label="下拉树视图"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.formitem61"
          :required="state.detailsModel.formitem61.required"
          :visible="state.detailsModel.formitem61.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 12,colSM: 12,}"
          >
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
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem62"
          label=""
          labelPos="NONE"
          :labelWidth="0"
          :showLabel="false"
          :rules="state.rules.formitem62"
          :required="state.detailsModel.formitem62.required"
          :visible="state.detailsModel.formitem62.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 12,colSM: 12,}"
          >
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
        <AppFormItem 
          name="formitem34"
          label="下拉视图、数据链接"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.formitem34"
          :required="state.detailsModel.formitem34.required"
          :visible="state.detailsModel.formitem34.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 12,colSM: 12,}"
          >
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
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem45"
          label=""
          labelPos="NONE"
          :labelWidth="0"
          :showLabel="false"
          :rules="state.rules.formitem45"
          :required="state.detailsModel.formitem45.required"
          :visible="state.detailsModel.formitem45.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 12,colSM: 12,}"
          >
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
        <AppFormItem 
          name="formitem16"
          label="嵌入选择视图"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.formitem16"
          :required="state.detailsModel.formitem16.required"
          :visible="state.detailsModel.formitem16.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 24,colMD: 12,colSM: 12,}"
          >
          <div class="form-editor-container" style="height: 300.0px">
          <AppDataPickerView
            name="formitem16"
            :data="state.data"
            valueItem="formitem46"
            :disabled="state.detailsModel.formitem16.disabled"
            :context="state.context"
            :viewParams="state.viewParams"
            :value="state.data.formitem16"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem46"
          label=""
          labelPos="NONE"
          :labelWidth="0"
          :showLabel="false"
          :rules="state.rules.formitem46"
          :required="state.detailsModel.formitem46.required"
          :visible="state.detailsModel.formitem46.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 24,colMD: 12,colSM: 12,}"
          >
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
        <AppFormItem 
          name="formitem13"
          label="数据多选"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.formitem13"
          :required="state.detailsModel.formitem13.required"
          :visible="state.detailsModel.formitem13.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 24,colMD: 12,colSM: 12,}"
          >
          <div class="form-editor-container" style="">
          <AppDataPicker
            name="formitem13"
            :data="state.data"
            :disabled="state.detailsModel.formitem13.disabled"
            :context="state.context"
            :viewParams="state.viewParams"
            pickUpView="CustomerMPickupView"
            :multiple="true"
            :value="state.data.formitem13"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
    </AppFormGroup>
    <AppFormGroup 
      name="grouppanel6"
      title="直接内容"
      :visible="state.detailsModel.grouppanel6.visible" 
      :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
      :infoGroupMode="false"
      :titleBarCloseMode="0"
      :showCaption="true"
      :uIActionGroup="state.detailsModel.grouppanel6.uIActionGroup"
      @componentEvent="onComponentEvent">
        <AppFormRaw 
          name="rawitem1"
          :visible="state.detailsModel.rawitem1.visible"
          class="el-alert el-alert--info is-light"
          contentType="RAW"
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          value="直接内容编辑器一般用于面板绘制呈现"
          />
        <AppFormItem 
          name="formitem57"
          label="直接内容（RAW）"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.formitem57"
          :required="state.detailsModel.formitem57.required"
          :visible="state.detailsModel.formitem57.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppRaw
            name="formitem57"
            :date="state.data"
            :disabled="state.detailsModel.formitem57.disabled"
            contentType="RAW"
            :value="state.data.formitem57"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem58"
          label="直接内容（HTML）"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.formitem58"
          :required="state.detailsModel.formitem58.required"
          :visible="state.detailsModel.formitem58.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppRaw
            name="formitem58"
            :date="state.data"
            :disabled="state.detailsModel.formitem58.disabled"
            contentType="RAW"
            :value="state.data.formitem58"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem59"
          label="直接内容（IMAGE）"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.formitem59"
          :required="state.detailsModel.formitem59.required"
          :visible="state.detailsModel.formitem59.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="width: 200.0px;height: 200.0px">
          <AppRaw
            name="formitem59"
            :date="state.data"
            :disabled="state.detailsModel.formitem59.disabled"
            contentType="RAW"
            :value="state.data.formitem59"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem60"
          label="直接内容（MARKDOWN）"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.formitem60"
          :required="state.detailsModel.formitem60.required"
          :visible="state.detailsModel.formitem60.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppRaw
            name="formitem60"
            :date="state.data"
            :disabled="state.detailsModel.formitem60.disabled"
            contentType="RAW"
            :value="state.data.formitem60"
            @editorEvent="onEditorEvent"
          />
          </div>
        </AppFormItem>
    </AppFormGroup>
    <AppFormGroup 
      name="grouppanel1"
      title="高级"
      :visible="state.detailsModel.grouppanel1.visible" 
      :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
      :infoGroupMode="false"
      :titleBarCloseMode="0"
      :showCaption="true"
      :uIActionGroup="state.detailsModel.grouppanel1.uIActionGroup"
      @componentEvent="onComponentEvent">
        <AppFormItem 
          name="formitem25"
          label="IP地址"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.formitem25"
          :required="state.detailsModel.formitem25.required"
          :visible="state.detailsModel.formitem25.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppInputIp
            name="formitem25"
            :disabled="state.detailsModel.formitem25.disabled"
            :value="state.data.formitem25"
            @editorEvent="onEditorEvent"
          /> 
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem18"
          label="HTML编辑框"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.formitem18"
          :required="state.detailsModel.formitem18.required"
          :visible="state.detailsModel.formitem18.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
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
        <AppFormItem 
          name="formitem55"
          label="代码编辑框"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.formitem55"
          :required="state.detailsModel.formitem55.required"
          :visible="state.detailsModel.formitem55.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          <AppCode
            name="formitem55"
            :disabled="state.detailsModel.formitem55.disabled"
            :value="state.data.formitem55"
            @editorEvent="onEditorEvent"
            :context="state.context"
            :viewParams="state.viewParams"/>
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem54"
          label="MD编辑器（预览）"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.formitem54"
          :required="state.detailsModel.formitem54.required"
          :visible="state.detailsModel.formitem54.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem53"
          label="MD编辑器（编辑）"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.formitem53"
          :required="state.detailsModel.formitem53.required"
          :visible="state.detailsModel.formitem53.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          </div>
        </AppFormItem>
        <AppFormItem 
          name="formitem56"
          label="MD编辑器（即时预览）"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.formitem56"
          :required="state.detailsModel.formitem56.required"
          :visible="state.detailsModel.formitem56.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
          <div class="form-editor-container" style="">
          </div>
        </AppFormItem>
        <AppFormDruipart 
          name="druipart1" 
          title="关系界面"
          :formSubject="state.formSubject"
          :visible="state.detailsModel.druipart1.visible"
          viewCodeName="EditorValueUsr2GridView"
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          paramItem="srfkey"
          deCodeName="example"
          :context="context"
          :viewParams="viewParams"
          :data="state.data"
          :viewSubject="state.viewSubject">
            <template #default="druipartParams">
            <EditorValueUsr2GridView
              :class="['app-view-layout--from-druipart']"
              :context="druipartParams.context"
              :viewParams="druipartParams.viewParams"
              :viewDefaultUsage="false"
              :showCaptionBar="false"
              openType="EMBED"
              :viewSubject="state.viewSubject"
              @viewEvent="druipartParams.viewEvent"
            >
            </EditorValueUsr2GridView>
            </template>
        </AppFormDruipart>
        <AppFormItem 
          name="format8"
          label="文本占位符（@）"
          labelPos="LEFT"
          :labelWidth="200"
          :showLabel="true"
          :rules="state.rules.format8"
          :required="state.detailsModel.format8.required"
          :visible="state.detailsModel.format8.visible" 
          :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
          >
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
    </AppFormGroup>
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