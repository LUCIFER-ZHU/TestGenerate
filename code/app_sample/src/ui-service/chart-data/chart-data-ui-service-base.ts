import { AppUIAction, IUIAction, UIServiceBase } from '@core';

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
  constructor(opts: any = {}) {
      super(opts);
  }


/**
     * 编辑
     *
     * @param {*} params
     * @memberof ChartDataUIServiceBase
     */
    public async editview(params:any){
        const actionModel = {
            codeName:'editview',
            uIActionMode:'FRONT',
            actionTarget:'SINGLEKEY',
            uIActionTag:'EDITVIEW',
            frontPSAppView:'ChartDataEditView'
        };
        AppUIAction.execute(actionModel, params);
    }
/**
     * 移动端编辑
     *
     * @param {*} params
     * @memberof ChartDataUIServiceBase
     */
    public async MobEdit(params:any){
        const actionModel = {
            codeName:'MobEdit',
            uIActionMode:'FRONT',
            actionTarget:'SINGLEKEY',
            uIActionTag:'MOBEDIT',
            frontPSAppView:'ChartDataMobEditView'
        };
        AppUIAction.execute(actionModel, params);
    }
/**
     * 测试后台界面行为
     *
     * @param {*} params
     * @memberof ChartDataUIServiceBase
     */
    public async TestBackUIAction(params:any){
        const actionModel = {
            codeName:'TestBackUIAction',
            uIActionMode:'BACKEND',
            actionTarget:'SINGLEKEY',
            uIActionTag:'TESTBACKUIACTION',
            frontPSAppView:''
        };
        AppUIAction.execute(actionModel, params);
    }
/**
     * 界面行为测试1
     *
     * @param {*} params
     * @memberof ChartDataUIServiceBase
     */
    public async custom1(params:any){
        const actionModel = {
            codeName:'custom1',
            uIActionMode:'FRONT',
            actionTarget:'SINGLEDATA',
            uIActionTag:'CUSTOM1',
            frontPSAppView:'ProvinceMobMDView'
        };
        AppUIAction.execute(actionModel, params);
    }
/**
     * 计数器
     *
     * @param {*} params
     * @memberof ChartDataUIServiceBase
     */
    public async Count(params:any){
        const actionModel = {
            codeName:'Count',
            uIActionMode:'FRONT',
            actionTarget:'NONE',
            uIActionTag:'COUNT',
            frontPSAppView:''
        };
        AppUIAction.execute(actionModel, params);
    }
/**
     * 测试图表实体打开多数据视图
     *
     * @param {*} params
     * @memberof ChartDataUIServiceBase
     */
    public async TestOpenMDView(params:any){
        const actionModel = {
            codeName:'TestOpenMDView',
            uIActionMode:'FRONT',
            actionTarget:'NONE',
            uIActionTag:'TESTOPENMDVIEW',
            frontPSAppView:'ChartDataMobMDView'
        };
        AppUIAction.execute(actionModel, params);
    }
/**
     * 界面行为测试2
     *
     * @param {*} params
     * @memberof ChartDataUIServiceBase
     */
    public async custom2(params:any){
        const actionModel = {
            codeName:'custom2',
            uIActionMode:'BACKEND',
            actionTarget:'NONE',
            uIActionTag:'CUSTOM2',
            frontPSAppView:'ProvinceMobMDView'
        };
        AppUIAction.execute(actionModel, params);
    }


}