<script setup lang="ts">
import { Subject } from 'rxjs';
import { IActionParam, IParam, ControlAction, TreeExpBarControl, IContext } from '@core';
import { ctrlState } from './edit-view-misc-tree-exp-viewtreeexpbar-tree-exp-bar-state';
import { EditViewMiscTreeTree} from '@widgets/customer/edit-view-misc-tree-tree';
import CustomerNoTitleEditView from '@views/sample/customer-no-title-edit-view';

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
      <EditViewMiscTreeTree
        ref="xData"
        :context="state.context"
        :viewParams="state.viewParams"
        :viewSubject="state.viewSubject"
        :isBranchAvailable="true"
        @ctrlEvent="onCtrlEvent"
      ></EditViewMiscTreeTree>
    </a-layout-sider>
    <a-layout>
      <CustomerNoTitleEditView
        v-if="state.selection.viewName && state.selection.viewName === 'CustomerNoTitleEditView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </CustomerNoTitleEditView>
    </a-layout>
  </a-layout>
</template>