<script setup lang="ts">
import { ILayoutOpts } from "@core";
import { LayoutTool } from "@core/modules/common/layout-tool";

interface AppPortletCardProps {
  layoutOpts: ILayoutOpts;
  // 是否是容器，是容器的话需要在默认插槽外层适配布局
  isContainer?: boolean;
  showCaption?: boolean;
  title?: string;
  imgPath?: string;
  iconClass?: string;
}

const props = withDefaults(defineProps<AppPortletCardProps>(), {
  isContainer: false,
});

// 使用布局逻辑获得响应式的layout对象
const layout = LayoutTool.useLayout(toRef(props, "layoutOpts"));

</script>

<template>
  <AppCol class="app-portletCard" :layoutOpts="layoutOpts">
    <div class="app-portletCard__head">
      <div class="app-portletCard__headLeft">
        <slot name="header-left">
          <AppIconText v-if="showCaption" :text="title" :imgPath="imgPath" :iconClass="iconClass"/>
        </slot>
      </div>
      <div class="app-portletCard__headerRight">
        <slot name="header-right"></slot>
      </div>
    </div>
    <div class="app-portletCard__body">
      <AppRow v-if="isContainer" :layoutOpts="layoutOpts">
        <slot></slot>
      </AppRow>
      <template v-else >
        <slot></slot>
      </template>
    </div>
  </AppCol>
</template>

<style lang="scss">
</style>