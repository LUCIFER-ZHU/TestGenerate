export const viewState = {
  gridRowActiveMode: 2,
  rowEditState: false,
  enableQuickSearch: true,
  expandSearchForm: false,
  viewCodeName: 'DeptDataGridView',
  viewName: 'DeptDataGridView',
  viewCaption: '部门数据',
  subCaption: '',
  viewSysCss: '',
  showCaptionBar: true,
  viewType: 'DEGRIDVIEW',
  viewStyle: 'DEFAULT',
  xDataControlName:'grid',
  height: '0',
  width: '0',
  appEntityCodeName: 'DeptData',
  appDeKeyFieldName: 'deptdataid',
  appDeMajorFieldName: 'deptdataname',
  isLoadDefault: true,
  appViewNavContexts:{  },
  appViewNavParams:{  },
  enableQuickGroup: false,
  viewLogics: {
    newData:{
      newDataViewName: 'DeptDataEditView',
    },
    openData:{
      openDataViewName: 'DeptDataEditView',
    },
  },
  toolbar: [
    { id:'toolbar_tbitem3',name:'tbitem3',caption:'新建',groupExtractMode:'2',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:true,tooltip:'新建',disabled: false, visible: true, imgPath: '',iconClass: 'fa fa-file-text-o',xDataControlName:'grid',uIAction:{codeName:'New',fullCodeName:'New',uIActionMode:'SYS',actionTarget:'',uIActionTag:'New',dataAccessAction:'',uIActionType:'DEUIACTION'} },
    { id:'toolbar_tbitem4',name:'tbitem4',caption:'编辑',groupExtractMode:'2',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:true,tooltip:'编辑',disabled: false, visible: true, imgPath: '',iconClass: 'fa fa-edit',xDataControlName:'grid',uIAction:{codeName:'Edit',fullCodeName:'Edit',uIActionMode:'SYS',actionTarget:'SINGLEKEY',uIActionTag:'Edit',dataAccessAction:'',uIActionType:'DEUIACTION'} },
    { id:'toolbar_tbitem6',name:'tbitem6',caption:'拷贝',groupExtractMode:'2',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:true,tooltip:'拷贝',disabled: false, visible: true, imgPath: '',iconClass: 'fa fa-copy',xDataControlName:'grid',uIAction:{codeName:'Copy',fullCodeName:'Copy',uIActionMode:'SYS',actionTarget:'SINGLEKEY',uIActionTag:'Copy',dataAccessAction:'',uIActionType:'DEUIACTION'} },
    { id:'',name:'tbitem7',caption:'',groupExtractMode:'',itemType:'SEPERATOR',noPrivDisplayMode:'',showIcon:false,showCaption:false,tooltip:'',disabled: false, visible: true, imgPath: '',iconClass: '',xDataControlName:'', },
    { id:'toolbar_tbitem8',name:'tbitem8',caption:'删除',groupExtractMode:'2',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:true,tooltip:'删除',disabled: false, visible: true, imgPath: '',iconClass: 'fa fa-remove',xDataControlName:'grid',uIAction:{codeName:'Remove',fullCodeName:'Remove',uIActionMode:'SYS',actionTarget:'MULTIKEY',uIActionTag:'Remove',dataAccessAction:'',uIActionType:'DEUIACTION'} },
    { id:'',name:'tbitem9',caption:'',groupExtractMode:'',itemType:'SEPERATOR',noPrivDisplayMode:'',showIcon:false,showCaption:false,tooltip:'',disabled: false, visible: true, imgPath: '',iconClass: '',xDataControlName:'', },
    { id:'toolbar_tbitem13',name:'tbitem13',caption:'导出',groupExtractMode:'2',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:true,tooltip:'导出',disabled: false, visible: true, imgPath: '',iconClass: 'fa fa-file-excel-o',xDataControlName:'grid',uIAction:{codeName:'ExportExcel',fullCodeName:'ExportExcel',uIActionMode:'SYS',actionTarget:'',uIActionTag:'ExportExcel',dataAccessAction:'',uIActionType:'DEUIACTION'} },
    { id:'',name:'tbitem10',caption:'',groupExtractMode:'',itemType:'SEPERATOR',noPrivDisplayMode:'',showIcon:false,showCaption:false,tooltip:'',disabled: false, visible: true, imgPath: '',iconClass: '',xDataControlName:'', },
    { id:'',name:'tbitem16',caption:'其它',groupExtractMode:'',itemType:'ITEMS',noPrivDisplayMode:'',showIcon:true,showCaption:true,tooltip:'其它',disabled: false, visible: true, imgPath: '',iconClass: '',xDataControlName:'', },
    { id:'',name:'tbitem17',caption:'',groupExtractMode:'',itemType:'SEPERATOR',noPrivDisplayMode:'',showIcon:false,showCaption:false,tooltip:'',disabled: false, visible: true, imgPath: '',iconClass: '',xDataControlName:'', },
    { id:'toolbar_tbitem19',name:'tbitem19',caption:'过滤',groupExtractMode:'2',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:true,tooltip:'过滤',disabled: false, visible: true, imgPath: '',iconClass: 'fa fa-filter',xDataControlName:'grid',uIAction:{codeName:'ToggleFilter',fullCodeName:'ToggleFilter',uIActionMode:'SYS',actionTarget:'',uIActionTag:'ToggleFilter',dataAccessAction:'',uIActionType:'DEUIACTION'} },
    { id:'toolbar_tbitem18',name:'tbitem18',caption:'帮助',groupExtractMode:'2',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:true,tooltip:'帮助',disabled: false, visible: true, imgPath: '',iconClass: 'fa fa-question',xDataControlName:'grid',uIAction:{codeName:'Help',fullCodeName:'Help',uIActionMode:'SYS',actionTarget:'',uIActionTag:'Help',dataAccessAction:'',uIActionType:'DEUIACTION'} },
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
      loadDraftAction: 'FilterGetDraft',
      loadAction: 'FilterGet',
    } 
  },
};