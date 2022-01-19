<script setup lang="ts">
import { Subject } from 'rxjs';
import { SaveOutlined, CloseOutlined } from '@ant-design/icons-vue';
import { ctrlState } from './default-quick-search-form-state';
import { QuickSearchFormControl, IActionParam, IParam, ControlAction, IContext } from '@core';

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
const { state, onEditorEvent } = new QuickSearchFormControl(ctrlState, props, emit).moduleInstall();

</script>
<template>
  <a-form 
    name="Default" 
    class="app-quick-search-form"
    style=""
    :model="state.data" 
    :rules="state.rules">
    <a-row>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.n_chartdataname_like.visible" name="n_chartdataname_like" :required="state.detailsModel.n_chartdataname_like.required" label="图表名称(%)">
<appInput
  name="n_chartdataname_like"
  :disabled="state.detailsModel.n_chartdataname_like.disabled"
  type="text"
  :value="state.data.n_chartdataname_like"
  @editorEvent="onEditorEvent"
/> 
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.n_datatype_eq.visible" name="n_datatype_eq" :required="state.detailsModel.n_datatype_eq.required" label="数据分类(等于(=))">
<appDropdownList
  name="n_datatype_eq"
  :disabled="state.detailsModel.n_datatype_eq.disabled"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.n_datatype_eq"
  :data="state.data"
  @editorEvent="onEditorEvent"
/> 
  </AppFormItem>
</a-col>
    </a-row>
  </a-form>
</template>