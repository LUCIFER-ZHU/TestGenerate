import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
/**
 * 产品类别UI服务对象基类
 *
 * @export
 * @class ProductCategoryUIServiceBase
 * @extends {UIServiceBase}
 */
export class ProductCategoryUIServiceBase extends UIServiceBase {

    /**
      * Creates an instance of ProductCategoryUIServiceBase
      * 
      * @param {*} [opts={}]
      * @memberof ProductCategoryUIServiceBase
      */
    constructor(opts: IParam = {}) {
        super(opts);
        this.initBasicData();
    }

    /**
     * 初始化基础数据
     *
     * @memberof ProductCategoryUIServiceBase
     */
    public initBasicData() {
        // 应用实体主键属性
        this.appDeKeyFieldName = 'productcategoryid';
        // 是否启用主状态
        this.isEnableDEMainState = false;
    }



}