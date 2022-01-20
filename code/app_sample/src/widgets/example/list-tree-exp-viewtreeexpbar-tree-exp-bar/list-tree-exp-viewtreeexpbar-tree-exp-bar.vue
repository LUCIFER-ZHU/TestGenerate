<script setup lang="ts">
import { Subject } from 'rxjs';
import { IActionParam, IParam, ControlAction, TreeExpBarControl, IContext } from '@core';
import { ctrlState } from './list-tree-exp-viewtreeexpbar-tree-exp-bar-state';
import { ListTreeTree} from '@widgets/example/list-tree-tree';
import ExampleValueFormatListView from '@views/sample/example-value-format-list-view';
import ExampleDataItemListView from '@views/sample/example-data-item-list-view';
import ExampleBaseListView_CSS from '@views/sample/example-base-list-view-css';

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
      <ListTreeTree
        ref="xData"
        :context="state.context"
        :viewParams="state.viewParams"
        :viewSubject="state.viewSubject"
        :isBranchAvailable="true"
        @ctrlEvent="onCtrlEvent"
      ></ListTreeTree>
    </a-layout-sider>
    <a-layout>
      <ExampleValueFormatListView
        v-if="state.selection.viewName && state.selection.viewName === 'ExampleValueFormatListView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </ExampleValueFormatListView>
      <ExampleDataItemListView
        v-if="state.selection.viewName && state.selection.viewName === 'ExampleDataItemListView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </ExampleDataItemListView>
      <ExampleBaseListView_CSS
        v-if="state.selection.viewName && state.selection.viewName === 'ExampleBaseListView_CSS'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </ExampleBaseListView_CSS>
      <ExampleValueFormatListView
        v-if="state.selection.viewName && state.selection.viewName === 'ExampleValueFormatListView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </ExampleValueFormatListView>
    </a-layout>
  </a-layout>
</template>