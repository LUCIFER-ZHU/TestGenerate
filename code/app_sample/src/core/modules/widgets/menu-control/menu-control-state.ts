import { IParam, ControlStateBase } from '@core';

/**
 * @description 菜单部件state
 * @export
 * @interface MenuControlState
 * @extends {ControlStateBase}
 */
export interface MenuControlState extends ControlStateBase {

  /**
   * @description 菜单集合
   * @type {IParam[]}
   * @memberof MenuControlState
   */
  menus: IParam[];

  /**
   * @description 应用功能集合
   * @type {IParam[]}
   * @memberof MenuControlState
   */
  funcs: IParam[];

  /**
   * @description 菜单默认展开集合
   * @type {string[]}
   * @memberof MenuControlState
   */
  defaultOpens: string[];

  /**
   * @description 菜单默认选中集合
   * @type {string[]}
   * @memberof MenuControlState
   */
  defaultSelect: string[];

  /**
   * @description 权限服务
   * @type {IParam}
   * @memberof MenuControlState
   */
  authService: IParam;

  /**
   * @description 默认打开视图
   * @type {string}
   * @memberof MenuControlState
   */
  defaultView: string;

  /**
   * @description 菜单方向
   * @type {("LEFT" | "TOP" | "CENTER" | "TABEXP_LEFT" | "TABEXP_TOP" | "TABEXP_RIGHT" | "TABEXP_BOTTOM" | "NONE")}
   * @memberof MenuControlState
   */
  menuAlign: "LEFT" | "TOP" | "CENTER" | "TABEXP_LEFT" | "TABEXP_TOP" | "TABEXP_RIGHT" | "TABEXP_BOTTOM" | "NONE";
}
