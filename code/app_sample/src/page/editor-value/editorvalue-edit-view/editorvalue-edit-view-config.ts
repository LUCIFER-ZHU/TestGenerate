export const ViewConfig = {
    viewCodeName: 'EDITORVALUEEditView',
    viewName: 'EDITORVALUEEditView',
    viewCaption: '编辑器值',
    height: '0',
    width: '0',
    viewMsgGroup: '',
    viewUIActions: '[net.ibizsys.model.app.view.PSAppViewUIActionImpl@48bfb884, net.ibizsys.model.app.view.PSAppViewUIActionImpl@11653e3b, net.ibizsys.model.app.view.PSAppViewUIActionImpl@715fb77, net.ibizsys.model.app.view.PSAppViewUIActionImpl@1b9c1b51, net.ibizsys.model.app.view.PSAppViewUIActionImpl@2e52fb3e, net.ibizsys.model.app.view.PSAppViewUIActionImpl@16fe9c29, net.ibizsys.model.app.view.PSAppViewUIActionImpl@3e9803c2, net.ibizsys.model.app.view.PSAppViewUIActionImpl@4525d1d3, net.ibizsys.model.app.view.PSAppViewUIActionImpl@7c974942, net.ibizsys.model.app.view.PSAppViewUIActionImpl@1eea9d2d, net.ibizsys.model.app.view.PSAppViewUIActionImpl@60921b21, net.ibizsys.model.app.view.PSAppViewUIActionImpl@bd2f5a9, net.ibizsys.model.app.view.PSAppViewUIActionImpl@4d4960c8, net.ibizsys.model.app.view.PSAppViewUIActionImpl@7808fb9]',
    viewSysCss: '',
    viewSysImage: '',
    subCaption: '',
    viewType: 'DEEDITVIEW',
    viewStyle: 'DEFAULT',
    showCaptionBar: 'DEFAULT',
        editviewtoolbar:{
        name:'toolbar',
        items:[
            { name:'tbitem3',caption:'保存',groupExtractMode:'ITEM',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:true,tooltip:'保存' },
            { name:'tbitem4',caption:'保存并新建',groupExtractMode:'ITEM',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:true,tooltip:'保存并新建' },
            { name:'tbitem5',caption:'保存并关闭',groupExtractMode:'ITEM',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:true,tooltip:'保存并关闭' },
            { name:'tbitem6',caption:'',groupExtractMode:'',itemType:'SEPERATOR',noPrivDisplayMode:'',showIcon:false,showCaption:false,tooltip:'' },
            { name:'tbitem7',caption:'删除并关闭',groupExtractMode:'ITEM',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:true,tooltip:'删除并关闭' },
            { name:'tbitem8',caption:'',groupExtractMode:'',itemType:'SEPERATOR',noPrivDisplayMode:'',showIcon:false,showCaption:false,tooltip:'' },
            { name:'tbitem12',caption:'新建',groupExtractMode:'ITEM',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:true,tooltip:'新建' },
            { name:'tbitem13',caption:'',groupExtractMode:'',itemType:'SEPERATOR',noPrivDisplayMode:'',showIcon:false,showCaption:false,tooltip:'' },
            { name:'tbitem14',caption:'拷贝',groupExtractMode:'ITEM',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:true,tooltip:'拷贝' },
            { name:'tbitem16',caption:'',groupExtractMode:'',itemType:'SEPERATOR',noPrivDisplayMode:'',showIcon:false,showCaption:false,tooltip:'' },
            { name:'tbitem23',caption:'第一个记录',groupExtractMode:'ITEM',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:false,tooltip:'第一个记录' },
            { name:'tbitem24',caption:'上一个记录',groupExtractMode:'ITEM',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:false,tooltip:'上一个记录' },
            { name:'tbitem25',caption:'下一个记录',groupExtractMode:'ITEM',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:false,tooltip:'下一个记录' },
            { name:'tbitem26',caption:'最后一个记录',groupExtractMode:'ITEM',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:false,tooltip:'最后一个记录' },
            { name:'tbitem21',caption:'',groupExtractMode:'',itemType:'SEPERATOR',noPrivDisplayMode:'',showIcon:false,showCaption:false,tooltip:'' },
            { name:'tbitem22',caption:'帮助',groupExtractMode:'ITEM',itemType:'DEUIACTION',noPrivDisplayMode:'2',showIcon:true,showCaption:true,tooltip:'帮助' },
        ]
    },
    controlsAction:{
      EditViewtoolbar:{
        loadAction: '',
        removeAction: '',
        updateAction: '',
        loadDraftAction: '',
        createAction: '',
      },
      Main:{
        loadAction: 'Get',
        removeAction: 'Remove',
        updateAction: 'Update',
        loadDraftAction: 'GetDraft',
        createAction: 'GetDraft',
      },
    }};