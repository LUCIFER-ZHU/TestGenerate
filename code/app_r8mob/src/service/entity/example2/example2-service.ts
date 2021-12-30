import { Example2ServiceBase } from './example2-service-base';

/**
 * ${appEntity.getLogicName()}服务
 *
 * @export
 * @class Example2Service
 * @extends Example2ServiceBase
 */
export class Example2Service extends Example2ServiceBase {
    /**
     * Creates an instance of Example2Service.
     * @memberof Example2Service
     */
    constructor(opts?: any) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { Example2Service }
     * @memberof Example2Service
     */
    static getInstance(context?: any): Example2Service {
        return new Example2Service({ context: context });
    }
}
export default Example2Service;