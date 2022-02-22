import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
/**
 * 人员数据UI服务对象基类
 *
 * @export
 * @class PersonDataUIServiceBase
 * @extends {UIServiceBase}
 */
export class PersonDataUIServiceBase extends UIServiceBase {

    /**
      * Creates an instance of PersonDataUIServiceBase
      * 
      * @param {*} [opts={}]
      * @memberof PersonDataUIServiceBase
      */
    constructor(opts: IParam = {}) {
        super(opts);
        this.initBasicData();
    }

    /**
     * 初始化基础数据
     *
     * @memberof PersonDataUIServiceBase
     */
    public initBasicData() {
        // 应用实体主键属性
        this.appDeKeyFieldName = 'persondataid';
        // 是否启用主状态
        this.isEnableDEMainState = false;
    }



}