import { IParam, MainControlProps } from "@ibiz-core";

/**
 * @description 表格部件的props
 * @export
 * @interface GridControlProps
 * @extends {MainControlProps}
 */
export interface GridControlProps extends MainControlProps {

  /**
   * @description 是否多选
   * @type {boolean}
   * @memberof GridControlProps
   */
  multiple: boolean;

  /**
   * @description 行编辑状态
   * @type {boolean}
   * @memberof GridControlProps
   */
  rowEditState: boolean;

  /**
   * @description 行激活模式
   * @type {(0 | 1 | 2)} 不激活 | 单击激活 | 双击激活
   * @memberof GridControlProps
   */
  rowActiveMode: 0 | 1 | 2;

  /**
   * @description 选中数据
   * @type {IParam[]}
   * @memberof GridControlProps
   */
  selectedData: IParam[];

  /**
   * @description 是否默认选中第一项数据
   * @type {boolean}
   * @memberof GridControlProps
   */
  selectFirstDefault: boolean;
}