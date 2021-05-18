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
  });

  const [pageData, setPageData] = useState<IPageData>({
    currentPage: 1,
    page: 0,
    size: 10,
    defaultSort: true,
    sort: ['auction_date_type desc', 'auction_date_utc asc'],
  });

  const [filters, setFilters] = useState<IFilter>();

  useEffect(() => {
    getData(Object.assign(pageData, filters)).then((res) => {
      setData({
        content: res.data.data.results.content,
        total: res.data.data.results.totalElements,
      });
    });
  }, [pageData, filters]);

  return (
    <div className={classes.root}>
      <Filter data={filters} setData={setFilters} />
      <Content data={data} pageData={pageData} setPageData={setPageData} />
    </div>
  );
};

export default Catalog;
