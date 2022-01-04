<script setup lang="ts">
import { IParam } from "@ibiz-core";
interface Props{
  items: IParam[],
  collapsed: boolean,
}
const props = withDefaults(defineProps<Props>(), {
  collapsed: false,
});
</script>

<template>
  <template v-for="item in items" :key="item.name">
    <template v-if="!item.items">
      <a-menu-item v-if="!item.hidden" :key="item.name" class="ibiz-menu-item">
        <template #icon>
          <IbizIconText :iconClass="item.iconClass" :imgPath="item.imgPath" :text="collapsed && item.caption[0]"/>
        </template>
        {{item.caption}}
      </a-menu-item>
    </template>
    <template v-else>
      <a-sub-menu v-if="!item.hidden" :key="item.name" class="ibiz-menu-item">
        <template #icon>
          <IbizIconText :iconClass="item.iconClass" :imgPath="item.imgPath" :text="collapsed && item.caption[0]"/>
        </template>
        <template #title>{{item.caption}}</template>
        <IbizMenuItem :items="item.items" />
      </a-sub-menu>
    </template>
  </template>
</template>

<style lang="scss">
.ibiz-icon-text {
  display: flex !important;
  align-items: center;
}
.ant-menu-submenu-popup {
  .ibiz-menu-item {
    display: flex !important;
  }
  .ant-menu-submenu-title {
    display: flex !important;
    width: 100%;
  }
}
.ant-menu-inline-collapsed {
  .ibiz-menu-item {
    position: relative;
    .ibiz-icon-text {
      position: absolute;
      right: calc(50% - 8px);
    }
  }
}
</style>