<script setup lang="ts">
import { Subject } from 'rxjs';
import { TabExpView, IActionParam, IParam, IContext } from '@core';
import { viewState } from './customer-main-tab-exp-view-state';
import { MainTabExpViewtabexppanelTabExpPanel } from '@widgets/customer/main-tab-exp-viewtabexppanel-tab-exp-panel';
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
  (name: "viewEvent", value: IActionParam): void;
}

const emit = defineEmits<ViewEmit>();

// 安装功能模块，提供状态和能力方法
const tabExpView = new TabExpView(viewState, props, emit).moduleInstall();
const { state, onCtrlEvent } = tabExpView;
</script>

<template>
    <AppPickupViewLayout :class="['app-tab-exp-view', state.viewSysCss]">
        <template #caption>
          <AppIconText class="app-view__caption" size="large" :text="state.viewCaption" />
        </template>
            <MainTabExpViewtabexppanelTabExpPanel
              name="tabexppanel"
              tabPosition="top"
              :context="state.context"
              :viewParams="state.viewParams"
              :viewSubject="state.viewSubject"
              :defaultActivePanel="state.defaultActivePanel"
              :parent="tabExpView"
              @onCtrlEvent="onCtrlEvent"
            ></MainTabExpViewtabexppanelTabExpPanel>
    </AppPickupViewLayout>
</template>