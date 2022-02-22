import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
/**
 * 动态数据看板UI服务对象基类
 *
 * @export
 * @class DynaDashboardUIServiceBase
 * @extends {UIServiceBase}
 */
export class DynaDashboardUIServiceBase extends UIServiceBase {

    /**
      * Creates an instance of DynaDashboardUIServiceBase
      * 
      * @param {*} [opts={}]
      * @memberof DynaDashboardUIServiceBase
      */
    constructor(opts: IParam = {}) {
        super(opts);
        this.initBasicData();
    }

    /**
     * 初始化基础数据
     *
     * @memberof DynaDashboardUIServiceBase
     */
    public initBasicData() {
        // 应用实体主键属性
        this.appDeKeyFieldName = 'dynadashboardid';
        // 是否启用主状态
        this.isEnableDEMainState = false;
    }



}