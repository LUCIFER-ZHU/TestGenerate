export const ctrlState = {
  controlCodeName: 'TreeGridNavTreeExpViewtreeexpbar',
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
      name: 'EXPITEM:DISTRICT',
      viewName: 'DistrictTreeNavInfoEditView',
      deKeyField: 'District',
    },
    {
      name: 'EXPITEM:PROVINCE',
      viewName: 'CityTreeNavGridView',
      deKeyField: 'City',
    },
    {
      name: 'EXPITEM:CITY',
      viewName: 'DistrictTreeNavGridView',
      deKeyField: 'District',
    },
  ]
};
