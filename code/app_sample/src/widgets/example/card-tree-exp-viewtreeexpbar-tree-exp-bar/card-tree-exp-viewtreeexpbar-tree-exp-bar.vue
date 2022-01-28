<script setup lang="ts">
import { Subject } from 'rxjs';
import { IActionParam, IParam, ControlAction, TreeExpBarControl, IContext } from '@core';
import { ctrlState } from './card-tree-exp-viewtreeexpbar-tree-exp-bar-state';
import { CardTreeTree} from '@widgets/example/card-tree-tree';
import KanbanDataCardBaseDataView from '@views/sample/kanban-data-card-base-data-view';
import KanbanDataCardKanbanView from '@views/sample/kanban-data-card-kanban-view';
import KanbanDataCardBaseDataView_CSS from '@views/sample/kanban-data-card-base-data-view-css';
import KanbanDataCardDataItemDataView from '@views/sample/kanban-data-card-data-item-data-view';
import KanbanDataValueFormatCardDataView from '@views/sample/kanban-data-value-format-card-data-view';

interface Props {
  name:string,
  context: IContext;
  viewParams?: IParam;
  controlAction: ControlAction;
  showBusyIndicator?: boolean;
  viewMode?: number;
  viewSubject: Subject<IActionParam>;
}

const props = withDefaults(defineProps < Props > (), {
  viewSubject: () => new Subject < IActionParam > (),
  viewMode: 0,
  showBusyIndicator: true,
});

interface CtrlEmit {
  (name: "ctrlEvent", value: IActionParam): void;
}

const emit = defineEmits <CtrlEmit> ();

// 安装功能模块，提供状态和能力方法
const { name, state, onCtrlEvent, xData } = new TreeExpBarControl(ctrlState, props, emit).moduleInstall();

// 暴露内部状态及能力
defineExpose({ name, state });
</script>

<template>
  <div class="app-tree-exp-bar">
    <AppSplit v-model="state.split">
      <template #left>
        <div v-if="state.showTitleBar" class="tree-exp-bar-title">
          <span>{{ state.title }}</span>
        </div>
        <div class="tree-exp-bar-body">
          
          <CardTreeTree
            ref="xData"
            :context="state.context"
            :viewParams="state.viewParams"
            :viewSubject="state.viewSubject"
            :selectFirstDefault="true"
            :isBranchAvailable="true"
            @ctrlEvent="onCtrlEvent"
          ></CardTreeTree>
        </div>
      </template>
      <template #right>
        <KanbanDataCardBaseDataView
          v-if="state.selection.viewName && state.selection.viewName === 'KanbanDataCardBaseDataView'"
          class="tree-exp__nav-view"
          :viewDefaultUsage="false"
          :viewdata="JSON.stringify(state.selection.context)"
          :viewParams="JSON.stringify(state.selection.viewParams)">
        </KanbanDataCardBaseDataView>
        <KanbanDataCardKanbanView
          v-if="state.selection.viewName && state.selection.viewName === 'KanbanDataCardKanbanView'"
          class="tree-exp__nav-view"
          :viewDefaultUsage="false"
          :viewdata="JSON.stringify(state.selection.context)"
          :viewParams="JSON.stringify(state.selection.viewParams)">
        </KanbanDataCardKanbanView>
        <KanbanDataCardBaseDataView_CSS
          v-if="state.selection.viewName && state.selection.viewName === 'KanbanDataCardBaseDataView_CSS'"
          class="tree-exp__nav-view"
          :viewDefaultUsage="false"
          :viewdata="JSON.stringify(state.selection.context)"
          :viewParams="JSON.stringify(state.selection.viewParams)">
        </KanbanDataCardBaseDataView_CSS>
        <KanbanDataCardDataItemDataView
          v-if="state.selection.viewName && state.selection.viewName === 'KanbanDataCardDataItemDataView'"
          class="tree-exp__nav-view"
          :viewDefaultUsage="false"
          :viewdata="JSON.stringify(state.selection.context)"
          :viewParams="JSON.stringify(state.selection.viewParams)">
        </KanbanDataCardDataItemDataView>
        <KanbanDataValueFormatCardDataView
          v-if="state.selection.viewName && state.selection.viewName === 'KanbanDataValueFormatCardDataView'"
          class="tree-exp__nav-view"
          :viewDefaultUsage="false"
          :viewdata="JSON.stringify(state.selection.context)"
          :viewParams="JSON.stringify(state.selection.viewParams)">
        </KanbanDataValueFormatCardDataView>
      </template>
    </AppSplit>
  </div>
</template>

<style lang="scss" scoped>
.app-tree-exp-bar {
  width: 100%;
  height: 100%;
}
</style>