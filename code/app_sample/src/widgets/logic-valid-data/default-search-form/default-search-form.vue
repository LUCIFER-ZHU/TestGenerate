<script setup lang="ts">
import { Subject } from 'rxjs';
import { SaveOutlined, CloseOutlined } from '@ant-design/icons-vue';
import { ctrlState } from './default-search-form-state';
import { SearchFormControl, IActionParam, IParam, ControlAction, IContext } from '@core';

interface Props {
  name:string,
  parent: IParam;
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
const { name, state, getData, onEditorEvent, onComponentEvent, onSearch, loadDraft, onSaveHistoryItem, onCancel, onRemoveHistoryItem } = new SearchFormControl(ctrlState, props, emit).moduleInstall();
defineExpose({ name, state, getData });
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