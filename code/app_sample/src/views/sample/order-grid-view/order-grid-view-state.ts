export const viewState = {
  gridRowActiveMode: 1,
  rowEditState: true,
  enableQuickSearch: true,
  expandSearchForm: true,
  viewCodeName: 'OrderGridView',
  viewName: 'OrderGridView',
  viewCaption: '订单',
  subCaption: '',
  viewSysCss: '',
  showCaptionBar: true,
  viewType: 'DEGRIDVIEW',
  viewStyle: 'DEFAULT',
  xDataControlName:'grid',
  height: '0',
  width: '0',
  appEntityCodeName: 'Order',
  appDeKeyFieldName: 'orderid',
  appDeMajorFieldName: 'ordername',
  isLoadDefault: true,
  appViewNavContexts:{  },
  appViewNavParams:{  },
  enableQuickGroup: true,
  quickGroupPSCodeList: {
    codeName: 'OpportunityState',
    codeListTag: 'Sample__OpportunityState',
    codeListType: 'STATIC',
    codeItems: [
    {codeName: 'Item_0', color: 'rgba(251, 4, 4, 1)', data: '', text: '创建', value: '0', iconClass: '', imgPath: ''},
    {codeName: 'Item_1', color: 'rgba(255, 174, 0, 1)', data: '', text: '验证', value: '1', iconClass: '', imgPath: ''},
    {codeName: 'Item_2', color: 'rgba(242, 217, 73, 1)', data: '', text: '建议', value: '2', iconClass: '', imgPath: ''},
    {codeName: 'Item_9', color: 'rgba(85, 255, 0, 1)', data: '', text: '赢得', value: '9', iconClass: '', imgPath: ''},
    ]
  },
  viewLogics: {
    newData:{
      newDataViewName: 'OrderEditView',
    },
    openData:{
      openDataViewName: 'OrderEditView',
    },
  },
  toolbar: [
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
    { id:'toolbar_tbitem11',name:'tbitem11',caption:'打印',groupExtractMode:'2',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:true,tooltip:'打印',disabled: false, visible: true, imgPath: '',iconClass: 'fa fa-print',xDataControlName:'grid',uIAction:{codeName:'Print',fullCodeName:'Print',uIActionMode:'SYS',actionTarget:'MULTIKEY',uIActionTag:'Print',dataAccessAction:'',uIActionType:'DEUIACTION'} },
    { id:'',name:'tbitem12',caption:'',groupExtractMode:'',itemType:'SEPERATOR',noPrivDisplayMode:'',showIcon:false,showCaption:false,tooltip:'',disabled: false, visible: true, imgPath: '',iconClass: '',xDataControlName:'', },
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