<script setup lang="ts">
import { Subject } from 'rxjs'
import { Ref } from 'vue';
import { IndexView, IActionParam, IParam } from '@ibiz-core';
import { ViewConfig } from './app-global-app-index-view-config';
import { AppFuncAppIndexViewMenu } from '@widgets/app/app-func-app-index-view-menu';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons-vue';
interface Props {
  context: IParam;
  viewParams?: IParam;
  openType?: "ROUTE" | "MODAL" | "EMBED";
  viewSubject?: Subject<IActionParam>;
}

const props = withDefaults(defineProps<Props>(), {
  viewSubject: () => new Subject<IActionParam>()
})

interface ViewEmit {
  (name: "viewEvent", value: IActionParam): void;
}

const emit = defineEmits<ViewEmit>();

// 安装功能模块，提供状态和能力方法
const { state } = new IndexView(ViewConfig).moduleInstall(props, emit);
const collapsed: Ref<boolean> = ref(false);
</script>

<template>
  <IbizDefaultIndexViewLayout class="ibiz-index-view" :menuAlign="state.menuAlign" :collapsed="collapsed">
    <template #header>
      <div class="index-view-header">
        {{state.viewCaption}}
        <MenuUnfoldOutlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <MenuFoldOutlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
      </div>
    </template>
    <template #user>

    </template>
    <template #menu>
      <AppFuncAppIndexViewMenu 
        :context="state.context"
        :collapsed="collapsed"
        :menuAlign="state.menuAlign"
        :defaultView="state.defaultView"
        :viewParams="state.viewParams"
        :viewSubject="state.viewSubject"
      ></AppFuncAppIndexViewMenu>
    </template>
    <template #content>
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