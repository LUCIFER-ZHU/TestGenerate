import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
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
  constructor(opts: IParam = {}) {
      super(opts);
  }



   public uiActionModes = {       "CallUISimple":{
             codeName:'CallUISimple',
             uIActionMode:'FRONT',
             actionTarget:'SINGLEDATA',
             uIActionTag:'CALLUISIMPLE',
             frontPSAppView:'',
             caption:'执行',
             entityCodeName:'',
             methodCodeName:'',
             frontProcessType:'OTHER',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'REPLACE',
             nextActionCodeName:'',
         },
       "ClearContent":{
             codeName:'ClearContent',
             uIActionMode:'BACKEND',
             actionTarget:'SINGLEDATA',
             uIActionTag:'CLEARCONTENT',
             frontPSAppView:'',
             caption:'清空内容',
             entityCodeName:'',
             methodCodeName:'ClearContent',
             frontProcessType:'',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
         },
       "CallUpdateFieldy":{
             codeName:'CallUpdateFieldy',
             uIActionMode:'FRONT',
             actionTarget:'SINGLEDATA',
             uIActionTag:'CALLUPDATEFIELDY',
             frontPSAppView:'',
             caption:'执行',
             entityCodeName:'',
             methodCodeName:'',
             frontProcessType:'OTHER',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'REPLACE',
             nextActionCodeName:'',
         },
       "OpenView_UIActionTest":{
             codeName:'OpenView_UIActionTest',
             uIActionMode:'FRONT',
             actionTarget:'SINGLEDATA',
             uIActionTag:'OPENVIEW_UIACTIONTEST',
             frontPSAppView:'ExampleUIActionTestOptionView',
             caption:'打开视图（界面逻辑-界面行为调用）',
             entityCodeName:'',
             methodCodeName:'',
             frontProcessType:'WIZARD',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
         },
       "openModel":{
             codeName:'openModel',
             uIActionMode:'FRONT',
             actionTarget:'NONE',
             uIActionTag:'OPENMODEL',
             frontPSAppView:'ExampleModelOpenEditView',
             caption:'前台界面行为（打开模态）',
             entityCodeName:'',
             methodCodeName:'',
             frontProcessType:'WIZARD',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
         },
       "CallUIActionTest":{
             codeName:'CallUIActionTest',
             uIActionMode:'FRONT',
             actionTarget:'SINGLEDATA',
             uIActionTag:'CALLUIACTIONTEST',
             frontPSAppView:'',
             caption:'执行',
             entityCodeName:'',
             methodCodeName:'',
             frontProcessType:'OTHER',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'REPLACE',
             nextActionCodeName:'',
         },
       "openHtml":{
             codeName:'openHtml',
             uIActionMode:'FRONT',
             actionTarget:'SINGLEKEY',
             uIActionTag:'OPENHTML',
             frontPSAppView:'',
             caption:'前台界面行为（打开HTML页面）',
             entityCodeName:'',
             methodCodeName:'',
             frontProcessType:'OPENHTMLPAGE',
             refreshMode:'0',
             htmlPageUrl:'https://www.baidu.com/s?wd=${data.wd}&rsv_spt=1',
             uILogicAttachMode:'',
             nextActionCodeName:'',
         },
       "openWindow":{
             codeName:'openWindow',
             uIActionMode:'FRONT',
             actionTarget:'NONE',
             uIActionTag:'OPENWINDOW',
             frontPSAppView:'ExampleGridView',
             caption:'前台界面行为（打开顶级视图）',
             entityCodeName:'',
             methodCodeName:'',
             frontProcessType:'TOP',
             refreshMode:'0',
             htmlPageUrl:'https://www.ibizsys.cn/ungroup/portal',
             uILogicAttachMode:'',
             nextActionCodeName:'',
         },
       "CalcPF":{
             codeName:'CalcPF',
             uIActionMode:'BACKEND',
             actionTarget:'SINGLEKEY',
             uIActionTag:'CALCPF',
             frontPSAppView:'',
             caption:'表单项更新前台计算',
             entityCodeName:'',
             methodCodeName:'CalcPF',
             frontProcessType:'',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
         },
       "ReCalc":{
             codeName:'ReCalc',
             uIActionMode:'BACKEND',
             actionTarget:'SINGLEKEY',
             uIActionTag:'RECALC',
             frontPSAppView:'',
             caption:'重新计算',
             entityCodeName:'',
             methodCodeName:'Update',
             frontProcessType:'',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
         },
       "PrepareCtx":{
             codeName:'PrepareCtx',
             uIActionMode:'BACKEND',
             actionTarget:'SINGLEKEY',
             uIActionTag:'PREPARECTX',
             frontPSAppView:'',
             caption:'动态设置上下文并获取数据',
             entityCodeName:'',
             methodCodeName:'PrepareCtx',
             frontProcessType:'',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
         },
       "Edit":{
             codeName:'Edit',
             uIActionMode:'FRONT',
             actionTarget:'SINGLEKEY',
             uIActionTag:'EDIT',
             frontPSAppView:'ExampleQuickEditView',
             caption:'编辑',
             entityCodeName:'',
             methodCodeName:'',
             frontProcessType:'WIZARD',
             refreshMode:'1',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
         },
     };    /**
     * 执行
     *
     * @param {*} params
     * @memberof ExampleUIServiceBase
     */
    public async CallUISimple(params:any){
        const actionModel =  this.getUIActionModel('CallUISimple');
        AppFrontAction.doAction(actionModel, params);
    }

    /**
     * 清空内容
     *
     * @param {*} params
     * @memberof ExampleUIServiceBase
     */
    public async ClearContent(params:any){
        const actionModel =  this.getUIActionModel('ClearContent');
        AppBackendAction.doAction(actionModel, params);
    }

    /**
     * 执行
     *
     * @param {*} params
     * @memberof ExampleUIServiceBase
     */
    public async CallUpdateFieldy(params:any){
        const actionModel =  this.getUIActionModel('CallUpdateFieldy');
        AppFrontAction.doAction(actionModel, params);
    }

    /**
     * 打开视图（界面逻辑-界面行为调用）
     *
     * @param {*} params
     * @memberof ExampleUIServiceBase
     */
    public async OpenView_UIActionTest(params:any){
        const actionModel =  this.getUIActionModel('OpenView_UIActionTest');
        AppFrontAction.doAction(actionModel, params);
    }

    /**
     * 前台界面行为（打开模态）
     *
     * @param {*} params
     * @memberof ExampleUIServiceBase
     */
    public async openModel(params:any){
        const actionModel =  this.getUIActionModel('openModel');
        AppFrontAction.doAction(actionModel, params);
    }

    /**
     * 执行
     *
     * @param {*} params
     * @memberof ExampleUIServiceBase
     */
    public async CallUIActionTest(params:any){
        const actionModel =  this.getUIActionModel('CallUIActionTest');
        AppFrontAction.doAction(actionModel, params);
    }

    /**
     * 前台界面行为（打开HTML页面）
     *
     * @param {*} params
     * @memberof ExampleUIServiceBase
     */
    public async openHtml(params:any){
        const actionModel =  this.getUIActionModel('openHtml');
        AppFrontAction.doAction(actionModel, params);
    }

    /**
     * 前台界面行为（打开顶级视图）
     *
     * @param {*} params
     * @memberof ExampleUIServiceBase
     */
    public async openWindow(params:any){
        const actionModel =  this.getUIActionModel('openWindow');
        AppFrontAction.doAction(actionModel, params);
    }

    /**
     * 表单项更新前台计算
     *
     * @param {*} params
     * @memberof ExampleUIServiceBase
     */
    public async CalcPF(params:any){
        const actionModel =  this.getUIActionModel('CalcPF');
        AppBackendAction.doAction(actionModel, params);
    }

    /**
     * 重新计算
     *
     * @param {*} params
     * @memberof ExampleUIServiceBase
     */
    public async ReCalc(params:any){
        const actionModel =  this.getUIActionModel('ReCalc');
        AppBackendAction.doAction(actionModel, params);
    }

    /**
     * 动态设置上下文并获取数据
     *
     * @param {*} params
     * @memberof ExampleUIServiceBase
     */
    public async PrepareCtx(params:any){
        const actionModel =  this.getUIActionModel('PrepareCtx');
        AppBackendAction.doAction(actionModel, params);
    }

    /**
     * 编辑
     *
     * @param {*} params
     * @memberof ExampleUIServiceBase
     */
    public async Edit(params:any){
        const actionModel =  this.getUIActionModel('Edit');
        AppFrontAction.doAction(actionModel, params);
    }



}