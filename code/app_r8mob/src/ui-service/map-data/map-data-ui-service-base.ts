import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
/**
 * 地图示例数据UI服务对象基类
 *
 * @export
 * @class MapDataUIServiceBase
 * @extends {UIServiceBase}
 */
export class MapDataUIServiceBase extends UIServiceBase {

    /**
      * Creates an instance of MapDataUIServiceBase
      * 
      * @param {*} [opts={}]
      * @memberof MapDataUIServiceBase
      */
    constructor(opts: IParam = {}) {
        super(opts);
        this.initBasicData();
    }

    /**
     * 初始化基础数据
     *
     * @memberof MapDataUIServiceBase
     */
    public initBasicData() {
        // 应用实体主键属性
        this.appDeKeyFieldName = 'mapdataid';
        // 是否启用主状态
        this.isEnableDEMainState = false;
    }



}