import { ControlVOBase, TreeControlVO, TreeNodeVO, TreeNodeRSVO, TreeService } from "@core";
import { OrgDataService } from '@api/org-data/org-data-service';

export class ControlVO extends ControlVOBase implements TreeControlVO {

  get rootVisible(): boolean {
    return false;
  }

  get treeNodes(): TreeNodeVO[] {
    return [
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
        enableQuickSearch: true,
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
        allowDrop: false,
        allowEditText: false,
        allowOrder: false,
        appDataEntity: {
          codeName: 'OrgData',
          keyField: 'OrgDataId',
          majorField: 'OrgDataName',
        },
        appDeDataSet: { codeName: 'FetchDefault' },
        appendPNodeId: false,
        counterId: '',
        counterMode: 0,
        disableSelect: false,
        enableCheck: false,
        enableQuickSearch: true,
        expandFirstOnly: false,
        expanded: false,
        hasPSDETreeNodeRSs: true,
        idPSAppDEField: { codeName: 'OrgDataId' },
        id: 'Sorg',
        navFilter: '',
        nodeType: 'Sorg',
        rootNode: false,
        selectFirstOnly: false,
        selected: false,
        textPSAppDEField: { codeName: 'OrgDataName' },
        treeNodeType: 'DE',
      },
      {
        allowDrag: false,
        allowDrop: false,
        allowEditText: false,
        allowOrder: false,
        appDataEntity: {
          codeName: 'OrgData',
          keyField: 'OrgDataId',
          majorField: 'OrgDataName',
        },
        appDeDataSet: { codeName: 'FetchPORGDATA' },
        appendPNodeId: false,
        counterId: '',
        counterMode: 0,
        disableSelect: false,
        enableCheck: false,
        enableQuickSearch: true,
        expandFirstOnly: true,
        expanded: true,
        hasPSDETreeNodeRSs: true,
        idPSAppDEField: { codeName: 'OrgDataId' },
        id: 'RootOrg',
        navFilter: '',
        nodeType: 'RootOrg',
        rootNode: false,
        selectFirstOnly: false,
        selected: false,
        textPSAppDEField: { codeName: 'OrgDataName' },
        treeNodeType: 'DE',
      },
    ];
  }

  get treeNodeRSs(): TreeNodeRSVO[] {
    return [
      {
        childDeTreeNode: {
          id: 'Sorg'
        },
        parentPSDER1N: { codeName: 'POrgData' },
        parentPSAppDEField: { codeName: 'Porgdataid' },
        parentPSDETreeNode: { id: 'Sorg' },
        parentValueLevel: 1,
        searchMode: 3
      },
      {
        childDeTreeNode: {
          id: 'Sorg'
        },
        parentPSDER1N: { codeName: 'POrgData' },
        parentPSAppDEField: { codeName: 'Porgdataid' },
        parentPSDETreeNode: { id: 'RootOrg' },
        parentValueLevel: 1,
        searchMode: 3
      },
      {
        childDeTreeNode: {
          id: 'RootOrg'
        },
        parentPSDETreeNode: { id: 'ROOT' },
        parentValueLevel: 1,
        searchMode: 2
      },
    ];
  }
}

export const ctrlState = {
  controlCodeName: 'OrgDataTree',
  controlName: 'tree',
  controlService: new TreeService<ControlVO>(ControlVO, new OrgDataService() ),
  currentSelectedNode: {},
  data: [],
  echoSelectedNodes: [],
  expandedKeys: [],
  selectedKeys: [],
  selectedNodes: []
};