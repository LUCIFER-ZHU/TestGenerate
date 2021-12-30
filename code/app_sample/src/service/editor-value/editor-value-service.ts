import { EditorValueServiceBase } from './editor-value-service-base';

/**
 * ${appEntity.getLogicName()}服务
 *
 * @export
 * @class EditorValueService
 * @extends EditorValueServiceBase
 */
export class EditorValueService extends EditorValueServiceBase {
    /**
     * Creates an instance of EditorValueService.
     * @memberof EditorValueService
     */
    constructor(opts?: any) {
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
    static getInstance(context?: any): EditorValueService {
        return new EditorValueService({ context: context });
    }
}
export default EditorValueService;