<script setup lang="ts">
import { Subject } from 'rxjs';
import { TreeExpView, IActionParam, IParam, IContext } from '@core';
import { viewState } from './example-tree-tree-exp-view-state';
import { TreeTreeExpViewtreeexpbarTreeExpBar } from '@widgets/example/tree-tree-exp-viewtreeexpbar-tree-exp-bar';
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

interface ViewEmit {
  (name: "viewEvent", value: IActionParam): void;
}

const emit = defineEmits<ViewEmit>();
//  安装功能模块
const treeExpView = new TreeExpView(viewState, props, emit).moduleInstall()
const { state, onCtrlEvent, onToolbarEvent } = treeExpView;
</script>

<template>
    <AppTreeExpViewLayout :class="['app-tree-exp-view', state.viewSysCss]">
      <template v-slot:caption>
        <AppIconText class="app-view__caption" size="large" :text="state.viewCaption" />
      </template>
      <TreeTreeExpViewtreeexpbarTreeExpBar
        name="treeexpbar"
        :context="state.context"
        :showBusyIndicator="true"
        :viewParams="state.viewParams"
        :viewSubject="state.viewSubject"
        :parent="treeExpView"
        @ctrlEvent="onCtrlEvent"
      ></TreeTreeExpViewtreeexpbarTreeExpBar>
    </AppTreeExpViewLayout>
</template>