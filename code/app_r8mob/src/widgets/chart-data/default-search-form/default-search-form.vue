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
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.n_chartdataname_like.visible"
    name="n_chartdataname_like"
    :rules="state.rules.n_chartdataname_like"
    :labelWidth="130"
    :required="state.detailsModel.n_chartdataname_like.required"
    label="图表名称(%)"
    style="">
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
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem 
    v-show="state.detailsModel.n_datatype_eq.visible"
    name="n_datatype_eq"
    :rules="state.rules.n_datatype_eq"
    :labelWidth="130"
    :required="state.detailsModel.n_datatype_eq.required"
    label="数据分类(等于(=))"
    style="">
      <div class="form-editor-container" style="">
      /*未找到模板[MOBDROPDOWNLIST]*/      </div>
  </AppFormItem>
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