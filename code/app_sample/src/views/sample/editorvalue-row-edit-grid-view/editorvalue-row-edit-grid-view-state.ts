export const viewState = {
  gridRowActiveMode: 0,
  rowEditState: true,
  enableQuickSearch: true,
  expandSearchForm: false,
  viewCodeName: 'EDITORVALUERowEditGridView',
  viewName: 'EDITORVALUERowEditGridView',
  viewCaption: '编辑器值',
  subCaption: '',
  viewSysCss: '',
  showCaptionBar: true,
  viewType: 'DEGRIDVIEW',
  viewStyle: 'DEFAULT',
  xDataControlName:'grid',
  height: '0',
  width: '0',
  appEntityCodeName: 'EditorValue',
  keyPSDEField: 'editorvalue',
  isLoadDefault: true,
  appViewNavContexts:{  },
  appViewNavParams:{  },
  enableQuickGroup: false,
  viewLogics: {
    newData:{
      newDataViewName: 'EDITORVALUEEditView',
    },
    openData:{
      openDataViewName: 'EDITORVALUEEditView',
    },
  },
  toolbar: [
    { id:'toolbar_deuiaction1',name:'deuiaction1',caption:'行编辑',groupExtractMode:'2',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:true,tooltip:'行编辑',disabled: false, visible: true, imgPath: '',iconClass: 'fa fa-table',xDataControlName:'grid',uIAction:{codeName:'ToggleRowEdit',fullCodeName:'ToggleRowEdit',uIActionMode:'SYS',uIActionTag:'ToggleRowEdit',uIActionType:'DEUIACTION'} },
    { id:'toolbar_deuiaction2',name:'deuiaction2',caption:'新建行',groupExtractMode:'2',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:true,tooltip:'新建行',disabled: false, visible: true, imgPath: '',iconClass: 'fa fa-plus',xDataControlName:'grid',uIAction:{codeName:'NewRow',fullCodeName:'NewRow',uIActionMode:'SYS',uIActionTag:'NewRow',uIActionType:'DEUIACTION'} },
    { id:'toolbar_deuiaction3',name:'deuiaction3',caption:'保存行',groupExtractMode:'2',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:true,tooltip:'保存行',disabled: false, visible: true, imgPath: '',iconClass: 'fa fa-save',xDataControlName:'grid',uIAction:{codeName:'SaveRow',fullCodeName:'SaveRow',uIActionMode:'SYS',uIActionTag:'SaveRow',uIActionType:'DEUIACTION'} },
    { id:'toolbar_deuiaction4',name:'deuiaction4',caption:'删除行',groupExtractMode:'2',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:true,tooltip:'删除行',disabled: false, visible: true, imgPath: '',iconClass: 'fa fa-remove',xDataControlName:'grid',uIAction:{codeName:'Remove',fullCodeName:'Remove',uIActionMode:'SYS',uIActionTag:'Remove',uIActionType:'DEUIACTION'} },
  ],
  grid:{
    action:{
      loadAction: 'Get',
      removeAction: 'Remove',
      updateAction: 'Update',
      loadDraftAction: 'GetDraft',
      createAction: 'Create',
      fetchAction:'FetchDefault'
    }  
  },
  searchform:{
    action:{
      searchAction: 'FilterSearch',
      loadDraftAction: 'FilterGetDraft',
      loadAction: 'FilterGet',
    } 
  }

};