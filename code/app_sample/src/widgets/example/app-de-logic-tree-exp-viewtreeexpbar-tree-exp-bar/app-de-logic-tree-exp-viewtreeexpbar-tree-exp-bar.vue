<script setup lang="ts">
import { Subject } from 'rxjs';
import { IActionParam, IParam, ControlAction, TreeExpBarControl, IContext } from '@core';
import { ctrlState } from './app-de-logic-tree-exp-viewtreeexpbar-tree-exp-bar-state';
import { AppDELogicTree} from '@widgets/example/app-de-logic-tree';
import ExampleAppDEFLogicEditView from '@views/sample/example-app-def-logic-edit-view';
import WizardDataGridView from '@views/sample/wizard-data-grid-view';
import ExampleImpExpGridView from '@views/sample/example-imp-exp-grid-view';

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
      <AppDELogicTree
        ref="xData"
        :context="state.context"
        :viewParams="state.viewParams"
        :viewSubject="state.viewSubject"
        :isBranchAvailable="true"
        @ctrlEvent="onCtrlEvent"
      ></AppDELogicTree>
    </a-layout-sider>
    <a-layout>
      <ExampleAppDEFLogicEditView
        v-if="state.selection.viewName && state.selection.viewName === 'ExampleAppDEFLogicEditView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </ExampleAppDEFLogicEditView>
      <WizardDataGridView
        v-if="state.selection.viewName && state.selection.viewName === 'WizardDataGridView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </WizardDataGridView>
      <ExampleImpExpGridView
        v-if="state.selection.viewName && state.selection.viewName === 'ExampleImpExpGridView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </ExampleImpExpGridView>
    </a-layout>
  </a-layout>
</template>