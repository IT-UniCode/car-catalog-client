import { ILoadingState, LoadingActionType } from '../../typings/loading';
import { LoadingActionTypes } from '../../utils/enums';

const initialState: ILoadingState = {
  loading: true,
};

export const loadingReducer = (
  state = initialState,
  action: LoadingActionType
): ILoadingState => {
  switch (action.type) {
    case LoadingActionTypes.START_LOADING:
      return { loading: true };
    case LoadingActionTypes.END_LOADING:
      return { loading: false };

    default:
      return state;
  }
};
