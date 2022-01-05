import { AppUIAction, IUIAction, UIServiceBase } from '@core';

/**
 * 示例UI服务对象基类
 *
 * @export
 * @class ExampleUIServiceBase
 * @extends {UIServiceBase}
 */
export class ExampleUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of ExampleUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof ExampleUIServiceBase
    */
  constructor(opts: any = {}) {
      super(opts);
  }


/**
     * 打开视图（界面逻辑-界面行为调用）
     *
     * @param {*} params
     * @memberof ExampleUIServiceBase
     */
    public async OpenView_UIActionTest(params:any){
        const actionModel = {
            codeName:'OpenView_UIActionTest',
            uIActionMode:'FRONT',
            actionTarget:'SINGLEDATA',
            uIActionTag:'OPENVIEW_UIACTIONTEST',
            frontPSAppView:''
        };
        AppUIAction.execute(actionModel, params);
    }


}