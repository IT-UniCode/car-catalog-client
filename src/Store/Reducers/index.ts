import { combineReducers } from 'redux';
import { filterReducer } from './filterReducer';
import { loadingReducer } from './loadingReducer';

export const rootReducer = combineReducers({
  filter: filterReducer,
  loading: loadingReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
