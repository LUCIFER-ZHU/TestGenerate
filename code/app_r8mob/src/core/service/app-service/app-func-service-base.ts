import { IAppFuncService, IParam } from "@core";

/**
 * 应用功能服务基类
 *
 * @export
 * @class AppFuncServiceBase
 * @implements {IAppFuncService}
 */
export abstract class AppFuncServiceBase implements IAppFuncService{

  /**
   * @description 执行应用功能
   * @param {string} menu 菜单项
   * @param {IParam} context 上下文
   * @param {IParam} viewParams 视图参数
   * @memberof AppFuncServiceBase
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
   * @memberof AppFuncServiceBase
   */
  executeCustomFunc(appFunc: IParam, context: IParam, viewParams: IParam) {
    console.warn(`${appFunc.appFuncType} 类型应用功能暂未支持`);
  }

  /**
   * @description 执行JavaScript
   * @param {IParam} appFunc 应用功能
   * @param {IParam} context 上下文
   * @param {IParam} viewParams 视图参数
   * @memberof AppFuncServiceBase
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
   * @memberof AppFuncServiceBase
   */
  executePresetFunc(appFunc: IParam, context: IParam, viewParams: IParam) {
    console.warn(`${appFunc.appFuncType} 类型应用功能暂未支持`);
  }

  /**
   * @description 打开HTML页面
   * @param {IParam} appFunc 应用功能
   * @param {IParam} context 上下文
   * @param {IParam} viewParams 视图参数
   * @memberof AppFuncServiceBase
   */
  openHtmlPage(appFunc: IParam, context: IParam, viewParams: IParam) {
    window.open(appFunc.htmlPageUrl, '_blank');
  }

  /**
   * @description 打开应用视图
   * @param {IParam} appFunc 应用功能
   * @param {IParam} context 上下文
   * @param {IParam} viewParams 视图参数
   * @memberof AppFuncServiceBase
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