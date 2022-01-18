import { deepCopy, FormControl, FormControlProps, FormControlState } from '@core';

/**
 * @description 表单部件
 * @export
 * @class FormControl
 * @extends {MainControl}
 * @todo 部件加载loading，能否不写在行为方法里。
 */
export class SearchFormControl extends FormControl {
  /**
   * @description 部件状态
   * @type {FormControlState}
   * @memberof FormControl
   */
  public declare controlState: FormControlState;

  /**
   * @description 查询
   * @memberof SearchFormControl
   */
  public onSearch() {
    const { controlName } = this.controlState;
    this.emit("ctrlEvent", {
      tag: controlName,
      action: "selectionChange",
      data: this.controlState.data,
  });
  }


  /**
   * @description 取消
   * @memberof SearchFormControl
   */
  public onCancel() {
    //todo 获取部件实列
  }

  /**
   * @description 确认保存
   * @memberof SearchFormControl
   */
  public onOk() {
    //todo saveModel服务
  }

  /**
   * @description 安装部件所有功能模块的方法
   * @param {FormControlProps} props 传入的Props
   * @param {Function} [emit]
   * @return {*}
   * @memberof FormControl [emit] 事件
   */
  public moduleInstall(props: FormControlProps, emit?: Function) {
    const superParams = super.moduleInstall(props, emit);
    // 表单行为能力启用
    const { loadDraft } = this.useLoadDraft(props);
    return {
      ...superParams,
      state: this.controlState,
      loadDraft,
      onSearch: this.onSearch.bind(this),
      onCancel: this.onCancel.bind(this),
      onOk: this.onOk.bind(this),
      handleEditorEvent: this.handleEditorEvent.bind(this),
      handleComponentEvent: this.handleComponentEvent.bind(this),
    };
  }
}
