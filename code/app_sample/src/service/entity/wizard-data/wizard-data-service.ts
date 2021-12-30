import { WizardDataServiceBase } from './wizard-data-service-base';

/**
 * ${appEntity.getLogicName()}服务
 *
 * @export
 * @class WizardDataService
 * @extends WizardDataServiceBase
 */
export class WizardDataService extends WizardDataServiceBase {
    /**
     * Creates an instance of WizardDataService.
     * @memberof WizardDataService
     */
    constructor(opts?: any) {
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
    static getInstance(context?: any): WizardDataService {
        return new WizardDataService({ context: context });
    }
}
export default WizardDataService;