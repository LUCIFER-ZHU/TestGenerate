import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
/**
 * 市UI服务对象基类
 *
 * @export
 * @class CityUIServiceBase
 * @extends {UIServiceBase}
 */
export class CityUIServiceBase extends UIServiceBase {

    /**
      * Creates an instance of CityUIServiceBase
      * 
      * @param {*} [opts={}]
      * @memberof CityUIServiceBase
      */
    constructor(opts: IParam = {}) {
        super(opts);
        this.initBasicData();
    }

    /**
     * 初始化基础数据
     *
     * @memberof CityUIServiceBase
     */
    public initBasicData() {
        // 应用实体主键属性
        this.appDeKeyFieldName = 'cityid';
        // 是否启用主状态
        this.isEnableDEMainState = false;
    }



}