import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
/**
 * 事件UI服务对象基类
 *
 * @export
 * @class EventUIServiceBase
 * @extends {UIServiceBase}
 */
export class EventUIServiceBase extends UIServiceBase {

    /**
      * Creates an instance of EventUIServiceBase
      * 
      * @param {*} [opts={}]
      * @memberof EventUIServiceBase
      */
    constructor(opts: IParam = {}) {
        super(opts);
        this.initBasicData();
    }

    /**
     * 初始化基础数据
     *
     * @memberof EventUIServiceBase
     */
    public initBasicData() {
        // 应用实体主键属性
        this.appDeKeyFieldName = 'eventid';
        // 是否启用主状态
        this.isEnableDEMainState = false;
    }



}