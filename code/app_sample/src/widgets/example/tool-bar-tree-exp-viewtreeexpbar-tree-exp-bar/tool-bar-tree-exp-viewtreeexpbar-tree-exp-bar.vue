<script setup lang="ts">
import { Subject } from 'rxjs';
import { IActionParam, IParam, ControlAction, TreeExpBarControl, IContext } from '@core';
import { ctrlState } from './tool-bar-tree-exp-viewtreeexpbar-tree-exp-bar-state';
import { ToolBarTreeTree} from '@widgets/example/tool-bar-tree-tree';
import ExampleToolbarBaseCustomView from '@views/sample/example-toolbar-base-custom-view';
import ExampleToolbarGroupCustomView from '@views/sample/example-toolbar-group-custom-view';
import ExampleToolbarCssAndIconCustomView from '@views/sample/example-toolbar-css-and-icon-custom-view';

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
      <ToolBarTreeTree
        ref="xData"
        :context="state.context"
        :viewParams="state.viewParams"
        :viewSubject="state.viewSubject"
        :isBranchAvailable="true"
        @ctrlEvent="onCtrlEvent"
      ></ToolBarTreeTree>
    </a-layout-sider>
    <a-layout>
      <ExampleToolbarBaseCustomView
        v-if="state.selection.viewName && state.selection.viewName === 'ExampleToolbarBaseCustomView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </ExampleToolbarBaseCustomView>
      <ExampleToolbarGroupCustomView
        v-if="state.selection.viewName && state.selection.viewName === 'ExampleToolbarGroupCustomView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </ExampleToolbarGroupCustomView>
      <ExampleToolbarCssAndIconCustomView
        v-if="state.selection.viewName && state.selection.viewName === 'ExampleToolbarCssAndIconCustomView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </ExampleToolbarCssAndIconCustomView>
    </a-layout>
  </a-layout>
</template>