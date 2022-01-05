import { AppUIAction, IUIAction, UIServiceBase } from '@core';

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
  constructor(opts: any = {}) {
      super(opts);
  }


/**
     * 打开向导示例页面
     *
     * @param {*} params
     * @memberof WizardDataUIServiceBase
     */
    public async OpenWizardExample(params:any){
        const actionModel = {
            codeName:'OpenWizardExample',
            uIActionMode:'FRONT',
            actionTarget:'SINGLEDATA',
            uIActionTag:'OPENWIZARDEXAMPLE',
            frontPSAppView:''
        };
        AppUIAction.execute(actionModel, params);
    }


}