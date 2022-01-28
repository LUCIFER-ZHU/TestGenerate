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
  name:string,
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
          
          <UILogicTree
            ref="xData"
            :context="state.context"
            :viewParams="state.viewParams"
            :viewSubject="state.viewSubject"
            :selectFirstDefault="true"
            :isBranchAvailable="true"
            @ctrlEvent="onCtrlEvent"
          ></UILogicTree>
        </div>
      </template>
      <template #right>
        <ExampleUIActionEditView
          v-if="state.selection.viewName && state.selection.viewName === 'ExampleUIActionEditView'"
          class="tree-exp__nav-view"
          :viewDefaultUsage="false"
          :viewdata="JSON.stringify(state.selection.context)"
          :viewParams="JSON.stringify(state.selection.viewParams)">
        </ExampleUIActionEditView>
        <ExampleAutoCompleteEditView
          v-if="state.selection.viewName && state.selection.viewName === 'ExampleAutoCompleteEditView'"
          class="tree-exp__nav-view"
          :viewDefaultUsage="false"
          :viewdata="JSON.stringify(state.selection.context)"
          :viewParams="JSON.stringify(state.selection.viewParams)">
        </ExampleAutoCompleteEditView>
        <ExampleUILogicEditView
          v-if="state.selection.viewName && state.selection.viewName === 'ExampleUILogicEditView'"
          class="tree-exp__nav-view"
          :viewDefaultUsage="false"
          :viewdata="JSON.stringify(state.selection.context)"
          :viewParams="JSON.stringify(state.selection.viewParams)">
        </ExampleUILogicEditView>
        <ViewMsgDataViewMsgPanelView
          v-if="state.selection.viewName && state.selection.viewName === 'ViewMsgDataViewMsgPanelView'"
          class="tree-exp__nav-view"
          :viewDefaultUsage="false"
          :viewdata="JSON.stringify(state.selection.context)"
          :viewParams="JSON.stringify(state.selection.viewParams)">
        </ViewMsgDataViewMsgPanelView>
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