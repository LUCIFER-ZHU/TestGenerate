import { IParam } from '@core';
import { EditorValueServiceBase } from './editor-value-service-base';

/**
 * 编辑器值服务
 *
 * @export
 * @class EditorValueService
 * @extends EditorValueServiceBase
 */
export class EditorValueService extends EditorValueServiceBase {

    /**
     * 基础数据服务实例
     * 
     * @private
     * @type { EditorValueService }
     * @memberof EditorValueService
     */
    private static basicDataServiceInstance: EditorValueService;

    /**
     * 数据服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof EditorValueService
     */
    private static dataServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of EditorValueService.
     * @memberof EditorValueService
     */
    constructor(opts?: IParam) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { EditorValueService }
     * @memberof EditorValueService
     */
    static getInstance(opts?: IParam): EditorValueService {
        if (!this.basicDataServiceInstance) {
            this.basicDataServiceInstance = new EditorValueService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicDataServiceInstance;
        } else {
            if (!EditorValueService.dataServiceMap.get(opts.srfdynainstid)) {
                EditorValueService.dataServiceMap.set(opts.srfdynainstid, new EditorValueService(opts));
            }
            return EditorValueService.dataServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default EditorValueService;