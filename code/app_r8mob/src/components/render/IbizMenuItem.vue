<script setup lang="ts">
import { IParam } from "@core";
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
    display: flex;
    align-items: center;
    justify-content: center;
    .ibiz-icon-text {
      position: absolute;
      .ibiz-icon-text__text {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        line-height: 18px;
        text-align: center;
        font-size: 12px;
        border: 1px solid var(--ibiz-color-info);
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