import { FormControl, FormControlState, IParam } from '@core';

/**
 * @description 搜索表单部件
 * @export
 * @class FormControl
 * @extends {MainControl}
 */
export class SearchFormControl extends FormControl {
  /**
   * @description 部件状态
   * @type {FormControlState}
   * @memberof FormControl
   */
  public declare state: FormControlState;

  /**
   * @description 查询
   * @memberof SearchFormControl
   */
  public onSearch() {
    this.emit("ctrlEvent", {
      tag: this.props.name,
      action: "selectionChange",
      data: this.state.data,
    });
  }


  /**
   * @description 取消
   * @memberof SearchFormControl
   */
  public onCancel() {
    this.state.showPopover = false;
  }

  /**
   * @description 添加历史项
   * @memberof SearchFormControl
   */
  public onSaveHistoryItem() {
    //todo saveModel服务
    this.state.showPopover = false;
  }

  /**
   * @description 删除历史项
   * @param {IParam} item
   * @memberof SearchFormControl
   */
  public onRemoveHistoryItem(item: IParam) {
    const index = this.state.historyItems.findIndex((_item: IParam) => {
      return item.name == _item.name && item.value == _item.value;
    })
    this.state.historyItems.splice(index, 1);
    //todo saveModel服务
  }

  /**
   * @description 加载历史项
   * @param {IParam} item
   * @memberof SearchFormControl
   */
   public loadHistoryItem() {
    //todo loadModel服务
  }

  /**
   * @description 安装部件所有功能模块的方法
   * @return {*}
   * @memberof SearchFormControl
   */
  public moduleInstall() {
    const superParams = super.moduleInstall();
    // 表单行为能力启用
    return {
      ...superParams,
      onSearch: this.onSearch.bind(this),
      onCancel: this.onCancel.bind(this),
      onSaveHistoryItem: this.onSaveHistoryItem.bind(this),
      onRemoveHistoryItem: this.onRemoveHistoryItem.bind(this),
    };
  }
}
