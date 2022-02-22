import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
/**
 * 类别UI服务对象基类
 *
 * @export
 * @class CategoryUIServiceBase
 * @extends {UIServiceBase}
 */
export class CategoryUIServiceBase extends UIServiceBase {

    /**
      * Creates an instance of CategoryUIServiceBase
      * 
      * @param {*} [opts={}]
      * @memberof CategoryUIServiceBase
      */
    constructor(opts: IParam = {}) {
        super(opts);
        this.initBasicData();
    }

    /**
     * 初始化基础数据
     *
     * @memberof CategoryUIServiceBase
     */
    public initBasicData() {
        // 应用实体主键属性
        this.appDeKeyFieldName = 'categoryid';
        // 是否启用主状态
        this.isEnableDEMainState = false;
    }



}