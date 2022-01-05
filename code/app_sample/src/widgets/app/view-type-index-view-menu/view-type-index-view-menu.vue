<script setup lang="ts">
import { Subject } from "rxjs";
import { CtrlConfig } from "./view-type-index-view-menu-config";
import { IParam, IActionParam, MenuControl, IContext } from "@core";
interface Props{
  context: IContext;
  defaultView: string;
  collapsed: boolean;
  menuAlign: "LEFT" | "TOP" | "CENTER" | "TABEXP_LEFT" | "TABEXP_TOP" | "TABEXP_RIGHT" | "TABEXP_BOTTOM" | "NONE";
  viewParams?: IParam;
  viewSubject: Subject<IActionParam>;
}
const props = withDefaults(defineProps<Props>(), {
  menuAlign: "LEFT",
  collapsed: false,
});

interface CtrlEmit {
  (name: "ctrlEvent", value: IActionParam): void;
}
const emit = defineEmits<CtrlEmit>();

const { state, menuSelect } = new MenuControl(CtrlConfig).moduleInstall(props, emit);
</script>

<template>
  <a-menu
    class="ibiz-menu"
    v-model:openKeys="state.defaultOpens"
    v-model:selectedKeys="state.defaultSelect"
    :mode="Object.is('LEFT', state.menuAlign) ? 'inline' : 'horizontal'"
    @select="menuSelect">
    <IbizMenuItem :items="state.menus" :collapsed="collapsed"/>
  </a-menu>
</template>

<style scoped>

</style>