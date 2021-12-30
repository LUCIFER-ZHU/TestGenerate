<script setup lang="ts">
import { EditorBase, IActionParam } from "@ibiz-core";
import { onBeforeMount, ref, Ref } from "vue";
interface RawProps {
  /**
   * @description 编辑器名称
   */
  name: string;

  /**
   * @description 编辑器值
   */
  value: string;

  /**
   * @description 输入框类型
   */
  contentType: "RAW" | "HTML" | "IMAGE" | "MARKDOWN";

  /**
   * @description 上下文
   */
  contextProp?: any;

  /**
   * @description 视图参数
   */
  viewParamsProp?: any;

  /**
   * 图标
   *
   * @type {string}
   * @memberof AppRawItem
   */
  icon?: string;

  /**
   * 标题
   *
   * @type {string}
   * @memberof AppRawItem
   */
  caption?: string;
}

interface EditorEmit {
  (name: "editorEvent", value: IActionParam): void;
}

const props = withDefaults(defineProps<RawProps>(), {
  contentType: "RAW",
});
const emit = defineEmits<EditorEmit>();
const { handleEditorNavParams } = new EditorBase();
const content: Ref<string> = ref("");
const { navContext, navViewParam } = handleEditorNavParams(props);

const initContent = () => {
  const data = navContext;
  if (props.value) {
    const items = props.value.match(/{{(.+?)\}}/g);
    if (items) {
      items.forEach((item: string) => {
        content.value = props.value.replace(
          /{{(.+?)\}}/,
          eval(item.substring(2, item.length - 2))
        );
      });
    }
    content.value = props.value.replaceAll("&lt;", "<");
    content.value = props.value.replaceAll("&gt;", ">");
    content.value = props.value.replaceAll("&amp;nbsp;", " ");
    content.value = props.value.replaceAll("&nbsp;", " ");
  }
  return content;
};

onBeforeMount(() => {
  initContent();
});
</script>

<template>
  <div :class="['app-editor-container', `app-raw-${name}`]">
    <div class="raw-caption" v-if="caption">{{ caption }}</div>
    <div v-if="Object.is(contentType, 'RAW')">
      {{ content }}
    </div>
    <div v-else-if="Object.is(contentType, 'HTML')" v-html="content" />
    <div v-else-if="Object.is(contentType, 'IMAGE')">
      <img v-if="value" :src="value" />
      <a-icon v-else :type="icon || ''" />
    </div>
  </div>
</template>

<style scoped>
.app-editor-container {
  text-align: left;
}
</style>
