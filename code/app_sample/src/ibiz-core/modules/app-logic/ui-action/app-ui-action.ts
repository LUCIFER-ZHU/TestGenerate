import { AppBackendAction } from './app-backend-action';
import { AppFrontAction } from './app-front-action';
import { IUIAction } from "@ibiz-core";
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
   * @param params 运行参数
   */
  public static executeUIAction(uiAction: IUIAction, params: any){
    if(uiAction.uIActionMode == 'FRONT'){
      AppFrontAction.execute(uiAction, params);
    }else if(uiAction.uIActionMode == 'BACKEND'){
      AppBackendAction.execute(uiAction, params);
    }else if(uiAction.uIActionMode == 'SYS'){
      AppSysAction.execute(uiAction, params);
    }else{
      // TODO 工作流界面行为
    }
  }
}
