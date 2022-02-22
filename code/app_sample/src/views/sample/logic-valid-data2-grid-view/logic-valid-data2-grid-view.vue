<script setup lang="ts">
import { Subject } from 'rxjs';
import { FilterOutlined } from '@ant-design/icons-vue';
import { GridView, IActionParam, IParam, IContext } from '@core';
import { viewState } from './logic-valid-data2-grid-view-state';
import { MainGrid } from '@widgets/logic-valid-data2/main-grid';
import { DefaultSearchForm } from '@widgets/logic-valid-data2/default-search-form';

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
    <template v-slot:toolbar>
      <AppToolbar
        mode="button"
        name="gridviewtoolbar"
        :actionModel="state.toolbar"
        @onToolbarEvent="onToolbarEvent"/>
    </template>
    <MainGrid
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
    ></MainGrid>
    <template v-slot:quickSearch>
      <div class='app-quick-search'>
      <a-input-search v-if="state.enableQuickSearch" @search="onQuickSearchEvent" allowClear/>
      <a-popover v-show="state.expandSearchForm" trigger="click" :overlayStyle="{width: '50%'}" placement="bottom">
        <template #content>
          <DefaultSearchForm
            ref="searchForm"
            name="searchform"
            :context="state.context"
            :viewParams="state.viewParams"
            :controlAction="state.searchform.action"
            :viewSubject="state.viewSubject"
            @ctrlEvent="onCtrlEvent"
          ></DefaultSearchForm>
        </template>
        <a-button><filter-outlined /></a-button>
      </a-popover>
      </div>
    </template>
  </AppGridViewLayout>
</template>

<style lang="scss">
.app-grid-view {
  height: 100%;
  width: 100%;
}
</style>