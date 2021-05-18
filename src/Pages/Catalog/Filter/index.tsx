import React, { FC, useEffect, useState } from 'react';
import { Collapse, Checkbox, Row } from 'antd';

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

const { Panel } = Collapse;
interface IFilterProps {
  data: IData;
  filterData: IFilter | undefined;
  vehicleData: IVehicleCount;
  setFilterData: React.Dispatch<React.SetStateAction<IFilter | undefined>>;
}

const Filter: FC<IFilterProps> = ({ data, filterData, setFilterData, vehicleData }) => {
  const classes = useStyles();

  const changeFilter = (filterKey: string, filterValue: string[]) => {
    const copyData: IFilter = { ...filterData };
    copyData[filterKey] = filterValue;

    setFilterData(copyData);
  };

  return (
    <div className={classes.root}>
      <h2>Каталог ({data.total})</h2>
      <ul>
        <li
          className='filter_item'
          onClick={() =>
            changeFilter(FilterTypes.VEHT, Object.values(VEHTYPE_Auto))
          }
        >
          Автомобили ({vehicleData.auto})
        </li>
        <li
          className='filter_item'
          onClick={() =>
            changeFilter(FilterTypes.VEHT, Object.values(VEHTYPE_Moto))
          }
        >
          Мото техника ({vehicleData.moto})
        </li>
        <li
          className='filter_item'
          onClick={() =>
            changeFilter(FilterTypes.VEHT, Object.values(VEHTYPE_Boat))
          }
        >
          Водный транспорт ({vehicleData.boat})
        </li>
        <li
          className='filter_item'
          onClick={() =>
            changeFilter(FilterTypes.VEHT, Object.values(VEHTYPE_Truck))
          }
        >
          Грузовой транспорт ({vehicleData.truck})
        </li>
        <li
          className='filter_item'
          onClick={() =>
            changeFilter(FilterTypes.VEHT, Object.values(VEHTYPE_RV))
          }
        >
          Дом на колесах ({vehicleData.rv})
        </li>
        <li
          className='filter_item'
          onClick={() =>
            changeFilter(FilterTypes.VEHT, Object.values(VEHTYPE_Special))
          }
        >
          Спецтехника ({vehicleData.special})
        </li>
        <li
          className='filter_item'
          onClick={() =>
            changeFilter(FilterTypes.VEHT, Object.values(VEHTYPE_Trailer))
          }
        >
          Прицепы ({vehicleData.trailers})
        </li>
      </ul>
      <h2>Фильтр</h2>
      <Collapse defaultActiveKey={['1']}>
        <Panel header='Недавно добавленные лоты' key='1'>
          <Checkbox.Group>
            <Row>
              <Checkbox onChange={() => changeFilter('', [''])}>
                За последние 24 часа
              </Checkbox>
            </Row>
            <Row>
              <Checkbox onChange={() => changeFilter('', [''])}>
                За последние 7 дней
              </Checkbox>
            </Row>
          </Checkbox.Group>
        </Panel>
        <Panel header='Марка' key='2'>
          <Checkbox.Group>
            <Row>
              <Checkbox onChange={() => changeFilter('', [''])}>Acura</Checkbox>
            </Row>
          </Checkbox.Group>
        </Panel>
      </Collapse>
    </div>
  );
};

export default Filter;
