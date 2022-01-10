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
        UIServiceRegister.allUIServiceMap.set('orderrepdata', () => import('@ui-service/order-rep-data/order-rep-data-ui-service'));
        UIServiceRegister.allUIServiceMap.set('example2', () => import('@ui-service/example2/example2-ui-service'));
        UIServiceRegister.allUIServiceMap.set('calculator', () => import('@ui-service/calculator/calculator-ui-service'));
        UIServiceRegister.allUIServiceMap.set('counterdata2', () => import('@ui-service/counter-data2/counter-data2-ui-service'));
        UIServiceRegister.allUIServiceMap.set('counterdata', () => import('@ui-service/counter-data/counter-data-ui-service'));
        UIServiceRegister.allUIServiceMap.set('persondata', () => import('@ui-service/person-data/person-data-ui-service'));
        UIServiceRegister.allUIServiceMap.set('deptdata', () => import('@ui-service/dept-data/dept-data-ui-service'));
        UIServiceRegister.allUIServiceMap.set('editorvalue', () => import('@ui-service/editor-value/editor-value-ui-service'));
        UIServiceRegister.allUIServiceMap.set('customer', () => import('@ui-service/customer/customer-ui-service'));
        UIServiceRegister.allUIServiceMap.set('orgdata', () => import('@ui-service/org-data/org-data-ui-service'));
        UIServiceRegister.allUIServiceMap.set('kanbandata', () => import('@ui-service/kanban-data/kanban-data-ui-service'));
        UIServiceRegister.allUIServiceMap.set('impexpdata', () => import('@ui-service/imp-exp-data/imp-exp-data-ui-service'));
        UIServiceRegister.allUIServiceMap.set('activity', () => import('@ui-service/activity/activity-ui-service'));
        UIServiceRegister.allUIServiceMap.set('mapdata', () => import('@ui-service/map-data/map-data-ui-service'));
        UIServiceRegister.allUIServiceMap.set('product', () => import('@ui-service/product/product-ui-service'));
        UIServiceRegister.allUIServiceMap.set('city', () => import('@ui-service/city/city-ui-service'));
        UIServiceRegister.allUIServiceMap.set('calendardata', () => import('@ui-service/calendar-data/calendar-data-ui-service'));
        UIServiceRegister.allUIServiceMap.set('opportunity', () => import('@ui-service/opportunity/opportunity-ui-service'));
        UIServiceRegister.allUIServiceMap.set('contact', () => import('@ui-service/contact/contact-ui-service'));
        UIServiceRegister.allUIServiceMap.set('chartdata', () => import('@ui-service/chart-data/chart-data-ui-service'));
        UIServiceRegister.allUIServiceMap.set('category', () => import('@ui-service/category/category-ui-service'));
        UIServiceRegister.allUIServiceMap.set('province', () => import('@ui-service/province/province-ui-service'));
        UIServiceRegister.allUIServiceMap.set('dynadashboard', () => import('@ui-service/dyna-dashboard/dyna-dashboard-ui-service'));
        UIServiceRegister.allUIServiceMap.set('event', () => import('@ui-service/event/event-ui-service'));
        UIServiceRegister.allUIServiceMap.set('wizarddata', () => import('@ui-service/wizard-data/wizard-data-ui-service'));
        UIServiceRegister.allUIServiceMap.set('order', () => import('@ui-service/order/order-ui-service'));
        UIServiceRegister.allUIServiceMap.set('orderdetail', () => import('@ui-service/order-detail/order-detail-ui-service'));
        UIServiceRegister.allUIServiceMap.set('viewmsgdata', () => import('@ui-service/view-msg-data/view-msg-data-ui-service'));
        UIServiceRegister.allUIServiceMap.set('productcategory', () => import('@ui-service/product-category/product-category-ui-service'));
        UIServiceRegister.allUIServiceMap.set('district', () => import('@ui-service/district/district-ui-service'));
        UIServiceRegister.allUIServiceMap.set('samplever', () => import('@ui-service/sample-ver/sample-ver-ui-service'));
        UIServiceRegister.allUIServiceMap.set('example', () => import('@ui-service/example/example-ui-service'));
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