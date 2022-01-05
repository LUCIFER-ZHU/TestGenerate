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
     * Creates an instance of ImpExpDataUIService.
     * @memberof ImpExpDataUIService
     */
    constructor(opts?: any) {
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
    static getInstance(context?: any): ImpExpDataUIService {
        return new ImpExpDataUIService({ context: context });
    }
}
export default ImpExpDataUIService;