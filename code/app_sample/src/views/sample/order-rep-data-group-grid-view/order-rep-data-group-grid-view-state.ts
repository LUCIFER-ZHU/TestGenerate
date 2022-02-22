export const viewState = {
  gridRowActiveMode: 2,
  rowEditState: false,
  enableQuickSearch: true,
  expandSearchForm: false,
  viewCodeName: 'OrderRepDataGroupGridView',
  viewName: 'OrderRepDataGroupGridView',
  viewCaption: '订单报表数据',
  subCaption: '',
  viewSysCss: '',
  showCaptionBar: true,
  viewType: 'DEGRIDVIEW',
  viewStyle: 'DEFAULT',
  xDataControlName:'grid',
  height: '0',
  width: '0',
  appEntityCodeName: 'OrderRepData',
  appDeKeyFieldName: 'orderrepdataid',
  appDeMajorFieldName: 'orderrepdataname',
  isLoadDefault: true,
  appViewNavContexts:{  },
  appViewNavParams:{  },
  enableQuickGroup: false,
  viewLogics: {
    newData:{
      newDataViewName: 'OrderRepDataEditView',
    },
    openData:{
      openDataViewName: 'OrderRepDataEditView',
    },
  },
  grid:{
    action:{
      loadAction: '',
      removeAction: 'Remove',
      updateAction: '',
      loadDraftAction: '',
      createAction: '',
      fetchAction:'FetchGroup'
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