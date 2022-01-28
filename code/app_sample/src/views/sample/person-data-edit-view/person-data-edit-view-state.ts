export const viewState = {
  viewCodeName: 'PersonDataEditView',
  viewName: 'PersonDataEditView',
  viewCaption: '人员数据',
  subCaption: '',
  viewSysCss: '',
  showCaptionBar: true,
  viewType: 'DEEDITVIEW',
  viewStyle: 'DEFAULT',
  xDataControlName:'form',
  height: '0',
  width: '700',
  appEntityCodeName: 'PersonData',
  keyPSDEField: 'persondata',
  isLoadDefault: true,
  appViewNavContexts:{ 'deptdata':'%deptdata%','orgdata':'%orgdata%' },
  appViewNavParams:{ 'deptdataid':'%deptdata%','orgdataid':'%orgdata%' },
  enableQuickGroup: false,
  viewLogics: {
  },
  toolbar: [
    { id:'toolbar_tbitem1',name:'tbitem1',caption:'保存并关闭',groupExtractMode:'2',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:true,tooltip:'保存并关闭',disabled: false, visible: true, imgPath: '',iconClass: 'sx-tb-saveandclose',xDataControlName:'form',uIAction:{codeName:'SaveAndExit',fullCodeName:'SaveAndExit',uIActionMode:'SYS',uIActionTag:'SaveAndExit',uIActionType:'DEUIACTION'} },
    { id:'toolbar_tbitem2',name:'tbitem2',caption:'关闭',groupExtractMode:'2',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:true,tooltip:'关闭',disabled: false, visible: true, imgPath: '',iconClass: 'fa fa-sign-out',xDataControlName:'form',uIAction:{codeName:'Exit',fullCodeName:'Exit',uIActionMode:'SYS',uIActionTag:'Exit',uIActionType:'DEUIACTION'} },
  ],
  form:{
    action:{
      loadAction: 'Get',
      removeAction: 'Remove',
      updateAction: 'Update',
      loadDraftAction: 'GetDraft',
      createAction: 'Create'
    }
  }
};