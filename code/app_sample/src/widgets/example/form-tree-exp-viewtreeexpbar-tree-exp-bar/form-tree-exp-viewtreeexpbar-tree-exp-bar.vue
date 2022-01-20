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
  context: IContext;
  viewParams?: IParam;
  controlAction: ControlAction;
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
const { state, onCtrlEvent, xData } = new TreeExpBarControl(ctrlState, props, emit).moduleInstall();

// 暴露内部状态及能力
defineExpose({ state, name: 'treeexpbar' });
</script>

<template>
  <a-layout
    class="app-tree-exp-bar"
    >
    <a-layout-sider>
      <FormTree
        ref="xData"
        :context="state.context"
        :viewParams="state.viewParams"
        :viewSubject="state.viewSubject"
        :isBranchAvailable="true"
        @ctrlEvent="onCtrlEvent"
      ></FormTree>
    </a-layout-sider>
    <a-layout>
      <ExampleFormDetailEditView
        v-if="state.selection.viewName && state.selection.viewName === 'ExampleFormDetailEditView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </ExampleFormDetailEditView>
      <ExampleFormCssAndIconEditView
        v-if="state.selection.viewName && state.selection.viewName === 'ExampleFormCssAndIconEditView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </ExampleFormCssAndIconEditView>
      <ExampleFormEvnetAndInvokeCustomView
        v-if="state.selection.viewName && state.selection.viewName === 'ExampleFormEvnetAndInvokeCustomView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </ExampleFormEvnetAndInvokeCustomView>
      <ExampleFormLayoutEditView
        v-if="state.selection.viewName && state.selection.viewName === 'ExampleFormLayoutEditView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </ExampleFormLayoutEditView>
      <ExampleFormLogicEditView
        v-if="state.selection.viewName && state.selection.viewName === 'ExampleFormLogicEditView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </ExampleFormLogicEditView>
      <ExampleFormAdvGroupEditView
        v-if="state.selection.viewName && state.selection.viewName === 'ExampleFormAdvGroupEditView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </ExampleFormAdvGroupEditView>
      <ExampleFormValueFormatEditView
        v-if="state.selection.viewName && state.selection.viewName === 'ExampleFormValueFormatEditView'"
        :viewDefaultUsage="false"
        :viewdata="JSON.stringify(state.selection.context)"
        :viewParams="JSON.stringify(state.selection.viewParams)">
      </ExampleFormValueFormatEditView>
    </a-layout>
  </a-layout>
</template>