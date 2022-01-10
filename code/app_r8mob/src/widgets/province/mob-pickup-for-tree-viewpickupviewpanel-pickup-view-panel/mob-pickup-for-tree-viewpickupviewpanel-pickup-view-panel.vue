<script setup lang="ts">
import { Subject } from 'rxjs';
import { IActionParam, IParam, ControlAction, PickupViewPanelControl, IContext } from '@core';
import { CtrlConfig } from './mob-pickup-for-tree-viewpickupviewpanel-pickup-view-panel-config';
import ChartDataPickUpGridView from '../../../page/sample/chart-data-pickup-grid-view';
interface Props {
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
  (name: "ctrlEvent", value: IActionParam): void;
}

const emit = defineEmits < CtrlEmit > ();

// 安装功能模块，提供状态和能力方法
const { state, handleViewEvent} = new PickupViewPanelControl(CtrlConfig).moduleInstall(props, emit);

</script>

<template>
  <div class="ibiz-pickupviewpanel">
    <ChartDataPickUpGridView
      :isSingleSelect="state.isSingleSelect"
      :isShowButton="state.isShowButton"
      :selectedData="state.selectedData"
      @viewEvent="handleViewEvent"
    ></ChartDataPickUpGridView>
  </div>
</template>