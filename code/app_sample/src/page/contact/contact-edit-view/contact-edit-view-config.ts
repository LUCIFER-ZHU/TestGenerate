export const ViewConfig = {
    viewCodeName: 'CONTACTEditView',
    viewName: 'CONTACTEditView',
    viewCaption: '联系人',
    height: '0',
    width: '0',
    viewMsgGroup: '',
    viewUIActions: '[net.ibizsys.model.app.view.PSAppViewUIActionImpl@7c8326a4, net.ibizsys.model.app.view.PSAppViewUIActionImpl@77128dab, net.ibizsys.model.app.view.PSAppViewUIActionImpl@63429932, net.ibizsys.model.app.view.PSAppViewUIActionImpl@69ce2f62, net.ibizsys.model.app.view.PSAppViewUIActionImpl@c9d82f9, net.ibizsys.model.app.view.PSAppViewUIActionImpl@6f012914, net.ibizsys.model.app.view.PSAppViewUIActionImpl@18fdb6cf, net.ibizsys.model.app.view.PSAppViewUIActionImpl@d02f8d, net.ibizsys.model.app.view.PSAppViewUIActionImpl@60baef24, net.ibizsys.model.app.view.PSAppViewUIActionImpl@61533ae, net.ibizsys.model.app.view.PSAppViewUIActionImpl@732bb66d, net.ibizsys.model.app.view.PSAppViewUIActionImpl@720653c2, net.ibizsys.model.app.view.PSAppViewUIActionImpl@45f24169, net.ibizsys.model.app.view.PSAppViewUIActionImpl@6ad5923a]',
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