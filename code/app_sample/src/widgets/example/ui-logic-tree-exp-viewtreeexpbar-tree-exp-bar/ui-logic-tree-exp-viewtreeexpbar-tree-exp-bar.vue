<script setup lang="ts">
import { Subject } from 'rxjs';
import { IActionParam, IParam, ControlAction, TreeExpBarControl, IContext } from '@core';
import { ctrlState } from './ui-logic-tree-exp-viewtreeexpbar-tree-exp-bar-state';
import { UILogicTree} from '@widgets/example/ui-logic-tree';
import ExampleUIActionEditView from '@views/sample/example-ui-action-edit-view';
import ExampleAutoCompleteEditView from '@views/sample/example-auto-complete-edit-view';
import ExampleUILogicEditView from '@views/sample/example-ui-logic-edit-view';
import ViewMsgDataViewMsgPanelView from '@views/sample/view-msg-data-view-msg-panel-view';

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
      <UILogicTree
        ref="xData"
        :context="state.context"
        :viewParams="state.viewParams"
        :viewSubject="state.viewSubject"
        :isBranchAvailable="true"
        @ctrlEvent="onCtrlEvent"
      ></UILogicTree>
    </a-layout-sider>
    <a-layout>
      <ExampleUIActionEditView
        v-if="state.selection.viewName && state.selection.viewName === 'ExampleUIActionEditView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </ExampleUIActionEditView>
      <ExampleAutoCompleteEditView
        v-if="state.selection.viewName && state.selection.viewName === 'ExampleAutoCompleteEditView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </ExampleAutoCompleteEditView>
      <ExampleUILogicEditView
        v-if="state.selection.viewName && state.selection.viewName === 'ExampleUILogicEditView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </ExampleUILogicEditView>
      <ViewMsgDataViewMsgPanelView
        v-if="state.selection.viewName && state.selection.viewName === 'ViewMsgDataViewMsgPanelView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </ViewMsgDataViewMsgPanelView>
    </a-layout>
  </a-layout>
</template>