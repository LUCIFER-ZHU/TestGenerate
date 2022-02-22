import { EditViewState, IActionParam, IParam, MainView } from '@core';

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
   * @description 数据部件加载
   * @protected
   * @param {IParam} [data]
   * @memberof EditView
   */
  protected xDataControlLoad(data?: IParam) {
    // 初始化数据能力部件
    this.xDataControl = this.getForm();
    const { isLoadDefault, context, viewParams, appEntityCodeName } = this.state;
    if (this.getForm() && isLoadDefault) {
      const tag = this.getForm().name;
      let action: string = '';
      if (
        appEntityCodeName &&
        context[appEntityCodeName.toLowerCase()] &&
        !Object.is(context[appEntityCodeName.toLowerCase()], '')
      ) {
        action = 'load';
      } else {
        action = 'loadDraft';
      }
      this.next({ tag: tag, action: action, data: viewParams });
    }
    this.state.isLoadDefault = true;
  }

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
      this.xDataControlLoad();
    })
  }

  /**
   * 处理部件事件
   *
   * @param {IActionParam} actionParam
   * @memberof EditView
   */
  public onCtrlEvent(actionParam: IActionParam) {
    super.onCtrlEvent(actionParam);
    const { tag, action, data } = actionParam;
    if (Object.is(tag, 'form')) {
      this.formEvent(action, data);
    }
  }

  /**
   * 表单事件
   *
   * @param {string} action
   * @param {IParam[]} data
   * @memberof EditView
   */
  public formEvent(action: string, data: IParam[]): void {
    if (Object.is(action, 'load')) {
      this.onFormLoad(data);
    }
    if (Object.is(action, 'save')) {
      this.onFormSave(data);
    }
    if (Object.is(action, 'remove')) {
      this.onFormRemove(data);
    }
  }

  /**
   * 表单加载完成
   *
   * @param {IParam[]} data
   * @memberof EditView
   */
  public onFormLoad(data: IParam[]): void {
    // 抛出数据
    this.emit("onViewEvent", { tag: this.state.viewName, action: 'viewLoad', data: data });
    // 设置工具栏状态
    const state: boolean = !Object.is(data[0].srfuf, '1');
    this.setToolbarItemState(state, data[0]);
  }

  /**
   * 表单保存完成
   *
   * @param {IParam[]} data
   * @memberof EditView
   */
  public onFormSave(data: IParam[]): void {

  }

  /**
   * 表单删除完成
   *
   * @param {IParam[]} data
   * @memberof EditView
   */
  public onFormRemove(data: IParam[]): void {
  }

  /**
   *  获取表单部件
   *
   * @return {*}  {*}
   * @memberof EditView
   */
  public getForm(): any {
    return unref(this.form);
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
