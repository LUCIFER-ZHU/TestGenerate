import { GridViewState, IActionParam, IParam, MDView } from '@core';

/**
 * @description 表格视图
 * @export
 * @class GridView
 * @extends {MDView}
 */
export class GridView extends MDView {

/**
 * 视图状态数据
 *
 * @type {GridViewState}
 * @memberof GridView
 */
public declare state: GridViewState;

  /**
   * 当前视图表格部件
   *
   * @type {IParam}
   * @memberof GridView
   */
  public declare grid: IParam;

  /**
   * @description 处理视图初始化
   *
   * @memberof GridView
   */
  public useViewInit() {
    super.useViewInit();
    // 初始化搜索表格引用
    this.grid = ref(null);
  }

  /**
   * 处理部件事件
   *
   * @param {IActionParam} actionParam
   * @memberof MDView
   */
  public handleCtrlEvent(actionParam: IActionParam) {
    const { tag, action, data } = actionParam;
    if (Object.is(tag, 'grid')) {
      this.MDCtrlEvent(action, data);
    }
    super.handleCtrlEvent(actionParam);
  }

  /**
   *  获取多数据部件
   *
   * @return {*}  {*}
   * @memberof GridView
   */
  public getMDCtrl(): any {
    if (this.grid.value) {
      return this.grid.value;
    } else {
      return null;
    }
  }

  /**
   * @description 安装视图所有功能模块的方法
   * @return {*} 
   * @memberof GridView
   */
  public moduleInstall() {
    const superParams = super.moduleInstall();
    return {
      ...superParams,
      grid: this.grid
    };
  }
}
