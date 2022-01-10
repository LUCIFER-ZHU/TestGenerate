import { createRouter, createWebHashHistory } from 'vue-router';
import { IParam } from '@core';

const routes = [
  {
    path: "/apps/:app?",
    beforeEnter: async (to: any, from: any) => {
      const appParams:IParam = {};
      const auth: Promise<any> = await App.initAppAuth(appParams);
      return auth;
    },
    meta: {  
      tag: 'Sample'
    },
    component: () => import("@page/ungroup/sample"),
    children: [
            {
              path: "customers/:customer?/editorvalues/:editorvalue?/views/editorvalueroweditgridview",
              meta: {
                  tag:'EDITORVALUERowEditGridView'
              },
              component: () => import("@page/sample/editorvalue-row-edit-grid-view"),
            },
            {
              path: "customers/:customer?/editorvalues/:editorvalue?/views/editorvalueeditview",
              meta: {
                  tag:'EDITORVALUEEditView'
              },
              component: () => import("@page/sample/editorvalue-edit-view"),
            },
            {
              path: "orgdatas/:orgdata?/orgdatas/:orgdata?/views/orgdatagridview",
              meta: {
                  tag:'OrgDataGridView'
              },
              component: () => import("@page/sample/org-data-grid-view"),
            },
            {
              path: "orgdatas/:orgdata?/orgdatas/:orgdata?/views/orgdataeditview",
              meta: {
                  tag:'OrgDataEditView'
              },
              component: () => import("@page/sample/org-data-edit-view"),
            },
            {
              path: "provinces/:province?/views/provinceeditdataview",
              meta: {
                  tag:'ProvinceEditDataView'
              },
              component: () => import("@page/sample/province-edit-data-view"),
            },
            {
              path: "provinces/:province?/views/provinceeditview",
              meta: {
                  tag:'ProvinceEditView'
              },
              component: () => import("@page/sample/province-edit-view"),
            },
            {
              path: "provinces/:province?/views/provincegriddataview",
              meta: {
                  tag:'ProvinceGridDataView'
              },
              component: () => import("@page/sample/province-grid-data-view"),
            },
            {
              path: "provinces/:province?/views/provincetreenavinfoeditview",
              meta: {
                  tag:'ProvinceTreeNavInfoEditView'
              },
              component: () => import("@page/sample/province-tree-nav-info-edit-view"),
            },
            {
              path: "viewmsgdatas/:viewmsgdata?/views/viewmsgdatagridview",
              meta: {
                  tag:'ViewMsgDataGridView'
              },
              component: () => import("@page/sample/view-msg-data-grid-view"),
            },
            {
              path: "viewmsgdatas/:viewmsgdata?/views/viewmsgdataeditview",
              meta: {
                  tag:'ViewMsgDataEditView'
              },
              component: () => import("@page/sample/view-msg-data-edit-view"),
            },
            {
              path: "customers/:customer?/contacts/:contact?/views/contacteditview",
              meta: {
                  tag:'CONTACTEditView'
              },
              component: () => import("@page/sample/contact-edit-view"),
            },
            {
              path: "logicvaliddatas/:logicvaliddata?/views/logicvaliddatagridview",
              meta: {
                  tag:'LogicValidDataGridView'
              },
              component: () => import("@page/sample/logic-valid-data-grid-view"),
            },
            {
              path: "logicvaliddatas/:logicvaliddata?/views/logicvaliddataeditview",
              meta: {
                  tag:'LogicValidDataEditView'
              },
              component: () => import("@page/sample/logic-valid-data-edit-view"),
            },
            {
              path: "cities/:city?/views/cityeditview",
              meta: {
                  tag:'CityEditView'
              },
              component: () => import("@page/sample/city-edit-view"),
            },
            {
              path: "cities/:city?/views/citytreenavgridview",
              meta: {
                  tag:'CityTreeNavGridView'
              },
              component: () => import("@page/sample/city-tree-nav-grid-view"),
            },
            {
              path: "cities/:city?/views/citygridview",
              meta: {
                  tag:'CityGridView'
              },
              component: () => import("@page/sample/city-grid-view"),
            },
            {
              path: "orders/:order?/orderdetails/:orderdetail?/views/orderdetaileditview",
              meta: {
                  tag:'OrderDetailEditView'
              },
              component: () => import("@page/sample/order-detail-edit-view"),
            },
            {
              path: "orders/:order?/orderdetails/:orderdetail?/views/orderdetailgridview",
              meta: {
                  tag:'OrderDetailGridView'
              },
              component: () => import("@page/sample/order-detail-grid-view"),
            },
            {
              path: "orders/:order?/orderdetails/:orderdetail?/views/orderdetaillineeditgridview",
              meta: {
                  tag:'OrderDetailLineEditGridView'
              },
              component: () => import("@page/sample/order-detail-line-edit-grid-view"),
            },
            {
              path: "districts/:district?/views/districteditview",
              meta: {
                  tag:'DistrictEditView'
              },
              component: () => import("@page/sample/district-edit-view"),
            },
            {
              path: "districts/:district?/views/districttreenavinfoeditview",
              meta: {
                  tag:'DistrictTreeNavInfoEditView'
              },
              component: () => import("@page/sample/district-tree-nav-info-edit-view"),
            },
            {
              path: "districts/:district?/views/districttreenavgridview",
              meta: {
                  tag:'DistrictTreeNavGridView'
              },
              component: () => import("@page/sample/district-tree-nav-grid-view"),
            },
            {
              path: "products/:product?/views/producteditview",
              meta: {
                  tag:'ProductEditView'
              },
              component: () => import("@page/sample/product-edit-view"),
            },
            {
              path: "products/:product?/views/productgridview",
              meta: {
                  tag:'ProductGridView'
              },
              component: () => import("@page/sample/product-grid-view"),
            },
            {
              path: "products/:product?/views/productgriddataview",
              meta: {
                  tag:'ProductGridDataView'
              },
              component: () => import("@page/sample/product-grid-data-view"),
            },
            {
              path: "products/:product?/views/producteditdataview",
              meta: {
                  tag:'ProductEditDataView'
              },
              component: () => import("@page/sample/product-edit-data-view"),
            },
            {
              path: "products/:product?/views/productbycategorygridview",
              meta: {
                  tag:'ProductByCategoryGridView'
              },
              component: () => import("@page/sample/product-by-category-grid-view"),
            },
            {
              path: "counterdata2s/:counterdata2?/views/counterdata2editview",
              meta: {
                  tag:'CounterData2EditView'
              },
              component: () => import("@page/sample/counter-data2-edit-view"),
            },
            {
              path: "counterdata2s/:counterdata2?/views/counterdata2gridview",
              meta: {
                  tag:'CounterData2GridView'
              },
              component: () => import("@page/sample/counter-data2-grid-view"),
            },
            {
              path: "customers/:customer?/opportunities/:opportunity?/views/opportunityeditview",
              meta: {
                  tag:'OPPORTUNITYEditView'
              },
              component: () => import("@page/sample/opportunity-edit-view"),
            },
            {
              path: "examples/:example?/example2s/:example2?/views/example2editview",
              meta: {
                  tag:'Example2EditView'
              },
              component: () => import("@page/sample/example2-edit-view"),
            },
            {
              path: "examples/:example?/example2s/:example2?/views/example2gridview",
              meta: {
                  tag:'Example2GridView'
              },
              component: () => import("@page/sample/example2-grid-view"),
            },
            {
              path: "orgdatas/:orgdata?/peopledata/:persondata?/views/persondatagridview",
              meta: {
                  tag:'PersonDataGridView'
              },
              component: () => import("@page/sample/person-data-grid-view"),
            },
            {
              path: "orgdatas/:orgdata?/peopledata/:persondata?/views/persondataeditview",
              meta: {
                  tag:'PersonDataEditView'
              },
              component: () => import("@page/sample/person-data-edit-view"),
            },
            {
              path: "examples/:example?/views/exampleeditoreditview",
              meta: {
                  tag:'ExampleEditorEditView'
              },
              component: () => import("@page/sample/example-editor-edit-view"),
            },
            {
              path: "examples/:example?/views/exampleformvalueformateditview",
              meta: {
                  tag:'ExampleFormValueFormatEditView'
              },
              component: () => import("@page/sample/example-form-value-format-edit-view"),
            },
            {
              path: "examples/:example?/views/examplegridsortgridview",
              meta: {
                  tag:'ExampleGridSortGridView'
              },
              component: () => import("@page/sample/example-grid-sort-grid-view"),
            },
            {
              path: "examples/:example?/views/examplegirdlogicgridview",
              meta: {
                  tag:'ExampleGirdLogicGridView'
              },
              component: () => import("@page/sample/example-gird-logic-grid-view"),
            },
            {
              path: "examples/:example?/views/exampleappdeflogiceditview",
              meta: {
                  tag:'ExampleAppDEFLogicEditView'
              },
              component: () => import("@page/sample/example-app-def-logic-edit-view"),
            },
            {
              path: "examples/:example?/views/examplepickupvieweditview",
              meta: {
                  tag:'ExamplePickupViewEditView'
              },
              component: () => import("@page/sample/example-pickup-view-edit-view"),
            },
            {
              path: "examples/:example?/views/exampleautocompleteeditview",
              meta: {
                  tag:'ExampleAutoCompleteEditView'
              },
              component: () => import("@page/sample/example-auto-complete-edit-view"),
            },
            {
              path: "examples/:example?/views/exampleformlogiceditview",
              meta: {
                  tag:'ExampleFormLogicEditView'
              },
              component: () => import("@page/sample/example-form-logic-edit-view"),
            },
            {
              path: "examples/:example?/views/examplegridcssandicongridview",
              meta: {
                  tag:'ExampleGridCssAndIconGridView'
              },
              component: () => import("@page/sample/example-grid-css-and-icon-grid-view"),
            },
            {
              path: "examples/:example?/views/examplegridvalueformatgridview_7046",
              meta: {
                  tag:'ExampleGridValueFormatGridView_7046'
              },
              component: () => import("@page/sample/example-grid-value-format-grid-view-7046"),
            },
            {
              path: "examples/:example?/views/exampletoolbargridview",
              meta: {
                  tag:'ExampleToolbarGridView'
              },
              component: () => import("@page/sample/example-toolbar-grid-view"),
            },
            {
              path: "examples/:example?/views/examplegridlayoutgridview",
              meta: {
                  tag:'ExampleGridLayoutGridView'
              },
              component: () => import("@page/sample/example-grid-layout-grid-view"),
            },
            {
              path: "examples/:example?/views/exampleformcssandiconeditview",
              meta: {
                  tag:'ExampleFormCssAndIconEditView'
              },
              component: () => import("@page/sample/example-form-css-and-icon-edit-view"),
            },
            {
              path: "examples/:example?/views/exampleuiactioneditview",
              meta: {
                  tag:'ExampleUIActionEditView'
              },
              component: () => import("@page/sample/example-ui-action-edit-view"),
            },
            {
              path: "examples/:example?/views/exampleformlayouteditview",
              meta: {
                  tag:'ExampleFormLayoutEditView'
              },
              component: () => import("@page/sample/example-form-layout-edit-view"),
            },
            {
              path: "examples/:example?/views/examplegridview",
              meta: {
                  tag:'ExampleGridView'
              },
              component: () => import("@page/sample/example-grid-view"),
            },
            {
              path: "examples/:example?/views/exampledataitemgridview",
              meta: {
                  tag:'ExampleDataItemGridView'
              },
              component: () => import("@page/sample/example-data-item-grid-view"),
            },
            {
              path: "examples/:example?/views/exampleuilogiceditview",
              meta: {
                  tag:'ExampleUILogicEditView'
              },
              component: () => import("@page/sample/example-ui-logic-edit-view"),
            },
            {
              path: "examples/:example?/views/exampleformdetaileditview",
              meta: {
                  tag:'ExampleFormDetailEditView'
              },
              component: () => import("@page/sample/example-form-detail-edit-view"),
            },
            {
              path: "examples/:example?/views/examplegridgroupgridview",
              meta: {
                  tag:'ExampleGridGroupGridView'
              },
              component: () => import("@page/sample/example-grid-group-grid-view"),
            },
            {
              path: "examples/:example?/views/examplegridbasegridview",
              meta: {
                  tag:'ExampleGridBaseGridView'
              },
              component: () => import("@page/sample/example-grid-base-grid-view"),
            },
            {
              path: "examples/:example?/views/exampleformadvgroupeditview",
              meta: {
                  tag:'ExampleFormAdvGroupEditView'
              },
              component: () => import("@page/sample/example-form-adv-group-edit-view"),
            },
            {
              path: "examples/:example?/views/exampleeditview",
              meta: {
                  tag:'ExampleEditView'
              },
              component: () => import("@page/sample/example-edit-view"),
            },
            {
              path: "examples/:example?/views/exampleimpexpgridview",
              meta: {
                  tag:'ExampleImpExpGridView'
              },
              component: () => import("@page/sample/example-imp-exp-grid-view"),
            },
            {
              path: "examples/:example?/views/examplenavparameditview",
              meta: {
                  tag:'ExampleNavParamEditView'
              },
              component: () => import("@page/sample/example-nav-param-edit-view"),
            },
            {
              path: "examples/:example?/views/examplemodelopeneditview",
              meta: {
                  tag:'ExampleModelOpenEditView'
              },
              component: () => import("@page/sample/example-model-open-edit-view"),
            },
            {
              path: "examples/:example?/views/examplequickeditview",
              meta: {
                  tag:'ExampleQuickEditView'
              },
              component: () => import("@page/sample/example-quick-edit-view"),
            },
            {
              path: "examples/:example?/views/examplempickupvieweditview",
              meta: {
                  tag:'ExampleMPickupViewEditView'
              },
              component: () => import("@page/sample/example-m-pickup-view-edit-view"),
            },
            {
              path: "categories/:category?/views/categoryeditview",
              meta: {
                  tag:'CategoryEditView'
              },
              component: () => import("@page/sample/category-edit-view"),
            },
            {
              path: "categories/:category?/views/categorygridview",
              meta: {
                  tag:'CategoryGridView'
              },
              component: () => import("@page/sample/category-grid-view"),
            },
            {
              path: "mapdatas/:mapdata?/views/mapdataeditview",
              meta: {
                  tag:'MapDataEditView'
              },
              component: () => import("@page/sample/map-data-edit-view"),
            },
            {
              path: "mapdatas/:mapdata?/views/mapdatainfoeditview",
              meta: {
                  tag:'MapDataInfoEditView'
              },
              component: () => import("@page/sample/map-data-info-edit-view"),
            },
            {
              path: "mapdatas/:mapdata?/views/mapdatagridview",
              meta: {
                  tag:'MapDataGridView'
              },
              component: () => import("@page/sample/map-data-grid-view"),
            },
            {
              path: "calendardatas/:calendardata?/views/calendardataneweditview",
              meta: {
                  tag:'CalendarDataNewEditView'
              },
              component: () => import("@page/sample/calendar-data-new-edit-view"),
            },
            {
              path: "calendardatas/:calendardata?/views/calendardatacalendardatagridview",
              meta: {
                  tag:'CalendarDataCalendarDataGridView'
              },
              component: () => import("@page/sample/calendar-data-calendar-data-grid-view"),
            },
            {
              path: "calendardatas/:calendardata?/views/calendardataeditview",
              meta: {
                  tag:'CalendarDataEditView'
              },
              component: () => import("@page/sample/calendar-data-edit-view"),
            },
            {
              path: "customers/:customer?/orders/:order?/views/ordereditview",
              meta: {
                  tag:'OrderEditView'
              },
              component: () => import("@page/sample/order-edit-view"),
            },
            {
              path: "customers/:customer?/orders/:order?/views/ordergridview",
              meta: {
                  tag:'OrderGridView'
              },
              component: () => import("@page/sample/order-grid-view"),
            },
            {
              path: "customers/:customer?/views/customerautosearchgridview",
              meta: {
                  tag:'CustomerAutoSearchGridView'
              },
              component: () => import("@page/sample/customer-auto-search-grid-view"),
            },
            {
              path: "customers/:customer?/views/customereditview",
              meta: {
                  tag:'CustomerEditView'
              },
              component: () => import("@page/sample/customer-edit-view"),
            },
            {
              path: "customers/:customer?/views/customeradvsearchgridview",
              meta: {
                  tag:'CustomerAdvSearchGridView'
              },
              component: () => import("@page/sample/customer-adv-search-grid-view"),
            },
            {
              path: "customers/:customer?/views/customernotitleeditview",
              meta: {
                  tag:'CustomerNoTitleEditView'
              },
              component: () => import("@page/sample/customer-no-title-edit-view"),
            },
            {
              path: "customers/:customer?/views/customerusr2editview",
              meta: {
                  tag:'CustomerUsr2EditView'
              },
              component: () => import("@page/sample/customer-usr2-edit-view"),
            },
            {
              path: "customers/:customer?/views/customergridview",
              meta: {
                  tag:'CustomerGridView'
              },
              component: () => import("@page/sample/customer-grid-view"),
            },
            {
              path: "samplevers/:samplever?/views/samplevereditview",
              meta: {
                  tag:'SampleVerEditView'
              },
              component: () => import("@page/sample/sample-ver-edit-view"),
            },
            {
              path: "samplevers/:samplever?/views/samplevergridview",
              meta: {
                  tag:'SampleVerGridView'
              },
              component: () => import("@page/sample/sample-ver-grid-view"),
            },
            {
              path: "samplevers/:samplever?/views/sampleverinfoeditview",
              meta: {
                  tag:'SampleVerInfoEditView'
              },
              component: () => import("@page/sample/sample-ver-info-edit-view"),
            },
            {
              path: "leaveapplications/:leaveapplication?/views/leaveapplicationeditview",
              meta: {
                  tag:'LeaveApplicationEditView'
              },
              component: () => import("@page/sample/leave-application-edit-view"),
            },
            {
              path: "leaveapplications/:leaveapplication?/views/leaveapplicationgridview",
              meta: {
                  tag:'LeaveApplicationGridView'
              },
              component: () => import("@page/sample/leave-application-grid-view"),
            },
            {
              path: "leaveapplications/:leaveapplication?/views/leaveapplicationwfgridview",
              meta: {
                  tag:'LeaveApplicationWFGridView'
              },
              component: () => import("@page/sample/leave-application-wf-grid-view"),
            },
            {
              path: "logicvaliddata2s/:logicvaliddata2?/views/logicvaliddata2gridview",
              meta: {
                  tag:'LogicValidData2GridView'
              },
              component: () => import("@page/sample/logic-valid-data2-grid-view"),
            },
            {
              path: "logicvaliddata2s/:logicvaliddata2?/views/logicvaliddata2editview",
              meta: {
                  tag:'LogicValidData2EditView'
              },
              component: () => import("@page/sample/logic-valid-data2-edit-view"),
            },
            {
              path: "kanbandatas/:kanbandata?/views/kanbandataeditview",
              meta: {
                  tag:'KanbanDataEditView'
              },
              component: () => import("@page/sample/kanban-data-edit-view"),
            },
            {
              path: "kanbandatas/:kanbandata?/views/kanbandatagridview",
              meta: {
                  tag:'KanbanDataGridView'
              },
              component: () => import("@page/sample/kanban-data-grid-view"),
            },
            {
              path: "products/:product?/productcategories/:productcategory?/views/productcategorygridview",
              meta: {
                  tag:'ProductCategoryGridView'
              },
              component: () => import("@page/sample/product-category-grid-view"),
            },
            {
              path: "products/:product?/productcategories/:productcategory?/views/productcategoryeditview",
              meta: {
                  tag:'ProductCategoryEditView'
              },
              component: () => import("@page/sample/product-category-edit-view"),
            },
            {
              path: "categories/:category?/productcategories/:productcategory?/views/productcategorygridview",
              meta: {
                  tag:'ProductCategoryGridView'
              },
              component: () => import("@page/sample/product-category-grid-view"),
            },
            {
              path: "categories/:category?/productcategories/:productcategory?/views/productcategoryeditview",
              meta: {
                  tag:'ProductCategoryEditView'
              },
              component: () => import("@page/sample/product-category-edit-view"),
            },
            {
              path: "wizarddatas/:wizarddata?/views/wizarddataeditview",
              meta: {
                  tag:'WizardDataEditView'
              },
              component: () => import("@page/sample/wizard-data-edit-view"),
            },
            {
              path: "wizarddatas/:wizarddata?/views/wizarddatagridview",
              meta: {
                  tag:'WizardDataGridView'
              },
              component: () => import("@page/sample/wizard-data-grid-view"),
            },
            {
              path: "orderrepdatas/:orderrepdata?/views/orderrepdatagroupgridview",
              meta: {
                  tag:'OrderRepDataGroupGridView'
              },
              component: () => import("@page/sample/order-rep-data-group-grid-view"),
            },
            {
              path: "orderrepdatas/:orderrepdata?/views/orderrepdataeditview",
              meta: {
                  tag:'OrderRepDataEditView'
              },
              component: () => import("@page/sample/order-rep-data-edit-view"),
            },
            {
              path: "deptdatas/:deptdata?/views/deptdataeditview",
              meta: {
                  tag:'DeptDataEditView'
              },
              component: () => import("@page/sample/dept-data-edit-view"),
            },
            {
              path: "deptdatas/:deptdata?/views/deptdatagridview",
              meta: {
                  tag:'DeptDataGridView'
              },
              component: () => import("@page/sample/dept-data-grid-view"),
            },
            {
              path: "chartdatas/:chartdata?/views/chartdatagridview",
              meta: {
                  tag:'ChartDataGridView'
              },
              component: () => import("@page/sample/chart-data-grid-view"),
            },
            {
              path: "chartdatas/:chartdata?/views/chartdatausr2gridview",
              meta: {
                  tag:'ChartDataUsr2GridView'
              },
              component: () => import("@page/sample/chart-data-usr2-grid-view"),
            },
            {
              path: "chartdatas/:chartdata?/views/chartdatausr2editview",
              meta: {
                  tag:'ChartDataUsr2EditView'
              },
              component: () => import("@page/sample/chart-data-usr2-edit-view"),
            },
            {
              path: "chartdatas/:chartdata?/views/chartdatausr4editview",
              meta: {
                  tag:'ChartDataUsr4EditView'
              },
              component: () => import("@page/sample/chart-data-usr4-edit-view"),
            },
            {
              path: "chartdatas/:chartdata?/views/chartdatausr3gridview",
              meta: {
                  tag:'ChartDataUsr3GridView'
              },
              component: () => import("@page/sample/chart-data-usr3-grid-view"),
            },
            {
              path: "chartdatas/:chartdata?/views/chartdataeditview",
              meta: {
                  tag:'ChartDataEditView'
              },
              component: () => import("@page/sample/chart-data-edit-view"),
            },
            {
              path: "chartdatas/:chartdata?/views/chartdatausr3editview",
              meta: {
                  tag:'ChartDataUsr3EditView'
              },
              component: () => import("@page/sample/chart-data-usr3-edit-view"),
            },
            {
              path: "customers/:customer?/activities/:activity?/views/activitygridview",
              meta: {
                  tag:'ACTIVITYGridView'
              },
              component: () => import("@page/sample/activity-grid-view"),
            },
            {
              path: "customers/:customer?/activities/:activity?/views/activityeditview",
              meta: {
                  tag:'ACTIVITYEditView'
              },
              component: () => import("@page/sample/activity-edit-view"),
            },
    ]
  },
  {
    path: "/",
    redirect: "/apps/sample"
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

/**
 * 全局路由守卫
 */
router.beforeEach((to, from, next) => {
  next();
})
export default router;