import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
/**
 * 部门数据UI服务对象基类
 *
 * @export
 * @class DeptDataUIServiceBase
 * @extends {UIServiceBase}
 */
export class DeptDataUIServiceBase extends UIServiceBase {

    /**
      * Creates an instance of DeptDataUIServiceBase
      * 
      * @param {*} [opts={}]
      * @memberof DeptDataUIServiceBase
      */
    constructor(opts: IParam = {}) {
        super(opts);
        this.initBasicData();
    }

    /**
     * 初始化基础数据
     *
     * @memberof DeptDataUIServiceBase
     */
    public initBasicData() {
        // 应用实体主键属性
        this.appDeKeyFieldName = 'deptdataid';
        // 是否启用主状态
        this.isEnableDEMainState = false;
    }



}