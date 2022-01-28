import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
/**
 * 计算器UI服务对象基类
 *
 * @export
 * @class CalculatorUIServiceBase
 * @extends {UIServiceBase}
 */
export class CalculatorUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of CalculatorUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof CalculatorUIServiceBase
    */
  constructor(opts: IParam = {}) {
      super(opts);
  }



   public uiActionModes = {       "ShowPart3":{
             codeName:'ShowPart3',
             uIActionMode:'FRONT',
             actionTarget:'SINGLEDATA',
             uIActionTag:'SHOWPART3',
             frontPSAppView:'',
             caption:'显示分区3',
             entityCodeName:'Calculator',
             methodCodeName:'',
             frontProcessType:'OTHER',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'AFTER',
             nextActionCodeName:'',
             navContexts:{},
             navParams:{}
         },
       "OpenPickPart":{
             codeName:'OpenPickPart',
             uIActionMode:'FRONT',
             actionTarget:'SINGLEDATA',
             uIActionTag:'OPENPICKPART',
             frontPSAppView:'CalculatorPickPartPanelView',
             caption:'显示选择分区',
             entityCodeName:'Calculator',
             methodCodeName:'',
             frontProcessType:'WIZARD',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
             navContexts:{},
             navParams:{}
         },
       "ClickMinus":{
             codeName:'ClickMinus',
             uIActionMode:'BACKEND',
             actionTarget:'SINGLEDATA',
             uIActionTag:'CLICKMINUS',
             frontPSAppView:'',
             caption:'-',
             entityCodeName:'Calculator',
             methodCodeName:'ClickMinus',
             frontProcessType:'',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
             navContexts:{},
             navParams:{}
         },
       "Click8":{
             codeName:'Click8',
             uIActionMode:'BACKEND',
             actionTarget:'SINGLEDATA',
             uIActionTag:'CLICK8',
             frontPSAppView:'',
             caption:'8',
             entityCodeName:'Calculator',
             methodCodeName:'Click8',
             frontProcessType:'',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
             navContexts:{},
             navParams:{}
         },
       "Click6":{
             codeName:'Click6',
             uIActionMode:'BACKEND',
             actionTarget:'SINGLEDATA',
             uIActionTag:'CLICK6',
             frontPSAppView:'',
             caption:'6',
             entityCodeName:'Calculator',
             methodCodeName:'Click6',
             frontProcessType:'',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
             navContexts:{},
             navParams:{}
         },
       "Click7":{
             codeName:'Click7',
             uIActionMode:'BACKEND',
             actionTarget:'SINGLEDATA',
             uIActionTag:'CLICK7',
             frontPSAppView:'',
             caption:'7',
             entityCodeName:'Calculator',
             methodCodeName:'Click7',
             frontProcessType:'',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
             navContexts:{},
             navParams:{}
         },
       "ClickBackspace":{
             codeName:'ClickBackspace',
             uIActionMode:'BACKEND',
             actionTarget:'SINGLEDATA',
             uIActionTag:'CLICKBACKSPACE',
             frontPSAppView:'',
             caption:'Backspace',
             entityCodeName:'Calculator',
             methodCodeName:'ClickBackspace',
             frontProcessType:'',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
             navContexts:{},
             navParams:{}
         },
       "ClickMultiply":{
             codeName:'ClickMultiply',
             uIActionMode:'BACKEND',
             actionTarget:'SINGLEDATA',
             uIActionTag:'CLICKMULTIPLY',
             frontPSAppView:'',
             caption:'*',
             entityCodeName:'Calculator',
             methodCodeName:'ClickMultiply',
             frontProcessType:'',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
             navContexts:{},
             navParams:{}
         },
       "Click3":{
             codeName:'Click3',
             uIActionMode:'BACKEND',
             actionTarget:'SINGLEDATA',
             uIActionTag:'CLICK3',
             frontPSAppView:'',
             caption:'3',
             entityCodeName:'Calculator',
             methodCodeName:'Click3',
             frontProcessType:'',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
             navContexts:{},
             navParams:{}
         },
       "ShowPart2":{
             codeName:'ShowPart2',
             uIActionMode:'FRONT',
             actionTarget:'SINGLEDATA',
             uIActionTag:'SHOWPART2',
             frontPSAppView:'',
             caption:'显示分区2',
             entityCodeName:'Calculator',
             methodCodeName:'',
             frontProcessType:'OTHER',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'AFTER',
             nextActionCodeName:'',
             navContexts:{},
             navParams:{}
         },
       "ClickClear":{
             codeName:'ClickClear',
             uIActionMode:'BACKEND',
             actionTarget:'SINGLEDATA',
             uIActionTag:'CLICKCLEAR',
             frontPSAppView:'',
             caption:'Clear',
             entityCodeName:'Calculator',
             methodCodeName:'ClickClear',
             frontProcessType:'',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
             navContexts:{},
             navParams:{}
         },
       "Click4":{
             codeName:'Click4',
             uIActionMode:'BACKEND',
             actionTarget:'SINGLEDATA',
             uIActionTag:'CLICK4',
             frontPSAppView:'',
             caption:'4',
             entityCodeName:'Calculator',
             methodCodeName:'Click4',
             frontProcessType:'',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
             navContexts:{},
             navParams:{}
         },
       "ClickPoint":{
             codeName:'ClickPoint',
             uIActionMode:'BACKEND',
             actionTarget:'SINGLEDATA',
             uIActionTag:'CLICKPOINT',
             frontPSAppView:'',
             caption:'.',
             entityCodeName:'Calculator',
             methodCodeName:'ClickPoint',
             frontProcessType:'',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
             navContexts:{},
             navParams:{}
         },
       "ClickExcept":{
             codeName:'ClickExcept',
             uIActionMode:'BACKEND',
             actionTarget:'SINGLEDATA',
             uIActionTag:'CLICKEXCEPT',
             frontPSAppView:'',
             caption:'/',
             entityCodeName:'Calculator',
             methodCodeName:'ClickExcept',
             frontProcessType:'',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
             navContexts:{},
             navParams:{}
         },
       "ClickPlus":{
             codeName:'ClickPlus',
             uIActionMode:'BACKEND',
             actionTarget:'SINGLEDATA',
             uIActionTag:'CLICKPLUS',
             frontPSAppView:'',
             caption:'+',
             entityCodeName:'Calculator',
             methodCodeName:'ClickPlus',
             frontProcessType:'',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
             navContexts:{},
             navParams:{}
         },
       "ShowPart1":{
             codeName:'ShowPart1',
             uIActionMode:'FRONT',
             actionTarget:'SINGLEDATA',
             uIActionTag:'SHOWPART1',
             frontPSAppView:'',
             caption:'显示分区1',
             entityCodeName:'Calculator',
             methodCodeName:'',
             frontProcessType:'OTHER',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'AFTER',
             nextActionCodeName:'',
             navContexts:{},
             navParams:{}
         },
       "Click0":{
             codeName:'Click0',
             uIActionMode:'BACKEND',
             actionTarget:'SINGLEDATA',
             uIActionTag:'CLICK0',
             frontPSAppView:'',
             caption:'0',
             entityCodeName:'Calculator',
             methodCodeName:'Click0',
             frontProcessType:'',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
             navContexts:{},
             navParams:{}
         },
       "Click1":{
             codeName:'Click1',
             uIActionMode:'BACKEND',
             actionTarget:'SINGLEDATA',
             uIActionTag:'CLICK1',
             frontPSAppView:'',
             caption:'1',
             entityCodeName:'Calculator',
             methodCodeName:'Click1',
             frontProcessType:'',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
             navContexts:{},
             navParams:{}
         },
       "ClickEq":{
             codeName:'ClickEq',
             uIActionMode:'BACKEND',
             actionTarget:'SINGLEDATA',
             uIActionTag:'CLICKEQ',
             frontPSAppView:'',
             caption:'=',
             entityCodeName:'Calculator',
             methodCodeName:'ClickEq',
             frontProcessType:'',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
             navContexts:{},
             navParams:{}
         },
       "Click5":{
             codeName:'Click5',
             uIActionMode:'BACKEND',
             actionTarget:'SINGLEDATA',
             uIActionTag:'CLICK5',
             frontPSAppView:'',
             caption:'5',
             entityCodeName:'Calculator',
             methodCodeName:'Click5',
             frontProcessType:'',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
             navContexts:{},
             navParams:{}
         },
       "Click2":{
             codeName:'Click2',
             uIActionMode:'BACKEND',
             actionTarget:'SINGLEDATA',
             uIActionTag:'CLICK2',
             frontPSAppView:'',
             caption:'2',
             entityCodeName:'Calculator',
             methodCodeName:'Click2',
             frontProcessType:'',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
             navContexts:{},
             navParams:{}
         },
       "Click9":{
             codeName:'Click9',
             uIActionMode:'BACKEND',
             actionTarget:'SINGLEDATA',
             uIActionTag:'CLICK9',
             frontPSAppView:'',
             caption:'9',
             entityCodeName:'Calculator',
             methodCodeName:'Click9',
             frontProcessType:'',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
             navContexts:{},
             navParams:{}
         },
     };    /**
     * 显示分区3
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async ShowPart3(uiAction:any, params:any){
        const actionModel =  this.getUIActionModel('ShowPart3');
        AppFrontAction.doAction(actionModel, params);
    }

    /**
     * 显示选择分区
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async OpenPickPart(uiAction:any, params:any){
        const actionModel =  this.getUIActionModel('OpenPickPart');
        AppFrontAction.doAction(actionModel, params);
    }

    /**
     * -
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async ClickMinus(uiAction:any, params:any){
        const actionModel =  this.getUIActionModel('ClickMinus');
        AppBackendAction.doAction(actionModel, params);
    }

    /**
     * 8
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async Click8(uiAction:any, params:any){
        const actionModel =  this.getUIActionModel('Click8');
        AppBackendAction.doAction(actionModel, params);
    }

    /**
     * 6
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async Click6(uiAction:any, params:any){
        const actionModel =  this.getUIActionModel('Click6');
        AppBackendAction.doAction(actionModel, params);
    }

    /**
     * 7
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async Click7(uiAction:any, params:any){
        const actionModel =  this.getUIActionModel('Click7');
        AppBackendAction.doAction(actionModel, params);
    }

    /**
     * Backspace
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async ClickBackspace(uiAction:any, params:any){
        const actionModel =  this.getUIActionModel('ClickBackspace');
        AppBackendAction.doAction(actionModel, params);
    }

    /**
     * *
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async ClickMultiply(uiAction:any, params:any){
        const actionModel =  this.getUIActionModel('ClickMultiply');
        AppBackendAction.doAction(actionModel, params);
    }

    /**
     * 3
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async Click3(uiAction:any, params:any){
        const actionModel =  this.getUIActionModel('Click3');
        AppBackendAction.doAction(actionModel, params);
    }

    /**
     * 显示分区2
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async ShowPart2(uiAction:any, params:any){
        const actionModel =  this.getUIActionModel('ShowPart2');
        AppFrontAction.doAction(actionModel, params);
    }

    /**
     * Clear
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async ClickClear(uiAction:any, params:any){
        const actionModel =  this.getUIActionModel('ClickClear');
        AppBackendAction.doAction(actionModel, params);
    }

    /**
     * 4
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async Click4(uiAction:any, params:any){
        const actionModel =  this.getUIActionModel('Click4');
        AppBackendAction.doAction(actionModel, params);
    }

    /**
     * .
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async ClickPoint(uiAction:any, params:any){
        const actionModel =  this.getUIActionModel('ClickPoint');
        AppBackendAction.doAction(actionModel, params);
    }

    /**
     * /
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async ClickExcept(uiAction:any, params:any){
        const actionModel =  this.getUIActionModel('ClickExcept');
        AppBackendAction.doAction(actionModel, params);
    }

    /**
     * +
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async ClickPlus(uiAction:any, params:any){
        const actionModel =  this.getUIActionModel('ClickPlus');
        AppBackendAction.doAction(actionModel, params);
    }

    /**
     * 显示分区1
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async ShowPart1(uiAction:any, params:any){
        const actionModel =  this.getUIActionModel('ShowPart1');
        AppFrontAction.doAction(actionModel, params);
    }

    /**
     * 0
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async Click0(uiAction:any, params:any){
        const actionModel =  this.getUIActionModel('Click0');
        AppBackendAction.doAction(actionModel, params);
    }

    /**
     * 1
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async Click1(uiAction:any, params:any){
        const actionModel =  this.getUIActionModel('Click1');
        AppBackendAction.doAction(actionModel, params);
    }

    /**
     * =
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async ClickEq(uiAction:any, params:any){
        const actionModel =  this.getUIActionModel('ClickEq');
        AppBackendAction.doAction(actionModel, params);
    }

    /**
     * 5
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async Click5(uiAction:any, params:any){
        const actionModel =  this.getUIActionModel('Click5');
        AppBackendAction.doAction(actionModel, params);
    }

    /**
     * 2
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async Click2(uiAction:any, params:any){
        const actionModel =  this.getUIActionModel('Click2');
        AppBackendAction.doAction(actionModel, params);
    }

    /**
     * 9
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async Click9(uiAction:any, params:any){
        const actionModel =  this.getUIActionModel('Click9');
        AppBackendAction.doAction(actionModel, params);
    }



}