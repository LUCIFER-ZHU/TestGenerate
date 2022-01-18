<script setup lang="ts">
import { Subject } from 'rxjs';
import { SaveOutlined } from '@ant-design/icons-vue';
import { CtrlConfig } from './mob-default-searchForm-config';
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
const { state, handleEditorEvent, handleComponentEvent, onSearch, loadDraft, onOk, onCancel } = new SearchFormControl(CtrlConfig).moduleInstall(props, emit);

</script>
<template>
  <a-form 
    name="MobDefault" 
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
  <AppFormItem v-show="state.detailsModel.n_provincename_like.visible" name="n_provincename_like" label="省份名称(%)">
    /*未找到模板[MOBTEXT]*/  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 24, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.formitem.visible" name="formitem" label="">
    /*未找到模板[MOBTEXT]*/  </AppFormItem>
</a-col>
      </a-row>
      </a-col>
      <a-col class='search-form-footer'>
        <a-button class='search-button' @click="onSearch" type="primary">搜索</a-button>
        <a-button class='reset-button' @click='loadDraft'>重置</a-button>
        <a-popover title="存储自定义查询">
          <template #content>
            <a-input />
            <div class="search-form-popover-button">
                <a-button @click="onCancel">取消</a-button>
                <a-button @click="onOk" type="primary">保存</a-button>
            </div>
          </template>
          <a-button><save-outlined /></a-button>
        </a-popover>
      </a-col>
    </a-row>
  </a-form>
</template>