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
      <testappmenuPortlet
        ref="portlet"
        name="db_appmenu1"
        :showCaption="true"
        :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 24,colMD: 24,}"
        :context="state.context"
        :viewParams="state.viewParams"
        :viewSubject="state.viewSubject"
        @ctrlEvent="onCtrlEvent"      
      />
      <actionbarPortlet
        ref="portlet"
        name="db_sysportlet2"
        :showCaption="true"
        :layoutOpts="{parentLayout: 'TABLE_24COL',colLG: 24,colMD: 24,}"
        style="height: 300.0px;"
        :context="state.context"
        :viewParams="state.viewParams"
        :viewSubject="state.viewSubject"
        @ctrlEvent="onCtrlEvent"      
      />
      <AppPortletCard
        name=db_container1
        :isContainer="true"
        :showCaption="true"
        :layoutOpts="{selfLayout: 'TABLE_24COL',parentLayout: 'TABLE_24COL',colMD: 24,}"
        class="app-portletContainer "
      >
            <viewPortlet
              ref="portlet"
              name="db_sysportlet1"
              :showCaption="true"
              :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
              style="height: 300.0px;"
              :context="state.context"
              :viewParams="state.viewParams"
              :viewSubject="state.viewSubject"
              @ctrlEvent="onCtrlEvent"      
            />
      </AppPortletCard>
      <testHtmlPortlet
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
      <db_rawitem1Portlet
        ref="portlet"
        name="db_rawitem1"
        :showCaption="true"
        :layoutOpts="{parentLayout: 'TABLE_24COL',colMD: 24,}"
        iconClass="fa fa-eye"
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