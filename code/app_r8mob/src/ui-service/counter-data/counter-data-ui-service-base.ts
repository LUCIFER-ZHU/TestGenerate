import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
/**
 * 计数器数据UI服务对象基类
 *
 * @export
 * @class CounterDataUIServiceBase
 * @extends {UIServiceBase}
 */
export class CounterDataUIServiceBase extends UIServiceBase {

    /**
      * Creates an instance of CounterDataUIServiceBase
      * 
      * @param {*} [opts={}]
      * @memberof CounterDataUIServiceBase
      */
    constructor(opts: IParam = {}) {
        super(opts);
        this.initBasicData();
    }

    /**
     * 初始化基础数据
     *
     * @memberof CounterDataUIServiceBase
     */
    public initBasicData() {
        // 应用实体主键属性
        this.appDeKeyFieldName = 'counterdataid';
        // 是否启用主状态
        this.isEnableDEMainState = false;
    }



}