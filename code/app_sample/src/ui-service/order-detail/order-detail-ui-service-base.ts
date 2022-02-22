import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
/**
 * 订单明细UI服务对象基类
 *
 * @export
 * @class OrderDetailUIServiceBase
 * @extends {UIServiceBase}
 */
export class OrderDetailUIServiceBase extends UIServiceBase {

    /**
      * Creates an instance of OrderDetailUIServiceBase
      * 
      * @param {*} [opts={}]
      * @memberof OrderDetailUIServiceBase
      */
    constructor(opts: IParam = {}) {
        super(opts);
        this.initBasicData();
    }

    /**
     * 初始化基础数据
     *
     * @memberof OrderDetailUIServiceBase
     */
    public initBasicData() {
        // 应用实体主键属性
        this.appDeKeyFieldName = 'orderdetailid';
        // 是否启用主状态
        this.isEnableDEMainState = false;
    }



}