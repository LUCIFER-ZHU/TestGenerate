<script setup lang="ts">
import { Subject } from 'rxjs';
import { IActionParam, IParam, ControlAction, TreeControl, IContext } from '@core';
import { CtrlConfig } from './mob-tree-tree-config';

interface Props {
  context: IContext;
  multiple: boolean;
  selectedData: IParam[];
  selectFirstDefault: boolean;
  viewParams?: IParam;
  controlAction: ControlAction;
  showBusyIndicator?: boolean;
  viewSubject: Subject<IActionParam>;
}

const props = withDefaults(defineProps<Props>(), {
  viewSubject: () => new Subject<IActionParam>(),
  showBusyIndicator: true,
  selectFirstDefault: false,
})

// emit声明
interface CtrlEmit {
  (name: "ctrlEvent", value: IActionParam): void;
}
const emit = defineEmits<CtrlEmit>();
// 安装功能模块，提供状态和能力方法
const { state, load } = new TreeControl(CtrlConfig).moduleInstall(props, emit);
</script>
<template>
  <a-tree
    class="ibiz-tree"
    :tree-data="state.data">
  </a-tree>
</template>