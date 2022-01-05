import { AppModal } from '@/utils';
import { Http, deepCopy, ViewDetail } from '@ibiz-core';
import { OpenViewService } from '@service';
import { AppFuncService } from '@ibiz-core';

export class App {

  /**
   * 打开视图服务
   * @static
   */
  public static openViewService: OpenViewService = OpenViewService.getInstance();

  /**
   * 应用功能服务
   * @static
   */
  public static appFuncService: AppFuncService = AppFuncService.getInstance();

  /**
   * 打开视图服务
   * @static
   */
  public static modalService: AppModal = AppModal.getInstance();

  /**
   * 所有视图信息
   *
   * @static
   */
  public static allViewInfos: any;

  /**
   * 获取视图信息
   *
   * @static
   * @param codeName 视图codeName
   * @return {*}  
   */
  public static getViewInfo(codeName: string): ViewDetail | undefined {
    return App.allViewInfos[codeName] ? (deepCopy(App.allViewInfos[codeName]) as ViewDetail) : undefined;
  }

  /**
   * 初始化
   *
   * @static
   */
  public static async init() {
    const response = await Http.getInstance().get('./assets/json/views.json')
    App.allViewInfos = response.data;
  }
}