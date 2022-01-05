import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: "/apps/:app?",
    meta: {  
      captionTag: "",
      caption: "桌面端应用示例",
      viewType: "APPINDEXVIEW",
      requireAuth: false,
    },
    component: () => import("@page/ungroup/sample"),
    children: [
            {
              path: "customers/:customer?/editorvalues/:editorvalue?/views/editorvalueroweditgridview",
              meta: {
                  caption: "编辑器值",
                  viewType: "DEGRIDVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "customers", parameterName: "customer" },
                      { pathName: "editorvalues", parameterName: "editorvalue" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/editorvalue-row-edit-grid-view"),
            },
            {
              path: "customers/:customer?/editorvalues/:editorvalue?/views/editorvalueeditview",
              meta: {
                  caption: "编辑器值",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "customers", parameterName: "customer" },
                      { pathName: "editorvalues", parameterName: "editorvalue" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/editorvalue-edit-view"),
            },
            {
              path: "orgdatas/:orgdata?/orgdatas/:orgdata?/views/orgdatagridview",
              meta: {
                  caption: "组织数据",
                  viewType: "DEGRIDVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "orgdatas", parameterName: "orgdata" },
                      { pathName: "orgdatas", parameterName: "orgdata" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/org-data-grid-view"),
            },
            {
              path: "orgdatas/:orgdata?/orgdatas/:orgdata?/views/orgdataeditview",
              meta: {
                  caption: "组织数据",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "orgdatas", parameterName: "orgdata" },
                      { pathName: "orgdatas", parameterName: "orgdata" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/org-data-edit-view"),
            },
            {
              path: "provinces/:province?/views/provinceeditdataview",
              meta: {
                  caption: "省份",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "provinces", parameterName: "province" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/province-edit-data-view"),
            },
            {
              path: "provinces/:province?/views/provinceeditview",
              meta: {
                  caption: "省份",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "provinces", parameterName: "province" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/province-edit-view"),
            },
            {
              path: "provinces/:province?/views/provincegriddataview",
              meta: {
                  caption: "省份",
                  viewType: "DEGRIDVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "provinces", parameterName: "province" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/province-grid-data-view"),
            },
            {
              path: "provinces/:province?/views/provincetreenavinfoeditview",
              meta: {
                  caption: "省份",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "provinces", parameterName: "province" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/province-tree-nav-info-edit-view"),
            },
            {
              path: "viewmsgdatas/:viewmsgdata?/views/viewmsgdatagridview",
              meta: {
                  caption: "视图消息数据",
                  viewType: "DEGRIDVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "viewmsgdatas", parameterName: "viewmsgdata" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/view-msg-data-grid-view"),
            },
            {
              path: "viewmsgdatas/:viewmsgdata?/views/viewmsgdataeditview",
              meta: {
                  caption: "视图消息数据",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "viewmsgdatas", parameterName: "viewmsgdata" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/view-msg-data-edit-view"),
            },
            {
              path: "customers/:customer?/contacts/:contact?/views/contacteditview",
              meta: {
                  caption: "联系人",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "customers", parameterName: "customer" },
                      { pathName: "contacts", parameterName: "contact" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/contact-edit-view"),
            },
            {
              path: "logicvaliddatas/:logicvaliddata?/views/logicvaliddatagridview",
              meta: {
                  caption: "示例数据（启用逻辑删除）",
                  viewType: "DEGRIDVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "logicvaliddatas", parameterName: "logicvaliddata" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/logic-valid-data-grid-view"),
            },
            {
              path: "logicvaliddatas/:logicvaliddata?/views/logicvaliddataeditview",
              meta: {
                  caption: "示例数据（启用逻辑删除）",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "logicvaliddatas", parameterName: "logicvaliddata" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/logic-valid-data-edit-view"),
            },
            {
              path: "cities/:city?/views/cityeditview",
              meta: {
                  caption: "市",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "cities", parameterName: "city" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/city-edit-view"),
            },
            {
              path: "cities/:city?/views/citytreenavgridview",
              meta: {
                  caption: "市",
                  viewType: "DEGRIDVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "cities", parameterName: "city" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/city-tree-nav-grid-view"),
            },
            {
              path: "cities/:city?/views/citygridview",
              meta: {
                  caption: "市",
                  viewType: "DEGRIDVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "cities", parameterName: "city" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/city-grid-view"),
            },
            {
              path: "orders/:order?/orderdetails/:orderdetail?/views/orderdetaileditview",
              meta: {
                  caption: "订单明细",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "orders", parameterName: "order" },
                      { pathName: "orderdetails", parameterName: "orderdetail" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/order-detail-edit-view"),
            },
            {
              path: "orders/:order?/orderdetails/:orderdetail?/views/orderdetailgridview",
              meta: {
                  caption: "订单明细",
                  viewType: "DEGRIDVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "orders", parameterName: "order" },
                      { pathName: "orderdetails", parameterName: "orderdetail" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/order-detail-grid-view"),
            },
            {
              path: "orders/:order?/orderdetails/:orderdetail?/views/orderdetaillineeditgridview",
              meta: {
                  caption: "订单明细",
                  viewType: "DEGRIDVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "orders", parameterName: "order" },
                      { pathName: "orderdetails", parameterName: "orderdetail" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/order-detail-line-edit-grid-view"),
            },
            {
              path: "districts/:district?/views/districteditview",
              meta: {
                  caption: "区",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "districts", parameterName: "district" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/district-edit-view"),
            },
            {
              path: "districts/:district?/views/districttreenavinfoeditview",
              meta: {
                  caption: "区",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "districts", parameterName: "district" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/district-tree-nav-info-edit-view"),
            },
            {
              path: "districts/:district?/views/districttreenavgridview",
              meta: {
                  caption: "区",
                  viewType: "DEGRIDVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "districts", parameterName: "district" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/district-tree-nav-grid-view"),
            },
            {
              path: "products/:product?/views/producteditview",
              meta: {
                  caption: "产品",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "products", parameterName: "product" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/product-edit-view"),
            },
            {
              path: "products/:product?/views/productgridview",
              meta: {
                  caption: "产品",
                  viewType: "DEGRIDVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "products", parameterName: "product" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/product-grid-view"),
            },
            {
              path: "products/:product?/views/productgriddataview",
              meta: {
                  caption: "产品",
                  viewType: "DEGRIDVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "products", parameterName: "product" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/product-grid-data-view"),
            },
            {
              path: "products/:product?/views/producteditdataview",
              meta: {
                  caption: "产品",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "products", parameterName: "product" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/product-edit-data-view"),
            },
            {
              path: "products/:product?/views/productbycategorygridview",
              meta: {
                  caption: "产品",
                  viewType: "DEGRIDVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "products", parameterName: "product" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/product-by-category-grid-view"),
            },
            {
              path: "counterdata2s/:counterdata2?/views/counterdata2editview",
              meta: {
                  caption: "计数器数据2",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "counterdata2s", parameterName: "counterdata2" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/counter-data2-edit-view"),
            },
            {
              path: "counterdata2s/:counterdata2?/views/counterdata2gridview",
              meta: {
                  caption: "计数器数据2",
                  viewType: "DEGRIDVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "counterdata2s", parameterName: "counterdata2" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/counter-data2-grid-view"),
            },
            {
              path: "customers/:customer?/opportunities/:opportunity?/views/opportunityeditview",
              meta: {
                  caption: "商机",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "customers", parameterName: "customer" },
                      { pathName: "opportunities", parameterName: "opportunity" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/opportunity-edit-view"),
            },
            {
              path: "examples/:example?/example2s/:example2?/views/example2editview",
              meta: {
                  caption: "示例明细",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "examples", parameterName: "example" },
                      { pathName: "example2s", parameterName: "example2" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/example2-edit-view"),
            },
            {
              path: "examples/:example?/example2s/:example2?/views/example2gridview",
              meta: {
                  caption: "示例明细",
                  viewType: "DEGRIDVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "examples", parameterName: "example" },
                      { pathName: "example2s", parameterName: "example2" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/example2-grid-view"),
            },
            {
              path: "orgdatas/:orgdata?/peopledata/:persondata?/views/persondatagridview",
              meta: {
                  caption: "人员数据",
                  viewType: "DEGRIDVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "orgdatas", parameterName: "orgdata" },
                      { pathName: "peopledata", parameterName: "persondata" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/person-data-grid-view"),
            },
            {
              path: "orgdatas/:orgdata?/peopledata/:persondata?/views/persondataeditview",
              meta: {
                  caption: "人员数据",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "orgdatas", parameterName: "orgdata" },
                      { pathName: "peopledata", parameterName: "persondata" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/person-data-edit-view"),
            },
            {
              path: "examples/:example?/views/exampleeditoreditview",
              meta: {
                  caption: "编辑器示例",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "examples", parameterName: "example" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/example-editor-edit-view"),
            },
            {
              path: "examples/:example?/views/exampleformvalueformateditview",
              meta: {
                  caption: "值显示",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "examples", parameterName: "example" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/example-form-value-format-edit-view"),
            },
            {
              path: "examples/:example?/views/examplegridsortgridview",
              meta: {
                  caption: "表格排序",
                  viewType: "DEGRIDVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "examples", parameterName: "example" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/example-grid-sort-grid-view"),
            },
            {
              path: "examples/:example?/views/examplegirdlogicgridview",
              meta: {
                  caption: "表格逻辑",
                  viewType: "DEGRIDVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "examples", parameterName: "example" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/example-gird-logic-grid-view"),
            },
            {
              path: "examples/:example?/views/exampleappdeflogiceditview",
              meta: {
                  caption: "前端实体属性",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "examples", parameterName: "example" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/example-app-def-logic-edit-view"),
            },
            {
              path: "examples/:example?/views/examplepickupvieweditview",
              meta: {
                  caption: "选择视图示例",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "examples", parameterName: "example" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/example-pickup-view-edit-view"),
            },
            {
              path: "examples/:example?/views/exampleautocompleteeditview",
              meta: {
                  caption: "自动填充",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "examples", parameterName: "example" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/example-auto-complete-edit-view"),
            },
            {
              path: "examples/:example?/views/exampleformlogiceditview",
              meta: {
                  caption: "表单逻辑",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "examples", parameterName: "example" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/example-form-logic-edit-view"),
            },
            {
              path: "examples/:example?/views/examplegridcssandicongridview",
              meta: {
                  caption: "界面样式及图标",
                  viewType: "DEGRIDVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "examples", parameterName: "example" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/example-grid-css-and-icon-grid-view"),
            },
            {
              path: "examples/:example?/views/examplegridvalueformatgridview_7046",
              meta: {
                  caption: "值显示",
                  viewType: "DEGRIDVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "examples", parameterName: "example" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/example-grid-value-format-grid-view-7046"),
            },
            {
              path: "examples/:example?/views/exampletoolbargridview",
              meta: {
                  caption: "示例",
                  viewType: "DEGRIDVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "examples", parameterName: "example" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/example-toolbar-grid-view"),
            },
            {
              path: "examples/:example?/views/examplegridlayoutgridview",
              meta: {
                  caption: "表格布局",
                  viewType: "DEGRIDVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "examples", parameterName: "example" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/example-grid-layout-grid-view"),
            },
            {
              path: "examples/:example?/views/exampleformcssandiconeditview",
              meta: {
                  caption: "界面样式及图标",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "examples", parameterName: "example" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/example-form-css-and-icon-edit-view"),
            },
            {
              path: "examples/:example?/views/exampleuiactioneditview",
              meta: {
                  caption: "界面行为",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "examples", parameterName: "example" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/example-ui-action-edit-view"),
            },
            {
              path: "examples/:example?/views/exampleformlayouteditview",
              meta: {
                  caption: "表单逻辑",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "examples", parameterName: "example" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/example-form-layout-edit-view"),
            },
            {
              path: "examples/:example?/views/examplegridview",
              meta: {
                  caption: "示例",
                  viewType: "DEGRIDVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "examples", parameterName: "example" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/example-grid-view"),
            },
            {
              path: "examples/:example?/views/exampledataitemgridview",
              meta: {
                  caption: "数据项",
                  viewType: "DEGRIDVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "examples", parameterName: "example" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/example-data-item-grid-view"),
            },
            {
              path: "examples/:example?/views/exampleuilogiceditview",
              meta: {
                  caption: "界面逻辑",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "examples", parameterName: "example" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/example-ui-logic-edit-view"),
            },
            {
              path: "examples/:example?/views/exampleformdetaileditview",
              meta: {
                  caption: "表单常规",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "examples", parameterName: "example" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/example-form-detail-edit-view"),
            },
            {
              path: "examples/:example?/views/examplegridgroupgridview",
              meta: {
                  caption: "表格分组",
                  viewType: "DEGRIDVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "examples", parameterName: "example" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/example-grid-group-grid-view"),
            },
            {
              path: "examples/:example?/views/examplegridbasegridview",
              meta: {
                  caption: "表格常规",
                  viewType: "DEGRIDVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "examples", parameterName: "example" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/example-grid-base-grid-view"),
            },
            {
              path: "examples/:example?/views/exampleformadvgroupeditview",
              meta: {
                  caption: "分组高级",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "examples", parameterName: "example" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/example-form-adv-group-edit-view"),
            },
            {
              path: "examples/:example?/views/exampleeditview",
              meta: {
                  caption: "示例",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "examples", parameterName: "example" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/example-edit-view"),
            },
            {
              path: "examples/:example?/views/exampleimpexpgridview",
              meta: {
                  caption: "数据导入导出",
                  viewType: "DEGRIDVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "examples", parameterName: "example" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/example-imp-exp-grid-view"),
            },
            {
              path: "examples/:example?/views/examplenavparameditview",
              meta: {
                  caption: "导航传参",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "examples", parameterName: "example" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/example-nav-param-edit-view"),
            },
            {
              path: "examples/:example?/views/examplemodelopeneditview",
              meta: {
                  caption: "示例",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "examples", parameterName: "example" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/example-model-open-edit-view"),
            },
            {
              path: "examples/:example?/views/examplequickeditview",
              meta: {
                  caption: "示例",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "examples", parameterName: "example" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/example-quick-edit-view"),
            },
            {
              path: "examples/:example?/views/examplempickupvieweditview",
              meta: {
                  caption: "多项选择视图示例",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "examples", parameterName: "example" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/example-m-pickup-view-edit-view"),
            },
            {
              path: "categories/:category?/views/categoryeditview",
              meta: {
                  caption: "类别",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "categories", parameterName: "category" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/category-edit-view"),
            },
            {
              path: "categories/:category?/views/categorygridview",
              meta: {
                  caption: "类别",
                  viewType: "DEGRIDVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "categories", parameterName: "category" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/category-grid-view"),
            },
            {
              path: "mapdatas/:mapdata?/views/mapdataeditview",
              meta: {
                  caption: "地图示例数据",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "mapdatas", parameterName: "mapdata" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/map-data-edit-view"),
            },
            {
              path: "mapdatas/:mapdata?/views/mapdatainfoeditview",
              meta: {
                  caption: "地图示例数据",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "mapdatas", parameterName: "mapdata" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/map-data-info-edit-view"),
            },
            {
              path: "mapdatas/:mapdata?/views/mapdatagridview",
              meta: {
                  caption: "地图示例数据",
                  viewType: "DEGRIDVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "mapdatas", parameterName: "mapdata" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/map-data-grid-view"),
            },
            {
              path: "calendardatas/:calendardata?/views/calendardataneweditview",
              meta: {
                  caption: "日历",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "calendardatas", parameterName: "calendardata" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/calendar-data-new-edit-view"),
            },
            {
              path: "calendardatas/:calendardata?/views/calendardatacalendardatagridview",
              meta: {
                  caption: "日历",
                  viewType: "DEGRIDVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "calendardatas", parameterName: "calendardata" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/calendar-data-calendar-data-grid-view"),
            },
            {
              path: "calendardatas/:calendardata?/views/calendardataeditview",
              meta: {
                  caption: "日历示例数据",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "calendardatas", parameterName: "calendardata" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/calendar-data-edit-view"),
            },
            {
              path: "customers/:customer?/orders/:order?/views/ordereditview",
              meta: {
                  caption: "订单",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "customers", parameterName: "customer" },
                      { pathName: "orders", parameterName: "order" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/order-edit-view"),
            },
            {
              path: "customers/:customer?/orders/:order?/views/ordergridview",
              meta: {
                  caption: "订单",
                  viewType: "DEGRIDVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "customers", parameterName: "customer" },
                      { pathName: "orders", parameterName: "order" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/order-grid-view"),
            },
            {
              path: "customers/:customer?/views/customerautosearchgridview",
              meta: {
                  caption: "客户表格视图",
                  viewType: "DEGRIDVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "customers", parameterName: "customer" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/customer-auto-search-grid-view"),
            },
            {
              path: "customers/:customer?/views/customereditview",
              meta: {
                  caption: "客户",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "customers", parameterName: "customer" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/customer-edit-view"),
            },
            {
              path: "customers/:customer?/views/customeradvsearchgridview",
              meta: {
                  caption: "客户表格视图",
                  viewType: "DEGRIDVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "customers", parameterName: "customer" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/customer-adv-search-grid-view"),
            },
            {
              path: "customers/:customer?/views/customernotitleeditview",
              meta: {
                  caption: "客户",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "customers", parameterName: "customer" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/customer-no-title-edit-view"),
            },
            {
              path: "customers/:customer?/views/customerusr2editview",
              meta: {
                  caption: "客户",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "customers", parameterName: "customer" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/customer-usr2-edit-view"),
            },
            {
              path: "customers/:customer?/views/customergridview",
              meta: {
                  caption: "客户表格视图",
                  viewType: "DEGRIDVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "customers", parameterName: "customer" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/customer-grid-view"),
            },
            {
              path: "samplevers/:samplever?/views/samplevereditview",
              meta: {
                  caption: "示例版本",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "samplevers", parameterName: "samplever" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/sample-ver-edit-view"),
            },
            {
              path: "samplevers/:samplever?/views/samplevergridview",
              meta: {
                  caption: "示例版本",
                  viewType: "DEGRIDVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "samplevers", parameterName: "samplever" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/sample-ver-grid-view"),
            },
            {
              path: "samplevers/:samplever?/views/sampleverinfoeditview",
              meta: {
                  caption: "示例版本",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "samplevers", parameterName: "samplever" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/sample-ver-info-edit-view"),
            },
            {
              path: "leaveapplications/:leaveapplication?/views/leaveapplicationeditview",
              meta: {
                  caption: "请假申请",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "leaveapplications", parameterName: "leaveapplication" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/leave-application-edit-view"),
            },
            {
              path: "leaveapplications/:leaveapplication?/views/leaveapplicationgridview",
              meta: {
                  caption: "请假申请",
                  viewType: "DEGRIDVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "leaveapplications", parameterName: "leaveapplication" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/leave-application-grid-view"),
            },
            {
              path: "leaveapplications/:leaveapplication?/views/leaveapplicationwfgridview",
              meta: {
                  caption: "请假申请",
                  viewType: "DEGRIDVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "leaveapplications", parameterName: "leaveapplication" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/leave-application-wf-grid-view"),
            },
            {
              path: "logicvaliddata2s/:logicvaliddata2?/views/logicvaliddata2gridview",
              meta: {
                  caption: "示例数据（启用逻辑删除）（主键数值）",
                  viewType: "DEGRIDVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "logicvaliddata2s", parameterName: "logicvaliddata2" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/logic-valid-data2-grid-view"),
            },
            {
              path: "logicvaliddata2s/:logicvaliddata2?/views/logicvaliddata2editview",
              meta: {
                  caption: "示例数据（启用逻辑删除）（主键数值）",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "logicvaliddata2s", parameterName: "logicvaliddata2" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/logic-valid-data2-edit-view"),
            },
            {
              path: "kanbandatas/:kanbandata?/views/kanbandataeditview",
              meta: {
                  caption: "看板数据",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "kanbandatas", parameterName: "kanbandata" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/kanban-data-edit-view"),
            },
            {
              path: "kanbandatas/:kanbandata?/views/kanbandatagridview",
              meta: {
                  caption: "看板数据",
                  viewType: "DEGRIDVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "kanbandatas", parameterName: "kanbandata" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/kanban-data-grid-view"),
            },
            {
              path: "products/:product?/productcategories/:productcategory?/views/productcategorygridview",
              meta: {
                  caption: "产品类别",
                  viewType: "DEGRIDVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "products", parameterName: "product" },
                      { pathName: "productcategories", parameterName: "productcategory" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/product-category-grid-view"),
            },
            {
              path: "products/:product?/productcategories/:productcategory?/views/productcategoryeditview",
              meta: {
                  caption: "产品类别",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "products", parameterName: "product" },
                      { pathName: "productcategories", parameterName: "productcategory" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/product-category-edit-view"),
            },
            {
              path: "categories/:category?/productcategories/:productcategory?/views/productcategorygridview",
              meta: {
                  caption: "产品类别",
                  viewType: "DEGRIDVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "categories", parameterName: "category" },
                      { pathName: "productcategories", parameterName: "productcategory" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/product-category-grid-view"),
            },
            {
              path: "categories/:category?/productcategories/:productcategory?/views/productcategoryeditview",
              meta: {
                  caption: "产品类别",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "categories", parameterName: "category" },
                      { pathName: "productcategories", parameterName: "productcategory" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/product-category-edit-view"),
            },
            {
              path: "wizarddatas/:wizarddata?/views/wizarddataeditview",
              meta: {
                  caption: "向导数据",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "wizarddatas", parameterName: "wizarddata" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/wizard-data-edit-view"),
            },
            {
              path: "wizarddatas/:wizarddata?/views/wizarddatagridview",
              meta: {
                  caption: "向导数据",
                  viewType: "DEGRIDVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "wizarddatas", parameterName: "wizarddata" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/wizard-data-grid-view"),
            },
            {
              path: "orderrepdatas/:orderrepdata?/views/orderrepdatagroupgridview",
              meta: {
                  caption: "订单报表数据",
                  viewType: "DEGRIDVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "orderrepdatas", parameterName: "orderrepdata" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/order-rep-data-group-grid-view"),
            },
            {
              path: "orderrepdatas/:orderrepdata?/views/orderrepdataeditview",
              meta: {
                  caption: "订单报表数据",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "orderrepdatas", parameterName: "orderrepdata" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/order-rep-data-edit-view"),
            },
            {
              path: "deptdatas/:deptdata?/views/deptdataeditview",
              meta: {
                  caption: "部门数据",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "deptdatas", parameterName: "deptdata" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/dept-data-edit-view"),
            },
            {
              path: "deptdatas/:deptdata?/views/deptdatagridview",
              meta: {
                  caption: "部门数据",
                  viewType: "DEGRIDVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "deptdatas", parameterName: "deptdata" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/dept-data-grid-view"),
            },
            {
              path: "chartdatas/:chartdata?/views/chartdatagridview",
              meta: {
                  caption: "图表",
                  viewType: "DEGRIDVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "chartdatas", parameterName: "chartdata" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/chart-data-grid-view"),
            },
            {
              path: "chartdatas/:chartdata?/views/chartdatausr2gridview",
              meta: {
                  caption: "图表实体表格视图（功能确认）",
                  viewType: "DEGRIDVIEW",
                  imgPath: "",
                  iconClass: "browsers",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "chartdatas", parameterName: "chartdata" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/chart-data-usr2-grid-view"),
            },
            {
              path: "chartdatas/:chartdata?/views/chartdatausr2editview",
              meta: {
                  caption: "编辑视图（嵌入视图）",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "chartdatas", parameterName: "chartdata" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/chart-data-usr2-edit-view"),
            },
            {
              path: "chartdatas/:chartdata?/views/chartdatausr4editview",
              meta: {
                  caption: "图表",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "chartdatas", parameterName: "chartdata" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/chart-data-usr4-edit-view"),
            },
            {
              path: "chartdatas/:chartdata?/views/chartdatausr3gridview",
              meta: {
                  caption: "图表",
                  viewType: "DEGRIDVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "chartdatas", parameterName: "chartdata" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/chart-data-usr3-grid-view"),
            },
            {
              path: "chartdatas/:chartdata?/views/chartdataeditview",
              meta: {
                  caption: "图表",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "chartdatas", parameterName: "chartdata" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/chart-data-edit-view"),
            },
            {
              path: "chartdatas/:chartdata?/views/chartdatausr3editview",
              meta: {
                  caption: "图表",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "chartdatas", parameterName: "chartdata" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/chart-data-usr3-edit-view"),
            },
            {
              path: "customers/:customer?/activities/:activity?/views/activitygridview",
              meta: {
                  caption: "活动",
                  viewType: "DEGRIDVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "customers", parameterName: "customer" },
                      { pathName: "activities", parameterName: "activity" }
                  ],
                  requireAuth: false,
              },
              component: () => import("@page/sample/activity-grid-view"),
            },
            {
              path: "customers/:customer?/activities/:activity?/views/activityeditview",
              meta: {
                  caption: "活动",
                  viewType: "DEEDITVIEW",
                  parameters: [
                      { pathName: "apps", parameterName: "app" },
                      { pathName: "customers", parameterName: "customer" },
                      { pathName: "activities", parameterName: "activity" }
                  ],
                  requireAuth: false,
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