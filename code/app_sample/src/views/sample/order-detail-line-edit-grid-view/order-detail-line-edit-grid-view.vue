<script setup lang="ts">
import { Subject } from 'rxjs';
import { FilterOutlined } from '@ant-design/icons-vue';
import { GridView, IActionParam, IParam, IContext } from '@core';
import { viewState } from './order-detail-line-edit-grid-view-state';
import { LineEditGrid } from '@widgets/order-detail/line-edit-grid';

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
  (name: "onViewEvent", value: IActionParam): void;
}

const emit = defineEmits<ViewEmit>();

// 安装功能模块，提供状态和能力方法
const { state, grid, onCtrlEvent, onToolbarEvent, onQuickGroupEvent } = new GridView(viewState, props, emit).moduleInstall();

</script>

<template>
  <AppGridViewLayout :class="['app-grid-view', state.viewSysCss]">
    <template v-slot:caption>
      <AppIconText class="app-view__caption" size="large" :text="state.viewCaption" />
    </template>
    <template v-slot:toolbar>
      <AppToolbar
        mode="button"
        name="lineeditgridviewtoolbar"
        :actionModel="state.toolbar"
        @onToolbarEvent="onToolbarEvent"/>
    </template>
    <LineEditGrid
      ref="grid"
      :context="state.context"
      :rowEditState="state.rowEditState"
      :rowActiveMode="state.gridRowActiveMode"
      :showBusyIndicator="true"
      :viewParams="state.viewParams"
      :controlAction="state.grid.action"
      :viewSubject="state.viewSubject"
      @ctrlEvent="onCtrlEvent"
    ></LineEditGrid>
  </AppGridViewLayout>
</template>

<style lang="scss">
.app-grid-view {
  height: 100%;
  width: 100%;
}
</style>