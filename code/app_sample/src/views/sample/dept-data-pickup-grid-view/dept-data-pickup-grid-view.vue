<script setup lang="ts">
import { Subject } from 'rxjs';
import { PickupGridView, IActionParam, IParam, IContext } from '@core';
import { viewState } from './dept-data-pickup-grid-view-state';
//  todo 表格部件拿不到目前导入固定表格
import { MainGrid } from '@widgets/chart-data/main-grid';


// props声明和默认值处理
interface Props {
  context: IContext;
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
const { state, confirm, onCtrlEvent } = new PickupGridView(viewState, props, emit).moduleInstall();
</script>

<template>
  <AppPickerUpGridViewLayout :class="['app-pickup-grid-view', state.viewSysCss]">
    <template v-slot:header-left>
      <AppIconText class="app-view__caption" size="large" :text="state.viewCaption" />
    </template>
    <MainGrid
      :context="state.context"
      :multiple="false"
      :rowEditState="state.rowEditState"
      :rowActiveMode="state.gridRowActiveMode"
      :showBusyIndicator="true"
      :viewParams="state.viewParams"
      :controlAction="state.controlsAction.grid"
      :viewSubject="state.viewSubject"
    ></MainGrid>
        <MainGrid
          :context="state.context"
          :rowEditState="state.rowEditState"
          :rowActiveMode="state.gridRowActiveMode"
          :showBusyIndicator="true"
          :viewParams="state.viewParams"
          :controlAction="state.controlsAction.grid"
          :viewSubject="state.viewSubject"
          @ctrlEvent="onCtrlEvent"
        ></MainGrid>
  </AppPickerUpGridViewLayout>
</template>
