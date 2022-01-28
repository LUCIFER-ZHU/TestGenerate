<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './mob-dash-board-for-chart-portlet-state';
import { PortletControl, IActionParam, IParam, IContext } from '@core';
// 引入视图start
// 引入视图end
// 引入菜单start
// 引入菜单end


interface Props {
  name:string,
  context: IContext;
  viewParams?: IParam;
  viewSubject: Subject<IActionParam>;
}

const props = withDefaults(defineProps < Props > (), {
  viewSubject: () => new Subject < IActionParam > (),
})

// emit声明
interface CtrlEmit {
  (name: "ctrlEvent", value: IActionParam): void;
}

const emit = defineEmits <CtrlEmit> ();

// 安装功能模块，提供状态和能力方法
const { name, state, onViewEvent, onCtrlEvent, handleItemClick, handleActionClick } = new PortletControl(ctrlState, props, emit).moduleInstall();

// 暴露内部状态及能力
defineExpose({ name, state });
</script>
<template>
  <div class="app-portlet" >
  <template v-if="state.showTitleBar && state.title">
    <div class='portlet-title'>
      <span>
        <i v-if="state.iconcls" :class="state.iconcls" />
        <img v-if="state.imagePath" :src="state.imagePath" />
{{state.title}}
      </span>
      <span class="portlet-action" v-if="state.actionBarModelData && state.portletType !== 'ACTIONBAR'">
        <template v-for="(item,index) in Object.values(state.actionBarModelData)" :key="index">
          <a-tooltip>
            <template #title>
              {{item.actionName}}
            </template>
            <a @click="handleActionClick(item,$event)">
              <i v-if="item.icon" :class="item.icon" />
              <img v-if="item.imagePath" :src="item.imagePath"/>
              {{item.actionName}}
            </a>
          </a-tooltip>
        </template>  
      </span>
    </div>
  </template>
  <div :class="{'portlet-with-title': state.showTitleBar, 'portlet-without-title': !state.showTitleBar}">
      </div>
  </div>
</template>
<style lang="scss">
</style>