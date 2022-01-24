import { MDViewState } from "@core";

/**
 * @description 树视图状态
 * @export
 * @interface TreeViewState
 * @extends {MDViewState}
 */
export interface TreeViewState extends MDViewState {

  /**
   * @description 支持快速搜索
   * @type {boolean}
   * @memberof TreeViewState
   */
  enableQuickSearch: boolean;

  /**
   * @description 默认展开搜索表单 
   * @type {boolean}
   * @memberof TreeViewState
   */
  expandSearchForm: boolean;
}