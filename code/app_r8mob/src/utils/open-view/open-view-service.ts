import { IContext, IOpenViewService, IParam, RouteUtil, ViewDetail } from '@core';
import router from '@/router';
import { AppModal } from '@/utils';


interface Params extends IParam {
  context: IContext;
  viewParams: IParam;
}

/**
 * 视图打开服务
 * @export
 * @class OpenViewService
 */
export class OpenViewService implements IOpenViewService{
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
   * 打开视图
   *
   * @param view 视图信息
   * @param params 相关参数
   */
  public openView(view: ViewDetail, params: Params) {
    // 获取详细视图信息
    let _view: ViewDetail | undefined = App.getViewInfo(view.codeName);
    if (!_view) {
      console.error(`应用中不存在${view.codeName}视图`);
      return;
    }
    // view的openMode覆盖配置的
    if (view.openMode) {
      _view.openMode = view.openMode;
    }

    // 重定向视图走重定向逻辑，其他根据openMode打开
    if (_view.redirectView) {
      this.openRedirectView(_view, params);
    } else {
      this.openByOpenMode(_view, params);
    }
  }

  /**
   * 根据打开方式打开视图
   *
   * @param view 视图信息
   * @param params 相关参数
   */
  public openByOpenMode(view: ViewDetail, params: Params) {
    const { openMode } = view;
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
    } else if (openMode == 'POPUPMODAL') {
      AppModal.getInstance().openModal(view, params);
    } else if (openMode?.indexOf('DRAWER') !== -1) {
      // TODO PMS上面抽屉DRAWER_TOP
    } else if (openMode == 'POPOVER') {
      // TODO 打开气泡卡片
    } else {
      console.error(`未支持${openMode}打开方式`);
    }
  }

  /**
   * 重定向视图处理
   *
   * @param view 视图信息
   * @param params 相关参数
   */
  public openRedirectView(view: any, params: Params) {
    // TODO 重定向视图处理
  }
}
