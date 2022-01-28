<script setup lang="ts">
import { Subject } from 'rxjs';
import { IActionParam, IParam, ControlAction, TabViewPanelControl, IContext } from '@core';
import { ctrlState } from './mob-tab-exp-viewtabviewpanel-tab-view-panel-state';
import ChartDataMobEditView from '@views/sample/chart-data-mob-edit-view';
interface Props {
  name:string,
  context: IContext;
  viewParams?: IParam;
  showBusyIndicator?: boolean;
  viewSubject: Subject<IActionParam>;
}

const props = withDefaults(defineProps < Props > (), {
  viewSubject: () => new Subject < IActionParam > (),
  showBusyIndicator: true,
})

// emit声明
interface CtrlEmit {
  (name: "onCtrlEvent", value: IActionParam): void;
}

const emit = defineEmits <CtrlEmit> ();

// 安装功能模块，提供状态和能力方法
const { name, state, onViewEvent } = new TabViewPanelControl(ctrlState, props, emit).moduleInstall();

// 暴露内部状态及能力
defineExpose({ name, state });
</script>

<template>

  <div class="app-tab-view-panel">
    <ChartDataMobEditView
      :context="state.context"
      :viewParams="state.viewParams"
      :viewSubject="state.viewSubject"
      @viewEvent="onViewEvent"
    />
  </div>
</template>