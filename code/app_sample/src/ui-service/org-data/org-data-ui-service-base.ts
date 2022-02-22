import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
/**
 * 组织数据UI服务对象基类
 *
 * @export
 * @class OrgDataUIServiceBase
 * @extends {UIServiceBase}
 */
export class OrgDataUIServiceBase extends UIServiceBase {

    /**
      * Creates an instance of OrgDataUIServiceBase
      * 
      * @param {*} [opts={}]
      * @memberof OrgDataUIServiceBase
      */
    constructor(opts: IParam = {}) {
        super(opts);
        this.initBasicData();
    }

    /**
     * 初始化基础数据
     *
     * @memberof OrgDataUIServiceBase
     */
    public initBasicData() {
        // 应用实体主键属性
        this.appDeKeyFieldName = 'orgdataid';
        // 是否启用主状态
        this.isEnableDEMainState = false;
    }



}