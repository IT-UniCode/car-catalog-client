import React, { FC, useEffect, useState } from 'react';

import { getData } from '../../API/catalog';
import Content from './Content';
import Filter from './Filter';
import {
  VEHTYPE_Auto,
  VEHTYPE_Boat,
  VEHTYPE_Moto,
  VEHTYPE_Truck,
  VEHTYPE_RV,
  VEHTYPE_Special,
  VEHTYPE_Trailer,
} from '../../utils/enums';

import useStyles from './style';

const Catalog: FC = () => {
  const classes = useStyles();
  const [data, setData] = useState<IData>({
    content: [],
    total: 0,
    facetFields: [],
    marks: [],
  });

  const [pageData, setPageData] = useState<IPageData>({
    currentPage: 1,
    page: 0,
    size: 10,
    defaultSort: true,
    sort: ['auction_date_type desc', 'auction_date_utc asc'],
  });

  const [filters, setFilters] = useState<IFilter>();

  const [vehicleCount, setVehicleCount] = useState<IVehicleCount>({
    rv: 0,
    auto: 0,
    moto: 0,
    boat: 0,
    truck: 0,
    special: 0,
    trailers: 0,
  });

  const calcVehicleCount = async (array: any) => {
    const VEHT: any = array?.filter(
      (item: any) => item.quickPickCode === 'VEHT'
    );

    const copyVehicleCount = {
      rv: 0,
      auto: 0,
      moto: 0,
      boat: 0,
      truck: 0,
      special: 0,
      trailers: 0,
    };

    await VEHT[0]?.facetCounts?.forEach((item: any) => {
      switch (true) {
        case Object.values(VEHTYPE_Auto).includes(item.query):
          copyVehicleCount.auto += item.count;
          break;
        case Object.values(VEHTYPE_Moto).includes(item.query):
          copyVehicleCount.moto += item.count;
          break;
        case Object.values(VEHTYPE_Truck).includes(item.query):
          copyVehicleCount.truck += item.count;
          break;
        case Object.values(VEHTYPE_Trailer).includes(item.query):
          copyVehicleCount.trailers += item.count;
          break;
        case Object.values(VEHTYPE_Boat).includes(item.query):
          copyVehicleCount.boat += item.count;
          break;
        case Object.values(VEHTYPE_RV).includes(item.query):
          copyVehicleCount.rv += item.count;
          break;
        case Object.values(VEHTYPE_Special).includes(item.query):
          copyVehicleCount.special += item.count;
          break;
        default:
          break;
      }
    });

    setVehicleCount(copyVehicleCount);
  };

  const fillingMarkArray = (array: any) => {
    const MAKE: any = array?.filter(
      (item: any) => item.quickPickCode === 'MAKE'
    );
    let result: string[] = [] ;

    MAKE[0].facetCounts?.forEach((item: any) => {
      result.push(item.displayName)
    })

    return result;
  };

  useEffect(() => {
    getData(Object.assign(pageData, filters)).then((res) => {
      calcVehicleCount(res.data.data.results.facetFields);
      const mark = fillingMarkArray(res.data.data.results.facetFields);

      setData({
        content: res.data.data.results.content,
        total: res.data.data.results.totalElements,
        facetFields: res.data.data.results.facetFields,
        marks: mark,
      });
    });
  }, [pageData, filters]);

  return (
    <div className={classes.root}>
      <Filter
        data={data}
        vehicleData={vehicleCount}
        filterData={filters}
        setFilterData={setFilters}
      />
      <Content data={data} pageData={pageData} setPageData={setPageData} />
    </div>
  );
};

export default Catalog;
