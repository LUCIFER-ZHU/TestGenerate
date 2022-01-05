import { AppUIAction, IUIAction, UIServiceBase } from '@core';

/**
 * 客户UI服务对象基类
 *
 * @export
 * @class CustomerUIServiceBase
 * @extends {UIServiceBase}
 */
export class CustomerUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of CustomerUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof CustomerUIServiceBase
    */
  constructor(opts: any = {}) {
      super(opts);
  }


/**
     * 新建
     *
     * @param {*} params
     * @memberof CustomerUIServiceBase
     */
    public async ACCreate(params:any){
        const actionModel = {
            codeName:'ACCreate',
            uIActionMode:'FRONT',
            actionTarget:'NONE',
            uIActionTag:'ACCREATE',
            frontPSAppView:''
        };
        AppUIAction.execute(actionModel, params);
    }
/**
     * 快速新建
     *
     * @param {*} params
     * @memberof CustomerUIServiceBase
     */
    public async Quick(params:any){
        const actionModel = {
            codeName:'Quick',
            uIActionMode:'FRONT',
            actionTarget:'NONE',
            uIActionTag:'QUICK',
            frontPSAppView:''
        };
        AppUIAction.execute(actionModel, params);
    }


}