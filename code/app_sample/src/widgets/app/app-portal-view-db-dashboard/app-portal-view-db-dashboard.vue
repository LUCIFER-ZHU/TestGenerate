<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './app-portal-view-db-dashboard-state';
import { DashboardControl, IActionParam, IParam, IContext } from '@core';

import { testappmenuPortlet } from '@widgets/app/testappmenu-portlet';
import { actionbarPortlet } from '@widgets/example/actionbar-portlet';
import { viewPortlet } from '@widgets/example/view-portlet';
import { testHtmlPortlet } from '@widgets/app/test-html-portlet';
import { db_rawitem1Portlet } from '@widgets/app/db-rawitem1-portlet';

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
      <testappmenuPortlet
        ref="portlet"
        name="db_appmenu1"
        :context="state.context"
        :viewParams="state.viewParams"
        :viewSubject="state.viewSubject"
        @ctrlEvent="onCtrlEvent"      
      ></testappmenuPortlet>
         </a-col>
    <a-col
          :lg="{span: 24, offset: 0 }"
      :md="{span: 24, offset: 0 }"
      :sm="{span: 24, offset: 0 }"
      :xs="{span: 24, offset: 0 }"
 >
      <actionbarPortlet
        ref="portlet"
        name="db_sysportlet2"
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
        <div class="portlet-card" :bordered="false" dis-hover :padding="0">
          <div class="portlet-container">
  <a-row class="app-dashboard-layout-table">
    <a-col
          :lg="{span: 24, offset: 0 }"
      :md="{span: 24, offset: 0 }"
      :sm="{span: 24, offset: 0 }"
      :xs="{span: 24, offset: 0 }"
 >
      <viewPortlet
        ref="portlet"
        name="db_sysportlet1"
        :context="state.context"
        :viewParams="state.viewParams"
        :viewSubject="state.viewSubject"
        @ctrlEvent="onCtrlEvent"      
      ></viewPortlet>
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
      <testHtmlPortlet
        ref="portlet"
        name="db_sysportlet3"
        :context="state.context"
        :viewParams="state.viewParams"
        :viewSubject="state.viewSubject"
        @ctrlEvent="onCtrlEvent"      
      ></testHtmlPortlet>
         </a-col>
    <a-col
          :lg="{span: 24, offset: 0 }"
      :md="{span: 24, offset: 0 }"
      :sm="{span: 24, offset: 0 }"
      :xs="{span: 24, offset: 0 }"
 >
      <db_rawitem1Portlet
        ref="portlet"
        name="db_rawitem1"
        :context="state.context"
        :viewParams="state.viewParams"
        :viewSubject="state.viewSubject"
        @ctrlEvent="onCtrlEvent"      
      ></db_rawitem1Portlet>
         </a-col>
  </a-row>
     </template>
  </div>
</template>
<style lang="scss">
</style>