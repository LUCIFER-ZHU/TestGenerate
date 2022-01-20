<script setup lang="ts">
import { Subject } from 'rxjs';
import { SaveOutlined, CloseOutlined } from '@ant-design/icons-vue';
import { ctrlState } from './default-search-form-state';
import { SearchFormControl, IActionParam, IParam, ControlAction, IContext } from '@core';

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
const { state, onEditorEvent, onComponentEvent, onSearch, loadDraft, onSaveHistoryItem, onCancel, onRemoveHistoryItem } = new SearchFormControl(ctrlState, props, emit).moduleInstall();

</script>
<template>
  <a-form 
    name="Default" 
    class="app-search-form"
    style=""
    :model="state.data" 
    :rules="state.rules">
    <a-row>
      <a-col>
        <a-row>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormGroup 
    v-show="state.detailsModel.grouppanel1.visible" 
    name="grouppanel1" 
    title="分组面板"
    style=""
    :infoGroupMode="false"
    :titleBarCloseMode="0"
    :showCaption="false"
    :uIActionGroup="state.detailsModel.grouppanel1.uIActionGroup"
    @componentEvent="onComponentEvent">
    <a-row>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 8, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.n_customername_like.visible"
    name="n_customername_like"
    :rules="state.rules.n_customername_like"
    :labelWidth="130"
    :required="state.detailsModel.n_customername_like.required"
    label="客户名称(%)"
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
  :lg="{span: 6, offset: 0 }"
  :md="{span: 8, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.n_monthval_eq.visible"
    name="n_monthval_eq"
    :rules="state.rules.n_monthval_eq"
    :labelWidth="130"
    :required="state.detailsModel.n_monthval_eq.required"
    label="月份(等于(=))"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="n_monthval_eq"
  :disabled="state.detailsModel.n_monthval_eq.disabled"
  type="text"
  :value="state.data.n_monthval_eq"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 8, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.n_quarterval_eq.visible"
    name="n_quarterval_eq"
    :rules="state.rules.n_quarterval_eq"
    :labelWidth="130"
    :required="state.detailsModel.n_quarterval_eq.required"
    label="季度(=)"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="n_quarterval_eq"
  :disabled="state.detailsModel.n_quarterval_eq.disabled"
  type="text"
  :value="state.data.n_quarterval_eq"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 8, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.n_yearval_eq.visible"
    name="n_yearval_eq"
    :rules="state.rules.n_yearval_eq"
    :labelWidth="130"
    :required="state.detailsModel.n_yearval_eq.required"
    label="年份(等于(=))"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="n_yearval_eq"
  :disabled="state.detailsModel.n_yearval_eq.disabled"
  type="text"
  :value="state.data.n_yearval_eq"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 6, offset: 0 }"
  :md="{span: 8, offset: 0 }"
  :sm="{span: 12, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.n_totalval_gtandeq.visible"
    name="n_totalval_gtandeq"
    :rules="state.rules.n_totalval_gtandeq"
    :labelWidth="130"
    :required="state.detailsModel.n_totalval_gtandeq.required"
    label="合计(大于等于(>=))"
    style="">
      <div class="form-editor-container" style="">
<AppInput
  name="n_totalval_gtandeq"
  :disabled="state.detailsModel.n_totalval_gtandeq.disabled"
  type="text"
  :value="state.data.n_totalval_gtandeq"
  @editorEvent="onEditorEvent"
/> 
      </div>
  </AppFormItem>
</a-col>
    </a-row>
  </AppFormGroup>
</a-col>
      </a-row>
      </a-col>
      <a-col class='search-form-footer'>
        <a-select
          allowClear
          class="search-form-history"
          v-show="state.historyItems.length > 0"
          v-model:Value="state.selectHistoryItem"
        >
          <a-select-option class="search-form-history-option" v-for="(item,index) in state.historyItems" :key="index" :value="item.value">{{item.name}} <close-outlined @click="() => onRemoveHistoryItem(item)" /></a-select-option>
        </a-select>
        <a-button class='search-button' @click="onSearch" type="primary">搜索</a-button>
        <a-button class='reset-button' @click='loadDraft'>重置</a-button>
        <a-popover title="存储自定义查询" v-model:visible='state.showPopover' overlayClassName="search-form-popover">
          <template #content>
            <a-input />
            <div class="search-form-buttons">
                <a-button @click="onCancel">取消</a-button>
                <a-button @click="onSaveHistoryItem" type="primary">保存</a-button>
            </div>
          </template>
          <a-button><save-outlined /></a-button>
        </a-popover>
              </a-col>
    </a-row>
  </a-form>
</template>