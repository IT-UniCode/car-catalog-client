import { IFilterState, FilterActionType } from '../../typings/filter';
import { FilterActionTypes } from '../../utils/enums';

const initialState: IFilterState = {
  filters: {},
  loading: false,
  error: null,
};

export const filterReducer = (
  state = initialState,
  action: FilterActionType
): IFilterState => {
  switch (action.type) {
    case FilterActionTypes.FETCH_FILTERS:
      return { loading: true, error: null, filters: {} };
    case FilterActionTypes.FETCH_FILTERS_SUCCESS:
      return { loading: false, error: null, filters: action.payload };
    case FilterActionTypes.FETCH_FILTERS_ERROR:
      return { loading: false, error: action.payload, filters: {} };

    default:
      return state;
  }
};
