import { ControlAction, ControlStateBase, IParam } from "@core";

/**
 * @description 实体部件状态
 * @export
 * @interface MainControlState
 * @extends {ControlStateBase}
 */
export interface MainControlState extends ControlStateBase {

  /**
   * @description 是否显示处理提示
   * @type {boolean}
   * @memberof MainControlState
   */
  showBusyIndicator?: boolean;

  /**
   * @description 部件行为
   * @type {ControlAction}
   * @memberof MainControlState
   */
  controlAction: ControlAction;

  /**
   * @description 部件服务
   * @type {IParam}
   * @memberof MainControlState
   */
  controlService: IParam;

  /**
   * @description UI服务
   * @type {IParam}
   * @memberof MainControlState
   */
  UIService: IParam;

  /**
   * @description 应用实体名称
   * @type {string}
   * @memberof MainControlState
   */
  appDeCodeName: string;

  /**
   * @description 应用实体逻辑名称
   * @type {string}
   * @memberof MainControlState
   */
  appDeLogicName: string;

  /**
   * @description 应用实体主键属性codeName
   * @type {string}
   * @memberof MainControlState
   */
  appDeKeyFieldName: string;

  /**
   * @description 应用实体主信息属性codeName
   * @type {string}
   * @memberof MainControlState
   */
  appDeMajorFieldName: string;
}