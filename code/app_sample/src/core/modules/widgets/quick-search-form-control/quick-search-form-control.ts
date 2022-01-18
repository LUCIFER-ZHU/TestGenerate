import { FormControl, FormControlState, IActionParam, IParam } from '@core';

/**
 * @description 搜索表单部件
 * @export
 * @class FormControl
 * @extends {MainControl}
 */
export class QuickSearchFormControl extends FormControl {
  /**
   * @description 部件状态
   * @type {FormControlState}
   * @memberof FormControl
   */
  public declare state: FormControlState;

  /**
   * @description 处理编辑器事件
   * @param {IActionParam} actionParam 行为参数
   * @memberof FormControl
   */
   public onEditorEvent(actionParam: IActionParam) {
    super.onEditorEvent(actionParam);
    this.emit("ctrlEvent", {
      tag: this.props.name,
      action: "selectionChange",
      data: this.state.data,
    });
  }

  /**
   * @description 安装部件所有功能模块的方法
   * @return {*}
   * @memberof QuickSearchFormControl
   */
  public moduleInstall() {
    const superParams = super.moduleInstall();
    return {
      ...superParams,
    };
  }
}
