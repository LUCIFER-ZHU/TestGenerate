import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
/**
 * 活动UI服务对象基类
 *
 * @export
 * @class ActivityUIServiceBase
 * @extends {UIServiceBase}
 */
export class ActivityUIServiceBase extends UIServiceBase {

    /**
      * Creates an instance of ActivityUIServiceBase
      * 
      * @param {*} [opts={}]
      * @memberof ActivityUIServiceBase
      */
    constructor(opts: IParam = {}) {
        super(opts);
        this.initBasicData();
    }

    /**
     * 初始化基础数据
     *
     * @memberof ActivityUIServiceBase
     */
    public initBasicData() {
        // 应用实体主键属性
        this.appDeKeyFieldName = 'activityid';
        // 是否启用主状态
        this.isEnableDEMainState = false;
    }



}