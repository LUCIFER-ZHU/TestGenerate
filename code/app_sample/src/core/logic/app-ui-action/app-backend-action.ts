import { IContext, IParam } from "@core";
import { ActionParams, AppActionBase, UIActionResult } from "./app-action-base";

/**
 * 后台界面行为
 *
 * @export
 * @class AppBackendAction
 */
export class AppBackendAction extends AppActionBase {

  /**
   * 调用后台接口
   *
   * @memberof AppBackendAction
   */
  public static async doBackendAction(uiAction: IParam, params: { context: IContext, viewParams: IParam, data: IParam, event: MouseEvent, actionEnvironment: IParam }, actionParams: ActionParams): Promise<UIActionResult> {
    try {
      const { actionEnvironment } = params;
      const { context } = actionParams;
      const entityName = actionEnvironment?.state?.appEntityName;
      if (!entityName) {
        console.log("实体名称不存在");
        return { ok: false, result: null };
      }
      const methodCodeName: string = uiAction.methodCodeName;
      if (!methodCodeName) {
        console.log("实体行为不存在");
        return { ok: false, result: null };
      }
      //  获取实体服务
      const dataService = await App.getDataService(entityName.toLowerCase(), context)
      // 获取实体行为名称
      const response = await dataService[methodCodeName](context, actionParams.data);
      return new Promise((resolve: any, reject: any) => {
        if (response && response.ok) {
          this.doSuccessMessage(uiAction);
          resolve({ ok: true, result: response.data });
        } else {
          reject({ ok: false, result: response.data });
        }
      })
    } catch (error) {
      return new Promise((resolve: any, reject: any) => {
        reject({ ok: false, result: error });
      })
    }
  }

  /**
   * 打开视图
   *
   * @static
   * @param {IUIAction} actionModel
   * @param {ViewDetail} view
   * @memberof AppFrontAction
   */
  public static openSelectView(uiAction: IParam, params: { context: IContext, viewParams: IParam, data: IParam, event: MouseEvent, actionEnvironment: IParam }, actionParams: ActionParams): Promise<UIActionResult> {
    return new Promise((resolve: any, reject: any) => {
      const { context, viewParams } = params;
      const { frontPSAppView } = uiAction;
      if (!frontPSAppView) {
        console.log("模型视图名称不存在");
        return resolve({ ok: false, result: null });
      }
      // 根据视图名称 获取视图详情
      const view = App.getViewInfo(frontPSAppView);
      if (!view) {
        console.log("视图不存在");
        return resolve({ ok: false, result: null });
      }
      //打开视图
      const subject = App.getOpenViewService().openView(view, {
        context: context,
        viewParams: viewParams,
      })
      subject?.subscribe((result: any) => {
        if (!result || !Object.is(result.ret, 'OK')) {
          reject({ ok: false, result: null });
          return;
        }
        return resolve({ ok: true, result: result.data });
      });
    })
  }

  /**
   * 自定义确认消息
   *
   * @param {IParam} uiAction
   * @memberof AppBackendAction
   */
  public static doConfirmMessage(uiAction: IParam) {
    if (uiAction.enableConfirm && uiAction.confirmMsg) {
      // TODO
    }
  }


  /**
   * 成功提示消息
   *
   * @static
   * @param {IParam} uiAction
   * @memberof AppBackendAction
   */
  public static doSuccessMessage(uiAction: IParam) {
    if (uiAction.showBusyIndicator && uiAction.successMsg) {
      // TODO
    }
  }


  /**
   *  执行后台行为
   *
   * @param {IParam} uiAction
   * @memberof AppFrontAction
   */
  public static async doAction(uiAction: IParam, params: { context: IContext, viewParams: IParam, data: IParam, event: MouseEvent, actionEnvironment: IParam }) {
    if (Object.is(uiAction?.uILogicAttachMode, 'REPLACE')) {
      //  界面逻辑替换当前行为
      return this.executeUILogic(uiAction, params);
    }
    // 消息确认提示
    this.doConfirmMessage(uiAction);
    // 根据行为目标 合并行为参数
    const data = this.handleActionTarget(uiAction, params);
    // 处理行为参数 导航参数、数据项、信息项、参数项
    const actionParams = this.handleActionParam(uiAction, params, data);
    // 执行行为
    let result: UIActionResult | undefined = undefined;
    if (uiAction.frontPSAppView) {
      const { ok, result: _result } = await this.openSelectView(uiAction, params, actionParams);
      if (ok) {
        // 处理参数 todo
        result = await this.doBackendAction(uiAction, params, _result);
      }
    } else {
      result = await this.doBackendAction(uiAction, params, actionParams);
    }
    // 后续行为  ok为true 则行为执成功
    if (result?.ok) {
      this.afterAction(uiAction, params, result);
    }
  }
}
