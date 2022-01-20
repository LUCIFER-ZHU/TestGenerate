<script setup lang="ts">
import { Subject } from 'rxjs';
import { IActionParam, IParam, ControlAction, TreeExpBarControl, IContext } from '@core';
import { ctrlState } from './tree-exp-for-chart-viewtreeexpbar-tree-exp-bar-state';
import { ExpForChartTree} from '@widgets/chart-data/exp-for-chart-tree';
import ChartDataBarChartView from '@views/sample/chart-data-bar-chart-view';
import ChartDataUsr2ChartView from '@views/sample/chart-data-usr2-chart-view';
import ChartDataRingPieChartView from '@views/sample/chart-data-ring-pie-chart-view';
import ChartDataFunnelChartView from '@views/sample/chart-data-funnel-chart-view';
import ChartDataKLineChartView from '@views/sample/chart-data-k-line-chart-view';
import ChartDataChartView from '@views/sample/chart-data-chart-view';
import ChartDataGaugeChartView from '@views/sample/chart-data-gauge-chart-view';
import ChartDataPieChartView from '@views/sample/chart-data-pie-chart-view';
import ChartDataGroupBarChartView from '@views/sample/chart-data-group-bar-chart-view';
import ChartDataRadarChartView from '@views/sample/chart-data-radar-chart-view';
import ChartDataStackBarChartView from '@views/sample/chart-data-stack-bar-chart-view';
import ChartDataUsr3ChartView from '@views/sample/chart-data-usr3-chart-view';
import ChartDataLineChartView from '@views/sample/chart-data-line-chart-view';
import ChartDataAreaChartView from '@views/sample/chart-data-area-chart-view';

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
      <ExpForChartTree
        ref="xData"
        :context="state.context"
        :viewParams="state.viewParams"
        :viewSubject="state.viewSubject"
        :isBranchAvailable="true"
        @ctrlEvent="onCtrlEvent"
      ></ExpForChartTree>
    </a-layout-sider>
    <a-layout>
      <ChartDataBarChartView
        v-if="state.selection.viewName && state.selection.viewName === 'ChartDataBarChartView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </ChartDataBarChartView>
      <ChartDataUsr2ChartView
        v-if="state.selection.viewName && state.selection.viewName === 'ChartDataUsr2ChartView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </ChartDataUsr2ChartView>
      <ChartDataRingPieChartView
        v-if="state.selection.viewName && state.selection.viewName === 'ChartDataRingPieChartView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </ChartDataRingPieChartView>
      <ChartDataFunnelChartView
        v-if="state.selection.viewName && state.selection.viewName === 'ChartDataFunnelChartView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </ChartDataFunnelChartView>
      <ChartDataKLineChartView
        v-if="state.selection.viewName && state.selection.viewName === 'ChartDataKLineChartView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </ChartDataKLineChartView>
      <ChartDataChartView
        v-if="state.selection.viewName && state.selection.viewName === 'ChartDataChartView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </ChartDataChartView>
      <ChartDataGaugeChartView
        v-if="state.selection.viewName && state.selection.viewName === 'ChartDataGaugeChartView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </ChartDataGaugeChartView>
      <ChartDataPieChartView
        v-if="state.selection.viewName && state.selection.viewName === 'ChartDataPieChartView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </ChartDataPieChartView>
      <ChartDataGroupBarChartView
        v-if="state.selection.viewName && state.selection.viewName === 'ChartDataGroupBarChartView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </ChartDataGroupBarChartView>
      <ChartDataRadarChartView
        v-if="state.selection.viewName && state.selection.viewName === 'ChartDataRadarChartView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </ChartDataRadarChartView>
      <ChartDataStackBarChartView
        v-if="state.selection.viewName && state.selection.viewName === 'ChartDataStackBarChartView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </ChartDataStackBarChartView>
      <ChartDataUsr3ChartView
        v-if="state.selection.viewName && state.selection.viewName === 'ChartDataUsr3ChartView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </ChartDataUsr3ChartView>
      <ChartDataLineChartView
        v-if="state.selection.viewName && state.selection.viewName === 'ChartDataLineChartView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </ChartDataLineChartView>
      <ChartDataAreaChartView
        v-if="state.selection.viewName && state.selection.viewName === 'ChartDataAreaChartView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </ChartDataAreaChartView>
    </a-layout>
  </a-layout>
</template>