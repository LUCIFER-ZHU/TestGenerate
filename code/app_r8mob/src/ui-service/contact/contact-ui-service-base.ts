import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
/**
 * 联系人UI服务对象基类
 *
 * @export
 * @class ContactUIServiceBase
 * @extends {UIServiceBase}
 */
export class ContactUIServiceBase extends UIServiceBase {

    /**
      * Creates an instance of ContactUIServiceBase
      * 
      * @param {*} [opts={}]
      * @memberof ContactUIServiceBase
      */
    constructor(opts: IParam = {}) {
        super(opts);
        this.initBasicData();
    }

    /**
     * 初始化基础数据
     *
     * @memberof ContactUIServiceBase
     */
    public initBasicData() {
        // 应用实体主键属性
        this.appDeKeyFieldName = 'contactid';
        // 是否启用主状态
        this.isEnableDEMainState = false;
    }



}