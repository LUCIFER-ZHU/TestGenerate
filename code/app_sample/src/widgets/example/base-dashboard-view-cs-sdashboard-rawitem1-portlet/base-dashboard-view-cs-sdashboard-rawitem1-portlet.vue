<script setup lang="ts">
import { Subject } from 'rxjs';
import { ctrlState } from './base-dashboard-view-cs-sdashboard-rawitem1-portlet-state';
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
  <div class="app-portlet el-alert el-alert--info is-light" >
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
          <app-raw
        :name="state.controlName"
        :contentType="state.contentType"
        :iconClass="state.iconcls"
        :imgPath="state.imagePath"
        style=""
        :value="`<p>数据看板常用于系统首页，部件可定制，支持以下部件：&lt;/br&gt;<br />实体列表、实体图表、实体视图、工具栏、操作栏、网页部件</p>`"
      ></app-raw>>
  </div>
  </div>
</template>
<style lang="scss">
</style>