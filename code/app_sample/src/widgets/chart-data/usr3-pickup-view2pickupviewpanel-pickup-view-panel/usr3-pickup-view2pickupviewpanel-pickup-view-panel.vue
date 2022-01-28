<script setup lang="ts">
import { Subject } from 'rxjs';
import { IActionParam, IParam, ControlAction, PickupViewPanelControl, IContext } from '@core';
import { ctrlState } from './usr3-pickup-view2pickupviewpanel-pickup-view-panel-state';
import ChartDataUsr2GridView from '@views/sample/chart-data-usr2-grid-view';
interface Props {
  name:string,
  context: IContext;
  viewParams?: IParam;
  controlAction: ControlAction;
  showBusyIndicator?: boolean;
  isSingleSelect?: boolean;
  viewMode?: number;
  selectedData?: string;
  isShowButton?: boolean;
  viewSubject: Subject<IActionParam>;
}

const props = withDefaults(defineProps < Props > (), {
  viewSubject: () => new Subject < IActionParam > (),
  viewMode: 0,
  isSingleSelect: false,
  isShowButton: true,
  showBusyIndicator: true,
})

// emit声明
interface CtrlEmit {
  (name: "onCtrlEvent", value: IActionParam): void;
}

const emit = defineEmits <CtrlEmit> ();

// 安装功能模块，提供状态和能力方法
const { name, state, onViewEvent } = new PickupViewPanelControl(ctrlState, props, emit).moduleInstall();

// 暴露内部状态及能力
defineExpose({ name, state});
</script>

<template>

  <div class="app-pickup-view-panel">
    <ChartDataUsr2GridView
      :context="state.context"
      :viewParams="state.viewParams"
      :isShowButton="state.isShowButton" 
      :selectedData="state.selectedData"
      :viewSubject="state.viewSubject"
      @viewEvent="onViewEvent"      
    />
  </div>
</template>