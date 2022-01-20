import { Badge } from './badge/badge';
import { Format } from './format/format';

export default (Vue: any) => {
  Vue.directive('badge', Badge);
  Vue.directive('format', Format);
}
