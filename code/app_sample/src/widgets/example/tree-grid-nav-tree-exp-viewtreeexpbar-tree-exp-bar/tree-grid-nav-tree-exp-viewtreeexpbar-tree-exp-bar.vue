<script setup lang="ts">
import { Subject } from 'rxjs';
import { IActionParam, IParam, ControlAction, TreeExpBarControl, IContext } from '@core';
import { ctrlState } from './tree-grid-nav-tree-exp-viewtreeexpbar-tree-exp-bar-state';
import DistrictTreeNavInfoEditView from '@views/sample/district-tree-nav-info-edit-view';
import CityTreeNavGridView from '@views/sample/city-tree-nav-grid-view';
import DistrictTreeNavGridView from '@views/sample/district-tree-nav-grid-view';

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
    </a-layout-sider>
    <a-layout>
      <DistrictTreeNavInfoEditView
        v-if="state.selection.viewName && state.selection.viewName === 'DistrictTreeNavInfoEditView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </DistrictTreeNavInfoEditView>
      <CityTreeNavGridView
        v-if="state.selection.viewName && state.selection.viewName === 'CityTreeNavGridView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </CityTreeNavGridView>
      <DistrictTreeNavGridView
        v-if="state.selection.viewName && state.selection.viewName === 'DistrictTreeNavGridView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </DistrictTreeNavGridView>
    </a-layout>
  </a-layout>
</template>