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
        this.initBasicData();
    }

    /**
     * 初始化基础数据
     *
     * @memberof ExampleUIServiceBase
     */
    public initBasicData() {
        // 应用实体主键属性
        this.appDeKeyFieldName = 'exampleid';
        // 是否启用主状态
        this.isEnableDEMainState = false;
    }

    /**
     * 执行
     *
     * @param {*} params
     * @memberof ExampleUIServiceBase
     */
    public async CallUISimple(uiAction:any, params:any){
        const actionModel =  {
             codeName:'CallUISimple',
             uIActionMode:'FRONT',
             actionTarget:'SINGLEDATA',
             uIActionTag:'CALLUISIMPLE',
             frontPSAppView:'',
             caption:'执行',
             entityCodeName:'Example',
             methodCodeName:'',
             frontProcessType:'OTHER',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'REPLACE',
             nextActionCodeName:'',
             navContexts:{},
             navParams:{}
         };
        AppFrontAction.doAction(actionModel, params);
    }

    /**
     * 清空内容
     *
     * @param {*} params
     * @memberof ExampleUIServiceBase
     */
    public async ClearContent(uiAction:any, params:any){
        const actionModel =  {
             codeName:'ClearContent',
             uIActionMode:'BACKEND',
             actionTarget:'SINGLEDATA',
             uIActionTag:'CLEARCONTENT',
             frontPSAppView:'',
             caption:'清空内容',
             entityCodeName:'Example',
             methodCodeName:'ClearContent',
             frontProcessType:'',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
             navContexts:{},
             navParams:{}
         };
        AppBackendAction.doAction(actionModel, params);
    }

    /**
     * 执行
     *
     * @param {*} params
     * @memberof ExampleUIServiceBase
     */
    public async CallUpdateFieldy(uiAction:any, params:any){
        const actionModel =  {
             codeName:'CallUpdateFieldy',
             uIActionMode:'FRONT',
             actionTarget:'SINGLEDATA',
             uIActionTag:'CALLUPDATEFIELDY',
             frontPSAppView:'',
             caption:'执行',
             entityCodeName:'Example',
             methodCodeName:'',
             frontProcessType:'OTHER',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'REPLACE',
             nextActionCodeName:'',
             navContexts:{},
             navParams:{}
         };
        AppFrontAction.doAction(actionModel, params);
    }

    /**
     * 打开视图（界面逻辑-界面行为调用）
     *
     * @param {*} params
     * @memberof ExampleUIServiceBase
     */
    public async OpenView_UIActionTest(uiAction:any, params:any){
        const actionModel =  {
             codeName:'OpenView_UIActionTest',
             uIActionMode:'FRONT',
             actionTarget:'SINGLEDATA',
             uIActionTag:'OPENVIEW_UIACTIONTEST',
             frontPSAppView:'ExampleUIActionTestOptionView',
             caption:'打开视图（界面逻辑-界面行为调用）',
             entityCodeName:'Example',
             methodCodeName:'',
             frontProcessType:'WIZARD',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
             navContexts:{},
             navParams:{}
         };
        AppFrontAction.doAction(actionModel, params);
    }

    /**
     * 前台界面行为（打开模态）
     *
     * @param {*} params
     * @memberof ExampleUIServiceBase
     */
    public async openModel(uiAction:any, params:any){
        const actionModel =  {
             codeName:'openModel',
             uIActionMode:'FRONT',
             actionTarget:'NONE',
             uIActionTag:'OPENMODEL',
             frontPSAppView:'ExampleModelOpenEditView',
             caption:'前台界面行为（打开模态）',
             entityCodeName:'Example',
             methodCodeName:'',
             frontProcessType:'WIZARD',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
             navContexts:{},
             navParams:{}
         };
        AppFrontAction.doAction(actionModel, params);
    }

    /**
     * 执行
     *
     * @param {*} params
     * @memberof ExampleUIServiceBase
     */
    public async CallUIActionTest(uiAction:any, params:any){
        const actionModel =  {
             codeName:'CallUIActionTest',
             uIActionMode:'FRONT',
             actionTarget:'SINGLEDATA',
             uIActionTag:'CALLUIACTIONTEST',
             frontPSAppView:'',
             caption:'执行',
             entityCodeName:'Example',
             methodCodeName:'',
             frontProcessType:'OTHER',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'REPLACE',
             nextActionCodeName:'',
             navContexts:{},
             navParams:{}
         };
        AppFrontAction.doAction(actionModel, params);
    }

    /**
     * 前台界面行为（打开HTML页面）
     *
     * @param {*} params
     * @memberof ExampleUIServiceBase
     */
    public async openHtml(uiAction:any, params:any){
        const actionModel =  {
             codeName:'openHtml',
             uIActionMode:'FRONT',
             actionTarget:'SINGLEKEY',
             uIActionTag:'OPENHTML',
             frontPSAppView:'',
             caption:'前台界面行为（打开HTML页面）',
             entityCodeName:'Example',
             methodCodeName:'',
             frontProcessType:'OPENHTMLPAGE',
             refreshMode:'0',
             htmlPageUrl:'https://www.baidu.com/s?wd=${data.wd}&rsv_spt=1',
             uILogicAttachMode:'',
             nextActionCodeName:'',
             navContexts:{},
             navParams:{wd:'%wd%',}
         };
        AppFrontAction.doAction(actionModel, params);
    }

    /**
     * 前台界面行为（打开顶级视图）
     *
     * @param {*} params
     * @memberof ExampleUIServiceBase
     */
    public async openWindow(uiAction:any, params:any){
        const actionModel =  {
             codeName:'openWindow',
             uIActionMode:'FRONT',
             actionTarget:'NONE',
             uIActionTag:'OPENWINDOW',
             frontPSAppView:'ExampleGridView',
             caption:'前台界面行为（打开顶级视图）',
             entityCodeName:'Example',
             methodCodeName:'',
             frontProcessType:'TOP',
             refreshMode:'0',
             htmlPageUrl:'https://www.ibizsys.cn/ungroup/portal',
             uILogicAttachMode:'',
             nextActionCodeName:'',
             navContexts:{},
             navParams:{}
         };
        AppFrontAction.doAction(actionModel, params);
    }

    /**
     * 表单项更新前台计算
     *
     * @param {*} params
     * @memberof ExampleUIServiceBase
     */
    public async CalcPF(uiAction:any, params:any){
        const actionModel =  {
             codeName:'CalcPF',
             uIActionMode:'BACKEND',
             actionTarget:'SINGLEKEY',
             uIActionTag:'CALCPF',
             frontPSAppView:'',
             caption:'表单项更新前台计算',
             entityCodeName:'Example',
             methodCodeName:'CalcPF',
             frontProcessType:'',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
             navContexts:{},
             navParams:{}
         };
        AppBackendAction.doAction(actionModel, params);
    }

    /**
     * 重新计算
     *
     * @param {*} params
     * @memberof ExampleUIServiceBase
     */
    public async ReCalc(uiAction:any, params:any){
        const actionModel =  {
             codeName:'ReCalc',
             uIActionMode:'BACKEND',
             actionTarget:'SINGLEKEY',
             uIActionTag:'RECALC',
             frontPSAppView:'',
             caption:'重新计算',
             entityCodeName:'Example',
             methodCodeName:'Update',
             frontProcessType:'',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
             navContexts:{},
             navParams:{}
         };
        AppBackendAction.doAction(actionModel, params);
    }

    /**
     * 动态设置上下文并获取数据
     *
     * @param {*} params
     * @memberof ExampleUIServiceBase
     */
    public async PrepareCtx(uiAction:any, params:any){
        const actionModel =  {
             codeName:'PrepareCtx',
             uIActionMode:'BACKEND',
             actionTarget:'SINGLEKEY',
             uIActionTag:'PREPARECTX',
             frontPSAppView:'',
             caption:'动态设置上下文并获取数据',
             entityCodeName:'Example',
             methodCodeName:'PrepareCtx',
             frontProcessType:'',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
             navContexts:{},
             navParams:{}
         };
        AppBackendAction.doAction(actionModel, params);
    }

    /**
     * 编辑
     *
     * @param {*} params
     * @memberof ExampleUIServiceBase
     */
    public async Edit(uiAction:any, params:any){
        const actionModel =  {
             codeName:'Edit',
             uIActionMode:'FRONT',
             actionTarget:'SINGLEKEY',
             uIActionTag:'EDIT',
             frontPSAppView:'ExampleQuickEditView',
             caption:'编辑',
             entityCodeName:'Example',
             methodCodeName:'',
             frontProcessType:'WIZARD',
             refreshMode:'1',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
             navContexts:{},
             navParams:{}
         };
        AppFrontAction.doAction(actionModel, params);
    }



}