import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
/**
 * 向导数据UI服务对象基类
 *
 * @export
 * @class WizardDataUIServiceBase
 * @extends {UIServiceBase}
 */
export class WizardDataUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of WizardDataUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof WizardDataUIServiceBase
    */
  constructor(opts: IParam = {}) {
      super(opts);
  }



   public uiActionModes = {       "OpenWizardExample":{
             codeName:'OpenWizardExample',
             uIActionMode:'FRONT',
             actionTarget:'SINGLEDATA',
             uIActionTag:'OPENWIZARDEXAMPLE',
             frontPSAppView:'WizardDataExampleWizardView',
             caption:'打开向导示例页面',
             entityCodeName:'WizardData',
             methodCodeName:'',
             frontProcessType:'WIZARD',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
             navContexts:{},
             navParams:{}
         },
       "CallReturnWizardData":{
             codeName:'CallReturnWizardData',
             uIActionMode:'FRONT',
             actionTarget:'SINGLEDATA',
             uIActionTag:'CALLRETURNWIZARDDATA',
             frontPSAppView:'',
             caption:'调用向导数据回填',
             entityCodeName:'WizardData',
             methodCodeName:'',
             frontProcessType:'OTHER',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'REPLACE',
             nextActionCodeName:'',
             navContexts:{},
             navParams:{}
         },
     };    /**
     * 打开向导示例页面
     *
     * @param {*} params
     * @memberof WizardDataUIServiceBase
     */
    public async OpenWizardExample(uiAction:any, params:any){
        const actionModel =  this.getUIActionModel('OpenWizardExample');
        AppFrontAction.doAction(actionModel, params);
    }

    /**
     * 调用向导数据回填
     *
     * @param {*} params
     * @memberof WizardDataUIServiceBase
     */
    public async CallReturnWizardData(uiAction:any, params:any){
        const actionModel =  this.getUIActionModel('CallReturnWizardData');
        AppFrontAction.doAction(actionModel, params);
    }



}