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
    component: () => import("@views/ungroup/sample"),
    children: [
            {
              path: "customers/:customer?/editorvalues/:editorvalue?/views/editorvalueusr2gridview",
              meta: {
                  tag:'EditorValueUsr2GridView'
              },
              component: () => import("@views/sample/editor-value-usr2-grid-view"),
            },
            {
              path: "customers/:customer?/editorvalues/:editorvalue?/views/editorvalueroweditgridview",
              meta: {
                  tag:'EDITORVALUERowEditGridView'
              },
              component: () => import("@views/sample/editorvalue-row-edit-grid-view"),
            },
            {
              path: "customers/:customer?/editorvalues/:editorvalue?/views/editorvalueeditview",
              meta: {
                  tag:'EDITORVALUEEditView'
              },
              component: () => import("@views/sample/editorvalue-edit-view"),
            },
            {
              path: "orgdatas/:orgdata?/orgdatas/:orgdata?/views/orgdataorgpersontreeexpview",
              meta: {
                  tag:'OrgDataOrgPersonTreeExpView'
              },
              component: () => import("@views/sample/org-data-org-person-tree-exp-view"),
            },
            {
              path: "orgdatas/:orgdata?/orgdatas/:orgdata?/views/orgdatagridview",
              meta: {
                  tag:'OrgDataGridView'
              },
              component: () => import("@views/sample/org-data-grid-view"),
            },
            {
              path: "orgdatas/:orgdata?/orgdatas/:orgdata?/views/orgdataeditview",
              meta: {
                  tag:'OrgDataEditView'
              },
              component: () => import("@views/sample/org-data-edit-view"),
            },
            {
              path: "provinces/:province?/views/provinceeditdataview",
              meta: {
                  tag:'ProvinceEditDataView'
              },
              component: () => import("@views/sample/province-edit-data-view"),
            },
            {
              path: "provinces/:province?/views/provincegriddataview",
              meta: {
                  tag:'ProvinceGridDataView'
              },
              component: () => import("@views/sample/province-grid-data-view"),
            },
            {
              path: "provinces/:province?/views/provincetreenavinfoeditview",
              meta: {
                  tag:'ProvinceTreeNavInfoEditView'
              },
              component: () => import("@views/sample/province-tree-nav-info-edit-view"),
            },
            {
              path: "viewmsgdatas/:viewmsgdata?/views/viewmsgdatagridview",
              meta: {
                  tag:'ViewMsgDataGridView'
              },
              component: () => import("@views/sample/view-msg-data-grid-view"),
            },
            {
              path: "viewmsgdatas/:viewmsgdata?/views/viewmsgdataeditview",
              meta: {
                  tag:'ViewMsgDataEditView'
              },
              component: () => import("@views/sample/view-msg-data-edit-view"),
            },
            {
              path: "customers/:customer?/contacts/:contact?/views/contacteditview",
              meta: {
                  tag:'CONTACTEditView'
              },
              component: () => import("@views/sample/contact-edit-view"),
            },
            {
              path: "logicvaliddatas/:logicvaliddata?/views/logicvaliddatagridview",
              meta: {
                  tag:'LogicValidDataGridView'
              },
              component: () => import("@views/sample/logic-valid-data-grid-view"),
            },
            {
              path: "logicvaliddatas/:logicvaliddata?/views/logicvaliddataeditview",
              meta: {
                  tag:'LogicValidDataEditView'
              },
              component: () => import("@views/sample/logic-valid-data-edit-view"),
            },
            {
              path: "provinces/:province?/cities/:city?/views/cityeditview",
              meta: {
                  tag:'CityEditView'
              },
              component: () => import("@views/sample/city-edit-view"),
            },
            {
              path: "provinces/:province?/cities/:city?/views/citytreenavgridview",
              meta: {
                  tag:'CityTreeNavGridView'
              },
              component: () => import("@views/sample/city-tree-nav-grid-view"),
            },
            {
              path: "orders/:order?/orderdetails/:orderdetail?/views/orderdetaileditview",
              meta: {
                  tag:'OrderDetailEditView'
              },
              component: () => import("@views/sample/order-detail-edit-view"),
            },
            {
              path: "orders/:order?/orderdetails/:orderdetail?/views/orderdetaillineeditgridview",
              meta: {
                  tag:'OrderDetailLineEditGridView'
              },
              component: () => import("@views/sample/order-detail-line-edit-grid-view"),
            },
            {
              path: "cities/:city?/districts/:district?/views/districteditview",
              meta: {
                  tag:'DistrictEditView'
              },
              component: () => import("@views/sample/district-edit-view"),
            },
            {
              path: "cities/:city?/districts/:district?/views/districttreenavinfoeditview",
              meta: {
                  tag:'DistrictTreeNavInfoEditView'
              },
              component: () => import("@views/sample/district-tree-nav-info-edit-view"),
            },
            {
              path: "cities/:city?/districts/:district?/views/districttreenavgridview",
              meta: {
                  tag:'DistrictTreeNavGridView'
              },
              component: () => import("@views/sample/district-tree-nav-grid-view"),
            },
            {
              path: "products/:product?/views/productgriddataview",
              meta: {
                  tag:'ProductGridDataView'
              },
              component: () => import("@views/sample/product-grid-data-view"),
            },
            {
              path: "products/:product?/views/producteditdataview",
              meta: {
                  tag:'ProductEditDataView'
              },
              component: () => import("@views/sample/product-edit-data-view"),
            },
            {
              path: "counterdata2s/:counterdata2?/views/counterdata2editview",
              meta: {
                  tag:'CounterData2EditView'
              },
              component: () => import("@views/sample/counter-data2-edit-view"),
            },
            {
              path: "counterdata2s/:counterdata2?/views/counterdata2gridview",
              meta: {
                  tag:'CounterData2GridView'
              },
              component: () => import("@views/sample/counter-data2-grid-view"),
            },
            {
              path: "customers/:customer?/opportunities/:opportunity?/views/opportunityeditview",
              meta: {
                  tag:'OPPORTUNITYEditView'
              },
              component: () => import("@views/sample/opportunity-edit-view"),
            },
            {
              path: "examples/:example?/example2s/:example2?/views/example2editview",
              meta: {
                  tag:'Example2EditView'
              },
              component: () => import("@views/sample/example2-edit-view"),
            },
            {
              path: "orgdatas/:orgdata?/peopledata/:persondata?/views/persondatagridview",
              meta: {
                  tag:'PersonDataGridView'
              },
              component: () => import("@views/sample/person-data-grid-view"),
            },
            {
              path: "orgdatas/:orgdata?/peopledata/:persondata?/views/persondataeditview",
              meta: {
                  tag:'PersonDataEditView'
              },
              component: () => import("@views/sample/person-data-edit-view"),
            },
            {
              path: "examples/:example?/views/exampleeditoreditview",
              meta: {
                  tag:'ExampleEditorEditView'
              },
              component: () => import("@views/sample/example-editor-edit-view"),
            },
            {
              path: "examples/:example?/views/exampletoolbartreeexpview",
              meta: {
                  tag:'ExampleToolBarTreeExpView'
              },
              component: () => import("@views/sample/example-tool-bar-tree-exp-view"),
            },
            {
              path: "examples/:example?/views/exampleformvalueformateditview",
              meta: {
                  tag:'ExampleFormValueFormatEditView'
              },
              component: () => import("@views/sample/example-form-value-format-edit-view"),
            },
            {
              path: "examples/:example?/views/exampledashboardtreeexpview",
              meta: {
                  tag:'ExampleDashboardTreeExpView'
              },
              component: () => import("@views/sample/example-dashboard-tree-exp-view"),
            },
            {
              path: "examples/:example?/views/examplegridsortgridview",
              meta: {
                  tag:'ExampleGridSortGridView'
              },
              component: () => import("@views/sample/example-grid-sort-grid-view"),
            },
            {
              path: "examples/:example?/views/exampleappdeflogiceditview",
              meta: {
                  tag:'ExampleAppDEFLogicEditView'
              },
              component: () => import("@views/sample/example-app-def-logic-edit-view"),
            },
            {
              path: "examples/:example?/views/examplepickupvieweditview",
              meta: {
                  tag:'ExamplePickupViewEditView'
              },
              component: () => import("@views/sample/example-pickup-view-edit-view"),
            },
            {
              path: "examples/:example?/views/exampleautocompleteeditview",
              meta: {
                  tag:'ExampleAutoCompleteEditView'
              },
              component: () => import("@views/sample/example-auto-complete-edit-view"),
            },
            {
              path: "examples/:example?/views/exampledrctrltreeexpview",
              meta: {
                  tag:'ExampleDRCtrlTreeExpView'
              },
              component: () => import("@views/sample/example-dr-ctrl-tree-exp-view"),
            },
            {
              path: "examples/:example?/views/exampleformlogiceditview",
              meta: {
                  tag:'ExampleFormLogicEditView'
              },
              component: () => import("@views/sample/example-form-logic-edit-view"),
            },
            {
              path: "examples/:example?/views/examplegridcssandicongridview",
              meta: {
                  tag:'ExampleGridCssAndIconGridView'
              },
              component: () => import("@views/sample/example-grid-css-and-icon-grid-view"),
            },
            {
              path: "examples/:example?/views/examplegridvalueformatgridview_7046",
              meta: {
                  tag:'ExampleGridValueFormatGridView_7046'
              },
              component: () => import("@views/sample/example-grid-value-format-grid-view-7046"),
            },
            {
              path: "examples/:example?/views/exampletoolbargridview",
              meta: {
                  tag:'ExampleToolbarGridView'
              },
              component: () => import("@views/sample/example-toolbar-grid-view"),
            },
            {
              path: "examples/:example?/views/examplecardtreeexpview",
              meta: {
                  tag:'ExampleCardTreeExpView'
              },
              component: () => import("@views/sample/example-card-tree-exp-view"),
            },
            {
              path: "examples/:example?/views/examplewizardtreeexpview",
              meta: {
                  tag:'ExampleWizardTreeExpView'
              },
              component: () => import("@views/sample/example-wizard-tree-exp-view"),
            },
            {
              path: "examples/:example?/views/examplepaneltreeexpview",
              meta: {
                  tag:'ExamplePanelTreeExpView'
              },
              component: () => import("@views/sample/example-panel-tree-exp-view"),
            },
            {
              path: "examples/:example?/views/examplesearchformtreeexpview",
              meta: {
                  tag:'ExampleSearchFormTreeExpView'
              },
              component: () => import("@views/sample/example-search-form-tree-exp-view"),
            },
            {
              path: "examples/:example?/views/examplegridlayoutgridview",
              meta: {
                  tag:'ExampleGridLayoutGridView'
              },
              component: () => import("@views/sample/example-grid-layout-grid-view"),
            },
            {
              path: "examples/:example?/views/exampleformcssandiconeditview",
              meta: {
                  tag:'ExampleFormCssAndIconEditView'
              },
              component: () => import("@views/sample/example-form-css-and-icon-edit-view"),
            },
            {
              path: "examples/:example?/views/exampleuiactioneditview",
              meta: {
                  tag:'ExampleUIActionEditView'
              },
              component: () => import("@views/sample/example-ui-action-edit-view"),
            },
            {
              path: "examples/:example?/views/exampleuilogictreeexpview",
              meta: {
                  tag:'ExampleUILogicTreeExpView'
              },
              component: () => import("@views/sample/example-ui-logic-tree-exp-view"),
            },
            {
              path: "examples/:example?/views/exampletreegridnavtreeexpview",
              meta: {
                  tag:'ExampleTreeGridNavTreeExpView'
              },
              component: () => import("@views/sample/example-tree-grid-nav-tree-exp-view"),
            },
            {
              path: "examples/:example?/views/exampleformlayouteditview",
              meta: {
                  tag:'ExampleFormLayoutEditView'
              },
              component: () => import("@views/sample/example-form-layout-edit-view"),
            },
            {
              path: "examples/:example?/views/exampletreetreeexpview",
              meta: {
                  tag:'ExampleTreeTreeExpView'
              },
              component: () => import("@views/sample/example-tree-tree-exp-view"),
            },
            {
              path: "examples/:example?/views/examplegridview",
              meta: {
                  tag:'ExampleGridView'
              },
              component: () => import("@views/sample/example-grid-view"),
            },
            {
              path: "examples/:example?/views/exampledataitemgridview",
              meta: {
                  tag:'ExampleDataItemGridView'
              },
              component: () => import("@views/sample/example-data-item-grid-view"),
            },
            {
              path: "examples/:example?/views/exampleuilogiceditview",
              meta: {
                  tag:'ExampleUILogicEditView'
              },
              component: () => import("@views/sample/example-ui-logic-edit-view"),
            },
            {
              path: "examples/:example?/views/exampleformdetaileditview",
              meta: {
                  tag:'ExampleFormDetailEditView'
              },
              component: () => import("@views/sample/example-form-detail-edit-view"),
            },
            {
              path: "examples/:example?/views/examplegridgroupgridview",
              meta: {
                  tag:'ExampleGridGroupGridView'
              },
              component: () => import("@views/sample/example-grid-group-grid-view"),
            },
            {
              path: "examples/:example?/views/exampleformtreeexpview",
              meta: {
                  tag:'ExampleFormTreeExpView'
              },
              component: () => import("@views/sample/example-form-tree-exp-view"),
            },
            {
              path: "examples/:example?/views/examplegridbasegridview",
              meta: {
                  tag:'ExampleGridBaseGridView'
              },
              component: () => import("@views/sample/example-grid-base-grid-view"),
            },
            {
              path: "examples/:example?/views/exampleappdelogictreeexpview",
              meta: {
                  tag:'ExampleAppDELogicTreeExpView'
              },
              component: () => import("@views/sample/example-app-de-logic-tree-exp-view"),
            },
            {
              path: "examples/:example?/views/exampleformadvgroupeditview",
              meta: {
                  tag:'ExampleFormAdvGroupEditView'
              },
              component: () => import("@views/sample/example-form-adv-group-edit-view"),
            },
            {
              path: "examples/:example?/views/exampleeditview",
              meta: {
                  tag:'ExampleEditView'
              },
              component: () => import("@views/sample/example-edit-view"),
            },
            {
              path: "examples/:example?/views/examplelisttreeexpview",
              meta: {
                  tag:'ExampleListTreeExpView'
              },
              component: () => import("@views/sample/example-list-tree-exp-view"),
            },
            {
              path: "examples/:example?/views/examplegridtreeexpview",
              meta: {
                  tag:'ExampleGridTreeExpView'
              },
              component: () => import("@views/sample/example-grid-tree-exp-view"),
            },
            {
              path: "examples/:example?/views/examplemformtreeexpview",
              meta: {
                  tag:'ExampleMFormTreeExpView'
              },
              component: () => import("@views/sample/example-m-form-tree-exp-view"),
            },
            {
              path: "examples/:example?/views/exampleimpexpgridview",
              meta: {
                  tag:'ExampleImpExpGridView'
              },
              component: () => import("@views/sample/example-imp-exp-grid-view"),
            },
            {
              path: "examples/:example?/views/examplenavparameditview",
              meta: {
                  tag:'ExampleNavParamEditView'
              },
              component: () => import("@views/sample/example-nav-param-edit-view"),
            },
            {
              path: "examples/:example?/views/examplemodelopeneditview",
              meta: {
                  tag:'ExampleModelOpenEditView'
              },
              component: () => import("@views/sample/example-model-open-edit-view"),
            },
            {
              path: "examples/:example?/views/examplequickeditview",
              meta: {
                  tag:'ExampleQuickEditView'
              },
              component: () => import("@views/sample/example-quick-edit-view"),
            },
            {
              path: "examples/:example?/views/exampletreenavparamtreeexpview",
              meta: {
                  tag:'ExampleTreeNavParamTreeExpView'
              },
              component: () => import("@views/sample/example-tree-nav-param-tree-exp-view"),
            },
            {
              path: "examples/:example?/views/examplempickupvieweditview",
              meta: {
                  tag:'ExampleMPickupViewEditView'
              },
              component: () => import("@views/sample/example-m-pickup-view-edit-view"),
            },
            {
              path: "examples/:example?/views/examplesearchbartreeexpview",
              meta: {
                  tag:'ExampleSearchBarTreeExpView'
              },
              component: () => import("@views/sample/example-search-bar-tree-exp-view"),
            },
            {
              path: "categories/:category?/views/categoryeditview",
              meta: {
                  tag:'CategoryEditView'
              },
              component: () => import("@views/sample/category-edit-view"),
            },
            {
              path: "categories/:category?/views/categorygridview",
              meta: {
                  tag:'CategoryGridView'
              },
              component: () => import("@views/sample/category-grid-view"),
            },
            {
              path: "mapdatas/:mapdata?/views/mapdataeditview",
              meta: {
                  tag:'MapDataEditView'
              },
              component: () => import("@views/sample/map-data-edit-view"),
            },
            {
              path: "mapdatas/:mapdata?/views/mapdatamaptreetreeexpview",
              meta: {
                  tag:'MapDataMapTreeTreeExpView'
              },
              component: () => import("@views/sample/map-data-map-tree-tree-exp-view"),
            },
            {
              path: "mapdatas/:mapdata?/views/mapdatainfoeditview",
              meta: {
                  tag:'MapDataInfoEditView'
              },
              component: () => import("@views/sample/map-data-info-edit-view"),
            },
            {
              path: "mapdatas/:mapdata?/views/mapdatagridview",
              meta: {
                  tag:'MapDataGridView'
              },
              component: () => import("@views/sample/map-data-grid-view"),
            },
            {
              path: "calendardatas/:calendardata?/views/calendardataneweditview",
              meta: {
                  tag:'CalendarDataNewEditView'
              },
              component: () => import("@views/sample/calendar-data-new-edit-view"),
            },
            {
              path: "calendardatas/:calendardata?/views/calendardatacalendardatagridview",
              meta: {
                  tag:'CalendarDataCalendarDataGridView'
              },
              component: () => import("@views/sample/calendar-data-calendar-data-grid-view"),
            },
            {
              path: "calendardatas/:calendardata?/views/calendardatacalendartreetreeexpview",
              meta: {
                  tag:'CalendarDataCalendarTreeTreeExpView'
              },
              component: () => import("@views/sample/calendar-data-calendar-tree-tree-exp-view"),
            },
            {
              path: "calendardatas/:calendardata?/views/calendardataeditview",
              meta: {
                  tag:'CalendarDataEditView'
              },
              component: () => import("@views/sample/calendar-data-edit-view"),
            },
            {
              path: "customers/:customer?/orders/:order?/views/ordereditview",
              meta: {
                  tag:'OrderEditView'
              },
              component: () => import("@views/sample/order-edit-view"),
            },
            {
              path: "customers/:customer?/orders/:order?/views/ordergridview",
              meta: {
                  tag:'OrderGridView'
              },
              component: () => import("@views/sample/order-grid-view"),
            },
            {
              path: "customers/:customer?/views/customerautosearchgridview",
              meta: {
                  tag:'CustomerAutoSearchGridView'
              },
              component: () => import("@views/sample/customer-auto-search-grid-view"),
            },
            {
              path: "customers/:customer?/views/customereditviewmisctreeexpview",
              meta: {
                  tag:'CustomerEditViewMiscTreeExpView'
              },
              component: () => import("@views/sample/customer-edit-view-misc-tree-exp-view"),
            },
            {
              path: "customers/:customer?/views/customereditview",
              meta: {
                  tag:'CustomerEditView'
              },
              component: () => import("@views/sample/customer-edit-view"),
            },
            {
              path: "customers/:customer?/views/customeradvsearchgridview",
              meta: {
                  tag:'CustomerAdvSearchGridView'
              },
              component: () => import("@views/sample/customer-adv-search-grid-view"),
            },
            {
              path: "customers/:customer?/views/customernotitleeditview",
              meta: {
                  tag:'CustomerNoTitleEditView'
              },
              component: () => import("@views/sample/customer-no-title-edit-view"),
            },
            {
              path: "customers/:customer?/views/customerusr2editview",
              meta: {
                  tag:'CustomerUsr2EditView'
              },
              component: () => import("@views/sample/customer-usr2-edit-view"),
            },
            {
              path: "customers/:customer?/views/customergridview",
              meta: {
                  tag:'CustomerGridView'
              },
              component: () => import("@views/sample/customer-grid-view"),
            },
            {
              path: "samplevers/:samplever?/views/samplevereditview",
              meta: {
                  tag:'SampleVerEditView'
              },
              component: () => import("@views/sample/sample-ver-edit-view"),
            },
            {
              path: "samplevers/:samplever?/views/samplevergridview",
              meta: {
                  tag:'SampleVerGridView'
              },
              component: () => import("@views/sample/sample-ver-grid-view"),
            },
            {
              path: "samplevers/:samplever?/views/sampleverinfoeditview",
              meta: {
                  tag:'SampleVerInfoEditView'
              },
              component: () => import("@views/sample/sample-ver-info-edit-view"),
            },
            {
              path: "samplevers/:samplever?/views/sampleversamplevertreeexpview",
              meta: {
                  tag:'SampleVerSampleVerTreeExpView'
              },
              component: () => import("@views/sample/sample-ver-sample-ver-tree-exp-view"),
            },
            {
              path: "leaveapplications/:leaveapplication?/views/leaveapplicationeditview",
              meta: {
                  tag:'LeaveApplicationEditView'
              },
              component: () => import("@views/sample/leave-application-edit-view"),
            },
            {
              path: "leaveapplications/:leaveapplication?/views/leaveapplicationgridview",
              meta: {
                  tag:'LeaveApplicationGridView'
              },
              component: () => import("@views/sample/leave-application-grid-view"),
            },
            {
              path: "leaveapplications/:leaveapplication?/views/leaveapplicationwfgridview",
              meta: {
                  tag:'LeaveApplicationWFGridView'
              },
              component: () => import("@views/sample/leave-application-wf-grid-view"),
            },
            {
              path: "logicvaliddata2s/:logicvaliddata2?/views/logicvaliddata2gridview",
              meta: {
                  tag:'LogicValidData2GridView'
              },
              component: () => import("@views/sample/logic-valid-data2-grid-view"),
            },
            {
              path: "logicvaliddata2s/:logicvaliddata2?/views/logicvaliddata2editview",
              meta: {
                  tag:'LogicValidData2EditView'
              },
              component: () => import("@views/sample/logic-valid-data2-edit-view"),
            },
            {
              path: "kanbandatas/:kanbandata?/views/kanbandataeditview",
              meta: {
                  tag:'KanbanDataEditView'
              },
              component: () => import("@views/sample/kanban-data-edit-view"),
            },
            {
              path: "kanbandatas/:kanbandata?/views/kanbandatagridview",
              meta: {
                  tag:'KanbanDataGridView'
              },
              component: () => import("@views/sample/kanban-data-grid-view"),
            },
            {
              path: "products/:product?/productcategories/:productcategory?/views/productcategorygridview",
              meta: {
                  tag:'ProductCategoryGridView'
              },
              component: () => import("@views/sample/product-category-grid-view"),
            },
            {
              path: "products/:product?/productcategories/:productcategory?/views/productcategoryeditview",
              meta: {
                  tag:'ProductCategoryEditView'
              },
              component: () => import("@views/sample/product-category-edit-view"),
            },
            {
              path: "categories/:category?/productcategories/:productcategory?/views/productcategorygridview",
              meta: {
                  tag:'ProductCategoryGridView'
              },
              component: () => import("@views/sample/product-category-grid-view"),
            },
            {
              path: "categories/:category?/productcategories/:productcategory?/views/productcategoryeditview",
              meta: {
                  tag:'ProductCategoryEditView'
              },
              component: () => import("@views/sample/product-category-edit-view"),
            },
            {
              path: "wizarddatas/:wizarddata?/views/wizarddataeditview",
              meta: {
                  tag:'WizardDataEditView'
              },
              component: () => import("@views/sample/wizard-data-edit-view"),
            },
            {
              path: "wizarddatas/:wizarddata?/views/wizarddatagridview",
              meta: {
                  tag:'WizardDataGridView'
              },
              component: () => import("@views/sample/wizard-data-grid-view"),
            },
            {
              path: "orderrepdatas/:orderrepdata?/views/orderrepdatagroupgridview",
              meta: {
                  tag:'OrderRepDataGroupGridView'
              },
              component: () => import("@views/sample/order-rep-data-group-grid-view"),
            },
            {
              path: "orderrepdatas/:orderrepdata?/views/orderrepdataeditview",
              meta: {
                  tag:'OrderRepDataEditView'
              },
              component: () => import("@views/sample/order-rep-data-edit-view"),
            },
            {
              path: "deptdatas/:deptdata?/views/deptdataeditview",
              meta: {
                  tag:'DeptDataEditView'
              },
              component: () => import("@views/sample/dept-data-edit-view"),
            },
            {
              path: "deptdatas/:deptdata?/views/deptdatagridview",
              meta: {
                  tag:'DeptDataGridView'
              },
              component: () => import("@views/sample/dept-data-grid-view"),
            },
            {
              path: "chartdatas/:chartdata?/views/chartdatagridview",
              meta: {
                  tag:'ChartDataGridView'
              },
              component: () => import("@views/sample/chart-data-grid-view"),
            },
            {
              path: "chartdatas/:chartdata?/views/chartdatausr2gridview",
              meta: {
                  tag:'ChartDataUsr2GridView'
              },
              component: () => import("@views/sample/chart-data-usr2-grid-view"),
            },
            {
              path: "chartdatas/:chartdata?/views/chartdatausr2editview",
              meta: {
                  tag:'ChartDataUsr2EditView'
              },
              component: () => import("@views/sample/chart-data-usr2-edit-view"),
            },
            {
              path: "chartdatas/:chartdata?/views/chartdatausr4editview",
              meta: {
                  tag:'ChartDataUsr4EditView'
              },
              component: () => import("@views/sample/chart-data-usr4-edit-view"),
            },
            {
              path: "chartdatas/:chartdata?/views/chartdatausr3gridview",
              meta: {
                  tag:'ChartDataUsr3GridView'
              },
              component: () => import("@views/sample/chart-data-usr3-grid-view"),
            },
            {
              path: "chartdatas/:chartdata?/views/chartdataeditview",
              meta: {
                  tag:'ChartDataEditView'
              },
              component: () => import("@views/sample/chart-data-edit-view"),
            },
            {
              path: "chartdatas/:chartdata?/views/chartdatatreeexpforchartview",
              meta: {
                  tag:'ChartDataTreeExpForChartView'
              },
              component: () => import("@views/sample/chart-data-tree-exp-for-chart-view"),
            },
            {
              path: "chartdatas/:chartdata?/views/chartdatausr3editview",
              meta: {
                  tag:'ChartDataUsr3EditView'
              },
              component: () => import("@views/sample/chart-data-usr3-edit-view"),
            },
            {
              path: "customers/:customer?/activities/:activity?/views/activitygridview",
              meta: {
                  tag:'ACTIVITYGridView'
              },
              component: () => import("@views/sample/activity-grid-view"),
            },
            {
              path: "customers/:customer?/activities/:activity?/views/activityeditview",
              meta: {
                  tag:'ACTIVITYEditView'
              },
              component: () => import("@views/sample/activity-edit-view"),
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