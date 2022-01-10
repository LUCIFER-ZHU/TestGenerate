import { IParam } from '@core';
import { WizardDataUIServiceBase } from './wizard-data-ui-service-base';

/**
 * 向导数据UI服务
 *
 * @export
 * @class WizardDataUIService
 * @extends WizardDataUIServiceBase
 */
export class WizardDataUIService extends WizardDataUIServiceBase {

    /**
     * 基础UI服务实例
     * 
     * @private
     * @type { WizardDataUIService }
     * @memberof WizardDataUIService
     */
    private static basicUIServiceInstance: WizardDataUIService;

    /**
     * UI服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof WizardDataUIService
     */
    private static UIServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of WizardDataUIService.
     * @memberof WizardDataUIService
     */
    constructor(opts?: IParam) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { WizardDataUIService }
     * @memberof WizardDataUIService
     */
    static getInstance(opts?: IParam): WizardDataUIService {
         if (!this.basicUIServiceInstance) {
            this.basicUIServiceInstance = new WizardDataUIService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicUIServiceInstance;
        } else {
            if (!WizardDataUIService.UIServiceMap.get(opts.srfdynainstid)) {
                WizardDataUIService.UIServiceMap.set(opts.srfdynainstid, new WizardDataUIService(opts));
            }
            return WizardDataUIService.UIServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default WizardDataUIService;