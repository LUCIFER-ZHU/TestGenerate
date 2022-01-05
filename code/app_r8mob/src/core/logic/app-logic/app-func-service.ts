import { IAppFuncService, IParam } from "@core";

export class AppFuncService implements IAppFuncService{

  /**
   * @description 唯一实例
   * @private
   * @static
   * @memberof AppFuncService
   */
  private static readonly instance = new AppFuncService();

  /**
   * @description 获取唯一实例
   * @static
   * @return {*}  {AppFuncService}
   * @memberof AppFuncService
   */
  public static getInstance(): AppFuncService {
    return AppFuncService.instance;
  }

  /**
   * @description 执行应用功能
   * @param {string} menu 菜单项
   * @param {IParam} context 上下文
   * @param {IParam} viewParams 视图参数
   * @memberof AppFuncService
   */
  executeAppFunc(menu: IParam, context: IParam, viewParams: IParam) {
    const appFunc = App.getAllFuncs().find((func: IParam)=> Object.is(func.funcTag, menu.funcTag));
    if (appFunc) {
      switch (appFunc.appFuncType) {
        case 'APPVIEW':
          return this.openAppView(appFunc, context, viewParams);
        case 'OPENHTMLPAGE':
          return this.openHtmlPage(appFunc, context, viewParams);
        case 'PDTAPPFUNC':
          return this.executePresetFunc(appFunc, context, viewParams);
        case 'JAVASCRIPT':
          return this.executeJavaScript(appFunc, context, viewParams);
        case 'CUSTOM':
          return this.executeCustomFunc(appFunc, context, viewParams);
        default:
          console.warn(`${appFunc.appFuncType} 类型应用功能暂未支持`);
      }
    } else {
      console.warn(`菜单项 ${menu.caption} 未配置应用功能`);
    }
  }

  /**
   * @description 执行自定义功能
   * @param {IParam} appFunc 应用功能
   * @param {IParam} context 上下文
   * @param {IParam} viewParams 视图参数
   * @memberof AppFuncService
   */
  executeCustomFunc(appFunc: IParam, context: IParam, viewParams: IParam) {
    console.warn(`${appFunc.appFuncType} 类型应用功能暂未支持`);
  }

  /**
   * @description 执行JavaScript
   * @param {IParam} appFunc 应用功能
   * @param {IParam} context 上下文
   * @param {IParam} viewParams 视图参数
   * @memberof AppFuncService
   */
  executeJavaScript(appFunc: IParam, context: IParam, viewParams: IParam) {
    console.warn(`${appFunc.appFuncType} 类型应用功能暂未支持`);
  }

  /**
   * @description 执行预置应用功能
   * @static
   * @param {IParam} appFunc 应用功能
   * @param {IParam} context 上下文
   * @param {IParam} viewParams 视图参数
   * @memberof AppFuncService
   */
  executePresetFunc(appFunc: IParam, context: IParam, viewParams: IParam) {
    console.warn(`${appFunc.appFuncType} 类型应用功能暂未支持`);
  }

  /**
   * @description 打开HTML页面
   * @param {IParam} appFunc 应用功能
   * @param {IParam} context 上下文
   * @param {IParam} viewParams 视图参数
   * @memberof AppFuncService
   */
  openHtmlPage(appFunc: IParam, context: IParam, viewParams: IParam) {
    window.open(appFunc.htmlPageUrl, '_blank');
  }

  /**
   * @description 打开应用视图
   * @param {IParam} appFunc 应用功能
   * @param {IParam} context 上下文
   * @param {IParam} viewParams 视图参数
   * @memberof AppFuncService
   */
  openAppView(appFunc: IParam, context: IParam, viewParams: IParam) {
    const view = {
      codeName: appFunc.viewCodeName,
      openMode: appFunc.openMode,
    }
    const params = {
      context: context,
      viewParams: viewParams,
    }
    App.getOpenViewService().openView(view, params);
  }
}