export const ctrlState = {
  controlCodeName: 'TreeNavParamTreeExpViewtreeexpbar',
  controlName: 'treeexpbar',
  counter: 0,
  xDataControlName: 'treeexpbar_tree',
  selection: {},
  showTitleBar: false,
  split: 0.2,
  title: '',
  titleRes: '',
  viewRefs: [
    {
      name: 'EXPITEM:ProvinceToProvince',
      viewName: 'ProvinceTreeNavInfoEditView',
      deKeyField: 'Province',
    },
    {
      name: 'EXPITEM:viewparam',
      viewName: 'ExampleNavParamEditView',
      deKeyField: 'Example',
    },
    {
      name: 'EXPITEM:ProvinceToCity',
      viewName: 'CityTreeNavGridView',
      deKeyField: 'City',
    },
  ]
};
