import { IParam } from "@core";

export const AppViewConfig:IParam = {
  "ProvinceMobPickupMDView":{
    "name": "ProvinceMobPickupMDView",
    "codeName": "ProvinceMobPickupMDView",
    "appEntityCodeName":"Province",
    "openMode": "INDEXVIEWTAB",
    "redirectView": false,
    "deResPaths": [
      [{"pathName":"provinces","parameterName":"province"}]
    ],
    "parameters": [
        { "pathName": "views", "parameterName": "provincemobpickupmdview" }
    ],
    "caption": "省份",
    "viewType": "DEMOBPICKUPMDVIEW",
    "fileDir": "@views/r8mob/province-mob-pickup-md-view"
  },
  "ProvinceMobPickupTreeView":{
    "name": "ProvinceMobPickupTreeView",
    "codeName": "ProvinceMobPickupTreeView",
    "appEntityCodeName":"Province",
    "openMode": "INDEXVIEWTAB",
    "redirectView": false,
    "deResPaths": [
      [{"pathName":"provinces","parameterName":"province"}]
    ],
    "parameters": [
        { "pathName": "views", "parameterName": "provincemobpickuptreeview" }
    ],
    "caption": "省份",
    "viewType": "DEMOBPICKUPTREEVIEW",
    "fileDir": "@views/r8mob/province-mob-pickup-tree-view"
  },
  "AppIndexView":{
    "name": "AppIndexView",
    "codeName": "AppIndexView",
    "appEntityCodeName":"",
    "openMode": "INDEXVIEWTAB",
    "redirectView": false,
    "deResPaths": [
    ],
    "parameters": [
        { "pathName": "views", "parameterName": "appindexview" }
    ],
    "caption": "首页",
    "imgPath": "",
    "iconCls": "ribbon",
    "viewType": "APPINDEXVIEW",
    "fileDir": "@views/r8mob/app-index-view"
  },
  "ProvinceForTreeMobMPickupView":{
    "name": "ProvinceForTreeMobMPickupView",
    "codeName": "ProvinceForTreeMobMPickupView",
    "appEntityCodeName":"Province",
    "openMode": "INDEXVIEWTAB",
    "redirectView": false,
    "deResPaths": [
      [{"pathName":"provinces","parameterName":"province"}]
    ],
    "parameters": [
        { "pathName": "views", "parameterName": "provincefortreemobmpickupview" }
    ],
    "caption": "省份",
    "viewType": "DEMOBMPICKUPVIEW",
    "fileDir": "@views/r8mob/province-for-tree-mob-m-pickup-view"
  },
  "ChartDataMobEditView":{
    "name": "ChartDataMobEditView",
    "codeName": "ChartDataMobEditView",
    "appEntityCodeName":"ChartData",
    "openMode": "INDEXVIEWTAB",
    "redirectView": false,
    "deResPaths": [
      [{"pathName":"chartdatas","parameterName":"chartdata"}]
    ],
    "parameters": [
        { "pathName": "views", "parameterName": "chartdatamobeditview" }
    ],
    "caption": "图表",
    "imgPath": "",
    "iconCls": "home",
    "viewType": "DEMOBEDITVIEW",
    "fileDir": "@views/r8mob/chart-data-mob-edit-view"
  },
  "ChartDataMobTabExpView":{
    "name": "ChartDataMobTabExpView",
    "codeName": "ChartDataMobTabExpView",
    "appEntityCodeName":"ChartData",
    "openMode": "INDEXVIEWTAB",
    "redirectView": false,
    "deResPaths": [
      [{"pathName":"chartdatas","parameterName":"chartdata"}]
    ],
    "parameters": [
        { "pathName": "views", "parameterName": "chartdatamobtabexpview" }
    ],
    "caption": "图表实体移动端分页导航视图",
    "viewType": "DEMOBTABEXPVIEW",
    "fileDir": "@views/r8mob/chart-data-mob-tab-exp-view"
  },
  "QuickMenuAppPortalView":{
    "name": "QuickMenuAppPortalView",
    "codeName": "QuickMenuAppPortalView",
    "appEntityCodeName":"",
    "openMode": "INDEXVIEWTAB",
    "redirectView": false,
    "deResPaths": [
    ],
    "parameters": [
        { "pathName": "views", "parameterName": "quickmenuappportalview" }
    ],
    "caption": "快捷菜单",
    "viewType": "APPPORTALVIEW",
    "fileDir": "@views/r8mob/quick-menu-app-portal-view"
  },
  "AppPortalView":{
    "name": "AppPortalView",
    "codeName": "AppPortalView",
    "appEntityCodeName":"",
    "openMode": "INDEXVIEWTAB",
    "redirectView": false,
    "deResPaths": [
    ],
    "parameters": [
        { "pathName": "views", "parameterName": "appportalview" }
    ],
    "caption": "移动端应用看板视图",
    "viewType": "APPPORTALVIEW",
    "fileDir": "@views/r8mob/app-portal-view"
  },
  "ChartDataMobTreeView":{
    "name": "ChartDataMobTreeView",
    "codeName": "ChartDataMobTreeView",
    "appEntityCodeName":"ChartData",
    "openMode": "INDEXVIEWTAB",
    "redirectView": false,
    "deResPaths": [
      [{"pathName":"chartdatas","parameterName":"chartdata"}]
    ],
    "parameters": [
        { "pathName": "views", "parameterName": "chartdatamobtreeview" }
    ],
    "caption": "图表",
    "viewType": "DEMOBTREEVIEW",
    "fileDir": "@views/r8mob/chart-data-mob-tree-view"
  },
  "ProvinceMobMPickupView":{
    "name": "ProvinceMobMPickupView",
    "codeName": "ProvinceMobMPickupView",
    "appEntityCodeName":"Province",
    "openMode": "INDEXVIEWTAB",
    "redirectView": false,
    "deResPaths": [
      [{"pathName":"provinces","parameterName":"province"}]
    ],
    "parameters": [
        { "pathName": "views", "parameterName": "provincemobmpickupview" }
    ],
    "caption": "省份",
    "viewType": "DEMOBMPICKUPVIEW",
    "fileDir": "@views/r8mob/province-mob-m-pickup-view"
  },
  "ProvinceMobEditView":{
    "name": "ProvinceMobEditView",
    "codeName": "ProvinceMobEditView",
    "appEntityCodeName":"Province",
    "openMode": "INDEXVIEWTAB",
    "redirectView": false,
    "deResPaths": [
      [{"pathName":"provinces","parameterName":"province"}]
    ],
    "parameters": [
        { "pathName": "views", "parameterName": "provincemobeditview" }
    ],
    "caption": "省份",
    "viewType": "DEMOBEDITVIEW",
    "fileDir": "@views/r8mob/province-mob-edit-view"
  },
  "ProvinceMobMEditView9":{
    "name": "ProvinceMobMEditView9",
    "codeName": "ProvinceMobMEditView9",
    "appEntityCodeName":"Province",
    "openMode": "INDEXVIEWTAB",
    "redirectView": false,
    "deResPaths": [
      [{"pathName":"provinces","parameterName":"province"}]
    ],
    "parameters": [
        { "pathName": "views", "parameterName": "provincemobmeditview9" }
    ],
    "caption": "省份",
    "viewType": "DEMOBMEDITVIEW9",
    "fileDir": "@views/r8mob/province-mob-m-edit-view9"
  },
  "ChartDataMobPanelView":{
    "name": "ChartDataMobPanelView",
    "codeName": "ChartDataMobPanelView",
    "appEntityCodeName":"ChartData",
    "openMode": "INDEXVIEWTAB",
    "redirectView": false,
    "deResPaths": [
      [{"pathName":"chartdatas","parameterName":"chartdata"}]
    ],
    "parameters": [
        { "pathName": "views", "parameterName": "chartdatamobpanelview" }
    ],
    "caption": "图表",
    "viewType": "DEMOBPANELVIEW",
    "fileDir": "@views/r8mob/chart-data-mob-panel-view"
  },
  "ProvinceMobHtmlView":{
    "name": "ProvinceMobHtmlView",
    "codeName": "ProvinceMobHtmlView",
    "appEntityCodeName":"Province",
    "openMode": "INDEXVIEWTAB",
    "redirectView": false,
    "deResPaths": [
      [{"pathName":"provinces","parameterName":"province"}]
    ],
    "parameters": [
        { "pathName": "views", "parameterName": "provincemobhtmlview" }
    ],
    "caption": "省份",
    "viewType": "DEMOBHTMLVIEW",
    "fileDir": "@views/r8mob/province-mob-html-view"
  },
  "ProvinceMobCalendarView":{
    "name": "ProvinceMobCalendarView",
    "codeName": "ProvinceMobCalendarView",
    "appEntityCodeName":"Province",
    "openMode": "INDEXVIEWTAB",
    "redirectView": false,
    "deResPaths": [
      [{"pathName":"provinces","parameterName":"province"}]
    ],
    "parameters": [
        { "pathName": "views", "parameterName": "provincemobcalendarview" }
    ],
    "caption": "省份",
    "viewType": "DEMOBCALENDARVIEW",
    "fileDir": "@views/r8mob/province-mob-calendar-view"
  },
  "ProvinceMobPickupForTreeView":{
    "name": "ProvinceMobPickupForTreeView",
    "codeName": "ProvinceMobPickupForTreeView",
    "appEntityCodeName":"Province",
    "openMode": "INDEXVIEWTAB",
    "redirectView": false,
    "deResPaths": [
      [{"pathName":"provinces","parameterName":"province"}]
    ],
    "parameters": [
        { "pathName": "views", "parameterName": "provincemobpickupfortreeview" }
    ],
    "caption": "省份",
    "viewType": "DEMOBPICKUPVIEW",
    "fileDir": "@views/r8mob/province-mob-pickup-for-tree-view"
  },
  "ProvinceMobPickupView":{
    "name": "ProvinceMobPickupView",
    "codeName": "ProvinceMobPickupView",
    "appEntityCodeName":"Province",
    "openMode": "DRAWER_LEFT",
    "redirectView": false,
    "deResPaths": [
      [{"pathName":"provinces","parameterName":"province"}]
    ],
    "parameters": [
        { "pathName": "views", "parameterName": "provincemobpickupview" }
    ],
    "caption": "省份",
    "viewType": "DEMOBPICKUPVIEW",
    "fileDir": "@views/r8mob/province-mob-pickup-view"
  },
  "ProvinceMobMDView":{
    "name": "ProvinceMobMDView",
    "codeName": "ProvinceMobMDView",
    "appEntityCodeName":"Province",
    "openMode": "INDEXVIEWTAB",
    "redirectView": false,
    "deResPaths": [
      [{"pathName":"provinces","parameterName":"province"}]
    ],
    "parameters": [
        { "pathName": "views", "parameterName": "provincemobmdview" }
    ],
    "caption": "省份",
    "viewType": "DEMOBMDVIEW",
    "fileDir": "@views/r8mob/province-mob-md-view"
  },
  "ChartDataTestLayoutPanelMDView":{
    "name": "ChartDataTestLayoutPanelMDView",
    "codeName": "ChartDataTestLayoutPanelMDView",
    "appEntityCodeName":"ChartData",
    "openMode": "INDEXVIEWTAB",
    "redirectView": false,
    "deResPaths": [
      [{"pathName":"chartdatas","parameterName":"chartdata"}]
    ],
    "parameters": [
        { "pathName": "views", "parameterName": "chartdatatestlayoutpanelmdview" }
    ],
    "caption": "图表",
    "viewType": "DEMOBMDVIEW",
    "fileDir": "@views/r8mob/chart-data-test-layout-panel-md-view"
  },
  "MapDataMobMapView":{
    "name": "MapDataMobMapView",
    "codeName": "MapDataMobMapView",
    "appEntityCodeName":"MapData",
    "openMode": "INDEXVIEWTAB",
    "redirectView": false,
    "deResPaths": [
      [{"pathName":"mapdatas","parameterName":"mapdata"}]
    ],
    "parameters": [
        { "pathName": "views", "parameterName": "mapdatamobmapview" }
    ],
    "caption": "地图示例数据",
    "viewType": "DEMOBMAPVIEW",
    "fileDir": "@views/r8mob/map-data-mob-map-view"
  },
  "ChartDataMobDashboardView":{
    "name": "ChartDataMobDashboardView",
    "codeName": "ChartDataMobDashboardView",
    "appEntityCodeName":"ChartData",
    "openMode": "INDEXVIEWTAB",
    "redirectView": false,
    "deResPaths": [
      [{"pathName":"chartdatas","parameterName":"chartdata"}]
    ],
    "parameters": [
        { "pathName": "views", "parameterName": "chartdatamobdashboardview" }
    ],
    "caption": "图表",
    "viewType": "DEMOBPORTALVIEW",
    "fileDir": "@views/r8mob/chart-data-mob-dashboard-view"
  },
  "ChartDataMobChartView":{
    "name": "ChartDataMobChartView",
    "codeName": "ChartDataMobChartView",
    "appEntityCodeName":"ChartData",
    "openMode": "INDEXVIEWTAB",
    "redirectView": false,
    "deResPaths": [
      [{"pathName":"chartdatas","parameterName":"chartdata"}]
    ],
    "parameters": [
        { "pathName": "views", "parameterName": "chartdatamobchartview" }
    ],
    "caption": "图表",
    "viewType": "DEMOBCHARTVIEW",
    "fileDir": "@views/r8mob/chart-data-mob-chart-view"
  }
}