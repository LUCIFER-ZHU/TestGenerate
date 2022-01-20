<script setup lang="ts">
import { Subject } from 'rxjs';
import { IActionParam, IParam, ControlAction, TreeExpBarControl, IContext } from '@core';
import { ctrlState } from './search-form-tree-exp-viewtreeexpbar-tree-exp-bar-state';
import { SearchFormTreeTree} from '@widgets/example/search-form-tree-tree';
import CustomerAutoSearchGridView from '@views/sample/customer-auto-search-grid-view';
import CustomerSearchFormButtonStyleCustomView from '@views/sample/customer-search-form-button-style-custom-view';
import CustomerAdvSearchGridView from '@views/sample/customer-adv-search-grid-view';

interface Props {
  context: IContext;
  viewParams?: IParam;
  controlAction: ControlAction;
  showBusyIndicator?: boolean;
  viewMode?: number;
  viewSubject: Subject<IActionParam>;
}

const props = withDefaults(defineProps < Props > (), {
  viewSubject: () => new Subject < IActionParam > (),
  viewMode: 0,
  showBusyIndicator: true,
});

interface CtrlEmit {
  (name: "ctrlEvent", value: IActionParam): void;
}

const emit = defineEmits <CtrlEmit> ();

// 安装功能模块，提供状态和能力方法
const { state, onCtrlEvent, xData } = new TreeExpBarControl(ctrlState, props, emit).moduleInstall();

// 暴露内部状态及能力
defineExpose({ state, name: 'treeexpbar' });
</script>

<template>
  <a-layout
    class="app-tree-exp-bar"
    >
    <a-layout-sider>
      <SearchFormTreeTree
        ref="xData"
        :context="state.context"
        :viewParams="state.viewParams"
        :viewSubject="state.viewSubject"
        :isBranchAvailable="true"
        @ctrlEvent="onCtrlEvent"
      ></SearchFormTreeTree>
    </a-layout-sider>
    <a-layout>
      <CustomerAutoSearchGridView
        v-if="state.selection.viewName && state.selection.viewName === 'CustomerAutoSearchGridView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </CustomerAutoSearchGridView>
      <CustomerSearchFormButtonStyleCustomView
        v-if="state.selection.viewName && state.selection.viewName === 'CustomerSearchFormButtonStyleCustomView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </CustomerSearchFormButtonStyleCustomView>
      <CustomerAdvSearchGridView
        v-if="state.selection.viewName && state.selection.viewName === 'CustomerAdvSearchGridView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </CustomerAdvSearchGridView>
    </a-layout>
  </a-layout>
</template>