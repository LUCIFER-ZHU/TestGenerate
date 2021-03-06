<script setup lang="ts">
import { IParam, ViewDetail } from '@core';
import { Subject } from 'rxjs';
import { Ref, ref } from 'vue';
interface AppDrawerProps {
  /**
   * @description 视图
   */
  view: ViewDetail;

  /**
   * @description 视图上下文参数
   */
  context?: any;

  /**
   * @description 视图参数
   */
  viewParams?: any;

  /**
   * @description 数据传递对象
   */
  subject?: Subject<any>;

  /**
   * @description 关闭回调
   */
  close: Function;

  /**
   * @description 是否全屏
   */
  isFullscreen:boolean;

  /**
   * @description 模态参数
   */
  option?: IParam;
}

const props = withDefaults(defineProps<AppDrawerProps>(), {
  context: {},
  viewParams: {},
});

/**
 * 是否显示
 */
let isVisible: Ref<boolean> = ref(false);

/**
 * 临时结果
 */
let tempResult = { ret: '' };

/**
 * 视图名称
 */
let viewName: Ref<string> = ref('');

/**
 * 抽屉的方向
 */
let placement: Ref<string> = ref('right');

/**
 * 视图标题
 */
let title: string = '';

/**
 * 视图宽度
 */
let width: Ref<number> = ref(0);

/**
 * 视图高度
 */
let height: Ref<number> = ref(0);

/**
 * 视图样式
 */
let style: any = {};

/**
 * 暴露subject
 */
const getSubject = () => {
  return props.subject;
};

/**
 * Vue生命周期beforeMount
 */
onBeforeMount(() => {
  if (props.view) {
    viewName.value = props.view.name as string;
    title = props.view.title || '';
    placement.value = props.view.placement || 'right';
    if (props.isFullscreen) {
      Object.assign(style, { height: 'auto' });
    } else {
      if (!props.view.width || props.view.width === 0 || Object.is(props.view.width, '0px')) {
        let viewWidth = 600;
        if (window && window.innerWidth > 100) {
          if (window.innerWidth > 100) {
            viewWidth = window.innerWidth - 100;
          } else {
            viewWidth = window.innerWidth;
          }
        }
        width.value = viewWidth;
      } else {
        width.value = props.view.width;
      }
      if (props.view.height && !Object.is(props.view.height, '0px')) {
        Object.assign(style, { height: props.view.height + 'px' });
        height.value = props.view.height;
      } else {
        height.value = 800;
      }
    }
  }
});

/**
 * Vue生命周期mounted
 */
onMounted(() => {
  isVisible.value = true;
});

/**
 * 视图关闭
 */
const close = (result: any) => {
  if (result && Array.isArray(result) && result.length > 0) {
    Object.assign(tempResult, { ret: 'OK' }, { resultData: result });
  }
  isVisible.value = false;
};

/**
 * 视图数据变化
 */
const viewDataChange = (result: any) => {
  tempResult = { ret: '' };
  if (result && Array.isArray(result) && result.length > 0) {
    Object.assign(tempResult, { ret: 'OK' }, { resultData: result });
  }
};

/**
 * 视图数据激活
 */
const viewDataActivated = (result: any) => {
  if (result && Array.isArray(result) && result.length > 0) {
    close(result);
  }
};

/**
 * 模态显示隐藏切换回调
 */
const onVisibleChange = ($event: any) => {
  handleShowState($event);
  props.close(tempResult);
};

/**
 * 处理数据，向外抛值
 */
const handleShowState = ($event: any) => {
  if (props.subject && tempResult) {
    props.subject.next(tempResult);
  }
};
</script>

<template>
  <a-drawer
    ref="curDrawer"
    class="app-drawer"
    v-model:visible="isVisible"
    :placement="placement"
    :title="title"
    :footer="null"
    :maskClosable="true"
    :destroyOnClose="true"
    :width="width"
    :height="height"
    :bodyStyle="style"
    @close="onVisibleChange($event)"
  >
    <component
      :is="viewName"
      class="app-drawer-view-component"
      :width="width"
      :height="height"
      :context="context"
      :viewParams="viewParams"
      :viewDefaultUsage="false"
      :noViewCaption="true"
      @viewDataChange="viewDataChange($event)"
      @viewDataActivated="viewDataActivated($event)"
      @close="close($event)"
      :ref="viewName"
    ></component>
  </a-drawer>
</template>