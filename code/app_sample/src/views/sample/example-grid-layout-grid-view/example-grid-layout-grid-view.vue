<script setup lang="ts">
import { Subject } from 'rxjs';
import { FilterOutlined } from '@ant-design/icons-vue';
import { GridView, IActionParam, IParam, IContext } from '@core';
import { viewState } from './example-grid-layout-grid-view-state';
import { LayoutGrid } from '@widgets/example/layout-grid';

// props声明和默认值处理
interface Props {
  context?: IContext;
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
const gridView = new GridView(viewState, props, emit).moduleInstall();
const { state, grid, searchForm, quickSearchForm, onCtrlEvent, onToolbarEvent, onQuickGroupEvent, onQuickSearchEvent } = gridView;

</script>

<template>
  <AppGridViewLayout :class="['app-grid-view', state.viewSysCss]" :showCaptionBar="state.showCaptionBar">
    <template v-slot:caption>
      <AppIconText class="app-view__caption" size="large" :text="state.viewCaption" />
    </template>
    <LayoutGrid
      ref="grid"
      name="grid"
      :context="state.context"
      :rowEditState="state.rowEditState"
      :rowActiveMode="state.gridRowActiveMode"
      :showBusyIndicator="true"
      :viewParams="state.viewParams"
      :controlAction="state.grid.action"
      :viewSubject="state.viewSubject"
      :parent="gridView"
      @ctrlEvent="onCtrlEvent"
    ></LayoutGrid>
  </AppGridViewLayout>
</template>

<style lang="scss">
.app-grid-view {
  height: 100%;
  width: 100%;
}
</style>