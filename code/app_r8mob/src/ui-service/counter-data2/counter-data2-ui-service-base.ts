import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
/**
 * 计数器数据2UI服务对象基类
 *
 * @export
 * @class CounterData2UIServiceBase
 * @extends {UIServiceBase}
 */
export class CounterData2UIServiceBase extends UIServiceBase {

    /**
      * Creates an instance of CounterData2UIServiceBase
      * 
      * @param {*} [opts={}]
      * @memberof CounterData2UIServiceBase
      */
    constructor(opts: IParam = {}) {
        super(opts);
        this.initBasicData();
    }

    /**
     * 初始化基础数据
     *
     * @memberof CounterData2UIServiceBase
     */
    public initBasicData() {
        // 应用实体主键属性
        this.appDeKeyFieldName = 'counterdata2id';
        // 是否启用主状态
        this.isEnableDEMainState = false;
    }



}