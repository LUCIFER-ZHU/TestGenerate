import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
/**
 * 导入导出数据UI服务对象基类
 *
 * @export
 * @class ImpExpDataUIServiceBase
 * @extends {UIServiceBase}
 */
export class ImpExpDataUIServiceBase extends UIServiceBase {

    /**
      * Creates an instance of ImpExpDataUIServiceBase
      * 
      * @param {*} [opts={}]
      * @memberof ImpExpDataUIServiceBase
      */
    constructor(opts: IParam = {}) {
        super(opts);
        this.initBasicData();
    }

    /**
     * 初始化基础数据
     *
     * @memberof ImpExpDataUIServiceBase
     */
    public initBasicData() {
        // 应用实体主键属性
        this.appDeKeyFieldName = 'impexpdataid';
        // 是否启用主状态
        this.isEnableDEMainState = false;
    }



}