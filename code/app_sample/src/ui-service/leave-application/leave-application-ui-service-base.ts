import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
/**
 * 请假申请UI服务对象基类
 *
 * @export
 * @class LeaveApplicationUIServiceBase
 * @extends {UIServiceBase}
 */
export class LeaveApplicationUIServiceBase extends UIServiceBase {

    /**
      * Creates an instance of LeaveApplicationUIServiceBase
      * 
      * @param {*} [opts={}]
      * @memberof LeaveApplicationUIServiceBase
      */
    constructor(opts: IParam = {}) {
        super(opts);
        this.initBasicData();
    }

    /**
     * 初始化基础数据
     *
     * @memberof LeaveApplicationUIServiceBase
     */
    public initBasicData() {
        // 应用实体主键属性
        this.appDeKeyFieldName = 'leaveapplicationid';
        // 是否启用主状态
        this.isEnableDEMainState = false;
    }



}