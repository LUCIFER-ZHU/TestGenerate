import { IContext, IParam } from "@core";
import { ActionParams, AppActionBase, UIActionResult } from "./app-action-base";

/**
 * 前台界面行为
 *
 * @export
 * @class AppFrontAction
 */
export class AppFrontAction extends AppActionBase {

  /**
   * 打开视图
   *
   * @static
   * @param {IUIAction} actionModel
   * @param {ViewDetail} view
   * @memberof AppFrontAction
   */
  public static openView(uiAction: IParam, params: { context: IContext, viewParams: IParam, data: IParam, event: MouseEvent, actionEnvironment: IParam }, actionParams: ActionParams): Promise<UIActionResult> {
    return new Promise((resolve: any, reject: any) => {
      const { context, viewParams } = params;
      const { frontPSAppView } = uiAction;
      if (!frontPSAppView) {
        console.log("模型视图名称不存在");
        return reject({ ok: false, result: null });
      }
      // 根据视图名称 获取视图详情
      const view = App.getViewInfo(frontPSAppView);
      if (!view) {
        console.log("视图不存在");
        return reject({ ok: false, result: null });
      }
      //打开视图
      const subject = App.getOpenViewService().openView(view, {
        context: context,
        viewParams: viewParams,
      })
      if (subject) {
        subject.subscribe((result: any) => {
          if (!result || !Object.is(result.ret, 'OK')) {
            reject({ ok: false, result: null })
            return;
          }
          return resolve({ ok: true, result: result.data });
        });
      } else {
        return resolve({ ok: true, result: null });
      }
    })
  }


  /**
   * 打开URL
   *
   * @param {IParam} uiAction
   * @param { context: IContext, viewParams: IParam, data: IParam, event: MouseEvent, actionEnvironment: IParam } params
   * @memberof AppFrontAction
   */
  public static openHTMLPage(uiAction: IParam, params: { context: IContext, viewParams: IParam, data: IParam, event: MouseEvent, actionEnvironment: IParam }): UIActionResult {
    const { htmlPageUrl } = uiAction;
    if (!htmlPageUrl) {
      return { ok: false, result: null };
    }
    window.open(htmlPageUrl, '_blank')
    return { ok: true, result: null }
  }


  /**
   * 根据行为类型执行对应行为
   *
   * @param {IParam} uiAction
   * @memberof AppFrontAction
   */
  public static async doActionByFrontProcessType(uiAction: IParam, params: { context: IContext, viewParams: IParam, data: IParam, event: MouseEvent, actionEnvironment: IParam }, actionParams: ActionParams): Promise<UIActionResult> {
    switch (uiAction.frontProcessType) {
      case 'WIZARD':
      case 'TOP':
        return this.openView(uiAction, params, actionParams)
      case 'OPENHTMLPAGE':
        return this.openHTMLPage(uiAction, params);
      case 'OTHER':
        console.log("暂不支持用户自定义");
        return { ok: false, result: null };
      default:
        return { ok: false, result: null };
    }

  }


  /**
   *  执行前台行为
   *
   * @param {IParam} uiAction
   * @memberof AppFrontAction
   */
  public static async doAction(uiAction: IParam, params: { context: IContext, viewParams: IParam, data: IParam, event: MouseEvent, actionEnvironment: IParam }) {
    if (Object.is(uiAction?.uILogicAttachMode, 'REPLACE')) {
      //  界面逻辑替换当前行为
      return this.executeUILogic(uiAction, params);
    }
    // 根据行为目标 合并行为参数
    const data = this.handleActionTarget(uiAction.actionTarget, params);
    // 处理行为参数 导航参数、数据项、信息项、参数项
    const actionParams = this.handleActionParam(uiAction, params, data);
    // 执行行为
    const { ok, result } = await this.doActionByFrontProcessType(uiAction, params, actionParams);
    // 后续行为  ok为true 则行为执成功
    if (ok) {
      this.afterAction(uiAction, params, result);
    }
  }
}
