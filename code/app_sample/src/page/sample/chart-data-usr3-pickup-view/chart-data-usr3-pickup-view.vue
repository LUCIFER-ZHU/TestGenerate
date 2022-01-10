<script setup lang="ts">
import { Subject } from 'rxjs';
import { PickupView, IActionParam, IParam, IContext } from '@core';
import { ViewConfig } from './chart-data-usr3-pickup-view-config';
import { Usr3PickupViewpickupviewpanelPickUpViewPanel } from '@widgets/chart-data/usr3-pickup-viewpickupviewpanel-pickup-view-panel';
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
const { state, cancel, confirm,handleCtrlEvent } = new PickupView(ViewConfig).moduleInstall(props, emit);
</script>

<template>
    <IbizPickerUpViewLayout class="ibiz-pickup-view">
        <template v-slot:header-left>
          <IbizIconText class="ibiz-view__caption" size="large" :text="state.viewCaption" />
        </template>

            <Usr3PickupViewpickupviewpanelPickUpViewPanel
              :context="state.context"
              :rowEditState="state.rowEditState"
              :rowActiveMode="state.gridRowActiveMode"
              :showBusyIndicator="true"
              :viewParams="state.viewParams"
              :controlAction="state.controlsAction.pickupviewpanel"
              :viewSubject="state.viewSubject"
              @ctrlEvent="handleCtrlEvent"
            ></Usr3PickupViewpickupviewpanelPickUpViewPanel>
              <template v-slot:footer>
      <a-space class="ibiz-pickup-view--footer">
        <a-button @click="cancel">取消</a-button>
        <a-button @click="confirm">确认</a-button>
      </a-space>
    </template>
    </IbizPickerUpViewLayout>
</template>
<style lang="scss">
.ibiz-pickup-view {
  position: relative;
  .ibiz-pickup-view--footer {
    position: absolute;
    bottom: 20px;
    right: 35px;
  }
}
</style>