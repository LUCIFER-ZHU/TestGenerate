export const ViewConfig = {
  gridRowActiveMode: 2,
  rowEditState: false,
  viewCodeName: 'ExampleImpExpGridView',
  viewName: 'ExampleImpExpGridView',
  viewCaption: '数据导入导出',
  height: '0',
  width: '0',
  appEntityName:'Example',
  viewSysCss: '',
  subCaption: '',
  viewType: 'DEGRIDVIEW',
  viewStyle: 'DEFAULT',
  showCaptionBar: 'DEFAULT',
  xDataControlName:'grid',
  openDataViewName:'ExampleEditorEditView',
  appViewNavContexts:{  },
  appViewNavParams:{  },
  toolbar: [
    { id:'toolbar_deuiaction1',name:'deuiaction1',caption:'导入',groupExtractMode:'2',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:true,tooltip:'导入',disabled: false, visible: true, imgPath: '',iconClass: 'fa fa-upload',xDataControlName:'grid',uIAction:{codeName:'Import',fullCodeName:'Import',uIActionMode:'SYS',uIActionTag:'Import',uIActionType:'DEUIACTION'} },
    { id:'toolbar_deuiaction2',name:'deuiaction2',caption:'导出',groupExtractMode:'2',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:true,tooltip:'导出',disabled: false, visible: true, imgPath: '',iconClass: 'fa fa-file-excel-o',xDataControlName:'grid',uIAction:{codeName:'ExportExcel',fullCodeName:'ExportExcel',uIActionMode:'SYS',uIActionTag:'ExportExcel',uIActionType:'DEUIACTION'} },
  ],
  controlsAction:{
    grid:{
      loadAction: '',
      removeAction: 'Remove',
      updateAction: '',
      loadDraftAction: '',
      createAction: '',
      fetchAction:'FetchDefault'
    },
  }};