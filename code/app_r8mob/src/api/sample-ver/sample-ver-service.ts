import { IParam } from '@core';
import { SampleVerServiceBase } from './sample-ver-service-base';

/**
 * 示例版本服务
 *
 * @export
 * @class SampleVerService
 * @extends SampleVerServiceBase
 */
export class SampleVerService extends SampleVerServiceBase {

    /**
     * 基础数据服务实例
     * 
     * @private
     * @type { SampleVerService }
     * @memberof SampleVerService
     */
    private static basicDataServiceInstance: SampleVerService;

    /**
     * 数据服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof SampleVerService
     */
    private static dataServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of SampleVerService.
     * @memberof SampleVerService
     */
    constructor(opts?: IParam) {
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
    static getInstance(opts?: IParam): SampleVerService {
        if (!this.basicDataServiceInstance) {
            this.basicDataServiceInstance = new SampleVerService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicDataServiceInstance;
        } else {
            if (!SampleVerService.dataServiceMap.get(opts.srfdynainstid)) {
                SampleVerService.dataServiceMap.set(opts.srfdynainstid, new SampleVerService(opts));
            }
            return SampleVerService.dataServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default SampleVerService;