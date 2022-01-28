<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './value-format-dashboard-state';
import { DashboardControl, IActionParam, IParam, IContext } from '@core';

import { ValueFormatDashboardViewdashboard_rawitem1Portlet } from '@widgets/example/value-format-dashboard-viewdashboard-rawitem1-portlet';
import { listPortlet } from '@widgets/example/list-portlet';
import { chartPortlet } from '@widgets/chart-data/chart-portlet';
import { viewPortlet } from '@widgets/example/view-portlet';
import { toolbarPortlet } from '@widgets/example/toolbar-portlet';
import { actionbarPortlet } from '@widgets/example/actionbar-portlet';
import { webpagepartPortlet } from '@widgets/example/webpagepart-portlet';

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
      <ValueFormatDashboardViewdashboard_rawitem1Portlet
        ref="portlet"
        name="dashboard_rawitem1"
        :context="state.context"
        :viewParams="state.viewParams"
        :viewSubject="state.viewSubject"
        @ctrlEvent="onCtrlEvent"      
      ></ValueFormatDashboardViewdashboard_rawitem1Portlet>
         </a-col>
    <a-col
          :lg="{span: 24, offset: 0 }"
      :md="{span: 24, offset: 0 }"
      :sm="{span: 24, offset: 0 }"
      :xs="{span: 24, offset: 0 }"
 >
        <div class="portlet-card" :bordered="false" dis-hover :padding="0">
          <div class="portlet-container">
  <a-row class="app-dashboard-layout-table">
    <a-col
          :lg="{span: 12, offset: 0 }"
      :md="{span: 24, offset: 0 }"
      :sm="{span: 24, offset: 0 }"
      :xs="{span: 24, offset: 0 }"
 >
      <listPortlet
        ref="portlet"
        name="dashboard_sysportlet1"
        :context="state.context"
        :viewParams="state.viewParams"
        :viewSubject="state.viewSubject"
        @ctrlEvent="onCtrlEvent"      
      ></listPortlet>
         </a-col>
    <a-col
          :lg="{span: 12, offset: 0 }"
      :md="{span: 24, offset: 0 }"
      :sm="{span: 24, offset: 0 }"
      :xs="{span: 24, offset: 0 }"
 >
      <chartPortlet
        ref="portlet"
        name="dashboard_sysportlet2"
        :context="state.context"
        :viewParams="state.viewParams"
        :viewSubject="state.viewSubject"
        @ctrlEvent="onCtrlEvent"      
      ></chartPortlet>
         </a-col>
    <a-col
          :lg="{span: 24, offset: 0 }"
      :md="{span: 24, offset: 0 }"
      :sm="{span: 24, offset: 0 }"
      :xs="{span: 24, offset: 0 }"
 >
      <viewPortlet
        ref="portlet"
        name="dashboard_sysportlet3"
        :context="state.context"
        :viewParams="state.viewParams"
        :viewSubject="state.viewSubject"
        @ctrlEvent="onCtrlEvent"      
      ></viewPortlet>
         </a-col>
    <a-col
          :lg="{span: 12, offset: 0 }"
      :md="{span: 24, offset: 0 }"
      :sm="{span: 24, offset: 0 }"
      :xs="{span: 24, offset: 0 }"
 >
      <toolbarPortlet
        ref="portlet"
        name="dashboard_sysportlet4"
        :context="state.context"
        :viewParams="state.viewParams"
        :viewSubject="state.viewSubject"
        @ctrlEvent="onCtrlEvent"      
      ></toolbarPortlet>
         </a-col>
    <a-col
          :lg="{span: 12, offset: 0 }"
      :md="{span: 24, offset: 0 }"
      :sm="{span: 24, offset: 0 }"
      :xs="{span: 24, offset: 0 }"
 >
      <actionbarPortlet
        ref="portlet"
        name="dashboard_sysportlet5"
        :context="state.context"
        :viewParams="state.viewParams"
        :viewSubject="state.viewSubject"
        @ctrlEvent="onCtrlEvent"      
      ></actionbarPortlet>
         </a-col>
    <a-col
          :lg="{span: 24, offset: 0 }"
      :md="{span: 24, offset: 0 }"
      :sm="{span: 24, offset: 0 }"
      :xs="{span: 24, offset: 0 }"
 >
      <webpagepartPortlet
        ref="portlet"
        name="dashboard_sysportlet6"
        :context="state.context"
        :viewParams="state.viewParams"
        :viewSubject="state.viewSubject"
        @ctrlEvent="onCtrlEvent"      
      ></webpagepartPortlet>
         </a-col>
  </a-row>
           </div>
        </div>
     </a-col>
  </a-row>
     </template>
  </div>
</template>
<style lang="scss">
</style>