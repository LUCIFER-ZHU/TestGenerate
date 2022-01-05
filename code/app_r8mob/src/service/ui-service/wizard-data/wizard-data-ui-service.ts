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
     * Creates an instance of WizardDataUIService.
     * @memberof WizardDataUIService
     */
    constructor(opts?: any) {
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
    static getInstance(context?: any): WizardDataUIService {
        return new WizardDataUIService({ context: context });
    }
}
export default WizardDataUIService;