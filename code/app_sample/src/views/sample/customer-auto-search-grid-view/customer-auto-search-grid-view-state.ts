export const viewState = {
  gridRowActiveMode: 2,
  rowEditState: false,
  enableQuickSearch: true,
  expandSearchForm: false,
  viewCodeName: 'CustomerAutoSearchGridView',
  viewName: 'CustomerAutoSearchGridView',
  viewCaption: '客户表格视图',
  subCaption: '',
  viewSysCss: '',
  showCaptionBar: false,
  viewType: 'DEGRIDVIEW',
  viewStyle: 'DEFAULT',
  xDataControlName:'grid',
  height: '0',
  width: '0',
  appEntityName: 'Customer',
  keyPSDEField: 'customer',
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
  toolbar: [
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
  },
  searchform:{
    action:{
      searchAction: 'FilterSearch',
      loadAction: 'FilterGet',
      loadDraftAction: 'FilterGetDraft',
    } 
  }

};