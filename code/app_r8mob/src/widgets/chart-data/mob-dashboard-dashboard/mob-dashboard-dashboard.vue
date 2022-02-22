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
  parent: IParam;
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
      <AppPortletCard
        name=dashboard_container1
        :isContainer="true"
        :showCaption="true"
        :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
        class="app-portletContainer "
      >
            <MobDashBoardForChartPortlet
              ref="portlet"
              name="dashboard_sysportlet2"
              :showCaption="false"
              :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
              style="height: 300.0px;"
              :context="state.context"
              :viewParams="state.viewParams"
              :viewSubject="state.viewSubject"
              @ctrlEvent="onCtrlEvent"      
            />
      </AppPortletCard>
      <MobMdCtrlDashBoardPortlet
        ref="portlet"
        name="dashboard_sysportlet1"
        :showCaption="true"
        :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
        style="height: 400.0px;"
        :context="state.context"
        :viewParams="state.viewParams"
        :viewSubject="state.viewSubject"
        @ctrlEvent="onCtrlEvent"      
      />
      <MobDashboardViewdashboard_rawitem1Portlet
        ref="portlet"
        name="dashboard_rawitem1"
        :showCaption="true"
        :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
        style="width: 200.0px;height: 200.0px;"
        :context="state.context"
        :viewParams="state.viewParams"
        :viewSubject="state.viewSubject"
        @ctrlEvent="onCtrlEvent"      
      />
      <MobDashboardForViewPortlet
        ref="portlet"
        name="dashboard_sysportlet3"
        :showCaption="true"
        :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
        style="height: 600.0px;"
        :context="state.context"
        :viewParams="state.viewParams"
        :viewSubject="state.viewSubject"
        @ctrlEvent="onCtrlEvent"      
      />
    </template>
  </div>
</template>
<style lang="scss">
</style>