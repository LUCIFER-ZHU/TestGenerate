export const viewState = {
  gridRowActiveMode: 2,
  rowEditState: false,
  enableQuickSearch: true,
  expandSearchForm: true,
  viewCodeName: 'CustomerAdvSearchGridView',
  viewName: 'CustomerAdvSearchGridView',
  viewCaption: '客户表格视图',
  subCaption: '',
  viewSysCss: '',
  showCaptionBar: false,
  viewType: 'DEGRIDVIEW',
  viewStyle: 'DEFAULT',
  xDataControlName:'grid',
  height: '0',
  width: '0',
  appEntityCodeName: 'Customer',
  appDeKeyFieldName: 'customerid',
  appDeMajorFieldName: 'customername',
  isLoadDefault: true,
  appViewNavContexts:{  },
  appViewNavParams:{  },
  enableQuickGroup: false,
  viewLogics: {
    newData:{
      newDataViewName: 'CustomerEditView',
    },
    openData:{
      openDataViewName: 'CustomerEditView',
    },
  },
  grid:{
    action:{
      loadAction: '',
      removeAction: 'Remove',
      updateAction: '',
      loadDraftAction: '',
      createAction: '',
      fetchAction:'FetchDefault'
    }  
  },
  searchform:{
    action:{
      searchAction: 'FilterSearch',
      loadDraftAction: 'FilterGetDraft',
      loadAction: 'FilterGet',
    } 
  },
};