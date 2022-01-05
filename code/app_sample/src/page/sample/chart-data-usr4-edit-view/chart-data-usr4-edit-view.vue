<script setup lang="ts">
import { Subject } from 'rxjs';
import { EditView, IActionParam, IParam, IContext } from '@core';
import { ViewConfig } from './chart-data-usr4-edit-view-config';
import { Main_3Form } from '@widgets/chart-data/main-3-form';

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
const { state, handleToolbarEvent } = new EditView(ViewConfig).moduleInstall(props, emit);

</script>

<template>
  <IbizEditViewLayout :class="['ibiz-edit-view', state.viewSysCss]">
    <template v-slot:caption>
      <IbizIconText
        class="ibiz-view__caption"
        size="large"
        :subCaption="state.subCaption"
        :showCaptionBar="state.showCaptionBar"
        :text="state.viewCaption"
      />
    </template>
    <template v-slot:toolbar>
      <IbizToolbar
        mode="button"
        name="usr4editviewtoolbar"
        :actionModel="state.viewToolbarModel"
        @toolbarEvent="handleToolbarEvent"/>
    </template>
    <Main_3Form
      :showBusyIndicator="true"
      :context="state.context"
      :viewParams="state.viewParams"
      :controlAction="state.controlsAction.form"
      :viewSubject="state.viewSubject"
    ></Main_3Form>
  </IbizEditViewLayout>
</template>

<style lang="scss">
</style>