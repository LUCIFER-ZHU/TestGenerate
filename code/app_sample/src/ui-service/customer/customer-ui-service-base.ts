import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
/**
 * 客户UI服务对象基类
 *
 * @export
 * @class CustomerUIServiceBase
 * @extends {UIServiceBase}
 */
export class CustomerUIServiceBase extends UIServiceBase {

    /**
      * Creates an instance of CustomerUIServiceBase
      * 
      * @param {*} [opts={}]
      * @memberof CustomerUIServiceBase
      */
    constructor(opts: IParam = {}) {
        super(opts);
        this.initBasicData();
    }

    /**
     * 初始化基础数据
     *
     * @memberof CustomerUIServiceBase
     */
    public initBasicData() {
        // 应用实体主键属性
        this.appDeKeyFieldName = 'customerid';
        // 是否启用主状态
        this.isEnableDEMainState = false;
    }

    /**
     * 快速新建
     *
     * @param {*} params
     * @memberof CustomerUIServiceBase
     */
    public async Quick(uiAction:any, params:any){
        const actionModel =  {
             codeName:'Quick',
             uIActionMode:'FRONT',
             actionTarget:'NONE',
             uIActionTag:'QUICK',
             frontPSAppView:'CustomerUsr2OptionView',
             caption:'快速新建',
             entityCodeName:'Customer',
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
     * 打开客户主数据分页导航
     *
     * @param {*} params
     * @memberof CustomerUIServiceBase
     */
    public async OpenMain(uiAction:any, params:any){
        const actionModel =  {
             codeName:'OpenMain',
             uIActionMode:'FRONT',
             actionTarget:'SINGLEKEY',
             uIActionTag:'OPENMAIN',
             frontPSAppView:'CustomerMainTabExpView',
             caption:'打开客户主数据分页导航',
             entityCodeName:'Customer',
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



}