<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './app-portal-view-db-dashboard-state';
import { DashboardControl, IActionParam, IParam, IContext } from '@core';

import { db_appview1Portlet } from '@widgets/app/db-appview1-portlet';
import { MobDashBoardForChartPortlet } from '@widgets/chart-data/mob-dash-board-for-chart-portlet';
import { MobAppMenuForKanBanPortlet } from '@widgets/app/mob-app-menu-for-kan-ban-portlet';
import { MobActionBarPortlet } from '@widgets/chart-data/mob-action-bar-portlet';
import { MobKanBanForHTMLPortlet } from '@widgets/chart-data/mob-kan-ban-for-html-portlet';

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
        name=db_container1
        :isContainer="true"
        :showCaption="true"
        :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
        class="app-portletContainer "
      >
            <db_appview1Portlet
              ref="portlet"
              name="db_appview1"
              :showCaption="true"
              :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
              style="height: 501.0px;"
              :context="state.context"
              :viewParams="state.viewParams"
              :viewSubject="state.viewSubject"
              @ctrlEvent="onCtrlEvent"      
            />
            <MobDashBoardForChartPortlet
              ref="portlet"
              name="db_sysportlet1"
              :showCaption="true"
              :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
              style="height: 400.0px;"
              :context="state.context"
              :viewParams="state.viewParams"
              :viewSubject="state.viewSubject"
              @ctrlEvent="onCtrlEvent"      
            />
      </AppPortletCard>
      <MobAppMenuForKanBanPortlet
        ref="portlet"
        name="db_appmenu1"
        :showCaption="true"
        :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
        style="height: 300.0px;"
        :context="state.context"
        :viewParams="state.viewParams"
        :viewSubject="state.viewSubject"
        @ctrlEvent="onCtrlEvent"      
      />
      <MobActionBarPortlet
        ref="portlet"
        name="db_sysportlet2"
        :showCaption="true"
        :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
        style="height: 100.0px;"
        :context="state.context"
        :viewParams="state.viewParams"
        :viewSubject="state.viewSubject"
        @ctrlEvent="onCtrlEvent"      
      />
      <MobKanBanForHTMLPortlet
        ref="portlet"
        name="db_sysportlet3"
        :showCaption="true"
        :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
        style="height: 300.0px;"
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