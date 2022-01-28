/**
 * @description 数据服务注册中心
 * @export
 * @interface IDataServiceRegister
 */
export interface IDataServiceRegister {

    /**
     * 获取指定数据服务
     *
     * @param {string} entityKey 应用实体名小写
     * @param {*} context 应用上下文
     * @return {*} 
     * @memberof DataServiceRegister
     */
    getService(entityKey: string, context?: any): Promise<any>;
}