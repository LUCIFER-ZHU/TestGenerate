<script setup lang="ts">
import { Subject } from 'rxjs';
import { EditView, IActionParam, IParam, IContext } from '@core';
import { viewState } from './example-quick-edit-view-state';
import { HiddenFormItemForm } from '@widgets/example/hidden-form-item-form';

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
  (name: "onViewEvent", value: IActionParam): void;
}

const emit = defineEmits<ViewEmit>();

// 安装功能模块，提供状态和能力方法
const { state, form, onToolbarEvent } = new EditView(viewState, props, emit).moduleInstall();

</script>

<template>
  <AppEditViewLayout :class="['app-edit-view', state.viewSysCss]">
    <template v-slot:caption>
      <AppIconText
        class="app-view__caption"
        size="large"
        :subCaption="state.subCaption"
        :showCaptionBar="state.showCaptionBar"
        :text="state.viewCaption"
      />
    </template>
    <template v-slot:toolbar>
      <AppToolbar
        mode="button"
        name="quickeditviewtoolbar"
        :actionModel="state.toolbar"
        @onToolbarEvent="onToolbarEvent"/>
    </template>
    <HiddenFormItemForm
      ref="form"
      :showBusyIndicator="true"
      :context="state.context"
      :viewParams="state.viewParams"
      :controlAction="state.form.action"
      :viewSubject="state.viewSubject"
    ></HiddenFormItemForm>
  </AppEditViewLayout>
</template>

<style lang="scss">
</style>