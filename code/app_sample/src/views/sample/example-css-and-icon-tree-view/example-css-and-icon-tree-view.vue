<script setup lang="ts">
import { Subject } from 'rxjs';
import { TreeView, IActionParam, IParam, IContext } from '@core';
import { viewState } from './example-css-and-icon-tree-view-state';
import { CssAndIconTree } from '@widgets/example/css-and-icon-tree';

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
    <CssAndIconTree
      ref="tree"
      name="tree"
      :context="state.context"
      :showBusyIndicator="true"
      :viewParams="state.viewParams"
      :controlAction="state.tree.action"
      :viewSubject="state.viewSubject"
      :parent="treeView"
      @ctrlEvent="onCtrlEvent"
    ></CssAndIconTree>
  </AppTreeViewLayout>
</template>