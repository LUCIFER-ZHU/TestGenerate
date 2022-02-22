import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
/**
 * 订单UI服务对象基类
 *
 * @export
 * @class OrderUIServiceBase
 * @extends {UIServiceBase}
 */
export class OrderUIServiceBase extends UIServiceBase {

    /**
      * Creates an instance of OrderUIServiceBase
      * 
      * @param {*} [opts={}]
      * @memberof OrderUIServiceBase
      */
    constructor(opts: IParam = {}) {
        super(opts);
        this.initBasicData();
    }

    /**
     * 初始化基础数据
     *
     * @memberof OrderUIServiceBase
     */
    public initBasicData() {
        // 应用实体主键属性
        this.appDeKeyFieldName = 'orderid';
        // 是否启用主状态
        this.isEnableDEMainState = false;
    }



}