import { ControlVOBase, TreeControlVO, TreeNodeVO, TreeNodeRSVO, TreeService } from "@core";
import { ChartDataService } from '@api/chart-data/chart-data-service';

export class ControlVO extends ControlVOBase implements TreeControlVO {

  get rootVisible(): boolean {
    return false;
  }

  get treeNodes(): TreeNodeVO[] {
    return [
      {
        allowDrag: true,
        allowDrop: true,
        allowEditText: false,
        allowOrder: true,
        appDataEntity: {
          codeName: 'ChartData',
          keyField: 'ChartDataId',
          majorField: 'ChartDataName',
        },
        appendPNodeId: false,
        counterId: 'countertag2',
        counterMode: 0,
        disableSelect: false,
        enableCheck: true,
        enableQuickSearch: false,
        expandFirstOnly: false,
        expanded: false,
        hasPSDETreeNodeRSs: false,
        id: 'static2',
        navFilter: '',
        nodeType: 'static2',
        rootNode: false,
        selectFirstOnly: false,
        selected: false,
        text: '静态节点2',
        treeNodeType: 'STATIC',
      },
      {
        allowDrag: true,
        allowDrop: true,
        allowEditText: false,
        allowOrder: true,
        appDataEntity: {
          codeName: 'ChartData',
          keyField: 'ChartDataId',
          majorField: 'ChartDataName',
        },
        appendPNodeId: false,
        counterId: 'countertag',
        counterMode: 0,
        disableSelect: false,
        enableCheck: true,
        enableQuickSearch: false,
        expandFirstOnly: false,
        expanded: false,
        hasPSDETreeNodeRSs: true,
        id: 'static1',
        navFilter: '',
        nodeType: 'static1',
        rootNode: false,
        selectFirstOnly: false,
        selected: false,
        text: '静态节点1',
        treeNodeType: 'STATIC',
      },
      {
        allowDrag: true,
        allowDrop: false,
        allowEditText: true,
        allowOrder: true,
        appDataEntity: {
          codeName: 'ChartData',
          keyField: 'ChartDataId',
          majorField: 'ChartDataName',
        },
        appendCaption: true,
        appDeDataSet: { codeName: 'FetchDefault' },
        appendPNodeId: false,
        counterId: '',
        counterMode: 0,
        disableSelect: false,
        enableCheck: false,
        enableQuickSearch: false,
        expandFirstOnly: false,
        expanded: false,
        hasPSDETreeNodeRSs: true,
        idPSAppDEField: { codeName: 'ChartDataId' },
        iconPSAppDEField: { codeName: 'Imagepath' },
        id: 'dynamic1',
        navFilter: '',
        navigateParams: {
          n_chartdataid_eq: '%chartdataid%',
        },
        nodeType: 'dynamic1',
        rootNode: false,
        selectFirstOnly: false,
        selected: false,
        sortPSAppDEField: { codeName: 'Data' },
        textFormat: '[测试标题]',
        textPSAppDEField: { codeName: 'ChartDataName' },
        treeNodeType: 'DE',
      },
      {
        allowDrag: false,
        allowDrop: false,
        allowEditText: false,
        allowOrder: false,
        appDataEntity: {
          codeName: 'ChartData',
          keyField: 'ChartDataId',
          majorField: 'ChartDataName',
        },
        appendPNodeId: false,
        counterId: '',
        counterMode: 0,
        disableSelect: false,
        enableCheck: false,
        enableQuickSearch: false,
        expandFirstOnly: false,
        expanded: false,
        hasPSDETreeNodeRSs: true,
        id: 'dynamic',
        navFilter: '',
        nodeValue: '2313123',
        nodeType: 'dynamic',
        rootNode: false,
        selectFirstOnly: false,
        selected: false,
        text: '动态节点',
        treeNodeType: 'STATIC',
      },
      {
        allowDrag: false,
        allowDrop: false,
        allowEditText: false,
        allowOrder: false,
        appendPNodeId: false,
        counterId: '',
        counterMode: 0,
        disableSelect: false,
        enableCheck: false,
        enableQuickSearch: false,
        expandFirstOnly: false,
        expanded: false,
        hasPSDETreeNodeRSs: true,
        id: 'ROOT',
        navFilter: '',
        nodeValue: 'root',
        nodeType: 'ROOT',
        rootNode: true,
        selectFirstOnly: false,
        selected: false,
        text: '默认根节点',
        treeNodeType: 'STATIC',
      },
      {
        allowDrag: false,
        allowDrop: true,
        allowEditText: false,
        allowOrder: false,
        appDataEntity: {
          codeName: 'ChartData',
          keyField: 'ChartDataId',
          majorField: 'ChartDataName',
        },
        appendPNodeId: false,
        counterId: '',
        counterMode: 0,
        disableSelect: false,
        enableCheck: true,
        enableQuickSearch: false,
        expandFirstOnly: false,
        expanded: true,
        hasPSDETreeNodeRSs: true,
        iconcls: 'ribbon',
        id: 'static',
        navFilter: '',
        nodeType: 'static',
        rootNode: false,
        selectFirstOnly: false,
        selected: false,
        text: '测试节点名称',
        treeNodeType: 'STATIC',
      },
      {
        allowDrag: false,
        allowDrop: false,
        allowEditText: false,
        allowOrder: false,
        appDataEntity: {
          codeName: 'ChartData',
          keyField: 'ChartDataId',
          majorField: 'ChartDataName',
        },
        appendPNodeId: false,
        counterId: '',
        counterMode: 0,
        disableSelect: false,
        enableCheck: false,
        enableQuickSearch: false,
        expandFirstOnly: false,
        expanded: false,
        hasPSDETreeNodeRSs: true,
        id: 'TestRefresh',
        navFilter: '',
        nodeType: 'TestRefresh',
        rootNode: false,
        selectFirstOnly: false,
        selected: false,
        text: '测试刷新节点',
        treeNodeType: 'STATIC',
      },
    ];
  }

