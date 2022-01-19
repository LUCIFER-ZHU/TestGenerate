<script setup lang="ts">
import { Subject } from 'rxjs'
import { Ref } from 'vue';
import { IndexView, IActionParam, IParam, IContext } from '@core';
import { viewState } from './app-index-view-state';
import { AppIndexViewMenu } from '@widgets/app/app-index-view-menu';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons-vue';
interface Props {
  context: IContext;
  viewParams?: IParam;
  openType?: "ROUTE" | "MODAL" | "EMBED";
  viewSubject?: Subject<IActionParam>;
}

const props = withDefaults(defineProps<Props>(), {
  openType:'ROUTE',
  viewSubject: () => new Subject<IActionParam>()
})

interface ViewEmit {
  (name: "viewEvent", value: IActionParam): void;
}

const emit = defineEmits<ViewEmit>();

// 安装功能模块，提供状态和能力方法
const { state, menu } = new IndexView(viewState, props, emit).moduleInstall();
const collapsed: Ref<boolean> = ref(false);
const collapsedChange = () => {
  collapsed.value = !collapsed.value;
}
</script>

<template>
  <AppDefaultIndexViewLayout :class="['app-index-view', state.viewSysCss]" :showCaptionBar="state.showCaptionBar" :menuAlign="state.menuAlign" :collapsed="collapsed">
    <template #caption>
      <div class="index-view-header">
        {{state.viewCaption}}
        <MenuUnfoldOutlined
          v-if="collapsed && Object.is(state.menuAlign,'LEFT')"
          class="trigger"
          @click="collapsedChange"
        />
        <MenuFoldOutlined v-else class="trigger" @click="collapsedChange" />
      </div>
    </template>
    <template #user>
        <AppUser/>
    </template>
    <template #menu>
      <AppIndexViewMenu
        ref="menu" 
        :context="state.context"
        :collapsed="collapsed"
        :menuAlign="state.menuAlign"
        :defaultView="state.defaultView"
        :viewParams="state.viewParams"
        :viewSubject="state.viewSubject"
      ></AppIndexViewMenu>
    </template>
    <template #router>
      <router-view />
    </template>
  </AppDefaultIndexViewLayout>
</template>

<style lang="scss">
.app-index-view {
  .index-view-header {
    font-size: 18px;
    >.trigger:hover {
      color: #1890ff;
    }
  }
}
</style>