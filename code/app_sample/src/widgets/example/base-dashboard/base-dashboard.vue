<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './base-dashboard-state';
import { DashboardControl, IActionParam, IParam, IContext } from '@core';

import { BaseDashboardViewdashboard_rawitem1Portlet } from '@widgets/example/base-dashboard-viewdashboard-rawitem1-portlet';
import { listPortlet } from '@widgets/example/list-portlet';
import { chartPortlet } from '@widgets/chart-data/chart-portlet';
import { viewPortlet } from '@widgets/example/view-portlet';
import { toolbarPortlet } from '@widgets/example/toolbar-portlet';
import { actionbarPortlet } from '@widgets/example/actionbar-portlet';
import { webpagepartPortlet } from '@widgets/example/webpagepart-portlet';

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
      <BaseDashboardViewdashboard_rawitem1Portlet
        ref="portlet"
        name="dashboard_rawitem1"
        :showCaption="true"
        :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
        class="el-alert el-alert--info is-light"
        :context="state.context"
        :viewParams="state.viewParams"
        :viewSubject="state.viewSubject"
        @ctrlEvent="onCtrlEvent"      
      />
      <AppPortletCard
        name=dashboard_container1
        :isContainer="true"
        :showCaption="true"
        :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
        class="app-portletContainer "
      >
            <listPortlet
              ref="portlet"
              name="dashboard_sysportlet1"
              :showCaption="true"
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 24,}"
              style="height: 300.0px;"
              :context="state.context"
              :viewParams="state.viewParams"
              :viewSubject="state.viewSubject"
              @ctrlEvent="onCtrlEvent"      
            />
            <chartPortlet
              ref="portlet"
              name="dashboard_sysportlet2"
              :showCaption="true"
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 24,}"
              style="height: 300.0px;"
              :context="state.context"
              :viewParams="state.viewParams"
              :viewSubject="state.viewSubject"
              @ctrlEvent="onCtrlEvent"      
            />
            <viewPortlet
              ref="portlet"
              name="dashboard_sysportlet3"
              :showCaption="true"
              :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
              style="height: 300.0px;"
              :context="state.context"
              :viewParams="state.viewParams"
              :viewSubject="state.viewSubject"
              @ctrlEvent="onCtrlEvent"      
            />
            <toolbarPortlet
              ref="portlet"
              name="dashboard_sysportlet4"
              :showCaption="true"
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 24,}"
              style="height: 300.0px;"
              :context="state.context"
              :viewParams="state.viewParams"
              :viewSubject="state.viewSubject"
              @ctrlEvent="onCtrlEvent"      
            />
            <actionbarPortlet
              ref="portlet"
              name="dashboard_sysportlet5"
              :showCaption="true"
              :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 12,colMD: 24,}"
              style="height: 300.0px;"
              :context="state.context"
              :viewParams="state.viewParams"
              :viewSubject="state.viewSubject"
              @ctrlEvent="onCtrlEvent"      
            />
            <webpagepartPortlet
              ref="portlet"
              name="dashboard_sysportlet6"
              :showCaption="true"
              :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
              style="height: 300.0px;"
              :context="state.context"
              :viewParams="state.viewParams"
              :viewSubject="state.viewSubject"
              @ctrlEvent="onCtrlEvent"      
            />
      </AppPortletCard>
    </template>
  </div>
</template>
<style lang="scss">
</style>