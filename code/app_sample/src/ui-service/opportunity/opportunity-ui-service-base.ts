import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
/**
 * 商机UI服务对象基类
 *
 * @export
 * @class OpportunityUIServiceBase
 * @extends {UIServiceBase}
 */
export class OpportunityUIServiceBase extends UIServiceBase {

    /**
      * Creates an instance of OpportunityUIServiceBase
      * 
      * @param {*} [opts={}]
      * @memberof OpportunityUIServiceBase
      */
    constructor(opts: IParam = {}) {
        super(opts);
        this.initBasicData();
    }

    /**
     * 初始化基础数据
     *
     * @memberof OpportunityUIServiceBase
     */
    public initBasicData() {
        // 应用实体主键属性
        this.appDeKeyFieldName = 'opportunityid';
        // 是否启用主状态
        this.isEnableDEMainState = false;
    }



}