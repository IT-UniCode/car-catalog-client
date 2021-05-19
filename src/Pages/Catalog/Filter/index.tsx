import React, { FC } from 'react';
import { Collapse, Checkbox, Row } from 'antd';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import { FilterTypes, VEHTYPE, NLTS_Params } from '../../../utils/enums';

import useStyles from './style';

const { Panel } = Collapse;
interface IFilterProps {
  data: IData;
  filterData: IFilter;
  setFilterData: React.Dispatch<React.SetStateAction<IFilter>>;
}

const Filter: FC<IFilterProps> = ({ data, filterData, setFilterData }) => {
  const classes = useStyles();

  const changeFilter = (filterKey: string, filterValue: string) => {
    const copyFilterData: IFilter = { ...filterData };
    const index = copyFilterData[filterKey].indexOf(filterValue);

    if (index === -1) {
      copyFilterData[filterKey].push(filterValue);
    } else {
      copyFilterData[filterKey].splice(index, 1);
    }

    setFilterData(copyFilterData);
  };

  return (
    <div className={classes.root}>
      <h2>Каталог ({data.total})</h2>
      <ul>
        <li
          className='filter_item'
          onClick={() => changeFilter(FilterTypes.VEHT, VEHTYPE.automobile)}
        >
          Автомобили ({data.vehicleCount.automobiles})
        </li>
        <li
          className='filter_item'
          onClick={() => changeFilter(FilterTypes.VEHT, VEHTYPE.suv)}
        >
          Внедорожники ({data.vehicleCount.suvs})
        </li>
        <li
          className='filter_item'
          onClick={() => changeFilter(FilterTypes.VEHT, VEHTYPE.pickup)}
        >
          Пикапы ({data.vehicleCount.pickuptrucks})
        </li>
        <li
          className='filter_item'
          onClick={() => changeFilter(FilterTypes.VEHT, VEHTYPE.motorcycle)}
        >
          Мотоциклы ({data.vehicleCount.motorcycle})
        </li>
        <li
          className='filter_item'
          onClick={() => changeFilter(FilterTypes.VEHT, VEHTYPE.ATV)}
        >
          АТВ ({data.vehicleCount.atvs})
        </li>
        <li
          className='filter_item'
          onClick={() => changeFilter(FilterTypes.VEHT, VEHTYPE.dirt_bike)}
        >
          Эндуро техника ({data.vehicleCount.dirtbikes})
        </li>
        <li
          className='filter_item'
          onClick={() => changeFilter(FilterTypes.VEHT, VEHTYPE.snowmobile)}
        >
          Снегоходы ({data.vehicleCount.snowmobile})
        </li>
        <li
          className='filter_item'
          onClick={() => changeFilter(FilterTypes.VEHT, VEHTYPE.boat)}
        >
          Лодки ({data.vehicleCount.boats})
        </li>
        <li
          className='filter_item'
          onClick={() => changeFilter(FilterTypes.VEHT, VEHTYPE.jet_ski)}
        >
          Гидроциклы ({data.vehicleCount.jetskis})
        </li>
        <li
          className='filter_item'
          onClick={() =>
            changeFilter(FilterTypes.VEHT, VEHTYPE.heavy_duty_truck)
          }
        >
          Тяжолый грузовой транспорт ({data.vehicleCount.heavydutytrucks})
        </li>
        <li
          className='filter_item'
          onClick={() =>
            changeFilter(FilterTypes.VEHT, VEHTYPE.medium_duty_truck)
          }
        >
          Средний грузовой транспорт ({data.vehicleCount.mediumdutyboxtrucks})
        </li>
        <li
          className='filter_item'
          onClick={() => changeFilter(FilterTypes.VEHT, VEHTYPE.RV)}
        >
          Дом на колесах ({data.vehicleCount.recreationalveh})
        </li>
        <li
          className='filter_item'
          onClick={() =>
            changeFilter(FilterTypes.VEHT, VEHTYPE.industrial_equipment)
          }
        >
          Промышленное оборудование ({data.vehicleCount.industrialequipment})
        </li>
        <li
          className='filter_item'
          onClick={() => changeFilter(FilterTypes.VEHT, VEHTYPE.fork_lift)}
        >
          Погрузчики ({data.vehicleCount.forklifts})
        </li>
        <li
          className='filter_item'
          onClick={() => changeFilter(FilterTypes.VEHT, VEHTYPE.trailer)}
        >
          Прицепы ({data.vehicleCount.trailers})
        </li>
      </ul>
      <h2>Фильтр</h2>
      <Collapse defaultActiveKey={['1']}>
        <Panel header='Недавно добавленные лоты' key='1'>
          <Checkbox.Group>
            <Row>
              <Checkbox
                value={NLTS_Params.lastDay}
                onChange={(e) => changeFilter(FilterTypes.NLTS, e.target.value)}
              >
                За последние 24 часа
              </Checkbox>
            </Row>
            <Row>
              <Checkbox
                value={NLTS_Params.lastWeek}
                onChange={(e) => changeFilter(FilterTypes.NLTS, e.target.value)}
              >
                За последние 7 дней
              </Checkbox>
            </Row>
          </Checkbox.Group>
        </Panel>
        <Panel header='Марка' key='2'>
          <SimpleBar style={{ maxHeight: 200 }}>
            <Checkbox.Group>
              {data.marks.map((item: any, index) => (
                <Row key={index}>
                  <Checkbox
                    value={item.displayName}
                    onChange={(e) =>
                      changeFilter(
                        FilterTypes.MAKE,
                        `lot_make_desc:${e.target.value.toUpperCase()}`
                      )
                    }
                  >
                    {item.displayName}
                  </Checkbox>
                </Row>
              ))}
            </Checkbox.Group>
          </SimpleBar>
        </Panel>
        <Panel header='Модель' key='3'>
          <SimpleBar style={{ maxHeight: 200 }}>
            <Checkbox.Group>
              {data.models.map((item: any, index) => (
                <Row key={index}>
                  <Checkbox
                    value={item.displayName}
                    onChange={(e) =>
                      changeFilter(
                        FilterTypes.MODL,
                        `lot_model_desc:${e.target.value.toUpperCase()}`
                      )
                    }
                  >
                    {item.displayName}
                  </Checkbox>
                </Row>
              ))}
            </Checkbox.Group>
          </SimpleBar>
        </Panel>
      </Collapse>
    </div>
  );
};

export default Filter;
