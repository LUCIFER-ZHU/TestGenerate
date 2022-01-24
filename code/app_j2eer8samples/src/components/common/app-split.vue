<template>
  <div ref="split" class="app-split">
    <div v-if="isHorizontal" class="app-split-horizontal">
      <div class="app-split-pane left-pane" :style="{ right: `${100 - offset}%` }">
        <slot name="left"/>
      </div>
      <div
        class="app-split-trigger app-split-trigger-horizontal"
        :style="{ left: `${offset}%`, width: `${triggerSize}px` }"
        @mousedown="handleMouseDown"
      >
        <span class="trigger-icon">
        </span>
      </div>
      <div class="app-split-pane right-pane" :style="{ left: triggerSize > 0 ? `calc(${offset}% + ${triggerSize}px)` : `${offset}%` }">
        <slot name="right"/>
      </div>
    </div>
    <div v-else class="app-split-vertical">
      <div class="app-split-pane top-pane" :style="{ bottom: `${100 - offset}%` }">
        <slot name="top"/>
      </div>
      <div
        class="app-split-trigger app-split-trigger-vertical"
        :style="{ top: `${offset}%`, height: `${triggerSize}px` }"
        @mousedown="handleMouseDown">
        <span class="trigger-icon">
        </span>
      </div>
      <div class="app-split-pane bottom-pane" :style="{ top: triggerSize > 0 ? `calc(${offset}% + ${triggerSize}px)` : `${offset}%` }">
        <slot name="bottom"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';
interface IProps {
  /** 
   * horizontal 横向
   * vertical 垂直
   */
  mode?: 'horizontal' | 'vertical',

  /** 
   * 位置，0-1表示百分比，也可以是具体数值
   */
  modelValue: number | string,

  /** 
   * 最小阈值
   */
  min?: number | string,

  /** 
   * 最大阈值
   */
  max?: number | string,

  /** 
   * 分割栏大小
   */
  triggerSize?: number;
}

//  ref指向
const split = ref(null);

//  参数
const props = withDefaults(defineProps < IProps > (), {
  mode: 'horizontal',
  modelValue: 0.5,
  triggerSize: 6,
  min: '150px',
  max: '150px'
});

//  当前分割值
const currentValue: Ref<string | number> = ref(props.modelValue);

//  当前最小分割阈值
const currentMin: Ref<string | number> = ref(props.min ? props.min : '150px');

//  当前最大分割阈值
const currentMax: Ref<string | number> = ref(props.max ? props.min : '150px');

// 偏移量
const offset: Ref<number> = ref(0);

//  是否横向布局
const isHorizontal: Ref<boolean> = computed(() => {
  return props.mode === 'horizontal';
});

//  偏移量值
const offsetSize: Ref<string> = computed(() => {
  return isHorizontal.value ? 'offsetWidth' : 'offsetHeight';
});

//  值是否是PX
const valueIsPx = computed(() => {
  return typeof props.modelValue === 'string';
});

//  起始偏移量
const startOffset: Ref<number> = ref(0);

//  保存旧偏移量
const oldOffset: Ref<number | string> = ref(0);

//  是否移动状态
const isMoving: Ref<boolean> = ref(false);

//  抛出事件集合
interface EmitEvents {
  (event: 'move-start'): void;
  (event: 'moving', mouseEvent: MouseEvent): void;
  (event: 'move-end'): void;
  (event: 'update:modelValue', value: string | number): void;
}

//  抛出事件
const emit = defineEmits<EmitEvents>();

//  px转百分比
const px2Percent = (numerator: any, denominator: any) => {
  return parseFloat(numerator) / parseFloat(denominator);
}

//  获取分割组件
const getSplitCom = (): any => {
  return unref(split);
}

//  计算阈值
const getComputedThresholdValue = (type: 'min' | 'max'): string | number => {
  const splitCom = getSplitCom();
  const size = splitCom[offsetSize.value];
  if (valueIsPx.value) {
    return typeof props[type] === 'string' ? props[type] : size * (props[type] as number);
  } else {
    return typeof props[type] === 'string' ? px2Percent(props[type], size) : props[type];
  }
}

//  计算偏移量
const computeOffset = () => {
  nextTick(() => {
    const splitCom = getSplitCom();
    currentMin.value = getComputedThresholdValue('min');
    currentMax.value = getComputedThresholdValue('max');
    offset.value = (valueIsPx.value ? px2Percent(props.modelValue, splitCom[offsetSize.value]) : props.modelValue as number) * 10000 / 100;
  })
}

//  处理鼠标按下
const handleMouseDown = (event: MouseEvent) => {
  startOffset.value = isHorizontal.value ? event.pageX : event.pageY;
  oldOffset.value = props.modelValue;
  isMoving.value = true;
  on('mousemove', handleMove);
  on('mouseup', handleMouseUp);
  emit('move-start');
}

//  处理鼠标松开
const handleMouseUp = (event: MouseEvent) => {
  isMoving.value = false;
  off('mousemove', handleMove);
  off('mouseup', handleMouseUp);
  emit('move-end');
}

//  处理鼠标移动
const handleMove = (event: MouseEvent) => {
  let pageOffset = isHorizontal.value ? event.pageX : event.pageY;
  let _offset = pageOffset - startOffset.value;
  const splitCom = getSplitCom();
  let outerWidth = splitCom[offsetSize.value];
  let value: any = valueIsPx.value ? `${parseFloat(oldOffset.value as string) + _offset}px` : (px2Percent(outerWidth * Number(oldOffset.value) + _offset, outerWidth));
  let anotherValue = getAnotherOffset(splitCom, value);
  //  计算最小值
  if (parseFloat(value) <= parseFloat(currentMin.value as string))
    value = getMax(value, currentMin.value);
  //  计算最大值
  if (parseFloat(anotherValue) <= parseFloat(currentMax.value as string))
    value = getAnotherOffset(splitCom, getMax(anotherValue, currentMax.value));
  //  atMin、atMax分别表示是否已达到最小阈值最大阈值
  (event as any).atMin = props.modelValue === currentMin.value;
  (event as any).atMax = valueIsPx.value ? getAnotherOffset(splitCom, props.modelValue) === currentMax.value : getAnotherOffset(splitCom, props.modelValue).toFixed(5) === (currentMax.value as any).toFixed(5);
  emit('update:modelValue', value);
  emit('moving', event);
}

//  获取另一侧偏移量
const getAnotherOffset = (splitCom: any, value: any) => {
  let res: any = 0;
  if (valueIsPx.value) res = `${splitCom[offsetSize.value] - parseFloat(value)}px`;
  else res = 1 - value;
  return res;
}

//  获取最大值
const getMax = (value1: any, value2: any) => {
  if (valueIsPx.value)
    return `${Math.max(parseFloat(value1), parseFloat(value2))}px`;
  else
    return Math.max(value1, value2);
}

//  启用监听事件
const on = (event: string, handler: Function) => {
  if (event && handler instanceof Function) {
    document.addEventListener(event as any, handler as any);
  }
}

//  关闭监听事件
const off = (event: string, handler: Function) => {
  if (event && handler instanceof Function) {
    document.removeEventListener(event as any, handler as any, false);
  }
}

//  组件挂载
onMounted(() => {
  nextTick(() => {
    computeOffset();
  });
  window.addEventListener('resize', () => {
    computeOffset();
  });
})

//  监听参数，实现双向绑定
watch(() => props.modelValue, (val: string | number, oldVal: string | number) => {
  if (val !== currentValue.value) {
    computeOffset();
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', () => {
    computeOffset();
  });
})

</script>

<style lang="scss">

</style>
