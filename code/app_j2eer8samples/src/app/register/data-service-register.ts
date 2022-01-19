import { IDataServiceRegister, IParam } from '@core';

/**
 * 数据服务注册中心
 *
 * @export
 * @class DataServiceRegister
 */
export class DataServiceRegister implements IDataServiceRegister {

    /**
     * DataServiceRegister 单例对象
     *
     * @private
     * @static
     * @memberof DataServiceRegister
     */
    private static DataServiceRegister: DataServiceRegister;

    /**
     * 所有数据服务 Map对象
     *
     * @private
     * @static
     * @memberof DataServiceRegister
     */
    private static allDataServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of DataServiceRegister.
     * @memberof DataServiceRegister
     */
    constructor() {
        this.init();
    }

    /**
     * 获取DataServiceRegister 单例对象
     *
     * @public
     * @static
     * @memberof DataServiceRegister
     */
    public static getInstance() {
        if (!this.DataServiceRegister) {
            this.DataServiceRegister = new DataServiceRegister();
        }
        return this.DataServiceRegister;
    }

    /**
     * 初始化
     *
     * @protected
     * @memberof DataServiceRegister
     */
    protected init(): void {
    }

    /**
     * 获取指定数据服务
     *
     * @param {string} entityKey 应用实体名小写
     * @param {*} context 应用上下文
     * @return {*} 
     * @memberof DataServiceRegister
     */
    public async getService(entityKey: string, context: IParam = {}) {
        const importService = DataServiceRegister.allDataServiceMap.get(entityKey);
        if (importService) {
            const importModule = await importService();
            return importModule.default.getInstance(context);
        }
    }

}