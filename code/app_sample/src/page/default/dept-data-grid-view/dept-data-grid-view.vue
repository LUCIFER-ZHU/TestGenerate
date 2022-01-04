<script setup lang="ts">
import { Subject } from 'rxjs';
import { GridView, IActionParam, IParam } from '@ibiz-core';
import { ViewConfig } from './dept-data-grid-view-config';

// props声明和默认值处理
interface Props {
  context: IParam;
  viewParams?: IParam;
  openType?: "ROUTE" | "MODAL" | "EMBED";
  viewSubject?: Subject<IActionParam>;
}

const props = withDefaults(defineProps<Props>(), {
  // 设定默认值,可选属性可以在这初始化
  viewSubject: () => new Subject<IActionParam>()
})

// emit声明
interface ViewEmit {
  (name: "viewEvent", value: IActionParam): void;
}

const emit = defineEmits<ViewEmit>();

// 安装功能模块，提供状态和能力方法
const { state, handleCtrlEvent } = new GridView(ViewConfig).moduleInstall(props);

</script>

<template>
  <IbizGridViewLayout class="ibiz-grid-view">
    <template v-slot:caption>
      <IbizIconText class="ibiz-view__caption" size="large" :text="state.viewCaption" />
    </template>
    <template v-slot:toolbar>
      <IbizToolbar
        mode="button"
        name="gridviewtoolbar"
        :actionModel="state.viewToolbarModel"
        @toolbarEvent="handleToolbarEvent"/>
    </template>
  </IbizGridViewLayout>
</template>

<style lang="scss">
.ibiz-grid-view {
  height: 100%;
  width: 100%;
}
</style>