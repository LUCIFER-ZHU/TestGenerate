import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
/**
 * 省份UI服务对象基类
 *
 * @export
 * @class ProvinceUIServiceBase
 * @extends {UIServiceBase}
 */
export class ProvinceUIServiceBase extends UIServiceBase {

    /**
      * Creates an instance of ProvinceUIServiceBase
      * 
      * @param {*} [opts={}]
      * @memberof ProvinceUIServiceBase
      */
    constructor(opts: IParam = {}) {
        super(opts);
        this.initBasicData();
    }

    /**
     * 初始化基础数据
     *
     * @memberof ProvinceUIServiceBase
     */
    public initBasicData() {
        // 应用实体主键属性
        this.appDeKeyFieldName = 'provinceid';
        // 是否启用主状态
        this.isEnableDEMainState = false;
    }



}