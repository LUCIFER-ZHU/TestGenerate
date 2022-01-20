<script setup lang="ts">
import { Subject } from 'rxjs';
import { IActionParam, IParam, ControlAction, TreeExpBarControl, IContext } from '@core';
import { ctrlState } from './wizard-tree-exp-viewtreeexpbar-tree-exp-bar-state';
import { WizardTreeTree} from '@widgets/example/wizard-tree-tree';
import WizardDataBaseWizardView from '@views/sample/wizard-data-base-wizard-view';
import WizardDataStyleWizardView_8964 from '@views/sample/wizard-data-style-wizard-view-8964';
import WizardDataExamplePanelView from '@views/sample/wizard-data-example-panel-view';

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
      <WizardTreeTree
        ref="xData"
        :context="state.context"
        :viewParams="state.viewParams"
        :viewSubject="state.viewSubject"
        :isBranchAvailable="true"
        @ctrlEvent="onCtrlEvent"
      ></WizardTreeTree>
    </a-layout-sider>
    <a-layout>
      <WizardDataBaseWizardView
        v-if="state.selection.viewName && state.selection.viewName === 'WizardDataBaseWizardView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </WizardDataBaseWizardView>
      <WizardDataStyleWizardView_8964
        v-if="state.selection.viewName && state.selection.viewName === 'WizardDataStyleWizardView_8964'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </WizardDataStyleWizardView_8964>
      <WizardDataExamplePanelView
        v-if="state.selection.viewName && state.selection.viewName === 'WizardDataExamplePanelView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </WizardDataExamplePanelView>
    </a-layout>
  </a-layout>
</template>