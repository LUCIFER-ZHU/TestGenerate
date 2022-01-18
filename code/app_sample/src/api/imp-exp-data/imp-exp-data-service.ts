import { IParam } from '@core';
import { ImpExpDataServiceBase } from './imp-exp-data-service-base';

/**
 * 导入导出数据服务
 *
 * @export
 * @class ImpExpDataService
 * @extends ImpExpDataServiceBase
 */
export class ImpExpDataService extends ImpExpDataServiceBase {

    /**
     * 基础数据服务实例
     * 
     * @private
     * @type { ImpExpDataService }
     * @memberof ImpExpDataService
     */
    private static basicDataServiceInstance: ImpExpDataService;

    /**
     * 数据服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof ImpExpDataService
     */
    private static dataServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of ImpExpDataService.
     * @memberof ImpExpDataService
     */
    constructor(opts?: IParam) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { ImpExpDataService }
     * @memberof ImpExpDataService
     */
    static getInstance(opts?: IParam): ImpExpDataService {
        if (!this.basicDataServiceInstance) {
            this.basicDataServiceInstance = new ImpExpDataService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicDataServiceInstance;
        } else {
            if (!ImpExpDataService.dataServiceMap.get(opts.srfdynainstid)) {
                ImpExpDataService.dataServiceMap.set(opts.srfdynainstid, new ImpExpDataService(opts));
            }
            return ImpExpDataService.dataServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default ImpExpDataService;