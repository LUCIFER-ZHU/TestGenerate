<script setup lang="ts">
import { Subject } from 'rxjs';
import { PickupView, IActionParam, IParam, IContext } from '@core';
import { viewState } from './example-pickup-view-state';
import { PickupViewpickupviewpanelPickUpViewPanel } from '@widgets/example/pickup-viewpickupviewpanel-pickup-view-panel';
// props声明和默认值处理
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

// emit声明
interface ViewEmit {
  (name: "viewEvent", value: IActionParam): void;
}

const emit = defineEmits<ViewEmit>();

// 安装功能模块，提供状态和能力方法
const { state, cancel, confirm,onCtrlEvent } = new PickupView(viewState, props, emit).moduleInstall();
</script>

<template>
    <AppPickerUpViewLayout :class="['app-pickup-view', state.viewSysCss]">
        <template v-slot:header-left>
          <AppIconText class="app-view__caption" size="large" :text="state.viewCaption" />
        </template>

            <PickupViewpickupviewpanelPickUpViewPanel
              :context="state.context"
              :rowEditState="state.rowEditState"
              :rowActiveMode="state.gridRowActiveMode"
              :showBusyIndicator="true"
              :viewParams="state.viewParams"
              :controlAction="state.controlsAction.pickupviewpanel"
              :viewSubject="state.viewSubject"
              @ctrlEvent="onCtrlEvent"
            ></PickupViewpickupviewpanelPickUpViewPanel>
              <template v-slot:footer>
      <a-space class="app-pickup-view--footer">
        <a-button @click="cancel">取消</a-button>
        <a-button @click="confirm">确认</a-button>
      </a-space>
    </template>
    </AppPickerUpViewLayout>
</template>
<style lang="scss">
.app-pickup-view {
  position: relative;
  .app-pickup-view--footer {
    position: absolute;
    bottom: 20px;
    right: 35px;
  }
}
</style>