<script setup lang="ts">
import { Subject } from 'rxjs';
import { IActionParam, IParam, ControlAction, TreeExpBarControl, IContext } from '@core';
import { ctrlState } from './grid-tree-exp-viewtreeexpbar-tree-exp-bar-state';
import { GridTree} from '@widgets/example/grid-tree';
import ExampleGridGroupGridView from '@views/sample/example-grid-group-grid-view';
import ExampleGridBaseGridView from '@views/sample/example-grid-base-grid-view';
import EDITORVALUERowEditGridView from '@views/sample/editorvalue-row-edit-grid-view';
import ExampleGridCssAndIconGridView from '@views/sample/example-grid-css-and-icon-grid-view';
import ExampleDataItemGridView from '@views/sample/example-data-item-grid-view';
import ExampleToolbarGridView from '@views/sample/example-toolbar-grid-view';
import ExampleGridLayoutGridView from '@views/sample/example-grid-layout-grid-view';
import ExampleGridLogicCustomView from '@views/sample/example-grid-logic-custom-view';
import ExampleGridActionColumnCustomView from '@views/sample/example-grid-action-column-custom-view';
import ExampleGridSortGridView from '@views/sample/example-grid-sort-grid-view';
import ExampleGridValueFormatGridView_7046 from '@views/sample/example-grid-value-format-grid-view-7046';

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
      <GridTree
        ref="xData"
        :context="state.context"
        :viewParams="state.viewParams"
        :viewSubject="state.viewSubject"
        :isBranchAvailable="true"
        @ctrlEvent="onCtrlEvent"
      ></GridTree>
    </a-layout-sider>
    <a-layout>
      <ExampleGridGroupGridView
        v-if="state.selection.viewName && state.selection.viewName === 'ExampleGridGroupGridView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </ExampleGridGroupGridView>
      <ExampleGridBaseGridView
        v-if="state.selection.viewName && state.selection.viewName === 'ExampleGridBaseGridView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </ExampleGridBaseGridView>
      <EDITORVALUERowEditGridView
        v-if="state.selection.viewName && state.selection.viewName === 'EDITORVALUERowEditGridView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </EDITORVALUERowEditGridView>
      <ExampleGridCssAndIconGridView
        v-if="state.selection.viewName && state.selection.viewName === 'ExampleGridCssAndIconGridView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </ExampleGridCssAndIconGridView>
      <ExampleDataItemGridView
        v-if="state.selection.viewName && state.selection.viewName === 'ExampleDataItemGridView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </ExampleDataItemGridView>
      <ExampleToolbarGridView
        v-if="state.selection.viewName && state.selection.viewName === 'ExampleToolbarGridView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </ExampleToolbarGridView>
      <ExampleGridLayoutGridView
        v-if="state.selection.viewName && state.selection.viewName === 'ExampleGridLayoutGridView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </ExampleGridLayoutGridView>
      <ExampleGridLogicCustomView
        v-if="state.selection.viewName && state.selection.viewName === 'ExampleGridLogicCustomView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </ExampleGridLogicCustomView>
      <ExampleGridActionColumnCustomView
        v-if="state.selection.viewName && state.selection.viewName === 'ExampleGridActionColumnCustomView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </ExampleGridActionColumnCustomView>
      <ExampleGridSortGridView
        v-if="state.selection.viewName && state.selection.viewName === 'ExampleGridSortGridView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </ExampleGridSortGridView>
      <ExampleGridValueFormatGridView_7046
        v-if="state.selection.viewName && state.selection.viewName === 'ExampleGridValueFormatGridView_7046'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </ExampleGridValueFormatGridView_7046>
    </a-layout>
  </a-layout>
</template>