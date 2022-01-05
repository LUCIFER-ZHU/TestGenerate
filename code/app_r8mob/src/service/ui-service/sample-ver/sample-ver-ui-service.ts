import { SampleVerUIServiceBase } from './sample-ver-ui-service-base';

/**
 * 示例版本UI服务
 *
 * @export
 * @class SampleVerUIService
 * @extends SampleVerUIServiceBase
 */
export class SampleVerUIService extends SampleVerUIServiceBase {
    /**
     * Creates an instance of SampleVerUIService.
     * @memberof SampleVerUIService
     */
    constructor(opts?: any) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { SampleVerUIService }
     * @memberof SampleVerUIService
     */
    static getInstance(context?: any): SampleVerUIService {
        return new SampleVerUIService({ context: context });
    }
}
export default SampleVerUIService;