<script setup lang="ts">
import { Subject } from 'rxjs';
import { IActionParam, IParam, ControlAction, PickupViewPanelControl, IContext } from '@core';
import { ctrlState } from './pickup-viewpickupviewpanel-pickup-view-panel-state';
import ProductPickupGridView from '@views/sample/product-pickup-grid-view';
interface Props {
  name:string,
  parent: IParam;
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
    <ProductPickupGridView
      :context="state.context"
      :viewParams="state.viewParams"
      :isShowButton="state.isShowButton" 
      :selectedData="state.selectedData"
      :viewSubject="state.viewSubject"
      @viewEvent="onViewEvent"      
    />
  </div>
</template>