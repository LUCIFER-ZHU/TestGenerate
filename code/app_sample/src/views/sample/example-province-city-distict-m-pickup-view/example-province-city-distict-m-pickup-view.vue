<script setup lang="ts">
import { Subject } from 'rxjs';
import { RightOutlined, LeftOutlined, DoubleRightOutlined, DoubleLeftOutlined } from '@ant-design/icons-vue';
import { MPickupView, IActionParam, IParam, IContext } from '@core';
import { viewState } from './example-province-city-distict-m-pickup-view-state';
import { ProvinceCityDistictMPickupViewpickupviewpanelPickupViewPanel } from '@widgets/example/province-city-distict-m-pickup-viewpickupviewpanel-pickup-view-panel';
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
const mpickupView = new MPickupView(viewState, props, emit).moduleInstall();
const { state, onCancel, onConfirm, onCtrlEvent, useSelections, onMoveRight, onMoveLeft, onAllMoveRight, onAllMoveLeft } = mpickupView;
</script>

<template>
    <AppMpickupViewLayout :class="['app-mpickup-view', state.viewSysCss]">
      <template #caption>
        <AppIconText class="app-view__caption" size="large" :text="state.viewCaption" />
      </template>
      <a-row class="app-mpickup-view__split">
        <a-col :span="18">
            <ProvinceCityDistictMPickupViewpickupviewpanelPickupViewPanel
              name="pickupviewpanel"
              :context="state.context"
              :rowEditState="state.rowEditState"
              :rowActiveMode="state.gridRowActiveMode"
              :showBusyIndicator="true"
              :viewParams="state.viewParams"
              :controlAction="state.pickupviewpanel.action"
              :viewSubject="state.viewSubject"
              :parent="mpickupView"
              @onCtrlEvent="onCtrlEvent"
            ></ProvinceCityDistictMPickupViewpickupviewpanelPickupViewPanel>
        </a-col>
        <a-col :span="1" class="split__buttons">
          <a-space direction="vertical">
            <a-button @click="onMoveRight"><right-outlined /></a-button>
            <a-button @click="onMoveLeft"><left-outlined /></a-button>
            <a-button @click="onAllMoveRight"><double-right-outlined /></a-button>
            <a-button @click="onAllMoveLeft"><double-left-outlined /></a-button>
          </a-space>
        </a-col>
        <a-col :span="5" class="split__right">
          <div v-for="(item,index) in useSelections" :key="index">{{item.srfmajortext}}</div>
        </a-col>
      </a-row>
      <template v-slot:footer>
        <a-space class="app-mpickup-view--footer">
          <a-button @click="onConfirm">确认</a-button>
          <a-button @click="onCancel">取消</a-button>
        </a-space>
      </template>
    </AppMpickupViewLayout>
</template>