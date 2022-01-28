<script setup lang="ts">
import { Subject } from 'rxjs';
import { PickupView, IActionParam, IParam, IContext } from '@core';
import { viewState } from './person-data-pickup-view-state';
import { PickupViewpickupviewpanelPickupViewPanel } from '@widgets/person-data/pickup-viewpickupviewpanel-pickup-view-panel';
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
  (name: "viewEvent", value: IActionParam): void;
}

const emit = defineEmits<ViewEmit>();

// 安装功能模块，提供状态和能力方法
const { state, onCancel, onConfirm, onCtrlEvent, selectData } = new PickupView(viewState, props, emit).moduleInstall();
</script>

<template>
    <AppPickupViewLayout :class="['app-pickup-view', state.viewSysCss]">
        <template #caption>
          <AppIconText class="app-view__caption" size="large" :text="state.viewCaption" />
        </template>
            <PickupViewpickupviewpanelPickupViewPanel
              name="pickupviewpanel"
              :context="state.context"
              :rowEditState="state.rowEditState"
              :rowActiveMode="state.gridRowActiveMode"
              :showBusyIndicator="true"
              :viewParams="state.viewParams"
              :controlAction="state.pickupviewpanel.action"
              :viewSubject="state.viewSubject"
              :selectData="selectData"                   
              @onCtrlEvent="onCtrlEvent"
            ></PickupViewpickupviewpanelPickupViewPanel>
              <template v-slot:footer>
      <a-space class="app-pickup-view--footer">
        <a-button @click="onConfirm">确认</a-button>
        <a-button @click="onCancel">取消</a-button>
      </a-space>
    </template>
    </AppPickupViewLayout>
</template>