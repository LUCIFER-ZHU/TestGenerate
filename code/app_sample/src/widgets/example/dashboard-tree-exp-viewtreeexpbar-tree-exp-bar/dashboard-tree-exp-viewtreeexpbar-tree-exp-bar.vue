<script setup lang="ts">
import { Subject } from 'rxjs';
import { IActionParam, IParam, ControlAction, TreeExpBarControl, IContext } from '@core';
import { ctrlState } from './dashboard-tree-exp-viewtreeexpbar-tree-exp-bar-state';
import { DashboardTreeTree} from '@widgets/example/dashboard-tree-tree';
import ExampleBaseDashboardView from '@views/sample/example-base-dashboard-view';
import ExampleBaseDashboardView_CSS from '@views/sample/example-base-dashboard-view-css';
import ExampleValueFormatDashboardView from '@views/sample/example-value-format-dashboard-view';

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
      <DashboardTreeTree
        ref="xData"
        :context="state.context"
        :viewParams="state.viewParams"
        :viewSubject="state.viewSubject"
        :isBranchAvailable="true"
        @ctrlEvent="onCtrlEvent"
      ></DashboardTreeTree>
    </a-layout-sider>
    <a-layout>
      <ExampleBaseDashboardView
        v-if="state.selection.viewName && state.selection.viewName === 'ExampleBaseDashboardView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </ExampleBaseDashboardView>
      <ExampleBaseDashboardView_CSS
        v-if="state.selection.viewName && state.selection.viewName === 'ExampleBaseDashboardView_CSS'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </ExampleBaseDashboardView_CSS>
      <ExampleValueFormatDashboardView
        v-if="state.selection.viewName && state.selection.viewName === 'ExampleValueFormatDashboardView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </ExampleValueFormatDashboardView>
    </a-layout>
  </a-layout>
</template>