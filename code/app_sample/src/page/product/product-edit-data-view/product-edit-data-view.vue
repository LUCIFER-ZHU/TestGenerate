<script setup lang="ts">
import { Subject } from 'rxjs';
import { EditView, IActionParam, IParam } from '@ibiz-core';
import { ViewConfig } from './product-edit-data-view-config';
import { DataForm } from '@widgets/product/data-form';

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
const { state, handleToolbarEvent } = new EditView(ViewConfig).moduleInstall(props);

</script>

<template>
  <IbizDefaultViewLayout :class="['ibiz-edit-view', state.viewSysCss]">
    <template v-slot:header-left>
      <IbizIconText
        class="ibiz-view__caption"
        size="large"
        :subCaption="state.subCaption"
        :showCaptionBar="state.showCaptionBar"
        :text="state.viewCaption"
      />
    </template>
      <template v-slot:header-right>
      <IbizToolbar
        :toolbarModel="state.editdataviewtoolbar"
        @toolbarEvent="handleToolbarEvent"
        :context="state.context"
        :viewParams="state.viewParams"/>
    </template>
      <DataForm
        :showBusyIndicator="true"
        :context="state.context"
        :viewParams="state.viewParams"
        :controlAction="state.controlsAction.Data"
        :viewSubject="state.viewSubject"
      ></DataForm>
  </IbizDefaultViewLayout>
</template>

<style lang="scss">
.ibiz-edit-view {
  height: 100%;
  width: 100%;
}
</style>