<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './list-portlet-state';
import { PortletControl, IActionParam, IParam, IContext } from '@core';


interface Props {
  name:string,
  context: IContext;
  viewParams?: IParam;
  viewSubject: Subject<IActionParam>;
  showCaption?: boolean;
  title?: string;
  imgPath?: string;
  iconClass?: string;
}

const props = withDefaults(defineProps < Props > (), {
  viewSubject: () => new Subject < IActionParam > (),
  title: '实体列表',
  showCaption: 'true',
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
  <AppPortletCard 
     class="app-portlet"
     :title="title"
     :iconClass="iconClass"
     :imgPath="imgPath"
     :showCaption="showCaption"
      style="height: 300.0px;"
  >
    <template #header-right>
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
    </template>
      </AppPortletCard>
</template>
<style lang="scss">
</style>