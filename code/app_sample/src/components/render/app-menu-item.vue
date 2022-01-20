<script setup lang="ts">
import { IParam } from "@core";
interface Props{
  items: IParam[],
  collapsed?: boolean,
}
const props = withDefaults(defineProps<Props>(), {
  collapsed: false,
});
</script>

<template>
  <template v-for="item in items" :key="item.name">
    <template v-if="!item.items">
      <a-menu-item v-if="!item.hidden" :key="item.name" :class="['app-menu-item',item.itemSysCss]">
        <template #icon>
          <AppIconText :iconClass="item.iconClass" :imgPath="item.imgPath" :text="collapsed ? item.caption[0] : undefined"/>
        </template>
        <a-tooltip :title="item.tooltip">{{item.caption}}</a-tooltip>
      </a-menu-item>
    </template>
    <template v-else>
      <a-sub-menu v-if="!item.hidden" :key="item.name" :class="['app-menu-item',item.itemSysCss]">
        <template #icon>
          <AppIconText :iconClass="item.iconClass" :imgPath="item.imgPath" :text="collapsed ? item.caption[0] : undefined"/>
        </template>
        <template #title><a-tooltip :title="item.tooltip">{{item.caption}}</a-tooltip></template>
        <AppMenuItem :items="item.items" />
      </a-sub-menu>
    </template>
  </template>
</template>

<style lang="scss">
.app-icon-text {
  display: flex !important;
  align-items: center;
}
.ant-menu-submenu-popup {
  .app-menu-item {
    display: flex !important;
  }
  .ant-menu-submenu-title {
    display: flex !important;
    width: 100%;
  }
}
.ant-menu-inline-collapsed {
  .app-menu-item {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    .app-icon-text {
      position: absolute;
      .app-icon-text__text {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        line-height: 18px;
        text-align: center;
        font-size: 12px;
        border: 1px solid var(--app-color-info);
      }
    }
  }
  .ant-menu-submenu-title {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>