import { ControlAction, ControlPropsBase } from "@core";

/**
 * @description 实体部件的props
 * @export
 * @interface MainControlProps
 * @extends {ControlPropsBase}
 */
export interface MainControlProps extends ControlPropsBase {

  /**
   * @description 是否显示处理提示(外部控制，优先级高于state)
   * @type {boolean}
   * @memberof MainControlProps
   */
  showBusyIndicator?: boolean;

  /**
   * @description 部件行为
   * @type {ControlAction}
   * @memberof MainControlProps
   */
  controlAction: ControlAction;
}