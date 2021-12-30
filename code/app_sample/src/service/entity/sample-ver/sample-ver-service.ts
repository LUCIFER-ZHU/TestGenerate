import { SampleVerServiceBase } from './sample-ver-service-base';

/**
 * ${appEntity.getLogicName()}服务
 *
 * @export
 * @class SampleVerService
 * @extends SampleVerServiceBase
 */
export class SampleVerService extends SampleVerServiceBase {
    /**
     * Creates an instance of SampleVerService.
     * @memberof SampleVerService
     */
    constructor(opts?: any) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { SampleVerService }
     * @memberof SampleVerService
     */
    static getInstance(context?: any): SampleVerService {
        return new SampleVerService({ context: context });
    }
}
export default SampleVerService;