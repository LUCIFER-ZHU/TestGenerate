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
          codeName: 'Province',
          majorField: 'ProvinceName',
          keyField: 'ProvinceId',
        },
        appDeDataSet: { codeName: 'FetchDefault' },
        appendPNodeId: false,
        counterId: '',
        counterMode: 0,
        disableSelect: false,
        enableCheck: false,
        enableQuickSearch: false,
        expandFirstOnly: false,
        expanded: false,
        hasPSDETreeNodeRSs: false,
        idPSAppDEField: { codeName: 'ProvinceId' },
        id: 'ProvinceToCity',
        navFilter: '',
        navigateParams: {
          n_provinceid_eq: '%nodeid%',
        },
        navView: {
          viewName: 'CityTreeNavGridView'
        },
        nodeType: 'ProvinceToCity',
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
        appDataEntity: {
          codeName: 'Example',
          keyField: 'ExampleId',
          majorField: 'ExampleName',
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
        id: 'contextparam',
        navFilter: '',
        nodeType: 'contextparam',
        rootNode: false,
        selectFirstOnly: false,
        selected: false,
        text: '???????????????????????????????????????????????????',
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
          majorField: 'ExampleName',
        },
        appendPNodeId: false,
        counterId: '',
        counterMode: 0,
        disableSelect: false,
        enableCheck: false,
        enableQuickSearch: false,
        expandFirstOnly: true,
        expanded: true,
        hasPSDETreeNodeRSs: true,
        id: 'ViewParamParent',
        navFilter: '',
        nodeValue: 'parent',
        nodeType: 'ViewParamParent',
        rootNode: false,
        selectFirstOnly: false,
        selected: false,
        text: '??????????????????????????????',
        tooltip: '????????????id???parent',
        treeNodeType: 'STATIC',
      },
      {
        allowDrag: false,
        allowDrop: false,
        allowEditText: false,
        allowOrder: false,
        appDataEntity: {
          codeName: 'Province',
          majorField: 'ProvinceName',
          keyField: 'ProvinceId',
        },
        appDeDataSet: { codeName: 'FetchDefault' },
        appendPNodeId: false,
        counterId: '',
        counterMode: 0,
        disableSelect: false,
        enableCheck: false,
        enableQuickSearch: false,
        expandFirstOnly: false,
        expanded: false,
        hasPSDETreeNodeRSs: false,
        idPSAppDEField: { codeName: 'ProvinceId' },
        id: 'ProvinceToProvince',
        navFilter: '',
        navView: {
          viewName: 'ProvinceTreeNavInfoEditView'
        },
        nodeType: 'ProvinceToProvince',
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
        appDataEntity: {
          codeName: 'Example',
          keyField: 'ExampleId',
          majorField: 'ExampleName',
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
        id: 'viewparam2',
        navFilter: '',
        nodeType: 'viewparam2',
        rootNode: false,
        selectFirstOnly: false,
        selected: false,
        text: '?????????????????????????????????????????????',
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
        text: '???????????????',
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
          majorField: 'ExampleName',
        },
        appendPNodeId: true,
        counterId: '',
        counterMode: 0,
        disableSelect: false,
        enableCheck: false,
        enableQuickSearch: false,
        expandFirstOnly: false,
        expanded: false,
        hasPSDETreeNodeRSs: false,
        id: 'viewparam',
        navFilter: '',
        navigateParams: {
          param02: '%nodeid%',
          param01: '123456',
          param03: '%nodeid2%',
        },
        navView: {
          viewName: 'ExampleNavParamEditView'
        },
        nodeType: 'viewparam',
        rootNode: false,
        selectFirstOnly: false,
        selected: false,
        text: '????????????',
        tooltip: '????????????id???current',
        treeNodeType: 'STATIC',
      },
    ];
  }

  get treeNodeRSs(): TreeNodeRSVO[] {
    return [
      {
        childDeTreeNode: {
          id: 'viewparam'
        },
        parentPSDETreeNode: { id: 'ViewParamParent' },
        parentValueLevel: 1,
        searchMode: 3
      },
      {
        childDeTreeNode: {
          id: 'ProvinceToProvince'
        },
        parentPSDETreeNode: { id: 'contextparam' },
        parentValueLevel: 1,
        searchMode: 3
      },
      {
        childDeTreeNode: {
          id: 'ProvinceToCity'
        },
        parentPSDETreeNode: { id: 'viewparam2' },
        parentValueLevel: 1,
        searchMode: 3
      },
      {
        childDeTreeNode: {
          id: 'ViewParamParent'
        },
        parentPSDETreeNode: { id: 'ROOT' },
        parentValueLevel: 1,
        searchMode: 3
      },
      {
        childDeTreeNode: {
          id: 'contextparam'
        },
        parentPSDETreeNode: { id: 'ROOT' },
        parentValueLevel: 1,
        searchMode: 3
      },
      {
        childDeTreeNode: {
          id: 'viewparam2'
        },
        parentPSDETreeNode: { id: 'ROOT' },
        parentValueLevel: 1,
        searchMode: 3
      },
    ];
  }
}

export const ctrlState = {
  controlCodeName: 'TreeNavParam',
  controlName: 'treeexpbar_tree',
  controlService: new TreeService<ControlVO>(ControlVO, new ExampleService() ),
  currentSelectedNode: {},
  data: [],
  echoSelectedNodes: [],
  expandedKeys: [],
  selectedKeys: [],
  selectedNodes: []
};