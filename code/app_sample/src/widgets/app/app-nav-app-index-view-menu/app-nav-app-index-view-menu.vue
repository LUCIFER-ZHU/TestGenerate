<script setup lang="ts">
import { Subject } from "rxjs";
import { ctrlState } from "./app-nav-app-index-view-menu-state";
import { IParam, IActionParam, MenuControl, IContext } from "@core";
interface Props {
  context: IContext;
  defaultView: string;
  collapsed: boolean;
  menuAlign: "LEFT" | "TOP" | "CENTER" | "TABEXP_LEFT" | "TABEXP_TOP" | "TABEXP_RIGHT" | "TABEXP_BOTTOM" | "NONE";
  viewParams?: IParam;
  viewSubject: Subject<IActionParam>;
}
const props = withDefaults(defineProps < Props > (), {
  menuAlign: "LEFT",
  collapsed: false,
});

interface CtrlEmit {
  (name: "ctrlEvent", value: IActionParam): void;
}
const emit = defineEmits <CtrlEmit> ();

const { state, onMenuSelect } = new MenuControl(ctrlState, props, emit).moduleInstall();

// 暴露内部状态及能力
defineExpose({ state, name: 'appmenu' });
</script>

<template>
  <div v-if="Object.is('CENTER', state.menuAlign)" class="app-menu app-menu--center">
  <a-card v-for="(menu,index) in state.menus" v-show="!menu.hidden" :key="index" class="app-menu__card" :bordered="false" :title="menu.caption">
   <a-space :size="24">
      <a-button v-for="item in menu.items" size="large" @click="onMenuSelect({key: item.name})">{{item.caption}}</a-button>
    </a-space>
  </a-card>
 </div>
  <a-menu v-else class="app-menu" v-model:openKeys="state.defaultOpens" v-model:selectedKeys="state.defaultSelect"
    :mode="Object.is('LEFT', state.menuAlign) ? 'inline' : 'horizontal'" @select="onMenuSelect">
    <AppMenuItem :items="state.menus" :collapsed="collapsed" />
  </a-menu>
</template>

<style scoped>

</style>