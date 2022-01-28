<script setup lang="ts">
import { IParam, EditorBase, IContext } from "@core";
import { onBeforeMount, ref, Ref } from "vue";
interface SpanProps {
  /**
   * 当前值
   *
   * @type {*}
   * @memberof AppSpan
   */
  value: string;

  /**
   * 传入表单数据
   *
   * @type {*}
   * @memberof AppSpan
   */
  data?: IParam;

  /**
   * 数据类型
   *
   * @type {string}
   * @memberof AppSpan
   */
  dataType?: string;

  /**
   * 单位名称
   *
   * @type {string}
   * @memberof AppSpan
   */
  unitName?: string;

  /**
   * 精度
   *
   * @type {number}
   * @memberof AppSpan
   */
  precision?: number;

  /**
   * 数据值格式化
   *
   * @type {string}
   * @memberof AppSpan
   */
  valueFormat?: string;

  /**
   * 当前表单项名称
   *
   * @type {*}
   * @memberof AppSpan
   */
  name?: string;

  /**
   * @description 代码表标识
   */
  codeListTag?: string;

  /**
   * @description 代码表类型
   */
  codeListType?: string;

  /**
   * @description 上下文
   */
  context?: IContext;

  /**
   * @description 视图参数
   */
  viewParams?: IParam;

  /**
   * @description 局部上下文
   */
  localContext?: IParam;

  /**
   * @description 局部视图参数
   */
  localParam?: IParam;
}

const props = withDefaults(defineProps<SpanProps>(), {
  unitName: "",
  precision: 2,
});
const { handleEditorNavParams, loadCodeListData } = new EditorBase();
const { navContext, navViewParam } = handleEditorNavParams(props);
let text: Ref<string> = ref("");
let textFormat: Ref<string> = ref("");
onBeforeMount(() => {
  if (props.codeListTag) {
    loadCodeListData(
      props.codeListTag as string,
      navContext,
      navViewParam
    ).then((codeListData: IParam[]) => {
      const item: IParam | undefined = codeListData.find((item) =>
        Object.is(item.value, props.value)
      );
      if (item) {
        text.value = item.label;
      } else {
        text.value = props.value;
      }
    });
  } else {
    text.value = props.value;
  }
  if (props.valueFormat) {
    textFormat.value = props.valueFormat;
  } else if (
    Object.is(props.dataType, "DATETIME") ||
    Object.is(props.dataType, "DATE") ||
    Object.is(props.dataType, "TIME") ||
    Object.is(props.dataType, "SMALLDATETIME")
  ) {
    textFormat.value = "YYYY-MM-DD HH:mm:ss";
  } else if (Object.is(props.dataType, "NUMBER")) {
    textFormat.value = `#${props.unitName}`;
  }
});
</script>

<template>
  <div :class="['app-editor-container', 'app-span', `app-span-${name}`]">
    <span v-format="textFormat">{{text}}</span>
  </div>
</template>

<style scoped>
.app-editor-container {
  width: fit-content;
}
</style>
