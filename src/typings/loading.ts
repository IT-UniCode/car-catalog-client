import { LoadingActionTypes } from '../utils/enums';

export interface ILoadingState {
  loading: boolean;
}

interface IFatchLoadingStartAction {
  type: LoadingActionTypes.START_LOADING;
  payload: boolean;
}
interface IFatchLoadingEndAction {
  type: LoadingActionTypes.END_LOADING;
  payload: boolean;
}

export type LoadingActionType =
  | IFatchLoadingStartAction
  | IFatchLoadingEndAction;
