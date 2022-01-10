import { IParam, ViewDetail } from "@core";
import { Subject } from 'rxjs';
/**
 * @description 打开视图服务接口
 * @export
 * @interface IOpenViewService
 */
export interface IOpenViewService {

  /**
   * @description 打开视图
   * @param {ViewDetail} view 视图对象参数
   * @param {IParam} params 打开视图参数
   * @return {*}  {*}
   * @memberof IOpenViewService
   */
  openView(view: ViewDetail, params: IParam): Subject<any> | undefined;
}