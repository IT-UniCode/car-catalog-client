import React, { FC, useEffect, useState } from 'react';

import { getData } from '../../API/catalog';
import Content from './Content';
import Filter from './Filter';

import useStyles from './style';

const Catalog: FC = () => {
  const classes = useStyles();
  const [data, setData] = useState<IData>({
    content: [],
    total: 0,
    facetFields: [],
    marks: [],
    models: [],
    vehicleCount: {
      automobiles: 0,
      pickuptrucks: 0,
      suvs: 0,
      motorcycle: 0,
      atvs: 0,
      dirtbikes: 0,
      snowmobile: 0,
      heavydutytrucks: 0,
      mediumdutyboxtrucks: 0,
      boats: 0,
      jetskis: 0,
      industrialequipment: 0,
      forklifts: 0,
      trailers: 0,
      recreationalveh: 0,
    },
  });

  const [pageData, setPageData] = useState<IPageData>({
    currentPage: 1,
    page: 0,
    size: 10,
    defaultSort: true,
    sort: ['auction_date_type desc', 'auction_date_utc asc'],
  });

  const [filters, setFilters] = useState<IFilter>({
    'filter[VEHT]': [],
    'filter[BODY]': [],
    'filter[MAKE]': [],
    'filter[NLTS]': [],
    'filter[MODL]': [],
  });

  const calcVehicleCount = (array: any) => {
    const VEHT: any = array?.filter(
      (item: any) => item.quickPickCode === 'VEHT'
    );

    const vehicleCount: IVehicleCount = {
      automobiles: 0,
      pickuptrucks: 0,
      suvs: 0,
      motorcycle: 0,
      atvs: 0,
      dirtbikes: 0,
      snowmobile: 0,
      heavydutytrucks: 0,
      mediumdutyboxtrucks: 0,
      boats: 0,
      jetskis: 0,
      industrialequipment: 0,
      forklifts: 0,
      trailers: 0,
      recreationalveh: 0,
    };

    VEHT[0]?.facetCounts?.forEach((item: IVEHTItem) => {
      vehicleCount[item.uri] = item.count;
    });

    return vehicleCount;
  };

  const fillingData = (array: any) => {
    let result: IFilter = {};

    array?.forEach((item: any) => {
      result[item.quickPickCode] = (item.facetCounts);
    });

    return result;
  };

  useEffect(() => {
    getData(Object.assign(pageData, filters)).then((res) => {
      const vehicleCount = calcVehicleCount(res.data.data.results.facetFields);
      const filledData = fillingData(res.data.data.results.facetFields);

      setData({
        content: res.data.data.results.content,
        total: res.data.data.results.totalElements,
        facetFields: res.data.data.results.facetFields,
        vehicleCount: vehicleCount,
        marks: filledData.MAKE,
        models: filledData.MODL,
      });
    });
  }, [pageData, filters]);

  return (
    <div className={classes.root}>
      <Filter data={data} filterData={filters} setFilterData={setFilters} />
      <Content data={data} pageData={pageData} setPageData={setPageData} />
    </div>
  );
};

export default Catalog;