  get treeNodeRSs(): TreeNodeRSVO[] {
    return [
      {
        childDeTreeNode: {
          id: 'dynamic1'
        },
        navigateParams: {
          n_chartdataid_eq: '%chartdataid%',
        },
        parentPSDETreeNode: { id: 'dynamic1' },
        parentValueLevel: 1,
        searchMode: 3
      },
      {
        childDeTreeNode: {
          id: 'TestRefresh'
        },
        parentPSDETreeNode: { id: 'static1' },
        parentValueLevel: 1,
        searchMode: 3
      },
      {
        childDeTreeNode: {
          id: 'static1'
        },
        parentPSDETreeNode: { id: 'static' },
        parentValueLevel: 1,
        searchMode: 3
      },
      {
        childDeTreeNode: {
          id: 'dynamic1'
        },
        parentPSDETreeNode: { id: 'TestRefresh' },
        parentValueLevel: 1,
        searchMode: 3
      },
      {
        childDeTreeNode: {
          id: 'static'
        },
        parentPSDETreeNode: { id: 'ROOT' },
        parentValueLevel: 1,
        searchMode: 3
      },
      {
        childDeTreeNode: {
          id: 'dynamic1'
        },
        navigateParams: {
          n_srfuserid_eq: '%srfuserid%',
        },
        parentPSDETreeNode: { id: 'dynamic' },
        parentValueLevel: 1,
        searchMode: 3
      },
      {
        childDeTreeNode: {
          id: 'static2'
        },
        parentPSDETreeNode: { id: 'static' },
        parentValueLevel: 1,
        searchMode: 3
      },
      {
        childDeTreeNode: {
          id: 'dynamic'
        },
        parentPSDETreeNode: { id: 'ROOT' },
        parentValueLevel: 1,
        searchMode: 3
      },
    ];
  }
}

export const ctrlState = {
  controlCodeName: 'Treeview',
  controlName: 'tree',
  controlService: new TreeService<ControlVO>(ControlVO, new ChartDataService() ),
  currentSelectedNode: {},
  data: [],
  echoSelectedNodes: [],
  expandedKeys: [],
  selectedKeys: [],
  selectedNodes: []
};