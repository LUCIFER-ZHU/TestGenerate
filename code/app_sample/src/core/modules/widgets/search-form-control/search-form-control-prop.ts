import { FormControlProps, IParam } from "@core";

/**
 * @description 表单部件的props
 * @export
 * @interface SearchFormControlProps
 * @extends {FormControlProps}
 */
export interface SearchFormControlProps extends FormControlProps {

  /**
   * @description 是否显示气泡框
   * @type {boolean}
   * @memberof SearchFormControlProps
   */
  showPopover: boolean;

  /**
   * @description  选中历史项
   * @type {IParam}
   * @memberof SearchFormControlProps
   */
  selectHistoryItem: IParam;

  /**
   * @description 历史项
   * @type {IParam[]}
   * @memberof SearchFormControlProps
   */
  historyItems: IParam[];

}