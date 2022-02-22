import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
/**
 * 看板数据UI服务对象基类
 *
 * @export
 * @class KanbanDataUIServiceBase
 * @extends {UIServiceBase}
 */
export class KanbanDataUIServiceBase extends UIServiceBase {

    /**
      * Creates an instance of KanbanDataUIServiceBase
      * 
      * @param {*} [opts={}]
      * @memberof KanbanDataUIServiceBase
      */
    constructor(opts: IParam = {}) {
        super(opts);
        this.initBasicData();
    }

    /**
     * 初始化基础数据
     *
     * @memberof KanbanDataUIServiceBase
     */
    public initBasicData() {
        // 应用实体主键属性
        this.appDeKeyFieldName = 'kanbandataid';
        // 是否启用主状态
        this.isEnableDEMainState = false;
    }



}