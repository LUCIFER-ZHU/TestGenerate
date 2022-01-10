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
             entityCodeName:'',
             methodCodeName:'',
             frontProcessType:'WIZARD',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
         },
       "MobEdit":{
             codeName:'MobEdit',
             uIActionMode:'FRONT',
             actionTarget:'SINGLEKEY',
             uIActionTag:'MOBEDIT',
             frontPSAppView:'ChartDataMobEditView',
             caption:'移动端编辑',
             entityCodeName:'',
             methodCodeName:'',
             frontProcessType:'WIZARD',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
         },
       "TestBackUIAction":{
             codeName:'TestBackUIAction',
             uIActionMode:'BACKEND',
             actionTarget:'SINGLEKEY',
             uIActionTag:'TESTBACKUIACTION',
             frontPSAppView:'',
             caption:'测试后台界面行为',
             entityCodeName:'',
             methodCodeName:'TestBackEndAction',
             frontProcessType:'',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
         },
       "custom1":{
             codeName:'custom1',
             uIActionMode:'FRONT',
             actionTarget:'SINGLEDATA',
             uIActionTag:'CUSTOM1',
             frontPSAppView:'ProvinceMobMDView',
             caption:'界面行为测试1',
             entityCodeName:'',
             methodCodeName:'',
             frontProcessType:'WIZARD',
             refreshMode:'1',
             htmlPageUrl:'https://www.baidu.com/',
             uILogicAttachMode:'',
             nextActionCodeName:'',
         },
       "Count":{
             codeName:'Count',
             uIActionMode:'FRONT',
             actionTarget:'NONE',
             uIActionTag:'COUNT',
             frontPSAppView:'',
             caption:'计数器',
             entityCodeName:'',
             methodCodeName:'',
             frontProcessType:'OTHER',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
         },
       "TestOpenMDView":{
             codeName:'TestOpenMDView',
             uIActionMode:'FRONT',
             actionTarget:'NONE',
             uIActionTag:'TESTOPENMDVIEW',
             frontPSAppView:'ChartDataMobMDView',
             caption:'测试图表实体打开多数据视图',
             entityCodeName:'',
             methodCodeName:'',
             frontProcessType:'WIZARD',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
         },
       "custom2":{
             codeName:'custom2',
             uIActionMode:'BACKEND',
             actionTarget:'NONE',
             uIActionTag:'CUSTOM2',
             frontPSAppView:'ProvinceMobMDView',
             caption:'界面行为测试2',
             entityCodeName:'',
             methodCodeName:'GetRandom',
             frontProcessType:'',
             refreshMode:'0',
             htmlPageUrl:'',
             uILogicAttachMode:'',
             nextActionCodeName:'',
         },
     };    /**
     * 编辑
     *
     * @param {*} params
     * @memberof ChartDataUIServiceBase
     */
    public async editview(params:any){
        const actionModel =  this.getUIActionModel('editview');
        AppFrontAction.doAction(actionModel, params);
    }

    /**
     * 移动端编辑
     *
     * @param {*} params
     * @memberof ChartDataUIServiceBase
     */
    public async MobEdit(params:any){
        const actionModel =  this.getUIActionModel('MobEdit');
        AppFrontAction.doAction(actionModel, params);
    }

    /**
     * 测试后台界面行为
     *
     * @param {*} params
     * @memberof ChartDataUIServiceBase
     */
    public async TestBackUIAction(params:any){
        const actionModel =  this.getUIActionModel('TestBackUIAction');
        AppBackendAction.doAction(actionModel, params);
    }

    /**
     * 界面行为测试1
     *
     * @param {*} params
     * @memberof ChartDataUIServiceBase
     */
    public async custom1(params:any){
        const actionModel =  this.getUIActionModel('custom1');
        AppFrontAction.doAction(actionModel, params);
    }

    /**
     * 计数器
     *
     * @param {*} params
     * @memberof ChartDataUIServiceBase
     */
    public async Count(params:any){
        const actionModel =  this.getUIActionModel('Count');
        AppFrontAction.doAction(actionModel, params);
    }

    /**
     * 测试图表实体打开多数据视图
     *
     * @param {*} params
     * @memberof ChartDataUIServiceBase
     */
    public async TestOpenMDView(params:any){
        const actionModel =  this.getUIActionModel('TestOpenMDView');
        AppFrontAction.doAction(actionModel, params);
    }

    /**
     * 界面行为测试2
     *
     * @param {*} params
     * @memberof ChartDataUIServiceBase
     */
    public async custom2(params:any){
        const actionModel =  this.getUIActionModel('custom2');
        AppBackendAction.doAction(actionModel, params);
    }



}