export const viewState = {
  gridRowActiveMode: 2,
  rowEditState: false,
  enableQuickSearch: true,
  expandSearchForm: false,
  viewCodeName: 'ExampleImpExpGridView',
  viewName: 'ExampleImpExpGridView',
  viewCaption: '数据导入导出',
  subCaption: '',
  viewSysCss: '',
  showCaptionBar: true,
  viewType: 'DEGRIDVIEW',
  viewStyle: 'DEFAULT',
  xDataControlName:'grid',
  height: '0',
  width: '0',
  appEntityName: 'Example',
  keyPSDEField: 'example',
  isLoadDefault: true,
  appViewNavContexts:{  },
  appViewNavParams:{  },
  enableQuickGroup: false,
  viewLogics: {
    newData:{
      newDataViewName: 'ExampleEditView',
    },
    openData:{
      openDataViewName: 'ExampleEditView',
    },
  },
  toolbar: [
    { id:'toolbar_deuiaction1',name:'deuiaction1',caption:'导入',groupExtractMode:'2',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:true,tooltip:'导入',disabled: false, visible: true, imgPath: '',iconClass: 'fa fa-upload',xDataControlName:'grid',uIAction:{codeName:'Import',fullCodeName:'Import',uIActionMode:'SYS',uIActionTag:'Import',uIActionType:'DEUIACTION'} },
    { id:'toolbar_deuiaction2',name:'deuiaction2',caption:'导出',groupExtractMode:'2',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:true,tooltip:'导出',disabled: false, visible: true, imgPath: '',iconClass: 'fa fa-file-excel-o',xDataControlName:'grid',uIAction:{codeName:'ExportExcel',fullCodeName:'ExportExcel',uIActionMode:'SYS',uIActionTag:'ExportExcel',uIActionType:'DEUIACTION'} },
  ],
  grid:{
    action:{
      loadAction: '',
      removeAction: 'Remove',
      updateAction: '',
      loadDraftAction: '',
      createAction: '',
      fetchAction:'FetchDefault'
    }  
  }
};