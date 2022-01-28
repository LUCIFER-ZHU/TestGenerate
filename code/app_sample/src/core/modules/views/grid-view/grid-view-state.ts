import { MDViewState } from "@core";

/**
 * @description 表格视图状态
 * @export
 * @interface GridViewState
 * @extends {MDViewState}
 */
export interface GridViewState extends MDViewState {

  /**
   * @description 表格行激活模式
   * @type {(0 | 1 | 2)} 不激活 | 单击激活 | 双击激活
   * @memberof GridViewState
   */
  gridRowActiveMode: 0 | 1 | 2;

  /**
   * @description 表格行编辑状态
   * @type {boolean}
   * @memberof GridViewState
   */
  rowEditState: boolean;

  /**
   * @description 支持快速搜索
   * @type {boolean}
   * @memberof GridViewState
   */
  enableQuickSearch: boolean;

  /**
   * @description 默认展开搜索表单 
   * @type {boolean}
   * @memberof GridViewState
   */
  expandSearchForm: boolean;
}