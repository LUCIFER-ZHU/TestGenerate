import { ControlPropsBase, IParam } from "@core";

/**
 * @description 菜单部件props
 * @export
 * @interface MenuControlProps
 * @extends {ControlPropsBase}
 */
export interface MenuControlProps extends ControlPropsBase {

  /**
   * @description 菜单方向
   * @type {("LEFT" | "TOP" | "CENTER" | "TABEXP_LEFT" | "TABEXP_TOP" | "TABEXP_RIGHT" | "TABEXP_BOTTOM" | "NONE")}
   * @memberof MenuControlProps
   */
  menuAlign: "LEFT" | "TOP" | "CENTER" | "TABEXP_LEFT" | "TABEXP_TOP" | "TABEXP_RIGHT" | "TABEXP_BOTTOM" | "NONE";

  /**
   * @description 默认视图
   * @type {string}
   * @memberof MenuControlProps
   */
  defaultView?: string;

  /**
   * @description 菜单收缩状态
   * @type {boolean}
   * @memberof MenuControlProps
   */
  collapsed: boolean;
}