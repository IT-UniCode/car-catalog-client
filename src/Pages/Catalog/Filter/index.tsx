import React, { FC } from 'react';
import { Collapse, Checkbox, Row, Button } from 'antd';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import { VEHICLE_TYPES } from '../../../utils/constants';

import useStyles from './style';

const { Panel } = Collapse;
interface IFilterProps {
  data?: IData;
  filterData: IFilter;
  setFilterData: React.Dispatch<React.SetStateAction<IFilter>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const Filter: FC<IFilterProps> = ({
  data,
  filterData,
  setFilterData,
  setLoading,
}) => {
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
    setLoading(true);
  };

  return (
    <div className={classes.root}>
      <h2>Каталог ({data?.total})</h2>
      <SimpleBar style={{ maxHeight: 400 }}>
        {data?.vehicle &&
          Object.values(data?.vehicle.facetCounts).map(
            (item: IFacetCount, index: number) => (
              <Button
                key={index}
                className='filter_item'
                value={item.uri}
                onClick={() => changeFilter(`filter[VEHT]`, item.query)}
              >
                {VEHICLE_TYPES[item.uri]}
              </Button>
            )
          )}
      </SimpleBar>
      <h2>Фильтр</h2>
      <SimpleBar style={{ maxHeight: '100vh' }}>
        <Collapse defaultActiveKey={['0']}>
          {data?.facetFields &&
            Object.values(data?.facetFields).map(
              (filter: IFacetData, index: number) => (
                <Panel header={filter.displayName} key={index}>
                  <SimpleBar style={{ maxHeight: 200 }}>
                    <Checkbox.Group>
                      {filter.facetCounts.map(
                        (item: IFacetCount, index: number) => (
                          <Row key={index}>
                            <Checkbox
                              value={item.displayName}
                              onChange={() =>
                                changeFilter(
                                  `filter[${filter.quickPickCode}]`,
                                  item.query
                                )
                              }
                            >
                              {item.displayName}
                            </Checkbox>
                          </Row>
                        )
                      )}
                    </Checkbox.Group>
                  </SimpleBar>
                </Panel>
              )
            )}
        </Collapse>
      </SimpleBar>
    </div>
  );
};

export default Filter;
