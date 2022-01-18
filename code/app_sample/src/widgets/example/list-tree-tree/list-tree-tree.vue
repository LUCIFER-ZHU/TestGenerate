<script setup lang="ts">
import { Subject } from 'rxjs';
import { IActionParam, IParam, ControlAction, TreeControl, IContext } from '@core';
import { ctrlState } from './list-tree-tree-state';

interface Props {
  context: IContext;
  multiple: boolean;
  selectedData: IParam[];
  selectFirstDefault: boolean;
  isBranchAvailable: boolean;
  viewParams?: IParam;
  controlAction: ControlAction;
  showBusyIndicator?: boolean;
  viewSubject: Subject<IActionParam>;
}

const props = withDefaults(defineProps<Props>(), {
  viewSubject: () => new Subject<IActionParam>(),
  showBusyIndicator: true,
  selectFirstDefault: false,
  isBranchAvailable: false
})

// emit声明
interface CtrlEmit {
  (name: "ctrlEvent", value: IActionParam): void;
}
const emit = defineEmits<CtrlEmit>();
  
// 安装功能模块，提供状态和能力方法
const { state, load, treeNodeSelect } = new TreeControl(ctrlState, props, emit).moduleInstall();

// 暴露内部状态及能力
defineExpose({ state, name: 'treeexpbar_tree' });
</script>

// TODO 树节点待支持图标和自定义绘制
<template>
  <a-tree
    class="app-tree"
    :tree-data="state.data"
    :load-data="load"
    :fieldNames="{ title: 'text', key: 'id' }"
    @select="treeNodeSelect">
      <template #title="{ text, id }">
        <div class="app-tree-node">
          <span class="tree-node__title">{{ text }}</span>
        </div>
      </template>
    </a-tree>
</template>