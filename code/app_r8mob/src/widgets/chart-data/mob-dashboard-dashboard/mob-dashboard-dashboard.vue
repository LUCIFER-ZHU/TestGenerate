<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './mob-dashboard-dashboard-state';
import { DashboardControl, IActionParam, IParam, IContext } from '@core';

import { MobDashBoardForChartPortlet } from '@widgets/chart-data/mob-dash-board-for-chart-portlet';
import { MobMdCtrlDashBoardPortlet } from '@widgets/chart-data/mob-md-ctrl-dash-board-portlet';
import { MobDashboardViewdashboard_rawitem1Portlet } from '@widgets/chart-data/mob-dashboard-viewdashboard-rawitem1-portlet';
import { MobDashboardForViewPortlet } from '@widgets/chart-data/mob-dashboard-for-view-portlet';

interface Props {
  name:string,
  context: IContext;
  viewParams?: IParam;
  viewSubject: Subject<IActionParam>;
}

const props = withDefaults(defineProps < Props > (), {
  viewSubject: () => new Subject < IActionParam > (),
})

// emit声明
interface CtrlEmit {
  (name: "ctrlEvent", value: IActionParam): void;
}

const emit = defineEmits <CtrlEmit> ();

// 安装功能模块，提供状态和能力方法
const { name, state, onCtrlEvent } = new DashboardControl(ctrlState, props, emit).moduleInstall();

// 暴露内部状态及能力
defineExpose({ name, state });
</script>
<template>
  <div class="app-dashboard">
    <template v-if="!state.isEnableCustomized">
  <a-row class="app-dashboard-layout-table">
    <a-col
          :lg="{span: 24, offset: 0 }"
      :md="{span: 24, offset: 0 }"
      :sm="{span: 24, offset: 0 }"
      :xs="{span: 24, offset: 0 }"
 >
        <div class="portlet-card" :bordered="false" dis-hover :padding="0">
          <div class="portlet-card-title">外层容器</div>
          <div class="portlet-container">
  <a-row class="app-dashboard-layout-table">
    <a-col
          :lg="{span: 24, offset: 0 }"
      :md="{span: 24, offset: 0 }"
      :sm="{span: 24, offset: 0 }"
      :xs="{span: 24, offset: 0 }"
 >
      <MobDashBoardForChartPortlet
        ref="portlet"
        name="dashboard_sysportlet2"
        :context="state.context"
        :viewParams="state.viewParams"
        :viewSubject="state.viewSubject"
        @ctrlEvent="onCtrlEvent"      
      ></MobDashBoardForChartPortlet>
         </a-col>
  </a-row>
           </div>
        </div>
     </a-col>
    <a-col
          :lg="{span: 24, offset: 0 }"
      :md="{span: 24, offset: 0 }"
      :sm="{span: 24, offset: 0 }"
      :xs="{span: 24, offset: 0 }"
 >
      <MobMdCtrlDashBoardPortlet
        ref="portlet"
        name="dashboard_sysportlet1"
        :context="state.context"
        :viewParams="state.viewParams"
        :viewSubject="state.viewSubject"
        @ctrlEvent="onCtrlEvent"      
      ></MobMdCtrlDashBoardPortlet>
         </a-col>
    <a-col
          :lg="{span: 24, offset: 0 }"
      :md="{span: 24, offset: 0 }"
      :sm="{span: 24, offset: 0 }"
      :xs="{span: 24, offset: 0 }"
 >
      <MobDashboardViewdashboard_rawitem1Portlet
        ref="portlet"
        name="dashboard_rawitem1"
        :context="state.context"
        :viewParams="state.viewParams"
        :viewSubject="state.viewSubject"
        @ctrlEvent="onCtrlEvent"      
      ></MobDashboardViewdashboard_rawitem1Portlet>
         </a-col>
    <a-col
          :lg="{span: 24, offset: 0 }"
      :md="{span: 24, offset: 0 }"
      :sm="{span: 24, offset: 0 }"
      :xs="{span: 24, offset: 0 }"
 >
      <MobDashboardForViewPortlet
        ref="portlet"
        name="dashboard_sysportlet3"
        :context="state.context"
        :viewParams="state.viewParams"
        :viewSubject="state.viewSubject"
        @ctrlEvent="onCtrlEvent"      
      ></MobDashboardForViewPortlet>
         </a-col>
  </a-row>
     </template>
  </div>
</template>
<style lang="scss">
</style>