import { IParam } from '@core';
import { EditorValueUIServiceBase } from './editor-value-ui-service-base';

/**
 * 编辑器值UI服务
 *
 * @export
 * @class EditorValueUIService
 * @extends EditorValueUIServiceBase
 */
export class EditorValueUIService extends EditorValueUIServiceBase {

    /**
     * 基础UI服务实例
     * 
     * @private
     * @type { EditorValueUIService }
     * @memberof EditorValueUIService
     */
    private static basicUIServiceInstance: EditorValueUIService;

    /**
     * UI服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof EditorValueUIService
     */
    private static UIServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of EditorValueUIService.
     * @memberof EditorValueUIService
     */
    constructor(opts?: IParam) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { EditorValueUIService }
     * @memberof EditorValueUIService
     */
    static getInstance(opts?: IParam): EditorValueUIService {
         if (!this.basicUIServiceInstance) {
            this.basicUIServiceInstance = new EditorValueUIService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicUIServiceInstance;
        } else {
            if (!EditorValueUIService.UIServiceMap.get(opts.srfdynainstid)) {
                EditorValueUIService.UIServiceMap.set(opts.srfdynainstid, new EditorValueUIService(opts));
            }
            return EditorValueUIService.UIServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default EditorValueUIService;