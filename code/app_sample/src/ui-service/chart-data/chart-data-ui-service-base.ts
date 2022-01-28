import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
/**
 * 图表UI服务对象基类
 *
 * @export
 * @class ChartDataUIServiceBase
 * @extends {UIServiceBase}
 */
export class ChartDataUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of ChartDataUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof ChartDataUIServiceBase
    */
  constructor(opts: IParam = {}) {
      super(opts);
  }



   public uiActionModes = {       "editview":{
             codeName:'editview',
             uIActionMode:'FRONT',
             actionTarget:'SINGLEKEY',
             uIActionTag:'EDITVIEW',
             frontPSAppView:'ChartDataEditView',
             caption:'编辑',
             entityCodeName:'ChartData',
             methodCodeName:'',
             frontProcessType:'WIZARD',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
             navContexts:{},
             navParams:{}
         },
       "MobEdit":{
             codeName:'MobEdit',
             uIActionMode:'FRONT',
             actionTarget:'SINGLEKEY',
             uIActionTag:'MOBEDIT',
             frontPSAppView:'ChartDataMobEditView',
             caption:'移动端编辑',
             entityCodeName:'ChartData',
             methodCodeName:'',
             frontProcessType:'WIZARD',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
             navContexts:{},
             navParams:{}
         },
       "TestBackUIAction":{
             codeName:'TestBackUIAction',
             uIActionMode:'BACKEND',
             actionTarget:'SINGLEKEY',
             uIActionTag:'TESTBACKUIACTION',
             frontPSAppView:'',
             caption:'测试后台界面行为',
             entityCodeName:'ChartData',
             methodCodeName:'TestBackEndAction',
             frontProcessType:'',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
             navContexts:{},
             navParams:{}
         },
       "openbaidu":{
             codeName:'openbaidu',
             uIActionMode:'FRONT',
             actionTarget:'NONE',
             uIActionTag:'OPENBAIDU',
             frontPSAppView:'',
             caption:'打开百度',
             entityCodeName:'ChartData',
             methodCodeName:'',
             frontProcessType:'OPENHTMLPAGE',
             refreshMode:'0',
             htmlPageUrl:'https://www.baidu.com/',
             uILogicAttachMode:'',
             nextActionCodeName:'',
             navContexts:{},
             navParams:{}
         },
       "custom1":{
             codeName:'custom1',
             uIActionMode:'FRONT',
             actionTarget:'SINGLEDATA',
             uIActionTag:'CUSTOM1',
             frontPSAppView:'ProvinceMobMDView',
             caption:'界面行为测试1',
             entityCodeName:'ChartData',
             methodCodeName:'',
             frontProcessType:'WIZARD',
             refreshMode:'1',
             htmlPageUrl:'https://www.baidu.com/',
             uILogicAttachMode:'',
             nextActionCodeName:'',
             navContexts:{},
             navParams:{}
         },
       "Count":{
             codeName:'Count',
             uIActionMode:'FRONT',
             actionTarget:'NONE',
             uIActionTag:'COUNT',
             frontPSAppView:'',
             caption:'计数器',
             entityCodeName:'ChartData',
             methodCodeName:'',
             frontProcessType:'OTHER',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
             navContexts:{},
             navParams:{}
         },
       "htxwtest":{
             codeName:'htxwtest',
             uIActionMode:'BACKEND',
             actionTarget:'SINGLEDATA',
             uIActionTag:'HTXWTEST',
             frontPSAppView:'',
             caption:'后台行为',
             entityCodeName:'ChartData',
             methodCodeName:'HTXWtest',
             frontProcessType:'',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
             navContexts:{},
             navParams:{}
         },
       "TestOpenMDView":{
             codeName:'TestOpenMDView',
             uIActionMode:'FRONT',
             actionTarget:'NONE',
             uIActionTag:'TESTOPENMDVIEW',
             frontPSAppView:'ChartDataMobMDView',
             caption:'测试图表实体打开多数据视图',
             entityCodeName:'ChartData',
             methodCodeName:'',
             frontProcessType:'WIZARD',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
             navContexts:{},
             navParams:{}
         },
       "openview":{
             codeName:'openview',
             uIActionMode:'FRONT',
             actionTarget:'SINGLEKEY',
             uIActionTag:'OPENVIEW',
             frontPSAppView:'ExampleEditorEditView',
             caption:'打开视图',
             entityCodeName:'ChartData',
             methodCodeName:'',
             frontProcessType:'WIZARD',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
             navContexts:{testcontextdyna:'%app%',testcontext:'test1',},
             navParams:{testviewparamdyna:'%app%',testviewparam:'test3',}
         },
       "custom2":{
             codeName:'custom2',
             uIActionMode:'BACKEND',
             actionTarget:'NONE',
             uIActionTag:'CUSTOM2',
             frontPSAppView:'ProvinceMobMDView',
             caption:'界面行为测试2',
             entityCodeName:'ChartData',
             methodCodeName:'GetRandom',
             frontProcessType:'',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
             navContexts:{},
             navParams:{}
         },
     };    /**
     * 编辑
     *
     * @param {*} params
     * @memberof ChartDataUIServiceBase
     */
    public async editview(uiAction:any, params:any){
        const actionModel =  this.getUIActionModel('editview');
        AppFrontAction.doAction(actionModel, params);
    }

    /**
     * 移动端编辑
     *
     * @param {*} params
     * @memberof ChartDataUIServiceBase
     */
    public async MobEdit(uiAction:any, params:any){
        const actionModel =  this.getUIActionModel('MobEdit');
        AppFrontAction.doAction(actionModel, params);
    }

    /**
     * 测试后台界面行为
     *
     * @param {*} params
     * @memberof ChartDataUIServiceBase
     */
    public async TestBackUIAction(uiAction:any, params:any){
        const actionModel =  this.getUIActionModel('TestBackUIAction');
        AppBackendAction.doAction(actionModel, params);
    }

    /**
     * 打开百度
     *
     * @param {*} params
     * @memberof ChartDataUIServiceBase
     */
    public async openbaidu(uiAction:any, params:any){
        const actionModel =  this.getUIActionModel('openbaidu');
        AppFrontAction.doAction(actionModel, params);
    }

    /**
     * 界面行为测试1
     *
     * @param {*} params
     * @memberof ChartDataUIServiceBase
     */
    public async custom1(uiAction:any, params:any){
        const actionModel =  this.getUIActionModel('custom1');
        AppFrontAction.doAction(actionModel, params);
    }

    /**
     * 计数器
     *
     * @param {*} params
     * @memberof ChartDataUIServiceBase
     */
    public async Count(uiAction:any, params:any){
        const actionModel =  this.getUIActionModel('Count');
        AppFrontAction.doAction(actionModel, params);
    }

    /**
     * 后台行为
     *
     * @param {*} params
     * @memberof ChartDataUIServiceBase
     */
    public async htxwtest(uiAction:any, params:any){
        const actionModel =  this.getUIActionModel('htxwtest');
        AppBackendAction.doAction(actionModel, params);
    }

    /**
     * 测试图表实体打开多数据视图
     *
     * @param {*} params
     * @memberof ChartDataUIServiceBase
     */
    public async TestOpenMDView(uiAction:any, params:any){
        const actionModel =  this.getUIActionModel('TestOpenMDView');
        AppFrontAction.doAction(actionModel, params);
    }

    /**
     * 打开视图
     *
     * @param {*} params
     * @memberof ChartDataUIServiceBase
     */
    public async openview(uiAction:any, params:any){
        const actionModel =  this.getUIActionModel('openview');
        AppFrontAction.doAction(actionModel, params);
    }

    /**
     * 界面行为测试2
     *
     * @param {*} params
     * @memberof ChartDataUIServiceBase
     */
    public async custom2(uiAction:any, params:any){
        const actionModel =  this.getUIActionModel('custom2');
        AppBackendAction.doAction(actionModel, params);
    }



}