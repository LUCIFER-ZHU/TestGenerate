import { ControlVOBase, TreeControlVO, TreeNodeVO, TreeNodeRSVO, TreeService } from "@core";
import { ExampleService } from '@api/example/example-service';

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
        appDataEntity: {
          codeName: 'Example',
          keyField: 'ExampleId',
          majorField: 'true',
        },
        appendPNodeId: false,
        counterId: '',
        counterMode: 0,
        disableSelect: false,
        enableCheck: false,
        enableQuickSearch: false,
        expandFirstOnly: false,
        expanded: false,
        hasPSDETreeNodeRSs: false,
        id: 'StaticNode1',
        navFilter: '',
        nodeType: 'StaticNode1',
        rootNode: false,
        selectFirstOnly: false,
        selected: false,
        text: '静态一',
        treeNodeType: 'STATIC',
      },
      {
        allowDrag: false,
        allowDrop: false,
        allowEditText: false,
        allowOrder: false,
        appDataEntity: {
          codeName: 'Example',
          keyField: 'ExampleId',
          majorField: 'true',
        },
        appendPNodeId: false,
        counterId: '',
        counterMode: 0,
        disableSelect: false,
        enableCheck: false,
        enableQuickSearch: false,
        expandFirstOnly: false,
        expanded: true,
        hasPSDETreeNodeRSs: true,
        id: 'StaticNode',
        navFilter: '',
        nodeType: 'StaticNode',
        rootNode: false,
        selectFirstOnly: false,
        selected: false,
        text: '静态',
        treeNodeType: 'STATIC',
      },
      {
        allowDrag: false,
        allowDrop: false,
        allowEditText: false,
        allowOrder: false,
        appendPNodeId: false,
        codeList: {
          codeName: 'OrderState',
          type: 'STATIC'
        },
        counterId: '',
        counterMode: 0,
        disableSelect: false,
        enableCheck: false,
        enableQuickSearch: false,
        expandFirstOnly: false,
        expanded: false,
        hasPSDETreeNodeRSs: false,
        id: 'CodeListNode',
        navFilter: '',
        nodeType: 'CodeListNode',
        rootNode: false,
        selectFirstOnly: false,
        selected: false,
        treeNodeType: 'CODELIST',
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
        expanded: true,
        hasPSDETreeNodeRSs: true,
        id: 'CodeList',
        navFilter: '',
        nodeType: 'CodeList',
        rootNode: false,
        selectFirstOnly: false,
        selected: false,
        text: '动态（代码表）',
        treeNodeType: 'STATIC',
      },
      {
        allowDrag: false,
        allowDrop: false,
        allowEditText: false,
        allowOrder: false,
        appDataEntity: {
          codeName: 'Example',
          keyField: 'ExampleId',
          majorField: 'true',
        },
        appendPNodeId: false,
        counterId: '',
        counterMode: 0,
        disableSelect: false,
        enableCheck: false,
        enableQuickSearch: false,
        expandFirstOnly: false,
        expanded: false,
        hasPSDETreeNodeRSs: false,
        id: 'StaticNode2',
        navFilter: '',
        nodeType: 'StaticNode2',
        rootNode: false,
        selectFirstOnly: false,
        selected: false,
        text: '静态2',
        treeNodeType: 'STATIC',
      },
      {
        allowDrag: false,
        allowDrop: false,
        allowEditText: false,
        allowOrder: false,
        appDataEntity: {
          codeName: 'Province',
          majorField: 'true',
          keyField: 'ProvinceId',
        },
        appDeDataSet: { codeName: 'FetchDefault' },
        appendPNodeId: false,
        counterId: '',
        counterMode: 0,
        deTreeNodeDataItems: [
          {
            customCode: true,
            fieldCodeName: 'ProvinceName',
            name: 'text'
          },
        ],
        disableSelect: false,
        enableCheck: false,
        enableQuickSearch: false,
        expandFirstOnly: false,
        expanded: false,
        hasPSDETreeNodeRSs: false,
        idPSAppDEField: { codeName: 'ProvinceId' },
        id: 'DEDataSetNode',
        navFilter: '',
        nodeType: 'DEDataSetNode',
        rootNode: false,
        selectFirstOnly: false,
        selected: false,
        textPSAppDEField: { codeName: 'ProvinceName' },
        treeNodeType: 'DE',
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
        expanded: true,
        hasPSDETreeNodeRSs: true,
        id: 'DEDataSet',
        navFilter: '',
        nodeType: 'DEDataSet',
        rootNode: false,
        selectFirstOnly: false,
        selected: false,
        text: '动态（实体）',
        treeNodeType: 'STATIC',
      },
    ];
  }

  get treeNodeRSs(): TreeNodeRSVO[] {
    return [
      {
        childDeTreeNode: {
          id: 'DEDataSetNode'
        },
        parentPSDETreeNode: { id: 'DEDataSet' },
        parentValueLevel: 1,
        searchMode: 3
      },
      {
        childDeTreeNode: {
          id: 'StaticNode1'
        },
        parentPSDETreeNode: { id: 'StaticNode' },
        parentValueLevel: 1,
        searchMode: 3
      },
      {
        childDeTreeNode: {
          id: 'StaticNode'
        },
        parentPSDETreeNode: { id: 'ROOT' },
        parentValueLevel: 1,
        searchMode: 3
      },
      {
        childDeTreeNode: {
          id: 'CodeListNode'
        },
        parentPSDETreeNode: { id: 'CodeList' },
        parentValueLevel: 1,
        searchMode: 3
      },
      {
        childDeTreeNode: {
          id: 'StaticNode2'
        },
        parentPSDETreeNode: { id: 'StaticNode' },
        parentValueLevel: 1,
        searchMode: 3
      },
      {
        childDeTreeNode: {
          id: 'DEDataSet'
        },
        parentPSDETreeNode: { id: 'ROOT' },
        parentValueLevel: 1,
        searchMode: 3
      },
      {
        childDeTreeNode: {
          id: 'CodeList'
        },
        parentPSDETreeNode: { id: 'ROOT' },
        parentValueLevel: 1,
        searchMode: 3
      },
    ];
  }
}

export const ctrlState = {
  controlCodeName: 'DataSource',
  controlName: 'tree',
  controlService: new TreeService<ControlVO>(ControlVO, new ExampleService() ),
  currentselectedNode: {},
  data: [],
  selectedNodes: []
};