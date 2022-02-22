import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
/**
 * 区UI服务对象基类
 *
 * @export
 * @class DistrictUIServiceBase
 * @extends {UIServiceBase}
 */
export class DistrictUIServiceBase extends UIServiceBase {

    /**
      * Creates an instance of DistrictUIServiceBase
      * 
      * @param {*} [opts={}]
      * @memberof DistrictUIServiceBase
      */
    constructor(opts: IParam = {}) {
        super(opts);
        this.initBasicData();
    }

    /**
     * 初始化基础数据
     *
     * @memberof DistrictUIServiceBase
     */
    public initBasicData() {
        // 应用实体主键属性
        this.appDeKeyFieldName = 'districtid';
        // 是否启用主状态
        this.isEnableDEMainState = false;
    }



}