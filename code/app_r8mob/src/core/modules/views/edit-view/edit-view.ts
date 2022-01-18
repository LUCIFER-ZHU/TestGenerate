import { EditViewState, IParam, MainView } from '@core';

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
  public declare state: EditViewState;

  /**
   * 当前视图表单部件
   *
   * @type {IParam}
   * @memberof EditView
   */
  public declare form: IParam;

  /**
   * @description 处理视图初始化
   *
   * @memberof EditView
   */
  public useViewInit() {
    super.useViewInit();
    // 初始化表单引用
    this.form = ref(null);
    onMounted(() => {
      const { viewSubject } = this.state;
      viewSubject.next({ tag: this.getForm().name, action: "load", data: {} })
    })
  }

  /**
   *  获取表单部件
   *
   * @return {*}  {*}
   * @memberof IndexView
   */
  public getForm(): any {
    if (this.form.value) {
      return this.form.value;
    } else {
      return null;
    }
  }

  /**
   * @description 安装视图所有功能模块的方法
   * @return {*} 
   * @memberof EditView
   */
  public moduleInstall() {
    const superParams = super.moduleInstall();
    return {
      ...superParams,
      form: this.form
    };
  }
}
