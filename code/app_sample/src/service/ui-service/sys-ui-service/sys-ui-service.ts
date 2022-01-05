import { SysUIServiceBase } from './calculator-ui-service-base';

/**
 * 系统UI服务
 *
 * @export
 * @class SysUIService
 * @extends SysUIServiceBase
 */
export class SysUIService extends SysUIServiceBase {
    /**
     * Creates an instance of SysUIService.
     * @memberof SysUIService
     */
    constructor(opts?: any) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { SysUIService }
     * @memberof SysUIService
     */
    static getInstance(context?: any): SysUIService {
        return new SysUIService({ context: context });
    }
}
export default SysUIService;