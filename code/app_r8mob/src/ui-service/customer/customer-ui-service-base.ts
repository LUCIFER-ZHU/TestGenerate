import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
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
  constructor(opts: IParam = {}) {
      super(opts);
  }



   public uiActionModes = {       "ACCreate":{
             codeName:'ACCreate',
             uIActionMode:'FRONT',
             actionTarget:'NONE',
             uIActionTag:'ACCREATE',
             frontPSAppView:'',
             caption:'新建',
             entityCodeName:'',
             methodCodeName:'',
             frontProcessType:'WIZARD',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
         },
       "Quick":{
             codeName:'Quick',
             uIActionMode:'FRONT',
             actionTarget:'NONE',
             uIActionTag:'QUICK',
             frontPSAppView:'',
             caption:'快速新建',
             entityCodeName:'',
             methodCodeName:'',
             frontProcessType:'WIZARD',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
         },
     };    /**
     * 新建
     *
     * @param {*} params
     * @memberof CustomerUIServiceBase
     */
    public async ACCreate(params:any){
        const actionModel =  this.getUIActionModel('ACCreate');
        AppFrontAction.doAction(actionModel, params);
    }

    /**
     * 快速新建
     *
     * @param {*} params
     * @memberof CustomerUIServiceBase
     */
    public async Quick(params:any){
        const actionModel =  this.getUIActionModel('Quick');
        AppFrontAction.doAction(actionModel, params);
    }



}