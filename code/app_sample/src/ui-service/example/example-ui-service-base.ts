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
     * 执行
     *
     * @param {*} params
     * @memberof ExampleUIServiceBase
     */
    public async CallUISimple(params:any){
        const actionModel = {
            codeName:'CallUISimple',
            uIActionMode:'FRONT',
            actionTarget:'SINGLEDATA',
            uIActionTag:'CALLUISIMPLE',
            frontPSAppView:''
        };
        AppUIAction.execute(actionModel, params);
    }
/**
     * 清空内容
     *
     * @param {*} params
     * @memberof ExampleUIServiceBase
     */
    public async ClearContent(params:any){
        const actionModel = {
            codeName:'ClearContent',
            uIActionMode:'BACKEND',
            actionTarget:'SINGLEDATA',
            uIActionTag:'CLEARCONTENT',
            frontPSAppView:''
        };
        AppUIAction.execute(actionModel, params);
    }
/**
     * 执行
     *
     * @param {*} params
     * @memberof ExampleUIServiceBase
     */
    public async CallUpdateFieldy(params:any){
        const actionModel = {
            codeName:'CallUpdateFieldy',
            uIActionMode:'FRONT',
            actionTarget:'SINGLEDATA',
            uIActionTag:'CALLUPDATEFIELDY',
            frontPSAppView:''
        };
        AppUIAction.execute(actionModel, params);
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
            frontPSAppView:'ExampleUIActionTestOptionView'
        };
        AppUIAction.execute(actionModel, params);
    }
/**
     * 前台界面行为（打开模态）
     *
     * @param {*} params
     * @memberof ExampleUIServiceBase
     */
    public async openModel(params:any){
        const actionModel = {
            codeName:'openModel',
            uIActionMode:'FRONT',
            actionTarget:'NONE',
            uIActionTag:'OPENMODEL',
            frontPSAppView:'ExampleModelOpenEditView'
        };
        AppUIAction.execute(actionModel, params);
    }
/**
     * 执行
     *
     * @param {*} params
     * @memberof ExampleUIServiceBase
     */
    public async CallUIActionTest(params:any){
        const actionModel = {
            codeName:'CallUIActionTest',
            uIActionMode:'FRONT',
            actionTarget:'SINGLEDATA',
            uIActionTag:'CALLUIACTIONTEST',
            frontPSAppView:''
        };
        AppUIAction.execute(actionModel, params);
    }
/**
     * 前台界面行为（打开HTML页面）
     *
     * @param {*} params
     * @memberof ExampleUIServiceBase
     */
    public async openHtml(params:any){
        const actionModel = {
            codeName:'openHtml',
            uIActionMode:'FRONT',
            actionTarget:'SINGLEKEY',
            uIActionTag:'OPENHTML',
            frontPSAppView:''
        };
        AppUIAction.execute(actionModel, params);
    }
/**
     * 前台界面行为（打开顶级视图）
     *
     * @param {*} params
     * @memberof ExampleUIServiceBase
     */
    public async openWindow(params:any){
        const actionModel = {
            codeName:'openWindow',
            uIActionMode:'FRONT',
            actionTarget:'NONE',
            uIActionTag:'OPENWINDOW',
            frontPSAppView:'ExampleGridView'
        };
        AppUIAction.execute(actionModel, params);
    }
/**
     * 表单项更新前台计算
     *
     * @param {*} params
     * @memberof ExampleUIServiceBase
     */
    public async CalcPF(params:any){
        const actionModel = {
            codeName:'CalcPF',
            uIActionMode:'BACKEND',
            actionTarget:'SINGLEKEY',
            uIActionTag:'CALCPF',
            frontPSAppView:''
        };
        AppUIAction.execute(actionModel, params);
    }
/**
     * 重新计算
     *
     * @param {*} params
     * @memberof ExampleUIServiceBase
     */
    public async ReCalc(params:any){
        const actionModel = {
            codeName:'ReCalc',
            uIActionMode:'BACKEND',
            actionTarget:'SINGLEKEY',
            uIActionTag:'RECALC',
            frontPSAppView:''
        };
        AppUIAction.execute(actionModel, params);
    }
/**
     * 动态设置上下文并获取数据
     *
     * @param {*} params
     * @memberof ExampleUIServiceBase
     */
    public async PrepareCtx(params:any){
        const actionModel = {
            codeName:'PrepareCtx',
            uIActionMode:'BACKEND',
            actionTarget:'SINGLEKEY',
            uIActionTag:'PREPARECTX',
            frontPSAppView:''
        };
        AppUIAction.execute(actionModel, params);
    }
/**
     * 编辑
     *
     * @param {*} params
     * @memberof ExampleUIServiceBase
     */
    public async Edit(params:any){
        const actionModel = {
            codeName:'Edit',
            uIActionMode:'FRONT',
            actionTarget:'SINGLEKEY',
            uIActionTag:'EDIT',
            frontPSAppView:'ExampleQuickEditView'
        };
        AppUIAction.execute(actionModel, params);
    }


}