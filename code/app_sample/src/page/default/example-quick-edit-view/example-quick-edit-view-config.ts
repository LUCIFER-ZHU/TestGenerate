export const ViewConfig = {
  viewCodeName: 'ExampleQuickEditView',
  viewName: 'ExampleQuickEditView',
  viewCaption: '示例',
  height: '0',
  width: '0',
  viewMsgGroup: '',
  viewUIActions: '[net.ibizsys.model.app.view.PSAppViewUIActionImpl@1dcca8d3, net.ibizsys.model.app.view.PSAppViewUIActionImpl@5631962]',
  viewSysCss: '',
  viewSysImage: '',
  subCaption: '',
  viewType: 'DEEDITVIEW',
  viewStyle: 'DEFAULT',
  showCaptionBar: 'DEFAULT',
  viewToolbarModel: [
    { name:'tbitem1',caption:'保存并关闭',groupExtractMode:'ITEM',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:true,tooltip:'保存并关闭',disabled: false, visible: true, iconClass: "sx-tb-saveandclose", },
    { name:'tbitem2',caption:'关闭',groupExtractMode:'ITEM',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:true,tooltip:'关闭',disabled: false, visible: true, iconClass: "fa fa-sign-out", },
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