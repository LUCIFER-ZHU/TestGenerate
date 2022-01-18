import { IParam, MainControlProps } from "@core";

/**
 * @description 多数据部件的props
 * @export
 * @interface MDControlProps
 * @extends {MainControlProps}
 */
export interface MDControlProps extends MainControlProps {

  /**
   * @description 是否多选
   * @type {boolean}
   * @memberof MDControlProps
   */
  isMultiple: boolean;

  /**
   * @description 行编辑状态
   * @type {boolean}
   * @memberof MDControlProps
   */
  rowEditState: boolean;

  /**
   * @description 行激活模式
   * @type {(0 | 1 | 2)} 不激活 | 单击激活 | 双击激活
   * @memberof MDControlProps
   */
  rowActiveMode: 0 | 1 | 2;

  /**
   * @description 选中数据
   * @type {IParam[]}
   * @memberof MDControlProps
   */
  selectedData: IParam[];

  /**
   * @description 是否默认选中第一项数据
   * @type {boolean}
   * @memberof MDControlProps
   */
  isSelectDefault: boolean;
}