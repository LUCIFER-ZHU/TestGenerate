import { AppUIAction, IUIAction, UIServiceBase } from '@core';

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
  constructor(opts: any = {}) {
      super(opts);
  }


/**
     * 显示分区3
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async ShowPart3(params:any){
        const actionModel = {
            codeName:'ShowPart3',
            uIActionMode:'FRONT',
            actionTarget:'SINGLEDATA',
            uIActionTag:'SHOWPART3',
            frontPSAppView:''
        };
        AppUIAction.execute(actionModel, params);
    }
/**
     * 显示选择分区
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async OpenPickPart(params:any){
        const actionModel = {
            codeName:'OpenPickPart',
            uIActionMode:'FRONT',
            actionTarget:'SINGLEDATA',
            uIActionTag:'OPENPICKPART',
            frontPSAppView:'CalculatorPickPartPanelView'
        };
        AppUIAction.execute(actionModel, params);
    }
/**
     * -
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async ClickMinus(params:any){
        const actionModel = {
            codeName:'ClickMinus',
            uIActionMode:'BACKEND',
            actionTarget:'SINGLEDATA',
            uIActionTag:'CLICKMINUS',
            frontPSAppView:''
        };
        AppUIAction.execute(actionModel, params);
    }
/**
     * 8
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async Click8(params:any){
        const actionModel = {
            codeName:'Click8',
            uIActionMode:'BACKEND',
            actionTarget:'SINGLEDATA',
            uIActionTag:'CLICK8',
            frontPSAppView:''
        };
        AppUIAction.execute(actionModel, params);
    }
/**
     * 6
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async Click6(params:any){
        const actionModel = {
            codeName:'Click6',
            uIActionMode:'BACKEND',
            actionTarget:'SINGLEDATA',
            uIActionTag:'CLICK6',
            frontPSAppView:''
        };
        AppUIAction.execute(actionModel, params);
    }
/**
     * 7
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async Click7(params:any){
        const actionModel = {
            codeName:'Click7',
            uIActionMode:'BACKEND',
            actionTarget:'SINGLEDATA',
            uIActionTag:'CLICK7',
            frontPSAppView:''
        };
        AppUIAction.execute(actionModel, params);
    }
/**
     * Backspace
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async ClickBackspace(params:any){
        const actionModel = {
            codeName:'ClickBackspace',
            uIActionMode:'BACKEND',
            actionTarget:'SINGLEDATA',
            uIActionTag:'CLICKBACKSPACE',
            frontPSAppView:''
        };
        AppUIAction.execute(actionModel, params);
    }
/**
     * *
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async ClickMultiply(params:any){
        const actionModel = {
            codeName:'ClickMultiply',
            uIActionMode:'BACKEND',
            actionTarget:'SINGLEDATA',
            uIActionTag:'CLICKMULTIPLY',
            frontPSAppView:''
        };
        AppUIAction.execute(actionModel, params);
    }
/**
     * 3
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async Click3(params:any){
        const actionModel = {
            codeName:'Click3',
            uIActionMode:'BACKEND',
            actionTarget:'SINGLEDATA',
            uIActionTag:'CLICK3',
            frontPSAppView:''
        };
        AppUIAction.execute(actionModel, params);
    }
/**
     * 显示分区2
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async ShowPart2(params:any){
        const actionModel = {
            codeName:'ShowPart2',
            uIActionMode:'FRONT',
            actionTarget:'SINGLEDATA',
            uIActionTag:'SHOWPART2',
            frontPSAppView:''
        };
        AppUIAction.execute(actionModel, params);
    }
/**
     * Clear
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async ClickClear(params:any){
        const actionModel = {
            codeName:'ClickClear',
            uIActionMode:'BACKEND',
            actionTarget:'SINGLEDATA',
            uIActionTag:'CLICKCLEAR',
            frontPSAppView:''
        };
        AppUIAction.execute(actionModel, params);
    }
/**
     * 4
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async Click4(params:any){
        const actionModel = {
            codeName:'Click4',
            uIActionMode:'BACKEND',
            actionTarget:'SINGLEDATA',
            uIActionTag:'CLICK4',
            frontPSAppView:''
        };
        AppUIAction.execute(actionModel, params);
    }
/**
     * .
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async ClickPoint(params:any){
        const actionModel = {
            codeName:'ClickPoint',
            uIActionMode:'BACKEND',
            actionTarget:'SINGLEDATA',
            uIActionTag:'CLICKPOINT',
            frontPSAppView:''
        };
        AppUIAction.execute(actionModel, params);
    }
/**
     * /
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async ClickExcept(params:any){
        const actionModel = {
            codeName:'ClickExcept',
            uIActionMode:'BACKEND',
            actionTarget:'SINGLEDATA',
            uIActionTag:'CLICKEXCEPT',
            frontPSAppView:''
        };
        AppUIAction.execute(actionModel, params);
    }
/**
     * +
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async ClickPlus(params:any){
        const actionModel = {
            codeName:'ClickPlus',
            uIActionMode:'BACKEND',
            actionTarget:'SINGLEDATA',
            uIActionTag:'CLICKPLUS',
            frontPSAppView:''
        };
        AppUIAction.execute(actionModel, params);
    }
/**
     * 显示分区1
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async ShowPart1(params:any){
        const actionModel = {
            codeName:'ShowPart1',
            uIActionMode:'FRONT',
            actionTarget:'SINGLEDATA',
            uIActionTag:'SHOWPART1',
            frontPSAppView:''
        };
        AppUIAction.execute(actionModel, params);
    }
/**
     * 0
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async Click0(params:any){
        const actionModel = {
            codeName:'Click0',
            uIActionMode:'BACKEND',
            actionTarget:'SINGLEDATA',
            uIActionTag:'CLICK0',
            frontPSAppView:''
        };
        AppUIAction.execute(actionModel, params);
    }
/**
     * 1
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async Click1(params:any){
        const actionModel = {
            codeName:'Click1',
            uIActionMode:'BACKEND',
            actionTarget:'SINGLEDATA',
            uIActionTag:'CLICK1',
            frontPSAppView:''
        };
        AppUIAction.execute(actionModel, params);
    }
/**
     * =
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async ClickEq(params:any){
        const actionModel = {
            codeName:'ClickEq',
            uIActionMode:'BACKEND',
            actionTarget:'SINGLEDATA',
            uIActionTag:'CLICKEQ',
            frontPSAppView:''
        };
        AppUIAction.execute(actionModel, params);
    }
/**
     * 5
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async Click5(params:any){
        const actionModel = {
            codeName:'Click5',
            uIActionMode:'BACKEND',
            actionTarget:'SINGLEDATA',
            uIActionTag:'CLICK5',
            frontPSAppView:''
        };
        AppUIAction.execute(actionModel, params);
    }
/**
     * 2
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async Click2(params:any){
        const actionModel = {
            codeName:'Click2',
            uIActionMode:'BACKEND',
            actionTarget:'SINGLEDATA',
            uIActionTag:'CLICK2',
            frontPSAppView:''
        };
        AppUIAction.execute(actionModel, params);
    }
/**
     * 9
     *
     * @param {*} params
     * @memberof CalculatorUIServiceBase
     */
    public async Click9(params:any){
        const actionModel = {
            codeName:'Click9',
            uIActionMode:'BACKEND',
            actionTarget:'SINGLEDATA',
            uIActionTag:'CLICK9',
            frontPSAppView:''
        };
        AppUIAction.execute(actionModel, params);
    }


}