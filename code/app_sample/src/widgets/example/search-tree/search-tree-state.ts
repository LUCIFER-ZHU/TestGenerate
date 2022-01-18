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
        enableQuickSearch: true,
        expandFirstOnly: false,
        expanded: false,
        hasPSDETreeNodeRSs: false,
        iconcls: 'fa fa-check',
        id: 'SearchModelNode',
        navFilter: '',
        nodeType: 'SearchModelNode',
        rootNode: false,
        selectFirstOnly: false,
        selected: false,
        text: '树节点（有搜索时显示）',
        treeNodeType: 'STATIC',
      },
      {
        allowDrag: false,
        allowDrop: false,
        allowEditText: false,
        allowOrder: false,
        appDataEntity: {
          codeName: 'City',
          keyField: 'CityId',
          majorField: 'true',
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
        hasPSDETreeNodeRSs: false,
        idPSAppDEField: { codeName: 'CityId' },
        id: 'CITY',
        navFilter: '',
        nodeType: 'CITY',
        rootNode: false,
        selectFirstOnly: false,
        selected: false,
        textPSAppDEField: { codeName: 'CityName' },
        treeNodeType: 'DE',
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
        disableSelect: false,
        enableCheck: false,
        enableQuickSearch: true,
        expandFirstOnly: false,
        expanded: false,
        hasPSDETreeNodeRSs: true,
        idPSAppDEField: { codeName: 'ProvinceId' },
        id: 'PROVINCE',
        navFilter: '',
        nodeType: 'PROVINCE',
        rootNode: false,
        selectFirstOnly: false,
        selected: false,
        sortDir: 'ASC',
        sortPSAppDEField: { codeName: 'Code' },
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
          codeName: 'Province',
          majorField: 'true',
          keyField: 'ProvinceId',
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
        hasPSDETreeNodeRSs: false,
        idPSAppDEField: { codeName: 'ProvinceId' },
        id: 'NoSearchProvince',
        navFilter: '',
        nodeType: 'NoSearchProvince',
        rootNode: false,
        selectFirstOnly: false,
        selected: false,
        sortDir: 'ASC',
        sortPSAppDEField: { codeName: 'Code' },
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
          majorField: 'true',
        },
        appendPNodeId: false,
        counterId: '',
        counterMode: 0,
        disableSelect: false,
        enableCheck: false,
        enableQuickSearch: true,
        expandFirstOnly: false,
        expanded: false,
        hasPSDETreeNodeRSs: false,
        iconcls: 'fa fa-times',
        id: 'NoSearchModelNode',
        navFilter: '',
        nodeType: 'NoSearchModelNode',
        rootNode: false,
        selectFirstOnly: false,
        selected: false,
        text: '树节点（无搜索时显示）',
        treeNodeType: 'STATIC',
      },
    ];
  }

  get treeNodeRSs(): TreeNodeRSVO[] {
    return [
      {
        childDeTreeNode: {
          id: 'CITY'
        },
        parentPSDER1N: { codeName: 'Province' },
        parentPSAppDEField: { codeName: 'ProvinceId' },
        parentPSDETreeNode: { id: 'PROVINCE' },
        parentValueLevel: 1,
        searchMode: 2
      },
      {
        childDeTreeNode: {
          id: 'SearchModelNode'
        },
        parentPSDETreeNode: { id: 'ROOT' },
        parentValueLevel: 1,
        searchMode: 1
      },
      {
        childDeTreeNode: {
          id: 'NoSearchModelNode'
        },
        parentPSDETreeNode: { id: 'ROOT' },
        parentValueLevel: 1,
        searchMode: 2
      },
      {
        childDeTreeNode: {
          id: 'PROVINCE'
        },
        parentPSDETreeNode: { id: 'ROOT' },
        parentValueLevel: 1,
        searchMode: 2
      },
      {
        childDeTreeNode: {
          id: 'CITY'
        },
        parentPSDETreeNode: { id: 'ROOT' },
        parentValueLevel: 1,
        searchMode: 1
      },
      {
        childDeTreeNode: {
          id: 'NoSearchProvince'
        },
        parentPSDETreeNode: { id: 'ROOT' },
        parentValueLevel: 1,
        searchMode: 1
      },
    ];
  }
}

export const ctrlState = {
  controlCodeName: 'Search',
  controlName: 'tree',
  controlService: new TreeService<ControlVO>(ControlVO, new ExampleService() ),
  currentselectedNode: {},
  data: [],
  selectedNodes: []
};