import { GridViewProps, GridViewState, MainView } from '@core';

/**
 * @description 表格视图
 * @export
 * @class GridView
 * @extends {MainView}
 */
export class GridView extends MainView {

  /**
   * @description 视图状态
   * @type {EditViewState}
   * @memberof GridView
   */
  public declare viewState: GridViewState;

  /**
   * @description 使用加载功能模块
   * @param {GridViewProps} props 传入的props
   * @memberof GridView
   */
  public useLoad(props: GridViewProps){
    const { viewSubject } = this.viewState;
    onMounted(()=>{
      viewSubject.next({tag: 'grid', action: "load", data: {}})
    })
  }

  /**
   * @description 安装视图所有功能模块的方法
   * @param {GridViewProps} props 传入的Props
   * @param {Function} [emit] [emit] 事件
   * @return {*} 
   * @memberof GridView
   */
  public moduleInstall(props: GridViewProps, emit?: Function) {
    const superParams = super.moduleInstall(props, emit);
    this.useLoad(props);
    return {
      ...superParams,
      state: this.viewState,
    };
  }
}
