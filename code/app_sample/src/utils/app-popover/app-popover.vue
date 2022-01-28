<script setup lang="ts">
import { IActionParam, IParam, ViewDetail } from '@core';
import { Subject } from 'rxjs';
import { Ref, ref, h } from 'vue';
interface AppPopoverProps {
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
   * @description 是否全屏
   */
  isFullscreen:boolean;

  /**
   * @description 模态参数
   */
  option?: IParam;

  /**
   * @description 鼠标移出回调
   */
  mouseout: Function;
}

const props = withDefaults(defineProps<AppPopoverProps>(), {
  context: {},
  viewParams: {},
});

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
let placement: Ref<string> = ref('bottom');

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
    placement.value = props.view.placement || 'bottom';
    if (props.isFullscreen) {
      Object.assign(style, { height: 'auto' });
    } else {
      if (!props.view.width || props.view.width === 0 || Object.is(props.view.width, '0px')) {
        width.value = 300;
        Object.assign(style, { width: width.value + 'px' });
      } else {
        width.value = props.view.width;
        Object.assign(style, { width: width.value + 'px' });
      }
      if (props.view.height && !Object.is(props.view.height, '0px')) {
        height.value = props.view.height;
        Object.assign(style, { height: height.value + 'px' });
      } else {
        height.value = 300;
        Object.assign(style, { height: height.value + 'px' });
      }
    }
  }
});

/**
 * 视图关闭
 */
const close = (result: any) => {
  if (result && Array.isArray(result) && result.length > 0) {
    Object.assign(tempResult, { ret: 'OK' }, { datas: JSON.parse(JSON.stringify(result)) });
  }
  props.subject?.next(tempResult);  
};

/**
 * 视图数据变化
 */
const viewDataChange = (result: any) => {
  tempResult = { ret: '' };
  if (result && Array.isArray(result) && result.length > 0) {
    Object.assign(tempResult, { ret: 'OK' }, { datas: JSON.parse(JSON.stringify(result)) });
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
 * 显示隐藏切换回调
 */
const onVisibleChange = ($event: any) => {
  handleShowState($event);
};

/**
 * 处理数据，向外抛值
 */
const handleShowState = ($event: any) => {
  if (props.subject && tempResult) {
    props.subject.next(tempResult);
  }
};

/** 
 * 处理视图事件
 */
const handelViewEvent = (actionParam: IActionParam) => {
  const { tag, action, data } = actionParam;
  switch (action) {
    case 'viewDataChange':
      viewDataChange(data);
      break;
    case 'close':
      close(data);
      break;
  }
};

/** 
 * 点击事件
 */
const click = (e:any) => {
  e.stopPropagation()
}

/** 
 * 鼠标移出事件
 */
const mouseout = (e:any) => {
  props.mouseout();
}

</script>

<template>
      <div :style="style" class="app-popover" @click="click" @mouseleave="mouseout">
      <component
        :is="viewName"
        class="app-popover-component"
        :width="width"
        :height="height"
        :context="context"
        :viewParams="viewParams"
        :viewDefaultUsage="false"
        :noViewCaption="true"
        @viewEvent="handelViewEvent($event)"
        @viewDataActivated="viewDataActivated($event)"
        @close="close($event)"
      ></component>
      </div>
</template>