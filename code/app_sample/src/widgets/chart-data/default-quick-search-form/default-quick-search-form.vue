<script setup lang="ts">
import { Subject } from 'rxjs';
import { SaveOutlined, CloseOutlined } from '@ant-design/icons-vue';
import { ctrlState } from './default-quick-search-form-state';
import { QuickSearchFormControl, IActionParam, IParam, ControlAction, IContext } from '@core';

interface Props {
  name:string,
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
const { name, state, getData, onEditorEvent } = new QuickSearchFormControl(ctrlState, props, emit).moduleInstall();
defineExpose({ name, state, getData });

</script>
<template>
  <a-form 
    name="Default" 
    class="app-quick-search-form"
    style=""
    :model="state.data" 
    :rules="state.rules">
    <a-row>
    <AppFormItem 
      name="n_chartdataname_like"
      label="图表名称(%)"
      labelPos="LEFT"
      :labelWidth="130"
      :showLabel="true"
      :rules="state.rules.n_chartdataname_like"
      :required="state.detailsModel.n_chartdataname_like.required"
      :visible="state.detailsModel.n_chartdataname_like.visible" 
      :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 24,}"
      >
      <div class="form-editor-container" style="">
      <AppInput
        name="n_chartdataname_like"
        :disabled="state.detailsModel.n_chartdataname_like.disabled"
        type="text"
        :value="state.data.n_chartdataname_like"
        @editorEvent="onEditorEvent"
      />
      </div>
    </AppFormItem>
    <AppFormItem 
      name="n_datatype_eq"
      label="数据分类(等于(=))"
      labelPos="LEFT"
      :labelWidth="130"
      :showLabel="true"
      :rules="state.rules.n_datatype_eq"
      :required="state.detailsModel.n_datatype_eq.required"
      :visible="state.detailsModel.n_datatype_eq.visible" 
      :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 24,}"
      >
      <div class="form-editor-container" style="">
      <AppDropdownList
        name="n_datatype_eq"
        codeListTag="Sample__DataType"
        codeListType="STATIC"
        :disabled="state.detailsModel.n_datatype_eq.disabled"
        :context="state.context"
        :viewParams="state.viewParams"
        :value="state.data.n_datatype_eq"
        :data="state.data"
        @editorEvent="onEditorEvent"
      /> 
      </div>
    </AppFormItem>
    </a-row>
  </a-form>
</template>