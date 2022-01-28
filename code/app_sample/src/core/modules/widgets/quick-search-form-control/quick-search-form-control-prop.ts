import { FormControlProps, IParam } from "@core";

/**
 * @description 表单部件的props
 * @export
 * @interface QuickSearchFormControlProps
 * @extends {FormControlProps}
 */
export interface QuickSearchFormControlProps extends FormControlProps {

  /**
   * @description 是否显示气泡框
   * @type {boolean}
   * @memberof QuickSearchFormControlProps
   */
  showPopover: boolean;

  /**
   * @description  选中历史项
   * @type {IParam}
   * @memberof QuickSearchFormControlProps
   */
  selectHistoryItem: IParam;

  /**
   * @description 历史项
   * @type {IParam[]}
   * @memberof QuickSearchFormControlProps
   */
  historyItems: IParam[];

}