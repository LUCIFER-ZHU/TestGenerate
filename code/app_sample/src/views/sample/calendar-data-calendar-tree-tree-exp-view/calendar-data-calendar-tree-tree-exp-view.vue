<script setup lang="ts">
import { Subject } from 'rxjs';
import { TreeExpView, IActionParam, IParam, IContext } from '@core';
import { viewState } from './calendar-data-calendar-tree-tree-exp-view-state';
import { CalendarTreeTreeExpViewtreeexpbarTreeExpBar } from '@widgets/calendar-data/calendar-tree-tree-exp-viewtreeexpbar-tree-exp-bar';
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

interface ViewEmit {
  (name: "viewEvent", value: IActionParam): void;
}

const emit = defineEmits<ViewEmit>();
//  安装功能模块
const { state, onCtrlEvent, onToolbarEvent } = new TreeExpView(viewState, props, emit).moduleInstall();
</script>

<template>
    <AppTreeExpViewLayout :class="['app-tree-exp-view', state.viewSysCss]">
      <template v-slot:caption>
        <AppIconText class="app-view__caption" size="large" :text="state.viewCaption" />
      </template>
      <CalendarTreeTreeExpViewtreeexpbarTreeExpBar
        :context="state.context"
        :showBusyIndicator="true"
        :viewParams="state.viewParams"
        :viewSubject="state.viewSubject"
        @ctrlEvent="onCtrlEvent"
      ></CalendarTreeTreeExpViewtreeexpbarTreeExpBar>
    </AppTreeExpViewLayout>
</template>