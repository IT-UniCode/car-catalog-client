import { IFilterState, FilterActionType } from '../../typings/filter';
import { FilterActionTypes } from '../../utils/enums';

const initialState: IFilterState = {
  filters: {},
  error: null,
};

export const filterReducer = (
  state = initialState,
  action: FilterActionType
): IFilterState => {
  switch (action.type) {
    case FilterActionTypes.FETCH_FILTERS:
      return { error: null, filters: {} };
    case FilterActionTypes.FETCH_FILTERS_SUCCESS:
      return { error: null, filters: action.payload };
    case FilterActionTypes.FETCH_FILTERS_ERROR:
      return { error: action.payload, filters: {} };

    default:
      return state;
  }
};
