import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
/**
 * 示例版本UI服务对象基类
 *
 * @export
 * @class SampleVerUIServiceBase
 * @extends {UIServiceBase}
 */
export class SampleVerUIServiceBase extends UIServiceBase {

    /**
      * Creates an instance of SampleVerUIServiceBase
      * 
      * @param {*} [opts={}]
      * @memberof SampleVerUIServiceBase
      */
    constructor(opts: IParam = {}) {
        super(opts);
        this.initBasicData();
    }

    /**
     * 初始化基础数据
     *
     * @memberof SampleVerUIServiceBase
     */
    public initBasicData() {
        // 应用实体主键属性
        this.appDeKeyFieldName = 'sampleverid';
        // 是否启用主状态
        this.isEnableDEMainState = false;
    }



}