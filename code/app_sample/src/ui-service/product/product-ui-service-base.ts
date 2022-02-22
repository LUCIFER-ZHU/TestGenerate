import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
/**
 * 产品UI服务对象基类
 *
 * @export
 * @class ProductUIServiceBase
 * @extends {UIServiceBase}
 */
export class ProductUIServiceBase extends UIServiceBase {

    /**
      * Creates an instance of ProductUIServiceBase
      * 
      * @param {*} [opts={}]
      * @memberof ProductUIServiceBase
      */
    constructor(opts: IParam = {}) {
        super(opts);
        this.initBasicData();
    }

    /**
     * 初始化基础数据
     *
     * @memberof ProductUIServiceBase
     */
    public initBasicData() {
        // 应用实体主键属性
        this.appDeKeyFieldName = 'productid';
        // 是否启用主状态
        this.isEnableDEMainState = false;
    }



}