export const ViewConfig = {
  viewCodeName: 'ExampleQuickEditView',
  viewName: 'ExampleQuickEditView',
  viewCaption: '示例',
  height: '0',
  width: '0',
  viewMsgGroup: '',
  viewUIActions: '[net.ibizsys.model.app.view.PSAppViewUIActionImpl@4390f46e, net.ibizsys.model.app.view.PSAppViewUIActionImpl@7c6442c2]',
  viewSysCss: '',
  viewSysImage: '',
  subCaption: '',
  viewType: 'DEEDITVIEW',
  viewStyle: 'DEFAULT',
  showCaptionBar: 'DEFAULT',
  xDataControlName:'form',
  viewToolbarModel: [
    { id:'toolbar_tbitem1',name:'tbitem1',caption:'保存并关闭',groupExtractMode:'2',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:true,tooltip:'保存并关闭',disabled: false, visible: true, imgPath: '',iconClass: 'sx-tb-saveandclose',xDataControlName:'form',uIAction:{codeName:'SaveAndExit',fullCodeName:'SaveAndExit',uIActionMode:'SYS',uIActionTag:'SaveAndExit',uIActionType:'DEUIACTION'} },
    { id:'toolbar_tbitem2',name:'tbitem2',caption:'关闭',groupExtractMode:'2',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:true,tooltip:'关闭',disabled: false, visible: true, imgPath: '',iconClass: 'fa fa-sign-out',xDataControlName:'form',uIAction:{codeName:'Exit',fullCodeName:'Exit',uIActionMode:'SYS',uIActionTag:'Exit',uIActionType:'DEUIACTION'} },
  ],
  controlsAction:{
    form:{
      loadAction: 'Get',
      removeAction: 'Remove',
      updateAction: 'Update',
      loadDraftAction: 'GetDraft',
      createAction: 'GetDraft',
    },
  }};