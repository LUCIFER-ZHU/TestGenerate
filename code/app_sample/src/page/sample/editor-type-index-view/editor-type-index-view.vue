<script setup lang="ts">
import { Subject } from 'rxjs'
import { Ref } from 'vue';
import { IndexView, IActionParam, IParam, IContext } from '@core';
import { ViewConfig } from './editor-type-index-view-config';
import { AppIndexView2Menu } from '@widgets/app/app-index-view2-menu';
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
const { state } = new IndexView(ViewConfig).moduleInstall(props, emit);
const collapsed: Ref<boolean> = ref(false);
const collapsedChange = () => {
  collapsed.value = !collapsed.value;
}
</script>

<template>
  <IbizDefaultIndexViewLayout class="ibiz-index-view" :menuAlign="state.menuAlign" :collapsed="collapsed">
    <template #caption>
      <div class="index-view-header">
        {{state.viewCaption}}
        <MenuUnfoldOutlined
          v-if="collapsed"
          class="trigger"
          @click="collapsedChange"
        />
        <MenuFoldOutlined v-else class="trigger" @click="collapsedChange" />
      </div>
    </template>
    <template #user>

    </template>
    <template #menu>
      <AppIndexView2Menu 
        :context="state.context"
        :collapsed="collapsed"
        :menuAlign="state.menuAlign"
        :defaultView="state.defaultView"
        :viewParams="state.viewParams"
        :viewSubject="state.viewSubject"
      ></AppIndexView2Menu>
    </template>
    <template #router>
      <router-view />
    </template>
  </IbizDefaultIndexViewLayout>
</template>

<style lang="scss">
.ibiz-index-view {
  .index-view-header {
    font-size: 18px;
    >.trigger:hover {
      color: #1890ff;
    }
  }
}
</style>