<script setup lang="ts">
import { Subject } from 'rxjs';
import { TreeView, IActionParam, IParam, IContext } from '@core';
import { viewState } from './org-data-org-dept-data-tree-view-state';
import { OrgDeptDataTreeTree } from '@widgets/org-data/org-dept-data-tree-tree';

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
const { state, tree, onCtrlEvent, onToolbarEvent, onQuickGroupEvent, onQuickSearchEvent } = new TreeView(viewState, props, emit).moduleInstall();

</script>

<template>
  <AppTreeViewLayout :class="['app-tree-view', state.viewSysCss]">
    <template v-slot:caption>
      <AppIconText class="app-view__caption" size="large" :text="state.viewCaption" />
    </template>
    <OrgDeptDataTreeTree
      ref="tree"
      name="tree"
      :context="state.context"
      :showBusyIndicator="true"
      :viewParams="state.viewParams"
      :controlAction="state.tree.action"
      :viewSubject="state.viewSubject"
      @ctrlEvent="onCtrlEvent"
    ></OrgDeptDataTreeTree>
  </AppTreeViewLayout>
</template>