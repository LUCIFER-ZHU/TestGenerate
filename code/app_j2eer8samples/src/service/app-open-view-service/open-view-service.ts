import { IOpenViewService, IParam, OpenViewServiceBase, RouteUtil, ViewDetail } from '@core';
import router from '@/router';
import { Subject } from 'rxjs';
import { AppModal } from './app-modal';

/**
 * 打开视图服务
 * @export
 * @class OpenViewService
 */
export class OpenViewService extends OpenViewServiceBase implements IOpenViewService {
  /**
   * 唯一实例
   *
   * @private
   * @static
   * @memberof OpenViewService
   */
  private static readonly instance = new OpenViewService();

  /**
   * 获取唯一实例
   *
   * @static
   * @return {*}  {OpenViewService}
   * @memberof OpenViewService
   */
  public static getInstance(): OpenViewService {
    return OpenViewService.instance;
  }

  /**
   * 根据打开方式打开视图
   *
   * @param view 视图信息
   * @param params 相关参数
   */
  public openByOpenMode(view: ViewDetail, params: IParam): Subject<any> | undefined {
    const openMode = params.openMode || view.openMode;
    const { viewParams, context } = params;
    // 路由打开视图
    if (openMode == 'INDEXVIEWTAB' || openMode == 'POPUPAPP') {
      // TODO 视图关系参数处理
      const routePath = RouteUtil.buildUpRoutePath(view, context, viewParams, router.currentRoute.value);
      if (openMode == 'INDEXVIEWTAB') {
        router.push(routePath);
      } else {
        window.open('./#' + routePath, '_blank');
      }
      return;
    } else if (openMode == 'POPUPMODAL') {
      return AppModal.getInstance().openModal(view, params);
    } else if (openMode?.indexOf('DRAWER') !== -1) {
      // TODO PMS上面抽屉DRAWER_TOP
    } else if (openMode == 'POPOVER') {
      // TODO 打开气泡卡片
    } else {
      console.error(`未支持${openMode}打开方式`);
    }
  }

  /**
   * 打开重定向视图
   *
   * @param view 视图信息
   * @param params 相关参数
   */
  public openRedirectView(view: any, params: IParam) {
    // TODO 重定向视图处理
  }
}
