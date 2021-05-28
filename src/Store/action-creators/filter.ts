import { Dispatch } from 'react';
import { FilterActionType } from '../../typings/filter';
import { FilterActionTypes } from '../../utils/enums';
import { getData } from '../../API/catalog';

const fillingData = (array: any) => {
  let result: any = {};

  array?.forEach((item: any) => {
    result[item.quickPickCode] = item;
  });

  return result;
};

export const fetchFilters = () => {
  return async (dispatch: Dispatch<FilterActionType>) => {
    try {
      dispatch({ type: FilterActionTypes.FETCH_FILTERS });
      getData({}).then((res) => {
        const filledData = fillingData(res.data.data.results.facetFields);
        dispatch({
          type: FilterActionTypes.FETCH_FILTERS_SUCCESS,
          payload: filledData,
        });
      });
    } catch (error) {
      dispatch({
        type: FilterActionTypes.FETCH_FILTERS_ERROR,
        payload: 'Ошибка при загруке',
      });
    }
  };
};
