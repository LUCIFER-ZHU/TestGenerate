<script setup lang="ts">
import { IActionParam, IParam } from "@core";
interface RawProps {
  /**
   * @description 编辑器名称
   */
  name: string;

  /**
   * @description 编辑器值
   */
  value?: string;

  /**
   * @description 输入框类型
   */
  contentType?: "RAW" | "HTML" | "IMAGE" | "MARKDOWN";

  /**
   * @description 输入框类型
   */
  iconClass?: string;

  /**
   * @description 输入框类型
   */
  imgPath?: string;

  /**
   * @description 标题
   */
  caption?: string;

  /**
   * @description 直接内容样式
   */
  rawStyle?: IParam;
}

interface EditorEmit {
  (name: "editorEvent", value: IActionParam): void;
}

const props = withDefaults(defineProps<RawProps>(), {
  contentType: "RAW",
});
const emit = defineEmits<EditorEmit>();

</script>

<template>
  <div :class="['app-raw-item', 'app-raw', `app-raw-${name}`]">
    <div class="raw-caption" v-if="caption" :style="rawStyle">{{ caption }}</div>
    <div v-if="Object.is(contentType, 'RAW')">
      {{ value }}
    </div>
    <div v-else-if="Object.is(contentType, 'HTML')" v-html="value" :style="rawStyle" />
    <div v-else-if="Object.is(contentType, 'IMAGE')" :style="rawStyle">
      <AppIconText :iconClass="iconClass" :imgPath="imgPath"/>
    </div>
  </div>
</template>

<style scoped>

</style>
