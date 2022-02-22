<script setup lang="ts">
import { ILayoutOpts, LayoutTool, styleObj2Str } from "@core";
import { isObject } from "qx-util";

interface AppColProps {
  layoutOpts?: ILayoutOpts,
  noRoot?: boolean,
  visible?: boolean,
}

const props = withDefaults(defineProps<AppColProps>(), {
  noRoot: false,
  visible: true,
});

// 使用布局逻辑获得响应式的layout对象
let layout: any = null;
if (props.layoutOpts) {
  layout = LayoutTool.useLayout(toRef(props as any, "layoutOpts"));
}

// 插槽类名和插槽样式，只有不绘制根元素的时候需要传递给插槽
// 在template里写会丢失响应性，故封一个计算属性。
const attrs = useAttrs()
let slotStyle = computed(() => {
  // 有根元素无需传样式给插槽
  if(!props.noRoot){
    return ''
  }
  let result = '';
  if (attrs.style) {
    result += isObject(attrs.style) ? styleObj2Str(attrs.style) : attrs.style;
  }
  if (layout?.value?.colStyle) {
    result += layout.value.colStyle;
  }
  result += props.visible == true ? "" : "display: none;";
  return result;
});
// 插槽类名
let slotClass = computed(() => {
  // 有根元素无需传类名给插槽
  if(!props.noRoot){
    return ''
  }
  let result = 'app-col ';
  result += attrs.class;
  if (props.layoutOpts?.parentLayout == 'FLEX') {
    result += " app-col--flex";
  }
  return result;
})


</script>

<template>
  <template v-if="layoutOpts">
    <!-- 有布局模式配置的 -->
    <template v-if="layoutOpts.parentLayout == 'FLEX'">
      <template v-if="noRoot">
        <!-- Flex布局,没根元素时，需要把相关样式和类型传给插槽 -->
        <slot :slotStyle="slotStyle" :slotClass="slotClass"></slot>
      </template>
      <div v-else v-show="visible" :style="layout.colStyle" class="app-col app-col--flex">
        <slot :slotStyle="slotStyle" :slotClass="slotClass"></slot>
      </div>
    </template>
    <a-col
      v-else
      v-show="visible"
      :lg="layout.colGridOpts.lg"
      :xs="layout.colGridOpts.md"
      :md="layout.colGridOpts.md"
      :sm="layout.colGridOpts.sm"
      class="app-col app-col--grid"
    >
      <slot :slotStyle="slotStyle" :slotClass="slotClass"></slot>
    </a-col>
  </template>
  <template v-else>
    <!-- 无布局模式配置，根据noRoot输出根元素 -->
    <template v-if="noRoot">
      <slot :slotStyle="slotStyle" :slotClass="slotClass"></slot>
    </template>
    <div v-else class="app-col">
      <slot :slotStyle="slotStyle" :slotClass="slotClass"></slot>
    </div>
  </template>
</template>

<style lang="scss">
</style>