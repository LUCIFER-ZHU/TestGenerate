<script setup lang="ts">
import { Subject } from 'rxjs';
import { IActionParam, IParam, ControlAction, TreeExpBarControl, IContext } from '@core';
import { ctrlState } from './form-tree-exp-viewtreeexpbar-tree-exp-bar-state';
import { FormTree} from '@widgets/example/form-tree';
import ExampleFormDetailEditView from '@views/sample/example-form-detail-edit-view';
import ExampleFormCssAndIconEditView from '@views/sample/example-form-css-and-icon-edit-view';
import ExampleFormEvnetAndInvokeCustomView from '@views/sample/example-form-evnet-and-invoke-custom-view';
import ExampleFormLayoutEditView from '@views/sample/example-form-layout-edit-view';
import ExampleFormLogicEditView from '@views/sample/example-form-logic-edit-view';
import ExampleFormAdvGroupEditView from '@views/sample/example-form-adv-group-edit-view';
import ExampleFormValueFormatEditView from '@views/sample/example-form-value-format-edit-view';

interface Props {
  name:string,
  parent: IParam;
  context: IContext;
  viewParams?: IParam;
  showBusyIndicator?: boolean;
  viewMode?: number;
  viewSubject: Subject<IActionParam>;
}

const props = withDefaults(defineProps < Props > (), {
  viewSubject: () => new Subject < IActionParam > (),
  viewMode: 0,
  showBusyIndicator: true,
});

interface CtrlEmit {
  (name: "ctrlEvent", value: IActionParam): void;
}

const emit = defineEmits <CtrlEmit> ();

// 安装功能模块，提供状态和能力方法
const { name, state, onCtrlEvent, xData } = new TreeExpBarControl(ctrlState, props, emit).moduleInstall();

// 暴露内部状态及能力
defineExpose({ name, state });
</script>

<template>
  <div class="app-tree-exp-bar">
    <AppSplit v-model="state.split">
      <template #left>
        <div v-if="state.showTitleBar" class="tree-exp-bar-title">
          <span>{{ state.title }}</span>
        </div>
        <div class="tree-exp-bar-body">
          
          <FormTree
            ref="xData"
            name="treeexpbar_tree"
            :context="state.context"
            :viewParams="state.viewParams"
            :viewSubject="state.viewSubject"
            :selectFirstDefault="true"
            :isBranchAvailable="true"
            :parent="parent"
            @ctrlEvent="onCtrlEvent"
          ></FormTree>
        </div>
      </template>
      <template #right>
        <ExampleFormDetailEditView
          v-if="state.selection.viewName && state.selection.viewName === 'ExampleFormDetailEditView'"
          class="tree-exp__nav-view"
          :viewDefaultUsage="false"
          :context="state.selection.context"
          :viewParams="state.selection.viewParams">
        </ExampleFormDetailEditView>
        <ExampleFormCssAndIconEditView
          v-if="state.selection.viewName && state.selection.viewName === 'ExampleFormCssAndIconEditView'"
          class="tree-exp__nav-view"
          :viewDefaultUsage="false"
          :context="state.selection.context"
          :viewParams="state.selection.viewParams">
        </ExampleFormCssAndIconEditView>
        <ExampleFormEvnetAndInvokeCustomView
          v-if="state.selection.viewName && state.selection.viewName === 'ExampleFormEvnetAndInvokeCustomView'"
          class="tree-exp__nav-view"
          :viewDefaultUsage="false"
          :context="state.selection.context"
          :viewParams="state.selection.viewParams">
        </ExampleFormEvnetAndInvokeCustomView>
        <ExampleFormLayoutEditView
          v-if="state.selection.viewName && state.selection.viewName === 'ExampleFormLayoutEditView'"
          class="tree-exp__nav-view"
          :viewDefaultUsage="false"
          :context="state.selection.context"
          :viewParams="state.selection.viewParams">
        </ExampleFormLayoutEditView>
        <ExampleFormLogicEditView
          v-if="state.selection.viewName && state.selection.viewName === 'ExampleFormLogicEditView'"
          class="tree-exp__nav-view"
          :viewDefaultUsage="false"
          :context="state.selection.context"
          :viewParams="state.selection.viewParams">
        </ExampleFormLogicEditView>
        <ExampleFormAdvGroupEditView
          v-if="state.selection.viewName && state.selection.viewName === 'ExampleFormAdvGroupEditView'"
          class="tree-exp__nav-view"
          :viewDefaultUsage="false"
          :context="state.selection.context"
          :viewParams="state.selection.viewParams">
        </ExampleFormAdvGroupEditView>
        <ExampleFormValueFormatEditView
          v-if="state.selection.viewName && state.selection.viewName === 'ExampleFormValueFormatEditView'"
          class="tree-exp__nav-view"
          :viewDefaultUsage="false"
          :context="state.selection.context"
          :viewParams="state.selection.viewParams">
        </ExampleFormValueFormatEditView>
      </template>
    </AppSplit>
  </div>
</template>

<style lang="scss" scoped>
.app-tree-exp-bar {
  width: 100%;
  height: 100%;
}
</style>