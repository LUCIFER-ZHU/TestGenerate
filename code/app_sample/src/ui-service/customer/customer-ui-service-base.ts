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
             frontPSAppView:'CustomerOptionView',
             caption:'新建',
             entityCodeName:'Customer',
             methodCodeName:'',
             frontProcessType:'WIZARD',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
             navContexts:{},
             navParams:{}
         },
       "Quick":{
             codeName:'Quick',
             uIActionMode:'FRONT',
             actionTarget:'NONE',
             uIActionTag:'QUICK',
             frontPSAppView:'CustomerUsr2OptionView',
             caption:'快速新建',
             entityCodeName:'Customer',
             methodCodeName:'',
             frontProcessType:'WIZARD',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
             navContexts:{},
             navParams:{}
         },
       "OpenMain":{
             codeName:'OpenMain',
             uIActionMode:'FRONT',
             actionTarget:'SINGLEKEY',
             uIActionTag:'OPENMAIN',
             frontPSAppView:'CustomerMainTabExpView',
             caption:'打开客户主数据分页导航',
             entityCodeName:'Customer',
             methodCodeName:'',
             frontProcessType:'WIZARD',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
             navContexts:{},
             navParams:{}
         },
     };    /**
     * 新建
     *
     * @param {*} params
     * @memberof CustomerUIServiceBase
     */
    public async ACCreate(uiAction:any, params:any){
        const actionModel =  this.getUIActionModel('ACCreate');
        AppFrontAction.doAction(actionModel, params);
    }

    /**
     * 快速新建
     *
     * @param {*} params
     * @memberof CustomerUIServiceBase
     */
    public async Quick(uiAction:any, params:any){
        const actionModel =  this.getUIActionModel('Quick');
        AppFrontAction.doAction(actionModel, params);
    }

    /**
     * 打开客户主数据分页导航
     *
     * @param {*} params
     * @memberof CustomerUIServiceBase
     */
    public async OpenMain(uiAction:any, params:any){
        const actionModel =  this.getUIActionModel('OpenMain');
        AppFrontAction.doAction(actionModel, params);
    }



}