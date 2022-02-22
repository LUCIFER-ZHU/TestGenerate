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
             frontPSAppView:'',
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



}