import { IParam } from '@core';
import { WizardDataServiceBase } from './wizard-data-service-base';

/**
 * 向导数据服务
 *
 * @export
 * @class WizardDataService
 * @extends WizardDataServiceBase
 */
export class WizardDataService extends WizardDataServiceBase {

    /**
     * 基础数据服务实例
     * 
     * @private
     * @type { WizardDataService }
     * @memberof WizardDataService
     */
    private static basicDataServiceInstance: WizardDataService;

    /**
     * 数据服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof WizardDataService
     */
    private static dataServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of WizardDataService.
     * @memberof WizardDataService
     */
    constructor(opts?: IParam) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { WizardDataService }
     * @memberof WizardDataService
     */
    static getInstance(opts?: IParam): WizardDataService {
        if (!this.basicDataServiceInstance) {
            this.basicDataServiceInstance = new WizardDataService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicDataServiceInstance;
        } else {
            if (!WizardDataService.dataServiceMap.get(opts.srfdynainstid)) {
                WizardDataService.dataServiceMap.set(opts.srfdynainstid, new WizardDataService(opts));
            }
            return WizardDataService.dataServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default WizardDataService;