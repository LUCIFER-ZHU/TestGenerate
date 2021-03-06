import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
/**
 * 示例数据（启用逻辑删除）（主键数值）UI服务对象基类
 *
 * @export
 * @class LogicValidData2UIServiceBase
 * @extends {UIServiceBase}
 */
export class LogicValidData2UIServiceBase extends UIServiceBase {

    /**
      * Creates an instance of LogicValidData2UIServiceBase
      * 
      * @param {*} [opts={}]
      * @memberof LogicValidData2UIServiceBase
      */
    constructor(opts: IParam = {}) {
        super(opts);
        this.initBasicData();
    }

    /**
     * 初始化基础数据
     *
     * @memberof LogicValidData2UIServiceBase
     */
    public initBasicData() {
        // 应用实体主键属性
        this.appDeKeyFieldName = 'logicvaliddata2id';
        // 是否启用主状态
        this.isEnableDEMainState = false;
    }



}