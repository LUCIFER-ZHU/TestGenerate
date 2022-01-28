<script setup lang="ts">
import { Subject } from 'rxjs';
import { IActionParam, IParam, ControlAction, TabExpPanelControl, IContext } from '@core';
import { ctrlState } from './mob-tab-exp-viewtabexppanel-tab-exp-panel-state';
import { MobTabExpViewtabviewpanelTabViewPanel } from '@widgets/chart-data/mob-tab-exp-viewtabviewpanel-tab-view-panel';
import { MobTabExpViewtabviewpanel2TabViewPanel } from '@widgets/chart-data/mob-tab-exp-viewtabviewpanel2-tab-view-panel';
interface Props {
  name:string,
  context: IContext;
  viewParams?: IParam;
  showBusyIndicator?: boolean;
  selectedData?: string;
  tabPosition?: string;
  defaultActivePanel?: string;
  viewSubject: Subject<IActionParam>;
}

const props = withDefaults(defineProps < Props > (), {
  viewSubject: () => new Subject < IActionParam > (),
  showBusyIndicator: true,
  tabPosition: "top",
  defaultActivePanel: "tabviewpanel",
})

// emit声明
interface CtrlEmit {
  (name: "onCtrlEvent", value: IActionParam): void;
}

const emit = defineEmits <CtrlEmit> ();

// 安装功能模块，提供状态和能力方法
const { name, state, onCtrlEvent } = new TabExpPanelControl(ctrlState, props, emit).moduleInstall();

// 暴露内部状态及能力
defineExpose({ name, state });
</script>

<template>

  <div class="app-tab-exp-panel">
    <a-tabs :tabPosition="state.tabPosition" v-model:activeKey="state.activePanel" class="app-tab-exp-panel__tabs">
      <a-tab-pane key="tabviewpanel">
        <template #tab>
          <AppIconText text="编辑视图"/>
        </template>
        <MobTabExpViewtabviewpanelTabViewPanel
          name="tabviewpanel"
          :context="state.context"
          :viewParams="state.viewParams"
          :viewSubject="state.viewSubject"
          @onCtrlEvent="onCtrlEvent"
        />
      </a-tab-pane>
      <a-tab-pane key="tabviewpanel2">
        <template #tab>
          <AppIconText text="树视图"/>
        </template>
        <MobTabExpViewtabviewpanel2TabViewPanel
          name="tabviewpanel2"
          :context="state.context"
          :viewParams="state.viewParams"
          :viewSubject="state.viewSubject"
          @onCtrlEvent="onCtrlEvent"
        />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>