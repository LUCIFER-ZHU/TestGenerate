<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './dashboard-dashboard-state';
import { DashboardControl, IActionParam, IParam, IContext } from '@core';

import { BaseInfoPortlet } from '@widgets/customer/base-info-portlet';
import { BaseInfoPortlet } from '@widgets/customer/base-info-portlet';
import { MainDashboardViewdashboard_rawitem1Portlet } from '@widgets/customer/main-dashboard-viewdashboard-rawitem1-portlet';

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
  <div class="app-dashboard-layout-flex" style="">
    <div style="flex-grow: 1;">
        <div class="portlet-card" :bordered="false" dis-hover :padding="0">
          <div class="portlet-container">
  <div class="app-dashboard-layout-flex" style="flex-direction: column;">
    <div style="flex-grow: 1;">
      <BaseInfoPortlet
        ref="portlet"
        name="dashboard_sysportlet1"
        :context="state.context"
        :viewParams="state.viewParams"
        :viewSubject="state.viewSubject"
        @ctrlEvent="onCtrlEvent"      
      ></BaseInfoPortlet>
         </div>
    <div style="flex-grow: -1;">
      <BaseInfoPortlet
        ref="portlet"
        name="dashboard_sysportlet2"
        :context="state.context"
        :viewParams="state.viewParams"
        :viewSubject="state.viewSubject"
        @ctrlEvent="onCtrlEvent"      
      ></BaseInfoPortlet>
         </div>
    <div style="flex-grow: -1;">
      <MainDashboardViewdashboard_rawitem1Portlet
        ref="portlet"
        name="dashboard_rawitem1"
        :context="state.context"
        :viewParams="state.viewParams"
        :viewSubject="state.viewSubject"
        @ctrlEvent="onCtrlEvent"      
      ></MainDashboardViewdashboard_rawitem1Portlet>
         </div>
  </div>
           </div>
        </div>
     </div>
  </div>
     </template>
  </div>
</template>
<style lang="scss">
</style>