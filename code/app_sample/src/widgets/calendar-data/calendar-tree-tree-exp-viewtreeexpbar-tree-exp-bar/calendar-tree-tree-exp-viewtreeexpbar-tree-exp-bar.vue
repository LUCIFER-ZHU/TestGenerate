<script setup lang="ts">
import { Subject } from 'rxjs';
import { IActionParam, IParam, ControlAction, TreeExpBarControl, IContext } from '@core';
import { ctrlState } from './calendar-tree-tree-exp-viewtreeexpbar-tree-exp-bar-state';
import { CalendarTreeTree} from '@widgets/calendar-data/calendar-tree-tree';
import CalendarDataBaseCalendarView from '@views/sample/calendar-data-base-calendar-view';
import CalendarDataTimeLineCalendarView from '@views/sample/calendar-data-time-line-calendar-view';
import CalendarDataBaseCalendarView_CSS from '@views/sample/calendar-data-base-calendar-view-css';
import CalendarDataMDataSourceCalendarView from '@views/sample/calendar-data-m-data-source-calendar-view';
import CalendarDataItemLayoutTimeLineCalendarView from '@views/sample/calendar-data-item-layout-time-line-calendar-view';

interface Props {
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
const { state, onCtrlEvent, xData } = new TreeExpBarControl(ctrlState, props, emit).moduleInstall();

// 暴露内部状态及能力
defineExpose({ state, name: 'treeexpbar' });
</script>

<template>
  <a-layout
    class="app-tree-exp-bar"
    >
    <a-layout-sider>
      <CalendarTreeTree
        ref="xData"
        :context="state.context"
        :viewParams="state.viewParams"
        :viewSubject="state.viewSubject"
        :isBranchAvailable="true"
        @ctrlEvent="onCtrlEvent"
      ></CalendarTreeTree>
    </a-layout-sider>
    <a-layout>
      <CalendarDataBaseCalendarView
        v-if="state.selection.viewName && state.selection.viewName === 'CalendarDataBaseCalendarView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </CalendarDataBaseCalendarView>
      <CalendarDataTimeLineCalendarView
        v-if="state.selection.viewName && state.selection.viewName === 'CalendarDataTimeLineCalendarView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </CalendarDataTimeLineCalendarView>
      <CalendarDataBaseCalendarView_CSS
        v-if="state.selection.viewName && state.selection.viewName === 'CalendarDataBaseCalendarView_CSS'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </CalendarDataBaseCalendarView_CSS>
      <CalendarDataMDataSourceCalendarView
        v-if="state.selection.viewName && state.selection.viewName === 'CalendarDataMDataSourceCalendarView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </CalendarDataMDataSourceCalendarView>
      <CalendarDataItemLayoutTimeLineCalendarView
        v-if="state.selection.viewName && state.selection.viewName === 'CalendarDataItemLayoutTimeLineCalendarView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </CalendarDataItemLayoutTimeLineCalendarView>
    </a-layout>
  </a-layout>
</template>