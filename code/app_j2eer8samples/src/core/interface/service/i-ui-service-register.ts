/**
 * @description UI服务注册中心
 * @export
 * @interface IUIServiceRegister
 */
export interface IUIServiceRegister {

    /**
     * 获取指定UI服务
     *
     * @param {string} entityKey 应用实体名小写
     * @param {*} context 应用上下文
     * @return {*} 
     * @memberof IUIServiceRegister
     */
    getService(entityKey: string, context: any): Promise<any>;
}