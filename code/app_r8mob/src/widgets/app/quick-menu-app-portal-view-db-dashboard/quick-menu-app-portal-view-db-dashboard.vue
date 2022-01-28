<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './quick-menu-app-portal-view-db-dashboard-state';
import { DashboardControl, IActionParam, IParam, IContext } from '@core';

import { MobQuickMenuPortlet } from '@widgets/app/mob-quick-menu-portlet';

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
      <MobQuickMenuPortlet
        ref="portlet"
        name="db_appmenu1"
        :context="state.context"
        :viewParams="state.viewParams"
        :viewSubject="state.viewSubject"
        @ctrlEvent="onCtrlEvent"      
      ></MobQuickMenuPortlet>
         </a-col>
  </a-row>
     </template>
  </div>
</template>
<style lang="scss">
</style>