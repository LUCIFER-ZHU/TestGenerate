<script setup lang="ts">
import { Subject } from 'rxjs';
import { GridView, IActionParam, IParam, IContext } from '@core';
import { ViewConfig } from './example-toolbar-grid-view-config';
import { ToolbarGrid } from '@widgets/example/toolbar-grid';

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
const { state, handleCtrlEvent, handleToolbarEvent } = new GridView(ViewConfig).moduleInstall(props, emit);

</script>

<template>
  <IbizGridViewLayout class="ibiz-grid-view">
    <template v-slot:caption>
      <IbizIconText class="ibiz-view__caption" size="large" :text="state.viewCaption" />
    </template>
    <ToolbarGrid
      :context="state.context"
      :rowEditState="state.rowEditState"
      :rowActiveMode="state.gridRowActiveMode"
      :showBusyIndicator="true"
      :viewParams="state.viewParams"
      :controlAction="state.controlsAction.grid"
      :viewSubject="state.viewSubject"
      @ctrlEvent="handleCtrlEvent"
    ></ToolbarGrid>
  </IbizGridViewLayout>
</template>

<style lang="scss">
.ibiz-grid-view {
  height: 100%;
  width: 100%;
}
</style>