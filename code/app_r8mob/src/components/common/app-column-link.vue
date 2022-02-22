<script setup lang="ts">
import { deepCopy, EditorBase, IActionParam, IContext, IParam } from '@core';
interface ColumnLinkProps {

  /**
   * 表格行数据
   *
   * @type {IParam}
   * @memberof ColumnLinkProps
   */
  data: IParam;

  /**
   * 视图上下文
   *
   * @type {IContext}
   * @memberof ColumnLinkProps
   */
  context: IContext;

  /**
   * 视图参数
   *
   * @type {IParam}
   * @memberof ColumnLinkProps
   */
  viewParams: IParam;

  /**
   * 局部上下文导航参数
   *
   * @type {IParam}
   * @memberof ColumnLinkProps
   */
  localContext?: IParam;

  /**
   * 局部导航参数
   *
   * @type {IParam}
   * @memberof ColumnLinkProps
   */
  localParam?: IParam;

  /**
   * 链接视图
   *
   * @type {string}
   * @memberof ColumnLinkProps
   */
  linkView: string;

  /**
   * 值项
   *
   * @type {string}
   * @memberof ColumnLinkProps
   */
  valueItem: string;
}

const props = withDefaults(defineProps<ColumnLinkProps>(), {});
const { handleEditorNavParams } = new EditorBase();
const { navContext, navViewParam } = handleEditorNavParams(props);
interface EditorEmit {
  (name: 'editorEvent', value: IActionParam): void;
}
const openLinkView = ($event: any) => {
  $event.stopPropagation();
  if (!props.linkView && !props.data || !props.valueItem || !props.data[props.valueItem]) {
    return;
  }
  const view: any = App.getViewInfo(props.linkView);
  if (!view) {
    return;
  }
  const appEntity = App.getEntityInfo(view?.appEntityCodeName);
  const keyField: string = appEntity.keyField || 'keyField';
  let context = deepCopy(navContext);
  let viewParams = deepCopy(navViewParam);
  Object.assign(context,{keyField: props.data[props.valueItem]});
  const subject = App.getOpenViewService().openView(view, {context, viewParams});
  const subjectEvent = subject?.subscribe((data: any) => {
    if (data?.ret == 'OK' && data.resultData) {
      openViewClose(data.resultData);
    }
    subjectEvent?.unsubscribe();
  });
}

const openViewClose = (result: any) => {
  if (Array.isArray(result) && result.length > 0) {
    // 视图关闭回调
  }
}
</script>

<template>
  <a class="app-column-link" @click="openLinkView">
    <slot />
  </a>
</template>
