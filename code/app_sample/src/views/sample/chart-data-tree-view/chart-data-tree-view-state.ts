export const viewState = {
  enableQuickSearch: true,
  expandSearchForm: false,
  viewCodeName: 'ChartDataTreeView',
  viewName: 'ChartDataTreeView',
  viewCaption: '树视图',
  subCaption: '',
  viewSysCss: '',
  showCaptionBar: true,
  viewType: 'DETREEVIEW',
  viewStyle: 'DEFAULT',
  xDataControlName:'tree',
  height: '0',
  width: '0',
  appEntityCodeName: 'ChartData',
  keyPSDEField: 'chartdata',
  isLoadDefault: true,
  appViewNavContexts:{  },
  appViewNavParams:{  },
  enableQuickGroup: false,
  viewLogics: {
  },
  toolbar: [
    { id:'toolbar_deuiaction1',name:'deuiaction1',caption:'新建',groupExtractMode:'2',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:true,tooltip:'新建',disabled: false, visible: true, imgPath: '',iconClass: 'fa fa-file-text-o',xDataControlName:'tree',uIAction:{codeName:'New',fullCodeName:'New',uIActionMode:'SYS',uIActionTag:'New',uIActionType:'DEUIACTION'} },
    { id:'toolbar_deuiaction2',name:'deuiaction2',caption:'保存',groupExtractMode:'2',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:true,tooltip:'保存',disabled: false, visible: true, imgPath: '/assets/images/test.png',iconClass: '',xDataControlName:'tree',uIAction:{codeName:'Save',fullCodeName:'Save',uIActionMode:'SYS',uIActionTag:'Save',uIActionType:'DEUIACTION'} },
    { id:'toolbar_deuiaction3',name:'deuiaction3',caption:'计数器',groupExtractMode:'2',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:true,tooltip:'计数器',disabled: false, visible: true, imgPath: '',iconClass: '',xDataControlName:'tree',uIAction:{codeName:'Count',fullCodeName:'ChartData_Count',uIActionMode:'FRONT',uIActionTag:'Count',uIActionType:'DEUIACTION'} },
    { id:'toolbar_deuiaction4',name:'deuiaction4',caption:'测试1',groupExtractMode:'2',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:true,tooltip:'测试1',disabled: false, visible: true, imgPath: '',iconClass: '',xDataControlName:'tree',uIAction:{codeName:'custom1',fullCodeName:'ChartData_custom1',uIActionMode:'FRONT',uIActionTag:'custom1',uIActionType:'DEUIACTION'} },
    { id:'toolbar_deuiaction5',name:'deuiaction5',caption:'测试2',groupExtractMode:'2',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:true,tooltip:'测试2',disabled: false, visible: true, imgPath: '',iconClass: '',xDataControlName:'tree',uIAction:{codeName:'custom2',fullCodeName:'ChartData_custom2',uIActionMode:'BACKEND',uIActionTag:'custom2',uIActionType:'DEUIACTION'} },
  ],
  searchform:{
    action:{
      searchAction: 'FilterSearch',
      loadDraftAction: 'FilterGetDraft',
      loadAction: 'FilterGet',
    } 
  }
,
  tree: {
    action:{
      loadAction: 'Get',
      removeAction: 'Remove',
      updateAction: 'Update',
      loadDraftAction: '',
      createAction: 'Create',
      fetchAction:''
    }  
  }
};