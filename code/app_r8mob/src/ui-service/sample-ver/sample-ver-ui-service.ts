import { IParam } from '@core';
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
     * 基础UI服务实例
     * 
     * @private
     * @type { SampleVerUIService }
     * @memberof SampleVerUIService
     */
    private static basicUIServiceInstance: SampleVerUIService;

    /**
     * UI服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof SampleVerUIService
     */
    private static UIServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of SampleVerUIService.
     * @memberof SampleVerUIService
     */
    constructor(opts?: IParam) {
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
    static getInstance(opts?: IParam): SampleVerUIService {
         if (!this.basicUIServiceInstance) {
            this.basicUIServiceInstance = new SampleVerUIService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicUIServiceInstance;
        } else {
            if (!SampleVerUIService.UIServiceMap.get(opts.srfdynainstid)) {
                SampleVerUIService.UIServiceMap.set(opts.srfdynainstid, new SampleVerUIService(opts));
            }
            return SampleVerUIService.UIServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default SampleVerUIService;