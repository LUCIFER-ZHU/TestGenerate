<script setup lang="ts">
import { Subject } from 'rxjs';
import { PortalView, IActionParam, IParam, IContext } from '@core';
import { viewState } from './app-portal-view-state';
import { AppPortalView_dbDashboard } from '@widgets/app/app-portal-view-db-dashboard';

// props声明和默认值处理
interface Props {
  context?: IContext;
  viewParams?: IParam;
  openType?: "ROUTE" | "MODAL" | "EMBED";
  viewSubject?: Subject<IActionParam>;
}

const props = withDefaults(defineProps<Props>(), {
  openType:'ROUTE',
  viewSubject: () => new Subject<IActionParam>()
})

// emit声明
interface ViewEmit {
  (name: "onViewEvent", value: IActionParam): void;
}

const emit = defineEmits<ViewEmit>();

// 安装功能模块，提供状态和能力方法
const { state, dashboard, onCtrlEvent } = new PortalView(viewState, props, emit).moduleInstall();

</script>

<template>
  <AppPortalViewLayout :class="['app-edit-view', state.viewSysCss]">
    <template v-slot:caption>
      <AppIconText
        class="app-view__caption"
        size="large"
        :subCaption="state.subCaption"
        :showCaptionBar="state.showCaptionBar"
        :text="state.viewCaption"
      />
    </template>
    <AppPortalView_dbDashboard
      ref="dashboard"
      name="dashboard"
      :context="state.context"
      :viewParams="state.viewParams"
      :viewSubject="state.viewSubject"
      @ctrlEvent="onCtrlEvent"      
    ></AppPortalView_dbDashboard>
  </AppPortalViewLayout>
</template>

<style lang="scss">
</style>