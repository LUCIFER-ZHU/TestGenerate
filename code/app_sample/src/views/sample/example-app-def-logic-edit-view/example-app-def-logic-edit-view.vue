<script setup lang="ts">
import { Subject } from 'rxjs';
import { EditView, IActionParam, IParam, IContext } from '@core';
import { viewState } from './example-app-def-logic-edit-view-state';
import { AppDEFLogicForm } from '@widgets/example/app-def-logic-form';

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
const editView = new EditView(viewState, props, emit).moduleInstall();
const { state, form, onToolbarEvent, onCtrlEvent } = editView;

</script>

<template>
  <AppEditViewLayout :class="['app-edit-view', state.viewSysCss]" :showCaptionBar="state.showCaptionBar">
    <template v-slot:caption>
      <AppIconText
        class="app-view__caption"
        size="large"
        :subCaption="state.subCaption"
        :text="state.viewCaption"
      />
    </template>
    <AppDEFLogicForm
      ref="form"
      name="form"
      :showBusyIndicator="true"
      :context="state.context"
      :viewParams="state.viewParams"
      :controlAction="state.form.action"
      :viewSubject="state.viewSubject"
      :parent="editView"
      @ctrlEvent="onCtrlEvent"
    ></AppDEFLogicForm>
  </AppEditViewLayout>
</template>

<style lang="scss">
</style>