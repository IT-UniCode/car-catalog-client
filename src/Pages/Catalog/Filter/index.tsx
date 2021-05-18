import React, { FC } from 'react';

import {
  FilterTypes,
  VEHTYPE_Auto,
  VEHTYPE_Boat,
  VEHTYPE_Moto,
  VEHTYPE_Truck,
  VEHTYPE_RV,
  VEHTYPE_Special,
  VEHTYPE_Trailer,
} from '../../../utils/enums';

import useStyles from './style';

interface IFilterProps {
  data: IFilter | undefined;
  setData: React.Dispatch<React.SetStateAction<IFilter | undefined>>;
}

const Filter: FC<IFilterProps> = ({ data, setData }) => {
  const classes = useStyles();

  const changeFilter = (filterKey: string, filterValue: string[]) => {
    const copyData: IFilter = { ...data };
    copyData[filterKey] = filterValue;

    setData(copyData);
  };

  return (
    <div className={classes.root}>
      <ul>
        <li
          className='filter_item'
          onClick={() =>
            changeFilter(FilterTypes.VEHT, Object.values(VEHTYPE_Auto))
          }
        >
          Автомобили
        </li>
        <li
          className='filter_item'
          onClick={() =>
            changeFilter(FilterTypes.VEHT, Object.values(VEHTYPE_Moto))
          }
        >
          Мото техника
        </li>
        <li
          className='filter_item'
          onClick={() =>
            changeFilter(FilterTypes.VEHT, Object.values(VEHTYPE_Boat))
          }
        >
          Водный транспорт
        </li>
        <li
          className='filter_item'
          onClick={() =>
            changeFilter(FilterTypes.VEHT, Object.values(VEHTYPE_Truck))
          }
        >
          Грузовой транспорт
        </li>
        <li
          className='filter_item'
          onClick={() =>
            changeFilter(FilterTypes.VEHT, Object.values(VEHTYPE_RV))
          }
        >
          Дом на колесах
        </li>
        <li
          className='filter_item'
          onClick={() =>
            changeFilter(FilterTypes.VEHT, Object.values(VEHTYPE_Special))
          }
        >
          Спецтехника
        </li>
        <li
          className='filter_item'
          onClick={() =>
            changeFilter(FilterTypes.VEHT, Object.values(VEHTYPE_Trailer))
          }
        >
          Прицепы
        </li>
      </ul>
    </div>
  );
};

export default Filter;
