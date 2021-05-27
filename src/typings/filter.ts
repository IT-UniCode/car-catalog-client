import { FilterActionTypes } from '../utils/enums';

export interface IFilterState {
  filters: IFilter;
  loading: boolean;
  error: null | string;
}

interface IFatchFilterAction {
  type: FilterActionTypes.FETCH_FILTERS;
}

interface IFatchFilterSuccessAction {
  type: FilterActionTypes.FETCH_FILTERS_SUCCESS;
  payload: IFilter;
}

interface IFatchFilterErrorAction {
  type: FilterActionTypes.FETCH_FILTERS_ERROR;
  payload: string;
}

export type FilterActionType =
  | IFatchFilterAction
  | IFatchFilterSuccessAction
  | IFatchFilterErrorAction;
