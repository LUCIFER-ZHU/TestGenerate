import { IUIAction } from '@ibiz-core';
/**
 * 界面行为参数
 * @interface UIActionParams
 */
interface UIActionParams{
  args: any[],
  context: any,
  params: any,
  $event?: any,
  xData?: any,
  actionContext?: any,
  srfParentDeName?: string,
  deUIService?: any,
}

export class AppFrontAction {

    /**
     * 执行界面行为
     *
     * @param args
     * @param context
     * @param params
     * @param $event
     * @param xData
     * @param actionContext
     * @param srfParentDeName
     *
     * @memberof AppFrontAction
     */
    public static async execute(uiAction:IUIAction, params: any) {
      // TODO 前台调用
    }
        
}
