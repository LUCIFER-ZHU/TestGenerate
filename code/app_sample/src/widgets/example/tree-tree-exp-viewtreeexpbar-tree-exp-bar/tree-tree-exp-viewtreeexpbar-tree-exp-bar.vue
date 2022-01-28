<script setup lang="ts">
import { Subject } from 'rxjs';
import { IActionParam, IParam, ControlAction, TreeExpBarControl, IContext } from '@core';
import { ctrlState } from './tree-tree-exp-viewtreeexpbar-tree-exp-bar-state';
import { TreeTree} from '@widgets/example/tree-tree';
import ExampleDataSourceAdvTreeView from '@views/sample/example-data-source-adv-tree-view';
import ExampleDataSourceTreeView from '@views/sample/example-data-source-tree-view';
import ExampleSearchTreeView from '@views/sample/example-search-tree-view';
import ExampleCssAndIconTreeView from '@views/sample/example-css-and-icon-tree-view';
import ExampleTreeNodeDropPanelView from '@views/sample/example-tree-node-drop-panel-view';
import ExampleTreeNavParamTreeExpView from '@views/sample/example-tree-nav-param-tree-exp-view';
import OrgDataOrgDeptDataTreeView from '@views/sample/org-data-org-dept-data-tree-view';
import ExampleRightClickTreeView from '@views/sample/example-right-click-tree-view';
import ExampleTreeGridNavTreeExpView from '@views/sample/example-tree-grid-nav-tree-exp-view';

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
          
          <TreeTree
            ref="xData"
            :context="state.context"
            :viewParams="state.viewParams"
            :viewSubject="state.viewSubject"
            :selectFirstDefault="true"
            :isBranchAvailable="true"
            @ctrlEvent="onCtrlEvent"
          ></TreeTree>
        </div>
      </template>
      <template #right>
        <ExampleDataSourceAdvTreeView
          v-if="state.selection.viewName && state.selection.viewName === 'ExampleDataSourceAdvTreeView'"
          class="tree-exp__nav-view"
          :viewDefaultUsage="false"
          :viewdata="JSON.stringify(state.selection.context)"
          :viewParams="JSON.stringify(state.selection.viewParams)">
        </ExampleDataSourceAdvTreeView>
        <ExampleDataSourceTreeView
          v-if="state.selection.viewName && state.selection.viewName === 'ExampleDataSourceTreeView'"
          class="tree-exp__nav-view"
          :viewDefaultUsage="false"
          :viewdata="JSON.stringify(state.selection.context)"
          :viewParams="JSON.stringify(state.selection.viewParams)">
        </ExampleDataSourceTreeView>
        <ExampleSearchTreeView
          v-if="state.selection.viewName && state.selection.viewName === 'ExampleSearchTreeView'"
          class="tree-exp__nav-view"
          :viewDefaultUsage="false"
          :viewdata="JSON.stringify(state.selection.context)"
          :viewParams="JSON.stringify(state.selection.viewParams)">
        </ExampleSearchTreeView>
        <ExampleCssAndIconTreeView
          v-if="state.selection.viewName && state.selection.viewName === 'ExampleCssAndIconTreeView'"
          class="tree-exp__nav-view"
          :viewDefaultUsage="false"
          :viewdata="JSON.stringify(state.selection.context)"
          :viewParams="JSON.stringify(state.selection.viewParams)">
        </ExampleCssAndIconTreeView>
        <ExampleTreeNodeDropPanelView
          v-if="state.selection.viewName && state.selection.viewName === 'ExampleTreeNodeDropPanelView'"
          class="tree-exp__nav-view"
          :viewDefaultUsage="false"
          :viewdata="JSON.stringify(state.selection.context)"
          :viewParams="JSON.stringify(state.selection.viewParams)">
        </ExampleTreeNodeDropPanelView>
        <ExampleTreeNavParamTreeExpView
          v-if="state.selection.viewName && state.selection.viewName === 'ExampleTreeNavParamTreeExpView'"
          class="tree-exp__nav-view"
          :viewDefaultUsage="false"
          :viewdata="JSON.stringify(state.selection.context)"
          :viewParams="JSON.stringify(state.selection.viewParams)">
        </ExampleTreeNavParamTreeExpView>
        <OrgDataOrgDeptDataTreeView
          v-if="state.selection.viewName && state.selection.viewName === 'OrgDataOrgDeptDataTreeView'"
          class="tree-exp__nav-view"
          :viewDefaultUsage="false"
          :viewdata="JSON.stringify(state.selection.context)"
          :viewParams="JSON.stringify(state.selection.viewParams)">
        </OrgDataOrgDeptDataTreeView>
        <ExampleRightClickTreeView
          v-if="state.selection.viewName && state.selection.viewName === 'ExampleRightClickTreeView'"
          class="tree-exp__nav-view"
          :viewDefaultUsage="false"
          :viewdata="JSON.stringify(state.selection.context)"
          :viewParams="JSON.stringify(state.selection.viewParams)">
        </ExampleRightClickTreeView>
        <ExampleTreeGridNavTreeExpView
          v-if="state.selection.viewName && state.selection.viewName === 'ExampleTreeGridNavTreeExpView'"
          class="tree-exp__nav-view"
          :viewDefaultUsage="false"
          :viewdata="JSON.stringify(state.selection.context)"
          :viewParams="JSON.stringify(state.selection.viewParams)">
        </ExampleTreeGridNavTreeExpView>
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