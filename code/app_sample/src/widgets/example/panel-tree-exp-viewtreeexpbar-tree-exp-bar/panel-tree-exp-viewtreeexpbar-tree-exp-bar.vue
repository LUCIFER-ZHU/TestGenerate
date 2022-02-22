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
  name:string,
  parent: IParam;
  context: IContext;
  viewParams?: IParam;
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
const { name, state, onCtrlEvent, xData } = new TreeExpBarControl(ctrlState, props, emit).moduleInstall();

// 暴露内部状态及能力
defineExpose({ name, state });
</script>

<template>
  <div class="app-tree-exp-bar">
    <AppSplit v-model="state.split">
      <template #left>
        <div v-if="state.showTitleBar" class="tree-exp-bar-title">
          <span>{{ state.title }}</span>
        </div>
        <div class="tree-exp-bar-body">
          
          <PanelTree
            ref="xData"
            name="treeexpbar_tree"
            :context="state.context"
            :viewParams="state.viewParams"
            :viewSubject="state.viewSubject"
            :selectFirstDefault="true"
            :isBranchAvailable="true"
            :parent="parent"
            @ctrlEvent="onCtrlEvent"
          ></PanelTree>
        </div>
      </template>
      <template #right>
        <ExampleBasePanelView
          v-if="state.selection.viewName && state.selection.viewName === 'ExampleBasePanelView'"
          class="tree-exp__nav-view"
          :viewDefaultUsage="false"
          :context="state.selection.context"
          :viewParams="state.selection.viewParams">
        </ExampleBasePanelView>
        <ExampleBasePanelView_CSS
          v-if="state.selection.viewName && state.selection.viewName === 'ExampleBasePanelView_CSS'"
          class="tree-exp__nav-view"
          :viewDefaultUsage="false"
          :context="state.selection.context"
          :viewParams="state.selection.viewParams">
        </ExampleBasePanelView_CSS>
        <CalculatorPickPanelView
          v-if="state.selection.viewName && state.selection.viewName === 'CalculatorPickPanelView'"
          class="tree-exp__nav-view"
          :viewDefaultUsage="false"
          :context="state.selection.context"
          :viewParams="state.selection.viewParams">
        </CalculatorPickPanelView>
        <CalculatorCalcPanelView
          v-if="state.selection.viewName && state.selection.viewName === 'CalculatorCalcPanelView'"
          class="tree-exp__nav-view"
          :viewDefaultUsage="false"
          :context="state.selection.context"
          :viewParams="state.selection.viewParams">
        </CalculatorCalcPanelView>
        <ExampleValueFormatPanelView
          v-if="state.selection.viewName && state.selection.viewName === 'ExampleValueFormatPanelView'"
          class="tree-exp__nav-view"
          :viewDefaultUsage="false"
          :context="state.selection.context"
          :viewParams="state.selection.viewParams">
        </ExampleValueFormatPanelView>
      </template>
    </AppSplit>
  </div>
</template>

<style lang="scss" scoped>
.app-tree-exp-bar {
  width: 100%;
  height: 100%;
}
</style>