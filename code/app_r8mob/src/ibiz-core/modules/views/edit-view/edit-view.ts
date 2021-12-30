import { EditViewProps, EditViewState, MainView } from '@ibiz-core';

/**
 * @description 编辑视图
 * @export
 * @class EditView
 * @extends {MainView}
 */
export class EditView extends MainView {

  /**
   * @description 视图状态
   * @type {EditViewState}
   * @memberof EditView
   */
  public declare viewState: EditViewState;

  /**
   * @description 使用加载功能模块
   * @param {EditViewProps} props 传入的props
   * @memberof EditView
   */
  public useLoad(props: EditViewProps){
    const { viewSubject } = this.viewState;
    onMounted(()=>{
      viewSubject.next({tag: 'form', action: "load", data: {}})
    })
  }

  /**
   * @description 安装视图所有功能模块的方法
   * @param {EditViewProps} props 传入的Props
   * @param {Function} [emit] [emit] 事件
   * @return {*} 
   * @memberof EditView
   */
  public moduleInstall(props: EditViewProps, emit?: Function) {
    const superParams = super.moduleInstall(props, emit);
    this.useLoad(props);
    return {
      ...superParams,
      state: this.viewState,
    };
  }
}
