import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
/**
 * 示例明细UI服务对象基类
 *
 * @export
 * @class Example2UIServiceBase
 * @extends {UIServiceBase}
 */
export class Example2UIServiceBase extends UIServiceBase {

    /**
      * Creates an instance of Example2UIServiceBase
      * 
      * @param {*} [opts={}]
      * @memberof Example2UIServiceBase
      */
    constructor(opts: IParam = {}) {
        super(opts);
        this.initBasicData();
    }

    /**
     * 初始化基础数据
     *
     * @memberof Example2UIServiceBase
     */
    public initBasicData() {
        // 应用实体主键属性
        this.appDeKeyFieldName = 'example2id';
        // 是否启用主状态
        this.isEnableDEMainState = false;
    }



}