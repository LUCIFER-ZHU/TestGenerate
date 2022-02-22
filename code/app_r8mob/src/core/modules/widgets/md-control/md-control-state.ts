import { ControlVOBase, IParam, MainControlState } from '@core';

/**
 * @description 多数据部件状态
 * @export
 * @interface MDControlState
 * @extends {MainControlState}
 */
export interface MDControlState extends MainControlState {

  /**
   * @description 导出项
   * @type {IParam[]}
   * @memberof MDControlState
   */
  exportItems?: IParam[];

  /**
   * @description 多数据部件数据
   * @type {IParam[]}
   * @memberof MDControlState
   */
  items: ControlVOBase[];

  /**
   * @description 是否多选
   * @type {boolean}
   * @memberof MDControlState
   */
  isMultiple: boolean;

  /**
   * @description 行编辑状态
   * @type {boolean}
   * @memberof MDControlState
   */
  rowEditState: boolean;

  /**
   * @description 行激活模式
   * @type {(0 | 1 | 2)} 不激活 | 单击激活 | 双击激活
   * @memberof MDControlState
   */
  rowActiveMode: 0 | 1 | 2;

  /**
   * @description 选中数据
   * @type {IParam[]}
   * @memberof MDControlState
   */
  selectedData: IParam[];

  /**
   * @description 选中行keys
   * @type {string[]}
   * @memberof MDControlState
   */
  selectedRowKeys: string[];

  /**
   * @description 是否默认选中第一条数据
   * @type {boolean}
   * @memberof MDControlState
   */
  selectFirstDefault: boolean;

  /**
   * @description 是否单选
   * @type {boolean}
   * @memberof MDControlState
   */
  isSingleSelect: boolean;
}
