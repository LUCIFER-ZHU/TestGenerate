import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
/**
 * 示例数据（启用逻辑删除）UI服务对象基类
 *
 * @export
 * @class LogicValidDataUIServiceBase
 * @extends {UIServiceBase}
 */
export class LogicValidDataUIServiceBase extends UIServiceBase {

    /**
      * Creates an instance of LogicValidDataUIServiceBase
      * 
      * @param {*} [opts={}]
      * @memberof LogicValidDataUIServiceBase
      */
    constructor(opts: IParam = {}) {
        super(opts);
        this.initBasicData();
    }

    /**
     * 初始化基础数据
     *
     * @memberof LogicValidDataUIServiceBase
     */
    public initBasicData() {
        // 应用实体主键属性
        this.appDeKeyFieldName = 'logicvaliddataid';
        // 是否启用主状态
        this.isEnableDEMainState = false;
    }



}