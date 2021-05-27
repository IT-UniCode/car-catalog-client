import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import * as FilterActionsCreators from '../Store/action-creators/filter';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(FilterActionsCreators, dispatch);
}
