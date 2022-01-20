<script setup lang="ts">
import { Subject } from 'rxjs';
import { IActionParam, IParam, ControlAction, TreeExpBarControl, IContext } from '@core';
import { ctrlState } from './search-bar-tree-exp-viewtreeexpbar-tree-exp-bar-state';
import { SearchBarTreeTree} from '@widgets/example/search-bar-tree-tree';
import ExampleSearchbarBaseCustomView from '@views/sample/example-searchbar-base-custom-view';

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
      <SearchBarTreeTree
        ref="xData"
        :context="state.context"
        :viewParams="state.viewParams"
        :viewSubject="state.viewSubject"
        :isBranchAvailable="true"
        @ctrlEvent="onCtrlEvent"
      ></SearchBarTreeTree>
    </a-layout-sider>
    <a-layout>
      <ExampleSearchbarBaseCustomView
        v-if="state.selection.viewName && state.selection.viewName === 'ExampleSearchbarBaseCustomView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </ExampleSearchbarBaseCustomView>
    </a-layout>
  </a-layout>
</template>