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
          
          <ExpForChartTree
            ref="xData"
            name="treeexpbar_tree"
            :context="state.context"
            :viewParams="state.viewParams"
            :viewSubject="state.viewSubject"
            :selectFirstDefault="true"
            :isBranchAvailable="true"
            :parent="parent"
            @ctrlEvent="onCtrlEvent"
          ></ExpForChartTree>
        </div>
      </template>
      <template #right>
        <ChartDataBarChartView
          v-if="state.selection.viewName && state.selection.viewName === 'ChartDataBarChartView'"
          class="tree-exp__nav-view"
          :viewDefaultUsage="false"
          :context="state.selection.context"
          :viewParams="state.selection.viewParams">
        </ChartDataBarChartView>
        <ChartDataUsr2ChartView
          v-if="state.selection.viewName && state.selection.viewName === 'ChartDataUsr2ChartView'"
          class="tree-exp__nav-view"
          :viewDefaultUsage="false"
          :context="state.selection.context"
          :viewParams="state.selection.viewParams">
        </ChartDataUsr2ChartView>
        <ChartDataRingPieChartView
          v-if="state.selection.viewName && state.selection.viewName === 'ChartDataRingPieChartView'"
          class="tree-exp__nav-view"
          :viewDefaultUsage="false"
          :context="state.selection.context"
          :viewParams="state.selection.viewParams">
        </ChartDataRingPieChartView>
        <ChartDataFunnelChartView
          v-if="state.selection.viewName && state.selection.viewName === 'ChartDataFunnelChartView'"
          class="tree-exp__nav-view"
          :viewDefaultUsage="false"
          :context="state.selection.context"
          :viewParams="state.selection.viewParams">
        </ChartDataFunnelChartView>
        <ChartDataKLineChartView
          v-if="state.selection.viewName && state.selection.viewName === 'ChartDataKLineChartView'"
          class="tree-exp__nav-view"
          :viewDefaultUsage="false"
          :context="state.selection.context"
          :viewParams="state.selection.viewParams">
        </ChartDataKLineChartView>
        <ChartDataChartView
          v-if="state.selection.viewName && state.selection.viewName === 'ChartDataChartView'"
          class="tree-exp__nav-view"
          :viewDefaultUsage="false"
          :context="state.selection.context"
          :viewParams="state.selection.viewParams">
        </ChartDataChartView>
        <ChartDataGaugeChartView
          v-if="state.selection.viewName && state.selection.viewName === 'ChartDataGaugeChartView'"
          class="tree-exp__nav-view"
          :viewDefaultUsage="false"
          :context="state.selection.context"
          :viewParams="state.selection.viewParams">
        </ChartDataGaugeChartView>
        <ChartDataPieChartView
          v-if="state.selection.viewName && state.selection.viewName === 'ChartDataPieChartView'"
          class="tree-exp__nav-view"
          :viewDefaultUsage="false"
          :context="state.selection.context"
          :viewParams="state.selection.viewParams">
        </ChartDataPieChartView>
        <ChartDataGroupBarChartView
          v-if="state.selection.viewName && state.selection.viewName === 'ChartDataGroupBarChartView'"
          class="tree-exp__nav-view"
          :viewDefaultUsage="false"
          :context="state.selection.context"
          :viewParams="state.selection.viewParams">
        </ChartDataGroupBarChartView>
        <ChartDataRadarChartView
          v-if="state.selection.viewName && state.selection.viewName === 'ChartDataRadarChartView'"
          class="tree-exp__nav-view"
          :viewDefaultUsage="false"
          :context="state.selection.context"
          :viewParams="state.selection.viewParams">
        </ChartDataRadarChartView>
        <ChartDataStackBarChartView
          v-if="state.selection.viewName && state.selection.viewName === 'ChartDataStackBarChartView'"
          class="tree-exp__nav-view"
          :viewDefaultUsage="false"
          :context="state.selection.context"
          :viewParams="state.selection.viewParams">
        </ChartDataStackBarChartView>
        <ChartDataUsr3ChartView
          v-if="state.selection.viewName && state.selection.viewName === 'ChartDataUsr3ChartView'"
          class="tree-exp__nav-view"
          :viewDefaultUsage="false"
          :context="state.selection.context"
          :viewParams="state.selection.viewParams">
        </ChartDataUsr3ChartView>
        <ChartDataLineChartView
          v-if="state.selection.viewName && state.selection.viewName === 'ChartDataLineChartView'"
          class="tree-exp__nav-view"
          :viewDefaultUsage="false"
          :context="state.selection.context"
          :viewParams="state.selection.viewParams">
        </ChartDataLineChartView>
        <ChartDataAreaChartView
          v-if="state.selection.viewName && state.selection.viewName === 'ChartDataAreaChartView'"
          class="tree-exp__nav-view"
          :viewDefaultUsage="false"
          :context="state.selection.context"
          :viewParams="state.selection.viewParams">
        </ChartDataAreaChartView>
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