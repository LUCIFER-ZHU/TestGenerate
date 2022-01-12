import { IParam } from "@core";

export const AppViewConfig:IParam = {
  "ProvinceMobPickupMDView":{
    "name": "ProvinceMobPickupMDView",
    "codeName": "ProvinceMobPickupMDView",
    "appEntityName":"Province",
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
  "ProvinceUsr2MobEditView":{
    "name": "ProvinceUsr2MobEditView",
    "codeName": "ProvinceUsr2MobEditView",
    "appEntityName":"Province",
    "openMode": "INDEXVIEWTAB",
    "redirectView": false,
    "deResPaths": [
      [{"pathName":"provinces","parameterName":"province"}]
    ],
    "parameters": [
        { "pathName": "views", "parameterName": "provinceusr2mobeditview" }
    ],
    "caption": "省份实体移动端编辑视图2",
    "viewType": "DEMOBEDITVIEW",
    "fileDir": "@views/r8mob/province-usr2-mob-edit-view"
  },
  "ProvinceMobPickupTreeView":{
    "name": "ProvinceMobPickupTreeView",
    "codeName": "ProvinceMobPickupTreeView",
    "appEntityName":"Province",
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
    "appEntityName":"",
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
    "appEntityName":"Province",
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
    "appEntityName":"ChartData",
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
  "ChartDataMobPickupView":{
    "name": "ChartDataMobPickupView",
    "codeName": "ChartDataMobPickupView",
    "appEntityName":"ChartData",
    "openMode": "INDEXVIEWTAB",
    "redirectView": false,
    "deResPaths": [
      [{"pathName":"chartdatas","parameterName":"chartdata"}]
    ],
    "parameters": [
        { "pathName": "views", "parameterName": "chartdatamobpickupview" }
    ],
    "caption": "图表",
    "viewType": "DEMOBPICKUPVIEW",
    "fileDir": "@views/r8mob/chart-data-mob-pickup-view"
  },
  "ChartDataMobTabExpView":{
    "name": "ChartDataMobTabExpView",
    "codeName": "ChartDataMobTabExpView",
    "appEntityName":"ChartData",
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
    "appEntityName":"",
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
    "appEntityName":"",
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
    "appEntityName":"ChartData",
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
  "ChartDataMobPickupTreeView":{
    "name": "ChartDataMobPickupTreeView",
    "codeName": "ChartDataMobPickupTreeView",
    "appEntityName":"ChartData",
    "openMode": "INDEXVIEWTAB",
    "redirectView": false,
    "deResPaths": [
      [{"pathName":"chartdatas","parameterName":"chartdata"}]
    ],
    "parameters": [
        { "pathName": "views", "parameterName": "chartdatamobpickuptreeview" }
    ],
    "caption": "图表",
    "viewType": "DEMOBPICKUPTREEVIEW",
    "fileDir": "@views/r8mob/chart-data-mob-pickup-tree-view"
  },
  "ProvinceMobMPickupView":{
    "name": "ProvinceMobMPickupView",
    "codeName": "ProvinceMobMPickupView",
    "appEntityName":"Province",
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
    "appEntityName":"Province",
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
    "appEntityName":"Province",
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
    "appEntityName":"ChartData",
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
    "appEntityName":"Province",
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
    "appEntityName":"Province",
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
    "appEntityName":"Province",
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
    "appEntityName":"Province",
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
    "appEntityName":"Province",
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
    "appEntityName":"ChartData",
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
    "appEntityName":"MapData",
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
    "appEntityName":"ChartData",
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
  "ChartDataMobMDView":{
    "name": "ChartDataMobMDView",
    "codeName": "ChartDataMobMDView",
    "appEntityName":"ChartData",
    "openMode": "INDEXVIEWTAB",
    "redirectView": false,
    "deResPaths": [
      [{"pathName":"chartdatas","parameterName":"chartdata"}]
    ],
    "parameters": [
        { "pathName": "views", "parameterName": "chartdatamobmdview" }
    ],
    "caption": "图表",
    "viewType": "DEMOBMDVIEW",
    "fileDir": "@views/r8mob/chart-data-mob-md-view"
  },
  "ChartDataMobChartView":{
    "name": "ChartDataMobChartView",
    "codeName": "ChartDataMobChartView",
    "appEntityName":"ChartData",
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
  },
  "ChartDataUsr2MobPickupView":{
    "name": "ChartDataUsr2MobPickupView",
    "codeName": "ChartDataUsr2MobPickupView",
    "appEntityName":"ChartData",
    "openMode": "INDEXVIEWTAB",
    "redirectView": false,
    "deResPaths": [
      [{"pathName":"chartdatas","parameterName":"chartdata"}]
    ],
    "parameters": [
        { "pathName": "views", "parameterName": "chartdatausr2mobpickupview" }
    ],
    "caption": "图表",
    "viewType": "DEMOBPICKUPVIEW",
    "fileDir": "@views/r8mob/chart-data-usr2-mob-pickup-view"
  }
}