<script setup lang="ts">
import { Subject } from 'rxjs';
import { SaveOutlined, CloseOutlined } from '@ant-design/icons-vue';
import { ctrlState } from './button-style3-search-form-state';
import { SearchFormControl, IActionParam, IParam, ControlAction, IContext } from '@core';

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
const { state, onEditorEvent, onComponentEvent, onSearch, loadDraft, onSaveHistoryItem, onCancel, onRemoveHistoryItem } = new SearchFormControl(ctrlState, props, emit).moduleInstall();

</script>
<template>
  <a-form 
    name="ButtonStyle3" 
    class="app-search-form searchform-css3"
    style=""
    :model="state.data" 
    :rules="state.rules">
    <a-row>
      <a-col>
        <a-row>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.n_customername_like.visible"
    name="n_customername_like"
    :rules="state.rules.n_customername_like"
    :labelWidth="130"
    :required="state.detailsModel.n_customername_like.required"
    label="客户名称(文本包含(%))"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="n_customername_like"
  :disabled="state.detailsModel.n_customername_like.disabled"
  type="text"
  :value="state.data.n_customername_like"
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
    v-show="state.detailsModel.n_type_eq.visible"
    name="n_type_eq"
    :rules="state.rules.n_type_eq"
    :labelWidth="130"
    :required="state.detailsModel.n_type_eq.required"
    label="类型(等于(=))"
    style="">
      <div class="form-editor-container" style="">
<AppDropdownList
  name="n_type_eq"
  codeListTag="Sample__CustomerType"
  codeListType="STATIC"
  
  :disabled="state.detailsModel.n_type_eq.disabled"
  :context="state.context"
  :viewParams="state.viewParams"
  :value="state.data.n_type_eq"
  :data="state.data"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
      </a-row>
      </a-col>
      <a-col class='search-form-footer'>

        <a-button class='search-button' type="primary">搜索</a-button>
      </a-col>
    </a-row>
  </a-form>
</template>