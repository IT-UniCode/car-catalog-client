export enum FuelType {
  electric = "ELECTRIC",
  gas = "GAS",
  diesel = "DIESEL",
  hybrid = "HYBRID",
};

export enum FilterActionTypes {
  FETCH_FILTERS = 'FETCH_FILTERS',
  FETCH_FILTERS_SUCCESS = 'FETCH_FILTERS_SUCCESS',
  FETCH_FILTERS_ERROR = 'FETCH_FILTERS_ERROR',
}

export enum LoadingActionTypes {
  START_LOADING = 'START_LOADING',
  END_LOADING = 'END_LOADING',
}
