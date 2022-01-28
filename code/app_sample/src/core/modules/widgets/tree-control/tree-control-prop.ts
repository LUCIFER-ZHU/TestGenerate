import { IParam, MainControlProps } from "@core";

/**
 * @description 树部件props
 * @export
 * @interface TreeControlProps
 * @extends {MainControlProps}
 */
export interface TreeControlProps extends MainControlProps {
  /**
   * @description 是否只处理子节点
   * @type {boolean}
   * @memberof TreeControlProps
   */
  isBranchAvailable: boolean;

  /**
 * @description 是否多选
 * @type {boolean}
 * @memberof TreeControlProps
 */
  multiple: boolean;

  /**
   * @description 选中数据
   * @type {IParam[]}
   * @memberof TreeControlProps
   */
  selectedData: IParam[];

  /**
   * @description 是否默认选中第一项数据
   * @type {boolean}
   * @memberof TreeControlProps
   */
  selectFirstDefault: boolean;
}