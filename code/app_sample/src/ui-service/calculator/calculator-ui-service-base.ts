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
             entityCodeName:'',
             methodCodeName:'',
             frontProcessType:'OTHER',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'AFTER',
             nextActionCodeName:'',
         },
       "OpenPickPart":{
             codeName:'OpenPickPart',
             uIActionMode:'FRONT',
             actionTarget:'SINGLEDATA',
             uIActionTag:'OPENPICKPART',
             frontPSAppView:'CalculatorPickPartPanelView',
             caption:'显示选择分区',
             entityCodeName:'',
             methodCodeName:'',
             frontProcessType:'WIZARD',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
         },
       "ClickMinus":{
             codeName:'ClickMinus',
             uIActionMode:'BACKEND',
             actionTarget:'SINGLEDATA',
             uIActionTag:'CLICKMINUS',
             frontPSAppView:'',
             caption:'-',
             entityCodeName:'',
             methodCodeName:'ClickMinus',
             frontProcessType:'',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
         },
       "Click8":{
             codeName:'Click8',
             uIActionMode:'BACKEND',
             actionTarget:'SINGLEDATA',
             uIActionTag:'CLICK8',
             frontPSAppView:'',
             caption:'8',
             entityCodeName:'',
             methodCodeName:'Click8',
             frontProcessType:'',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
         },
       "Click6":{
             codeName:'Click6',
             uIActionMode:'BACKEND',
             actionTarget:'SINGLEDATA',
             uIActionTag:'CLICK6',
             frontPSAppView:'',
             caption:'6',
             entityCodeName:'',
             methodCodeName:'Click6',
             frontProcessType:'',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
         },
       "Click7":{
             codeName:'Click7',
             uIActionMode:'BACKEND',
             actionTarget:'SINGLEDATA',
             uIActionTag:'CLICK7',
             frontPSAppView:'',
             caption:'7',
             entityCodeName:'',
             methodCodeName:'Click7',
             frontProcessType:'',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
         },
       "ClickBackspace":{
             codeName:'ClickBackspace',
             uIActionMode:'BACKEND',
             actionTarget:'SINGLEDATA',
             uIActionTag:'CLICKBACKSPACE',
             frontPSAppView:'',
             caption:'Backspace',
             entityCodeName:'',
             methodCodeName:'ClickBackspace',
             frontProcessType:'',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
         },
       "ClickMultiply":{
             codeName:'ClickMultiply',
             uIActionMode:'BACKEND',
             actionTarget:'SINGLEDATA',
             uIActionTag:'CLICKMULTIPLY',
             frontPSAppView:'',
             caption:'*',
             entityCodeName:'',
             methodCodeName:'ClickMultiply',
             frontProcessType:'',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
         },
       "Click3":{
             codeName:'Click3',
             uIActionMode:'BACKEND',
             actionTarget:'SINGLEDATA',
             uIActionTag:'CLICK3',
             frontPSAppView:'',
             caption:'3',
             entityCodeName:'',
             methodCodeName:'Click3',
             frontProcessType:'',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
         },
       "ShowPart2":{
             codeName:'ShowPart2',
             uIActionMode:'FRONT',
             actionTarget:'SINGLEDATA',
             uIActionTag:'SHOWPART2',
             frontPSAppView:'',
             caption:'显示分区2',
             entityCodeName:'',
             methodCodeName:'',
             frontProcessType:'OTHER',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'AFTER',
             nextActionCodeName:'',
         },
       "ClickClear":{
             codeName:'ClickClear',
             uIActionMode:'BACKEND',
             actionTarget:'SINGLEDATA',
             uIActionTag:'CLICKCLEAR',
             frontPSAppView:'',
             caption:'Clear',
             entityCodeName:'',
             methodCodeName:'ClickClear',
             frontProcessType:'',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
         },
       "Click4":{
             codeName:'Click4',
             uIActionMode:'BACKEND',
             actionTarget:'SINGLEDATA',
             uIActionTag:'CLICK4',
             frontPSAppView:'',
             caption:'4',
             entityCodeName:'',
             methodCodeName:'Click4',
             frontProcessType:'',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
         },
       "ClickPoint":{
             codeName:'ClickPoint',
             uIActionMode:'BACKEND',
             actionTarget:'SINGLEDATA',
             uIActionTag:'CLICKPOINT',
             frontPSAppView:'',
             caption:'.',
             entityCodeName:'',
             methodCodeName:'ClickPoint',
             frontProcessType:'',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
         },
       "ClickExcept":{
             codeName:'ClickExcept',
             uIActionMode:'BACKEND',
             actionTarget:'SINGLEDATA',
             uIActionTag:'CLICKEXCEPT',
             frontPSAppView:'',
             caption:'/',
             entityCodeName:'',
             methodCodeName:'ClickExcept',
             frontProcessType:'',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
         },
       "ClickPlus":{
             codeName:'ClickPlus',
             uIActionMode:'BACKEND',
             actionTarget:'SINGLEDATA',
             uIActionTag:'CLICKPLUS',
             frontPSAppView:'',
             caption:'+',
             entityCodeName:'',
             methodCodeName:'ClickPlus',
             frontProcessType:'',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
         },
       "ShowPart1":{
             codeName:'ShowPart1',
             uIActionMode:'FRONT',
             actionTarget:'SINGLEDATA',
             uIActionTag:'SHOWPART1',
             frontPSAppView:'',
             caption:'显示分区1',
             entityCodeName:'',
             methodCodeName:'',
             frontProcessType:'OTHER',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'AFTER',
             nextActionCodeName:'',
         },
       "Click0":{
             codeName:'Click0',
             uIActionMode:'BACKEND',
             actionTarget:'SINGLEDATA',
             uIActionTag:'CLICK0',
             frontPSAppView:'',
             caption:'0',
             entityCodeName:'',
             methodCodeName:'Click0',
             frontProcessType:'',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
         },
       "Click1":{
             codeName:'Click1',
             uIActionMode:'BACKEND',
             actionTarget:'SINGLEDATA',
             uIActionTag:'CLICK1',
             frontPSAppView:'',
             caption:'1',
             entityCodeName:'',
             methodCodeName:'Click1',
             frontProcessType:'',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
         },
       "ClickEq":{
             codeName:'ClickEq',
             uIActionMode:'BACKEND',
             actionTarget:'SINGLEDATA',
             uIActionTag:'CLICKEQ',
             frontPSAppView:'',
             caption:'=',
             entityCodeName:'',
             methodCodeName:'ClickEq',
             frontProcessType:'',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
         },
       "Click5":{
             codeName:'Click5',
             uIActionMode:'BACKEND',
             actionTarget:'SINGLEDATA',
             uIActionTag:'CLICK5',
             frontPSAppView:'',
             caption:'5',
             entityCodeName:'',
             methodCodeName:'Click5',
             frontProcessType:'',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
         },
       "Click2":{
             codeName:'Click2',
             uIActionMode:'BACKEND',
             actionTarget:'SINGLEDATA',
             uIActionTag:'CLICK2',
             frontPSAppView:'',
             caption:'2',
             entityCodeName:'',
             methodCodeName:'Click2',
             frontProcessType:'',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
         },
       "Click9":{
             codeName:'Click9',
             uIActionMode:'BACKEND',
             actionTarget:'SINGLEDATA',
             uIActionTag:'CLICK9',
             frontPSAppView:'',
             caption:'9',
             entityCodeName:'',
             methodCodeName:'Click9',
             frontProcessType:'',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
         },
     };    /**
     * 显示分区3
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async ShowPart3(params:any){
        const actionModel =  this.getUIActionModel('ShowPart3');
        AppFrontAction.doAction(actionModel, params);
    }

    /**
     * 显示选择分区
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async OpenPickPart(params:any){
        const actionModel =  this.getUIActionModel('OpenPickPart');
        AppFrontAction.doAction(actionModel, params);
    }

    /**
     * -
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async ClickMinus(params:any){
        const actionModel =  this.getUIActionModel('ClickMinus');
        AppBackendAction.doAction(actionModel, params);
    }

    /**
     * 8
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async Click8(params:any){
        const actionModel =  this.getUIActionModel('Click8');
        AppBackendAction.doAction(actionModel, params);
    }

    /**
     * 6
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async Click6(params:any){
        const actionModel =  this.getUIActionModel('Click6');
        AppBackendAction.doAction(actionModel, params);
    }

    /**
     * 7
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async Click7(params:any){
        const actionModel =  this.getUIActionModel('Click7');
        AppBackendAction.doAction(actionModel, params);
    }

    /**
     * Backspace
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async ClickBackspace(params:any){
        const actionModel =  this.getUIActionModel('ClickBackspace');
        AppBackendAction.doAction(actionModel, params);
    }

    /**
     * *
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async ClickMultiply(params:any){
        const actionModel =  this.getUIActionModel('ClickMultiply');
        AppBackendAction.doAction(actionModel, params);
    }

    /**
     * 3
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async Click3(params:any){
        const actionModel =  this.getUIActionModel('Click3');
        AppBackendAction.doAction(actionModel, params);
    }

    /**
     * 显示分区2
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async ShowPart2(params:any){
        const actionModel =  this.getUIActionModel('ShowPart2');
        AppFrontAction.doAction(actionModel, params);
    }

    /**
     * Clear
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async ClickClear(params:any){
        const actionModel =  this.getUIActionModel('ClickClear');
        AppBackendAction.doAction(actionModel, params);
    }

    /**
     * 4
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async Click4(params:any){
        const actionModel =  this.getUIActionModel('Click4');
        AppBackendAction.doAction(actionModel, params);
    }

    /**
     * .
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async ClickPoint(params:any){
        const actionModel =  this.getUIActionModel('ClickPoint');
        AppBackendAction.doAction(actionModel, params);
    }

    /**
     * /
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async ClickExcept(params:any){
        const actionModel =  this.getUIActionModel('ClickExcept');
        AppBackendAction.doAction(actionModel, params);
    }

    /**
     * +
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async ClickPlus(params:any){
        const actionModel =  this.getUIActionModel('ClickPlus');
        AppBackendAction.doAction(actionModel, params);
    }

    /**
     * 显示分区1
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async ShowPart1(params:any){
        const actionModel =  this.getUIActionModel('ShowPart1');
        AppFrontAction.doAction(actionModel, params);
    }

    /**
     * 0
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async Click0(params:any){
        const actionModel =  this.getUIActionModel('Click0');
        AppBackendAction.doAction(actionModel, params);
    }

    /**
     * 1
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async Click1(params:any){
        const actionModel =  this.getUIActionModel('Click1');
        AppBackendAction.doAction(actionModel, params);
    }

    /**
     * =
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async ClickEq(params:any){
        const actionModel =  this.getUIActionModel('ClickEq');
        AppBackendAction.doAction(actionModel, params);
    }

    /**
     * 5
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async Click5(params:any){
        const actionModel =  this.getUIActionModel('Click5');
        AppBackendAction.doAction(actionModel, params);
    }

    /**
     * 2
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async Click2(params:any){
        const actionModel =  this.getUIActionModel('Click2');
        AppBackendAction.doAction(actionModel, params);
    }

    /**
     * 9
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async Click9(params:any){
        const actionModel =  this.getUIActionModel('Click9');
        AppBackendAction.doAction(actionModel, params);
    }



}