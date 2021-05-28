import { Dispatch } from 'react';
import { LoadingActionType } from '../../typings/loading';
import { LoadingActionTypes } from '../../utils/enums';

export const startLoading = () => {
  return async (dispatch: Dispatch<LoadingActionType>) => {
    dispatch({ type: LoadingActionTypes.START_LOADING, payload: true });
  };
};

export const endLoading = () => {
  return async (dispatch: Dispatch<LoadingActionType>) => {
    dispatch({ type: LoadingActionTypes.END_LOADING, payload: false });
  };
};
