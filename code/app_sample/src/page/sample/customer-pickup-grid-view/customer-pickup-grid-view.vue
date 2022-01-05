<script setup lang="ts">
import { Subject } from 'rxjs';
import { PickupGridView, IActionParam, IParam, IContext } from '@core';
import { ViewConfig } from './customer-pickup-grid-view-config';

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
const { state } = new PickupGridView(ViewConfig).moduleInstall(props, emit);
</script>

<template>
  <IbizDefaultViewLayout class="ibiz-pickup-grid-view">
    <template v-slot:header-left>
      <IbizIconText class="ibiz-view__caption" size="large" :text="state.viewCaption" />
    </template>
    <template v-slot:footer>
      <a-space class="ibiz-pickup-grid-view--footer">
        <a-button @click="cancel">取消</a-button>
        <a-button @click="confirm">确认</a-button>
      </a-space>
    </template>
  </IbizDefaultViewLayout>
</template>
<style lang="scss">
.ibiz-pickup-grid-view {
  position: relative;
  .ibiz-pickup-grid-view--footer {
    position: absolute;
    bottom: 20px;
    right: 35px;
  }
}
</style>