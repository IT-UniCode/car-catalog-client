import React, { FC, useEffect, useState } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

import { getData } from '../../API/catalog';
import Content from './Content';
import Filter from './Filter';

import useStyles from './style';

const spinIcon = <LoadingOutlined style={{ fontSize: 84 }} spin />;

const Catalog: FC = () => {
  const classes = useStyles();
  const [data, setData] = useState<IData>();
  const [loading, setLoading] = useState(true);

  const [pageData, setPageData] = useState<IPageData>({
    currentPage: 1,
    page: 0,
    size: 10,
    defaultSort: true,
    sort: ['auction_date_type desc', 'auction_date_utc asc'],
  });

  const [filters, setFilters] = useState<IFilter>({
    'filter[VEHT]': [],
    'filter[NLTS]': [],
    'filter[MAKE]': [],
    'filter[MODL]': [],
    'filter[YEAR]': [],
    'filter[ODM]': [],
    'filter[LOC]': [],
    'filter[SLOC]': [],
    'filter[SDAT]': [],
    'filter[TITL]': [],
    'filter[SRCE]': [],
    'filter[PRID]': [],
    'filter[BODY]': [],
    'filter[FUEL]': [],
    'filter[TMTP]': [],
    'filter[DRIV]': [],
  });

  const fillingData = (array: any) => {
    let result: IDataResult = {};

    array?.forEach((item: any) => {
      result[item.quickPickCode] = item;
    });

    return result;
  };

  useEffect(() => {
    getData(Object.assign(pageData, filters)).then((res) => {
      const filledData = fillingData(res.data.data.results.facetFields);
      console.log(res.data);
      
      setData({
        content: res.data.data.results.content,
        total: res.data.data.results.totalElements,
        vehicle: filledData.VEHT,
        facetFields: {
          newly: filledData.NLTS,
          marks: filledData.MAKE,
          models: filledData.MODL,
          years: filledData.YEAR,
          mileage: filledData.ODM,
          locations: filledData.LOC,
          saleNames: filledData.SLOC,
          saleDates: filledData.SDAT,
          documents: filledData.TITL,
          sources: filledData.SRCE,
          damages: filledData.PRID,
          body: filledData.BODY,
          fuelTypes: filledData.FUEL,
          engineTypes: filledData.ENGN,
          transmission: filledData.TMTP,
          driveTrain: filledData.DRIV,
          cylinders: filledData.CYLN,
        },
      });
      setLoading(false);
    });
  }, [pageData, filters]);

  return (
    <Spin spinning={loading} size='large' indicator={spinIcon}>
      <div className={classes.root}>
        <Filter
          data={data}
          filterData={filters}
          setFilterData={setFilters}
          setLoading={setLoading}
        />
        <Content
          data={data}
          pageData={pageData}
          setPageData={setPageData}
          setLoading={setLoading}
        />
      </div>
    </Spin>
  );
};

export default Catalog;
