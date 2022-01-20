<script setup lang="ts">
import { Subject } from 'rxjs';
import { FilterOutlined } from '@ant-design/icons-vue';
import { GridView, IActionParam, IParam, IContext } from '@core';
import { viewState } from './example-grid-css-and-icon-grid-view-state';
import { CssAndIconGrid } from '@widgets/example/css-and-icon-grid';

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
const { state, grid, onCtrlEvent, onToolbarEvent, onQuickGroupEvent, onQuickSearchEvent } = new GridView(viewState, props, emit).moduleInstall();

</script>

<template>
  <AppGridViewLayout :class="['app-grid-view', state.viewSysCss]">
    <template v-slot:caption>
      <AppIconText class="app-view__caption" size="large" :text="state.viewCaption" />
    </template>
    <CssAndIconGrid
      ref="grid"
      :context="state.context"
      :rowEditState="state.rowEditState"
      :rowActiveMode="state.gridRowActiveMode"
      :showBusyIndicator="true"
      :viewParams="state.viewParams"
      :controlAction="state.grid.action"
      :viewSubject="state.viewSubject"
      @ctrlEvent="onCtrlEvent"
    ></CssAndIconGrid>
  </AppGridViewLayout>
</template>

<style lang="scss">
.app-grid-view {
  height: 100%;
  width: 100%;
}
</style>