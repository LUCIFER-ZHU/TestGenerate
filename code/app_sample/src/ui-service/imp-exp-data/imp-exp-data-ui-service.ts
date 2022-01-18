import { IParam } from '@core';
import { ImpExpDataUIServiceBase } from './imp-exp-data-ui-service-base';

/**
 * 导入导出数据UI服务
 *
 * @export
 * @class ImpExpDataUIService
 * @extends ImpExpDataUIServiceBase
 */
export class ImpExpDataUIService extends ImpExpDataUIServiceBase {

    /**
     * 基础UI服务实例
     * 
     * @private
     * @type { ImpExpDataUIService }
     * @memberof ImpExpDataUIService
     */
    private static basicUIServiceInstance: ImpExpDataUIService;

    /**
     * UI服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof ImpExpDataUIService
     */
    private static UIServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of ImpExpDataUIService.
     * @memberof ImpExpDataUIService
     */
    constructor(opts?: IParam) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { ImpExpDataUIService }
     * @memberof ImpExpDataUIService
     */
    static getInstance(opts?: IParam): ImpExpDataUIService {
         if (!this.basicUIServiceInstance) {
            this.basicUIServiceInstance = new ImpExpDataUIService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicUIServiceInstance;
        } else {
            if (!ImpExpDataUIService.UIServiceMap.get(opts.srfdynainstid)) {
                ImpExpDataUIService.UIServiceMap.set(opts.srfdynainstid, new ImpExpDataUIService(opts));
            }
            return ImpExpDataUIService.UIServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default ImpExpDataUIService;