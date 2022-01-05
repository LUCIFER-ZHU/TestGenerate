import { IndexViewProps, IndexViewState, ViewBase } from '@ibiz-core';

/**
 * @description 首页视图
 * @export
 * @class IndexView
 * @extends {ViewBase}
 */
export class IndexView extends ViewBase {
  /**
   * 视图状态
   */
  public declare viewState: IndexViewState;

  /**
   * 使用加载功能模块
   * @param props 传入的props
   */
  public useLoad(props: IndexViewProps){
    const { viewSubject } = this.viewState;
    onMounted(()=>{
      viewSubject.next({tag: 'appmenu', action: "load", data: {}})
    })
  }

  /**
   * 安装视图所有功能模块的方法
   * @param props 传入的Props
   * @param [emit] 事件
   */
  public moduleInstall(props: IndexViewProps, emit?: Function) {
    const superParams = super.moduleInstall(props, emit);
    this.useLoad(props);
    return {
      ...superParams,
      state: this.viewState,
    };
  }
}
