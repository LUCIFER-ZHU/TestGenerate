<script setup lang="ts">
import { Subject } from 'rxjs';
import { IActionParam, IParam, ControlAction, TreeExpBarControl, IContext } from '@core';
import { ctrlState } from './panel-tree-exp-viewtreeexpbar-tree-exp-bar-state';
import { PanelTree} from '@widgets/example/panel-tree';
import ExampleBasePanelView from '@views/sample/example-base-panel-view';
import ExampleBasePanelView_CSS from '@views/sample/example-base-panel-view-css';
import CalculatorPickPanelView from '@views/sample/calculator-pick-panel-view';
import CalculatorCalcPanelView from '@views/sample/calculator-calc-panel-view';
import ExampleValueFormatPanelView from '@views/sample/example-value-format-panel-view';

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
      <PanelTree
        ref="xData"
        :context="state.context"
        :viewParams="state.viewParams"
        :viewSubject="state.viewSubject"
        :isBranchAvailable="true"
        @ctrlEvent="onCtrlEvent"
      ></PanelTree>
    </a-layout-sider>
    <a-layout>
      <ExampleBasePanelView
        v-if="state.selection.viewName && state.selection.viewName === 'ExampleBasePanelView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </ExampleBasePanelView>
      <ExampleBasePanelView_CSS
        v-if="state.selection.viewName && state.selection.viewName === 'ExampleBasePanelView_CSS'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </ExampleBasePanelView_CSS>
      <CalculatorPickPanelView
        v-if="state.selection.viewName && state.selection.viewName === 'CalculatorPickPanelView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </CalculatorPickPanelView>
      <CalculatorCalcPanelView
        v-if="state.selection.viewName && state.selection.viewName === 'CalculatorCalcPanelView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </CalculatorCalcPanelView>
      <ExampleValueFormatPanelView
        v-if="state.selection.viewName && state.selection.viewName === 'ExampleValueFormatPanelView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </ExampleValueFormatPanelView>
    </a-layout>
  </a-layout>
</template>