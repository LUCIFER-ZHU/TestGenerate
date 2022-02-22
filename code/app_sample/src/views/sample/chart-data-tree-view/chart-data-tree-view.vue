<script setup lang="ts">
import { Subject } from 'rxjs';
import { TreeView, IActionParam, IParam, IContext } from '@core';
import { viewState } from './chart-data-tree-view-state';
import { DefaultSearchForm } from '@widgets/chart-data/default-search-form';
import { TreeviewTree } from '@widgets/chart-data/treeview-tree';

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
const treeView = new TreeView(viewState, props, emit).moduleInstall();
const { state, tree, onCtrlEvent, onToolbarEvent, onQuickGroupEvent, onQuickSearchEvent } = treeView;

</script>

<template>
  <AppTreeViewLayout :class="['app-tree-view', state.viewSysCss]">
    <template v-slot:caption>
      <AppIconText class="app-view__caption" size="large" :text="state.viewCaption" />
    </template>
    <template v-slot:toolbar>
      <AppToolbar
        mode="button"
        name="treeviewtoolbar"
        :actionModel="state.toolbar"
        @onToolbarEvent="onToolbarEvent"/>
    </template>
    <template v-slot:quickSearch>
      <div class='app-quick-search'>
      <a-input v-if="state.enableQuickSearch" @pressEnter="onQuickSearchEvent($event)" allowClear/>
      <a-popover trigger="click" :overlayStyle="{width: '50%'}">
        <template #content>
          <DefaultSearchForm
            v-if="state.expandSearchForm"
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
    <TreeviewTree
      ref="tree"
      name="tree"
      :context="state.context"
      :showBusyIndicator="true"
      :viewParams="state.viewParams"
      :controlAction="state.tree.action"
      :viewSubject="state.viewSubject"
      :parent="treeView"
      @ctrlEvent="onCtrlEvent"
    ></TreeviewTree>
  </AppTreeViewLayout>
</template>