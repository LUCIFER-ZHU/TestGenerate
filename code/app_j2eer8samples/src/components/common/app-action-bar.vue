<script setup lang="ts">
import { IActionParam, IParam, IContext, UIUtil } from '@core';
import { Subject, Subscription } from 'rxjs';

interface Props {
  uiService: any;
  items: IParam;
  viewSubject?: Subject<IActionParam>;
}
const props = withDefaults(defineProps<Props>(), {});

interface appActionBarEmit {
  (name: 'itemClick', value: IParam): void;
}

const emit = defineEmits<appActionBarEmit>();

/**
 * 视图状态事件
 */
let viewStateEvent: Subscription | undefined = undefined;

/**
 * 数据
 */
let value:any = null;

/**
 * Vue生命周期mounted
 */
onMounted(() => {
  if (props.viewSubject) {
    viewStateEvent = props.viewSubject.subscribe(({ tag, action, data }) => {
      if (!Object.is(tag, 'all-portlet')) {
        return;
      }
      if (Object.is(action, 'loadmodel')) {
        value = data
        UIUtil.calcActionItemAuthState(data, props.items, props.uiService);
      }
    });
  }
});

/**
 * Vue生命周期unmounted
 */
onUnmounted(() => {
  if (viewStateEvent) {
    viewStateEvent.unsubscribe();
  }
});

/**
 * 处理点击事件
 */
const handleClick = (item: any, $event: any) => {
  let _data = {
      tag: item.viewlogicname,
      params: value,
      event: $event,
      data: item
  };
  emit("itemClick", _data);
};

</script>

<template>
  <div class="app-actionbar">
    <div
      class="app-actionbar-item"
      v-for="(item,index) in Object.values(items)"
      :key="index"
    >
      <a-badge
        v-if="item.counterService&&item.counterService.counterData"
        v-show="item.visabled"
        :count="item.counterService.counterData[item.counterId]"
        type="primary"
      >
        <a-button
          :disabled="item.disabled"
          @click="handleClick(item, $event)"
        >
          <i
            v-if="item.icon"
            style="margin-right: 5px;"
            :class="item.icon"
          ></i>
          {{item.actionName}}
        </a-button>
      </a-badge>
      <a-button
        v-show="item.visabled"
        :disabled="item.disabled"
        v-else
        @click="handleClick(item, $event)"
      >
        <i
          v-if="item.icon"
          style="margin-right: 5px;"
          :class="item.icon"
        ></i>
        {{item.actionName}}
      </a-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-actionbar {
  padding: 12px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  .app-actionbar-item {
    margin-right: 10px;
    margin-bottom: 10px;
  }
}
</style>