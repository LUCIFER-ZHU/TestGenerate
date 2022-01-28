/**
 * @description 行为参数
 * @export
 * @interface IActionParam
 */
export interface IActionParam {

  /**
   * @description 标识（视图名称、部件名称、编辑器名称，统一使用codename）
   * @type {string}
   * @memberof IActionParam
   */
  tag: string;

  /**
   * @description 触发行为
   * @type { string }
   * @memberof IActionParam
   */
  action: string;

  /**
   * @description 数据
   * @type {*}
   * @memberof IActionParam
   */
  data: any;
}