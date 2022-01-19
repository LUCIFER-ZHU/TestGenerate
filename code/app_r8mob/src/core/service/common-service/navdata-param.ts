import { IParam } from '@core';

export interface INavDataParam {
  /**
   * @description 视图标题
   * @type {*}
   * @memberof INavDataParam
   */
  title: string;

  /**
   * @description 视图数据
   * @type {*}
   * @memberof INavDataParam
   */
  data: IParam;

  /**
   * @description 视图路径
   * @type {string}
   * @memberof INavDataParam
   */
  path: string;

  /**
   * @description 视图打开模式（"ROUTE" | "MODAL" | "EMBED"）
   * @type {("ROUTE" | "MODAL" | "EMBED")}
   * @memberof INavDataParam
   */
  openType: "ROUTE" | "MODAL" | "EMBED";

  /**
   * @description 视图类型
   * @type {string}
   * @memberof INavDataParam
   */
  viewType: string;

  /**
   * @description 视图标识
   * @type {string}
   * @memberof INavDataParam
   */
  tag: string;

  /**
   * @description 数据标识
   * @type {*}
   * @memberof INavDataParam
   */
  key: string;
}
