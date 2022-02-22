import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
/**
 * 视图消息数据UI服务对象基类
 *
 * @export
 * @class ViewMsgDataUIServiceBase
 * @extends {UIServiceBase}
 */
export class ViewMsgDataUIServiceBase extends UIServiceBase {

    /**
      * Creates an instance of ViewMsgDataUIServiceBase
      * 
      * @param {*} [opts={}]
      * @memberof ViewMsgDataUIServiceBase
      */
    constructor(opts: IParam = {}) {
        super(opts);
        this.initBasicData();
    }

    /**
     * 初始化基础数据
     *
     * @memberof ViewMsgDataUIServiceBase
     */
    public initBasicData() {
        // 应用实体主键属性
        this.appDeKeyFieldName = 'viewmsgdataid';
        // 是否启用主状态
        this.isEnableDEMainState = false;
    }



}