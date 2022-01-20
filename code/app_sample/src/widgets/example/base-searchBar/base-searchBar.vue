
<script setup lang="ts">
import { Subject } from 'rxjs';
import { CtrlConfig } from './base-searchBar-config';
import { SearchBarControl, IActionParam, IParam, IContext, ControlAction, deepCopy } from '@core';

interface Props {
  controlAction: ControlAction;
  viewSubject: Subject<IActionParam>;
}

const props = withDefaults(defineProps<Props>(), {

})

// emit声明
interface CtrlEmit {
  (name: "ctrlEvent", value: IActionParam): void;
}

const emit = defineEmits<CtrlEmit>();

// 安装功能模块，提供状态和能力方法
const { state } = new SearchBarControl(CtrlConfig).moduleInstall(props, emit);

// 暴露内部状态及能力
defineExpose({ state, name: 'searchbar' });
</script>
<template>
<div class="search-bar">
  <AppFilterTree :datas="state.filterItems" :fields="state.filterFields"/>
</div>
</template>
<style lang="scss">

</style>