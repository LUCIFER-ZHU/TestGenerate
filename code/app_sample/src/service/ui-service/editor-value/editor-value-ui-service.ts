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
     * Creates an instance of EditorValueUIService.
     * @memberof EditorValueUIService
     */
    constructor(opts?: any) {
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
    static getInstance(context?: any): EditorValueUIService {
        return new EditorValueUIService({ context: context });
    }
}
export default EditorValueUIService;