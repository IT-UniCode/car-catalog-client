import React, { FC } from 'react';
import { Collapse, Checkbox, Row } from 'antd';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import { VEHICLE_TYPES } from '../../../utils/constants';

import useStyles from './style';

const { Panel } = Collapse;
interface IFilterProps {
  data?: IData;
  filterData: IFilter;
  selectedFilters: IFilter | undefined;
  setSelectedFilters: React.Dispatch<React.SetStateAction<IFilter | undefined>>;
}

const Filter: FC<IFilterProps> = ({
  data,
  filterData,
  selectedFilters,
  setSelectedFilters,
}) => {
  const classes = useStyles();

  const changeFilter = (filterKey: string, filterValue: string) => {
    const copyFilterData: IFilter = { ...selectedFilters };

    if (copyFilterData[filterKey] === undefined) {
      copyFilterData[filterKey] = [filterValue];
    } else {
      const index = copyFilterData[filterKey].indexOf(filterValue);

      if (index === -1) {
        copyFilterData[filterKey].push(filterValue);
      } else {
        copyFilterData[filterKey].splice(index, 1);
      }
    }

    setSelectedFilters(copyFilterData);
  };

  return (
    <div className={classes.root}>
      <h2>Каталог ({data?.total})</h2>
      <SimpleBar style={{ maxHeight: 400 }}>
        <Checkbox.Group>
          {filterData &&
            Object.values(filterData).map((item: any, index: number) => {
              if (item.quickPickCode === 'VEHT') {
                return item.facetCounts.map((category: any, index: number) => (
                  <Row key={index}>
                    <Checkbox
                      value={category.uri}
                      className='filter_item'
                      onChange={() =>
                        changeFilter(`filter[VEHT]`, category.query)
                      }
                    >
                      {VEHICLE_TYPES[category.uri]}
                    </Checkbox>
                  </Row>
                ));
              }
              return null;
            })}
        </Checkbox.Group>
      </SimpleBar>
      <h2>Фильтр</h2>
      <SimpleBar style={{ maxHeight: '100vh' }}>
        <Collapse defaultActiveKey={['0']}>
          {Object.values(filterData).map((filter: any, index: number) => {
            if (filter.quickPickCode !== 'VEHT') {
              return (
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
              );
            }
            return null;
          })}
        </Collapse>
      </SimpleBar>
    </div>
  );
};

export default Filter;
