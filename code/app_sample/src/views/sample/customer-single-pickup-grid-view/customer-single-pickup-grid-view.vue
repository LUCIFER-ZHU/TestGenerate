<script setup lang="ts">
import { Subject } from 'rxjs';
import { FilterOutlined } from '@ant-design/icons-vue';
import { PickupGridView, IActionParam, IParam, IContext } from '@core';
import { viewState } from './customer-single-pickup-grid-view-state';
import { MainGrid } from '@widgets/customer/main-grid';


// props声明和默认值处理
interface Props {
  context?: IContext;
  viewParams?: IParam;
  openType?: "ROUTE" | "MODAL" | "EMBED";
  viewSubject?: Subject<IActionParam>;
  selectedData?: string;    
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
const pickupGridView = new PickupGridView(viewState, props, emit).moduleInstall();
const { state, grid, onCtrlEvent, onQuickGroupEvent, onQuickSearchEvent } = pickupGridView;
</script>

<template>
  <AppPickupGridViewLayout :class="['app-pickup-grid-view', state.viewSysCss]">
    <template v-slot:header-left>
      <AppIconText class="app-view__caption" size="large" :text="state.viewCaption" />
    </template>
    <MainGrid
      ref="grid"
      name="grid"
      :context="state.context"
      :multiple="false"
      :rowEditState="state.rowEditState"
      :rowActiveMode="state.gridRowActiveMode"
      :showBusyIndicator="true"
      :viewParams="state.viewParams"
      :controlAction="state.grid.action"
      :viewSubject="state.viewSubject"
      :parent="pickupGridView"
      @ctrlEvent="onCtrlEvent"     
    ></MainGrid>
  </AppPickupGridViewLayout>
</template>
