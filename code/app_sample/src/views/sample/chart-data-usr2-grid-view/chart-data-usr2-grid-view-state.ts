export const viewState = {
  gridRowActiveMode: 2,
  rowEditState: false,
  enableQuickSearch: true,
  expandSearchForm: false,
  viewCodeName: 'ChartDataUsr2GridView',
  viewName: 'ChartDataUsr2GridView',
  viewCaption: '图表实体表格视图（功能确认）',
  subCaption: '',
  viewSysCss: 'gird-red-border',
  showCaptionBar: true,
  viewType: 'DEGRIDVIEW',
  viewStyle: 'DEFAULT',
  xDataControlName:'grid',
  height: '500',
  width: '1000',
  appEntityCodeName: 'ChartData',
  appDeKeyFieldName: 'chartdataid',
  appDeMajorFieldName: 'chartdataname',
  isLoadDefault: true,
  appViewNavContexts:{ 'testcontextdyna':'%app%','testcontext':'test1' },
  appViewNavParams:{ 'testviewparamdyna':'%app%','testviewparam':'test3' },
  enableQuickGroup: true,
  quickGroupPSCodeList: {
    codeName: 'DataType',
    codeListTag: 'Sample__DataType',
    codeListType: 'STATIC',
    codeItems: [
    {codeName: 'Home', color: 'rgba(162, 242, 42, 1)', data: '{ "n_datatype_eq": "home" }', text: '家居用品', value: 'home', iconClass: '', imgPath: ''},
    {codeName: 'Necessary', color: 'rgba(244, 129, 23, 1)', data: '{ "n_datatype_eq": "necessary" }', text: '日用品', value: 'necessary', iconClass: '', imgPath: ''},
    {codeName: 'Toy', color: 'rgba(37, 190, 237, 1)', data: '{ "n_datatype_eq": "toy" }', text: '玩具', value: 'toy', iconClass: '', imgPath: ''},
    ]
  },
  viewLogics: {
    newData:{
      newDataViewName: 'ChartDataEditView',
    },
    openData:{
      openDataViewName: 'ChartDataEditView',
    },
  },
  toolbar: [
    { id:'toolbar_tbitem1_openbaidu',name:'tbitem1_openbaidu',caption:'打开百度',groupExtractMode:'2',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:true,tooltip:'打开百度',disabled: false, visible: true, imgPath: '',iconClass: '',xDataControlName:'grid',uIAction:{codeName:'openbaidu',fullCodeName:'ChartData_openbaidu',uIActionMode:'FRONT',actionTarget:'NONE',uIActionTag:'openbaidu',dataAccessAction:'',uIActionType:'DEUIACTION'} },
    { id:'toolbar_tbitem1_openview',name:'tbitem1_openview',caption:'打开视图',groupExtractMode:'2',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:true,tooltip:'打开视图',disabled: false, visible: true, imgPath: '',iconClass: '',xDataControlName:'grid',uIAction:{codeName:'openview',fullCodeName:'ChartData_openview',uIActionMode:'FRONT',actionTarget:'SINGLEKEY',uIActionTag:'openview',dataAccessAction:'',uIActionType:'DEUIACTION'} },
    { id:'toolbar_tbitem1_htxwtest',name:'tbitem1_htxwtest',caption:'后台行为',groupExtractMode:'2',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:true,tooltip:'后台行为',disabled: false, visible: true, imgPath: '',iconClass: '',xDataControlName:'grid',uIAction:{codeName:'htxwtest',fullCodeName:'ChartData_htxwtest',uIActionMode:'BACKEND',actionTarget:'SINGLEDATA',uIActionTag:'htxwtest',dataAccessAction:'',uIActionType:'DEUIACTION'} },
    { id:'',name:'tbitem2',caption:'',groupExtractMode:'',itemType:'SEPERATOR',noPrivDisplayMode:'',showIcon:false,showCaption:false,tooltip:'',disabled: false, visible: true, imgPath: '',iconClass: '',xDataControlName:'', },
    { id:'toolbar_tbitem3',name:'tbitem3',caption:'新建',groupExtractMode:'2',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:true,tooltip:'新建',disabled: false, visible: true, imgPath: '',iconClass: 'fa fa-file-text-o',xDataControlName:'grid',uIAction:{codeName:'New',fullCodeName:'New',uIActionMode:'SYS',actionTarget:'',uIActionTag:'New',dataAccessAction:'',uIActionType:'DEUIACTION'} },
    { id:'toolbar_tbitem4',name:'tbitem4',caption:'编辑',groupExtractMode:'2',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:true,tooltip:'编辑',disabled: false, visible: true, imgPath: '',iconClass: 'fa fa-edit',xDataControlName:'grid',uIAction:{codeName:'Edit',fullCodeName:'Edit',uIActionMode:'SYS',actionTarget:'SINGLEKEY',uIActionTag:'Edit',dataAccessAction:'',uIActionType:'DEUIACTION'} },
    { id:'toolbar_tbitem6',name:'tbitem6',caption:'拷贝',groupExtractMode:'2',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:true,tooltip:'拷贝',disabled: false, visible: true, imgPath: '',iconClass: 'fa fa-copy',xDataControlName:'grid',uIAction:{codeName:'Copy',fullCodeName:'Copy',uIActionMode:'SYS',actionTarget:'SINGLEKEY',uIActionTag:'Copy',dataAccessAction:'',uIActionType:'DEUIACTION'} },
    { id:'',name:'tbitem7',caption:'',groupExtractMode:'',itemType:'SEPERATOR',noPrivDisplayMode:'',showIcon:false,showCaption:false,tooltip:'',disabled: false, visible: true, imgPath: '',iconClass: '',xDataControlName:'', },
    { id:'toolbar_tbitem24',name:'tbitem24',caption:'行编辑',groupExtractMode:'2',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:true,tooltip:'行编辑',disabled: false, visible: true, imgPath: '',iconClass: 'fa fa-table',xDataControlName:'grid',uIAction:{codeName:'ToggleRowEdit',fullCodeName:'ToggleRowEdit',uIActionMode:'SYS',actionTarget:'',uIActionTag:'ToggleRowEdit',dataAccessAction:'',uIActionType:'DEUIACTION'} },
    { id:'toolbar_tbitem25',name:'tbitem25',caption:'新建行',groupExtractMode:'2',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:false,tooltip:'新建行',disabled: false, visible: true, imgPath: '',iconClass: 'fa fa-plus',xDataControlName:'grid',uIAction:{codeName:'NewRow',fullCodeName:'NewRow',uIActionMode:'SYS',actionTarget:'',uIActionTag:'NewRow',dataAccessAction:'',uIActionType:'DEUIACTION'} },
    { id:'',name:'tbitem26',caption:'',groupExtractMode:'',itemType:'SEPERATOR',noPrivDisplayMode:'',showIcon:false,showCaption:false,tooltip:'',disabled: false, visible: true, imgPath: '',iconClass: '',xDataControlName:'', },
    { id:'toolbar_tbitem8',name:'tbitem8',caption:'删除',groupExtractMode:'2',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:true,tooltip:'删除',disabled: false, visible: true, imgPath: '',iconClass: 'fa fa-remove',xDataControlName:'grid',uIAction:{codeName:'Remove',fullCodeName:'Remove',uIActionMode:'SYS',actionTarget:'MULTIKEY',uIActionTag:'Remove',dataAccessAction:'',uIActionType:'DEUIACTION'} },
    { id:'',name:'tbitem9',caption:'',groupExtractMode:'',itemType:'SEPERATOR',noPrivDisplayMode:'',showIcon:false,showCaption:false,tooltip:'',disabled: false, visible: true, imgPath: '',iconClass: '',xDataControlName:'', },
    { id:'toolbar_tbitem13',name:'tbitem13',caption:'导出',groupExtractMode:'2',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:true,tooltip:'导出',disabled: false, visible: true, imgPath: '',iconClass: 'fa fa-file-excel-o',xDataControlName:'grid',uIAction:{codeName:'ExportExcel',fullCodeName:'ExportExcel',uIActionMode:'SYS',actionTarget:'',uIActionTag:'ExportExcel',dataAccessAction:'',uIActionType:'DEUIACTION'} },
    { id:'',name:'tbitem10',caption:'',groupExtractMode:'',itemType:'SEPERATOR',noPrivDisplayMode:'',showIcon:false,showCaption:false,tooltip:'',disabled: false, visible: true, imgPath: '',iconClass: '',xDataControlName:'', },
    { id:'',name:'tbitem16',caption:'其它',groupExtractMode:'',itemType:'ITEMS',noPrivDisplayMode:'',showIcon:true,showCaption:true,tooltip:'其它',disabled: false, visible: true, imgPath: '',iconClass: '',xDataControlName:'', },
    { id:'',name:'tbitem17',caption:'',groupExtractMode:'',itemType:'SEPERATOR',noPrivDisplayMode:'',showIcon:false,showCaption:false,tooltip:'',disabled: false, visible: true, imgPath: '',iconClass: '',xDataControlName:'', },
    { id:'toolbar_tbitem19',name:'tbitem19',caption:'过滤',groupExtractMode:'2',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:true,tooltip:'过滤',disabled: false, visible: true, imgPath: '',iconClass: 'fa fa-filter',xDataControlName:'grid',uIAction:{codeName:'ToggleFilter',fullCodeName:'ToggleFilter',uIActionMode:'SYS',actionTarget:'',uIActionTag:'ToggleFilter',dataAccessAction:'',uIActionType:'DEUIACTION'} },
    { id:'toolbar_tbitem18',name:'tbitem18',caption:'帮助',groupExtractMode:'2',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:true,tooltip:'帮助',disabled: false, visible: true, imgPath: '',iconClass: 'fa fa-question',xDataControlName:'grid',uIAction:{codeName:'Help',fullCodeName:'Help',uIActionMode:'SYS',actionTarget:'',uIActionTag:'Help',dataAccessAction:'',uIActionType:'DEUIACTION'} },
    { id:'toolbar_deuiaction1',name:'deuiaction1',caption:'保存行',groupExtractMode:'2',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:true,tooltip:'保存行',disabled: false, visible: true, imgPath: '',iconClass: 'fa fa-save',xDataControlName:'grid',uIAction:{codeName:'SaveRow',fullCodeName:'SaveRow',uIActionMode:'SYS',actionTarget:'',uIActionTag:'SaveRow',dataAccessAction:'',uIActionType:'DEUIACTION'} },
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
  },
};