import * as FilterActionsCreators from './filter';
import * as LoadingActionsCreators from './loading';

const actionCreators = {
  ...FilterActionsCreators,
  ...LoadingActionsCreators,
};

export default actionCreators;
