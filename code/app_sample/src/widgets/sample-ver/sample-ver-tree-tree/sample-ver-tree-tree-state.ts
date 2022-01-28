import { ControlVOBase, TreeControlVO, TreeNodeVO, TreeNodeRSVO, TreeService } from "@core";
import { SampleVerService } from '@api/sample-ver/sample-ver-service';

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
          codeName: 'SampleVer',
          majorField: 'SampleVerName',
          keyField: 'SampleVerId',
        },
        appDeDataSet: { codeName: 'FetchWEBR7D' },
        appendPNodeId: false,
        counterId: '',
        counterMode: 0,
        disableSelect: false,
        enableCheck: false,
        enableQuickSearch: true,
        expandFirstOnly: false,
        expanded: false,
        hasPSDETreeNodeRSs: false,
        idPSAppDEField: { codeName: 'SampleVerId' },
        id: 'WEBR7DVER',
        navFilter: '',
        navView: {
          viewName: 'SampleVerInfoEditView'
        },
        nodeType: 'WEBR7DVER',
        rootNode: false,
        selectFirstOnly: false,
        selected: false,
        sortDir: 'DESC',
        sortPSAppDEField: { codeName: 'Verstr' },
        textPSAppDEField: { codeName: 'SampleVerName' },
        treeNodeType: 'DE',
      },
    ];
  }

  get treeNodeRSs(): TreeNodeRSVO[] {
    return [
      {
        childDeTreeNode: {
          id: 'WEBR7DVER'
        },
        parentPSDETreeNode: { id: 'ROOT' },
        parentValueLevel: 1,
        searchMode: 3
      },
    ];
  }
}

export const ctrlState = {
  controlCodeName: 'SampleVerTree',
  controlName: 'treeexpbar_tree',
  controlService: new TreeService<ControlVO>(ControlVO, new SampleVerService() ),
  currentSelectedNode: {},
  data: [],
  echoSelectedNodes: [],
  expandedKeys: [],
  selectedKeys: [],
  selectedNodes: []
};