<script setup lang="ts">
import { Subject } from 'rxjs';
import { IActionParam, IParam, ControlAction, TreeExpBarControl, IContext } from '@core';
import { ctrlState } from './map-tree-tree-exp-viewtreeexpbar-tree-exp-bar-state';
import { MapTreeTree} from '@widgets/map-data/map-tree-tree';
import MapDataBaseMapView from '@views/sample/map-data-base-map-view';
import MapDataMapChartExpView from '@views/sample/map-data-map-chart-exp-view';

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
      <MapTreeTree
        ref="xData"
        :context="state.context"
        :viewParams="state.viewParams"
        :viewSubject="state.viewSubject"
        :isBranchAvailable="true"
        @ctrlEvent="onCtrlEvent"
      ></MapTreeTree>
    </a-layout-sider>
    <a-layout>
      <MapDataBaseMapView
        v-if="state.selection.viewName && state.selection.viewName === 'MapDataBaseMapView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </MapDataBaseMapView>
      <MapDataMapChartExpView
        v-if="state.selection.viewName && state.selection.viewName === 'MapDataMapChartExpView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </MapDataMapChartExpView>
    </a-layout>
  </a-layout>
</template>