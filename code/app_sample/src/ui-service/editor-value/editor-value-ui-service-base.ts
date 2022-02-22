import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
/**
 * 编辑器值UI服务对象基类
 *
 * @export
 * @class EditorValueUIServiceBase
 * @extends {UIServiceBase}
 */
export class EditorValueUIServiceBase extends UIServiceBase {

    /**
      * Creates an instance of EditorValueUIServiceBase
      * 
      * @param {*} [opts={}]
      * @memberof EditorValueUIServiceBase
      */
    constructor(opts: IParam = {}) {
        super(opts);
        this.initBasicData();
    }

    /**
     * 初始化基础数据
     *
     * @memberof EditorValueUIServiceBase
     */
    public initBasicData() {
        // 应用实体主键属性
        this.appDeKeyFieldName = 'editorvalueid';
        // 是否启用主状态
        this.isEnableDEMainState = false;
    }



}