import { IContext, IParam } from '@core';
import { AppBackendAction } from './app-backend-action';
import { AppFrontAction } from './app-front-action';
import { AppSysAction } from './app-sys-action';

/**
 * 界面行为功能执行
 *
 * @export
 * @class AppUIAction
 */
export class AppUIAction {
  /**
   * 执行界面行为
   *
   * @param uiAction 界面行为信息
   * @param params 运行参数 { context: 上下文对象, viewParams: 视图参数, data: 当前激活数据, event: 事件源对象, actionEnvironment:操作环境}
   */
  public static execute(uiAction: IParam, params: { context: IContext, viewParams: IParam, data: IParam, event: MouseEvent, actionEnvironment: IParam }){
    if(uiAction.uIActionMode == 'FRONT'){
      AppFrontAction.execute(uiAction, params);
    }else if(uiAction.uIActionMode == 'BACKEND'){
      AppBackendAction.execute(uiAction, params);
    }else if(uiAction.uIActionMode == 'SYS'){
      AppSysAction.execute(uiAction, params);
    }else{
      console.warn("非（前台界面行为、后台界面行为、系统预置界面行为）暂未支持");
    }
  }
}
