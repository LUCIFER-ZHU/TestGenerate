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
        DataServiceRegister.allDataServiceMap.set('editorvalue', () => import('@api/editor-value/editor-value-service'));
        DataServiceRegister.allDataServiceMap.set('calculator', () => import('@api/calculator/calculator-service'));
        DataServiceRegister.allDataServiceMap.set('orgdata', () => import('@api/org-data/org-data-service'));
        DataServiceRegister.allDataServiceMap.set('province', () => import('@api/province/province-service'));
        DataServiceRegister.allDataServiceMap.set('viewmsgdata', () => import('@api/view-msg-data/view-msg-data-service'));
        DataServiceRegister.allDataServiceMap.set('contact', () => import('@api/contact/contact-service'));
        DataServiceRegister.allDataServiceMap.set('logicvaliddata', () => import('@api/logic-valid-data/logic-valid-data-service'));
        DataServiceRegister.allDataServiceMap.set('city', () => import('@api/city/city-service'));
        DataServiceRegister.allDataServiceMap.set('orderdetail', () => import('@api/order-detail/order-detail-service'));
        DataServiceRegister.allDataServiceMap.set('district', () => import('@api/district/district-service'));
        DataServiceRegister.allDataServiceMap.set('product', () => import('@api/product/product-service'));
        DataServiceRegister.allDataServiceMap.set('counterdata2', () => import('@api/counter-data2/counter-data2-service'));
        DataServiceRegister.allDataServiceMap.set('opportunity', () => import('@api/opportunity/opportunity-service'));
        DataServiceRegister.allDataServiceMap.set('example2', () => import('@api/example2/example2-service'));
        DataServiceRegister.allDataServiceMap.set('persondata', () => import('@api/person-data/person-data-service'));
        DataServiceRegister.allDataServiceMap.set('impexpdata', () => import('@api/imp-exp-data/imp-exp-data-service'));
        DataServiceRegister.allDataServiceMap.set('example', () => import('@api/example/example-service'));
        DataServiceRegister.allDataServiceMap.set('category', () => import('@api/category/category-service'));
        DataServiceRegister.allDataServiceMap.set('mapdata', () => import('@api/map-data/map-data-service'));
        DataServiceRegister.allDataServiceMap.set('calendardata', () => import('@api/calendar-data/calendar-data-service'));
        DataServiceRegister.allDataServiceMap.set('order', () => import('@api/order/order-service'));
        DataServiceRegister.allDataServiceMap.set('customer', () => import('@api/customer/customer-service'));
        DataServiceRegister.allDataServiceMap.set('samplever', () => import('@api/sample-ver/sample-ver-service'));
        DataServiceRegister.allDataServiceMap.set('dynadashboard', () => import('@api/dyna-dashboard/dyna-dashboard-service'));
        DataServiceRegister.allDataServiceMap.set('leaveapplication', () => import('@api/leave-application/leave-application-service'));
        DataServiceRegister.allDataServiceMap.set('logicvaliddata2', () => import('@api/logic-valid-data2/logic-valid-data2-service'));
        DataServiceRegister.allDataServiceMap.set('kanbandata', () => import('@api/kanban-data/kanban-data-service'));
        DataServiceRegister.allDataServiceMap.set('productcategory', () => import('@api/product-category/product-category-service'));
        DataServiceRegister.allDataServiceMap.set('wizarddata', () => import('@api/wizard-data/wizard-data-service'));
        DataServiceRegister.allDataServiceMap.set('orderrepdata', () => import('@api/order-rep-data/order-rep-data-service'));
        DataServiceRegister.allDataServiceMap.set('deptdata', () => import('@api/dept-data/dept-data-service'));
        DataServiceRegister.allDataServiceMap.set('chartdata', () => import('@api/chart-data/chart-data-service'));
        DataServiceRegister.allDataServiceMap.set('activity', () => import('@api/activity/activity-service'));
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