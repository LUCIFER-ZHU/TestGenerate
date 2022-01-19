import { IParam, IUIServiceRegister } from '@core';

/**
 * UI服务注册中心
 *
 * @export
 * @class UIServiceRegister
 */
export class UIServiceRegister implements IUIServiceRegister {

    /**
     * UIServiceRegister 单例对象
     *
     * @private
     * @static
     * @memberof UIServiceRegister
     */
    private static UIServiceRegister: UIServiceRegister;

    /**
     * 所有UIService Map对象
     *
     * @private
     * @static
     * @memberof UIServiceRegister
     */
    private static allUIServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of UIServiceRegister.
     * @memberof UIServiceRegister
     */
    constructor() {
        this.init();
    }

    /**
     * 获取UIServiceRegister 单例对象
     *
     * @public
     * @static
     * @memberof UIServiceRegister
     */
    public static getInstance() {
        if (!this.UIServiceRegister) {
            this.UIServiceRegister = new UIServiceRegister();
        }
        return this.UIServiceRegister;
    }

    /**
     * 初始化
     *
     * @protected
     * @memberof UIServiceRegister
     */
    protected init(): void {
    }

    /**
     * 获取指定UIService
     *
     * @param {string} entityKey 应用实体名小写
     * @param {*} context 应用上下文
     * @return {*} 
     * @memberof UIServiceRegister
     */
    public async getService(entityKey: string, context: IParam = {}) {
        const importService = UIServiceRegister.allUIServiceMap.get(entityKey);
        if (importService) {
            const importModule = await importService();
            return importModule.default.getInstance(context);
        }
    }

}