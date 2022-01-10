<script setup lang="ts">
import { Subject } from 'rxjs';
import { PickupGridView, IActionParam, IParam, IContext } from '@core';
import { ViewConfig } from './org-data-pickup-grid-view-config';
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
const { state, confirm, handleCtrlEvent } = new PickupGridView(ViewConfig).moduleInstall(props, emit);
</script>

<template>
  <IbizPickerUpGridViewLayout class="ibiz-pickup-grid-view">
    <template v-slot:header-left>
      <IbizIconText class="ibiz-view__caption" size="large" :text="state.viewCaption" />
    </template>
        <MainGrid
          :context="state.context"
          :rowEditState="state.rowEditState"
          :rowActiveMode="state.gridRowActiveMode"
          :showBusyIndicator="true"
          :viewParams="state.viewParams"
          :controlAction="state.controlsAction.grid"
          :viewSubject="state.viewSubject"
          @ctrlEvent="handleCtrlEvent"
        ></MainGrid>
  </IbizPickerUpGridViewLayout>
</template>
