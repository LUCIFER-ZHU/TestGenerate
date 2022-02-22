<script setup lang="ts">
import { Subject } from 'rxjs';
import { IActionParam, IParam, ControlAction, TreeExpBarControl, IContext } from '@core';
import { ctrlState } from './tree-nav-param-tree-exp-viewtreeexpbar-tree-exp-bar-state';
import { TreeNavParamTree} from '@widgets/example/tree-nav-param-tree';
import ProvinceTreeNavInfoEditView from '@views/sample/province-tree-nav-info-edit-view';
import ExampleNavParamEditView from '@views/sample/example-nav-param-edit-view';
import CityTreeNavGridView from '@views/sample/city-tree-nav-grid-view';

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
          
          <TreeNavParamTree
            ref="xData"
            name="treeexpbar_tree"
            :context="state.context"
            :viewParams="state.viewParams"
            :viewSubject="state.viewSubject"
            :selectFirstDefault="true"
            :isBranchAvailable="true"
            :parent="parent"
            @ctrlEvent="onCtrlEvent"
          ></TreeNavParamTree>
        </div>
      </template>
      <template #right>
        <ProvinceTreeNavInfoEditView
          v-if="state.selection.viewName && state.selection.viewName === 'ProvinceTreeNavInfoEditView'"
          class="tree-exp__nav-view"
          :viewDefaultUsage="false"
          :context="state.selection.context"
          :viewParams="state.selection.viewParams">
        </ProvinceTreeNavInfoEditView>
        <ExampleNavParamEditView
          v-if="state.selection.viewName && state.selection.viewName === 'ExampleNavParamEditView'"
          class="tree-exp__nav-view"
          :viewDefaultUsage="false"
          :context="state.selection.context"
          :viewParams="state.selection.viewParams">
        </ExampleNavParamEditView>
        <CityTreeNavGridView
          v-if="state.selection.viewName && state.selection.viewName === 'CityTreeNavGridView'"
          class="tree-exp__nav-view"
          :viewDefaultUsage="false"
          :context="state.selection.context"
          :viewParams="state.selection.viewParams">
        </CityTreeNavGridView>
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