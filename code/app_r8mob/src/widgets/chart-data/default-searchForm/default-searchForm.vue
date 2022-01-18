<script setup lang="ts">
import { Subject } from 'rxjs';
import { SaveOutlined } from '@ant-design/icons-vue';
import { CtrlConfig } from './default-searchForm-config';
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
  <AppFormItem v-show="state.detailsModel.n_chartdataname_like.visible" name="n_chartdataname_like" label="图表名称(%)">
<appInput
  name="n_chartdataname_like"
  type="text"
  :value="state.data.n_chartdataname_like"
  @editorEvent="handleEditorEvent"
/> 
  </AppFormItem>
</a-col>
<a-col
  :lg="{span: 12, offset: 0 }"
  :md="{span: 24, offset: 0 }"
  :sm="{span: 24, offset: 0 }"
  :xs="{span: 24, offset: 0 }"
 >
  <AppFormItem v-show="state.detailsModel.n_datatype_eq.visible" name="n_datatype_eq" label="数据分类(等于(=))">
    /*未找到模板[MOBDROPDOWNLIST]*/  </AppFormItem>
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