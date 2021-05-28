import React, { FC, useEffect, useState } from 'react';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getData } from '../../API/catalog';
import Content from './Content';
import Filter from './Filter';

import useStyles from './style';
import { useActions } from '../../hooks/useAction';

const Catalog: FC = () => {
  const classes = useStyles();
  const [data, setData] = useState<IData>();
  const { filters } = useTypedSelector((state) => state.filter);
  const [selectedFilters, setSelectedFilters] = useState<IFilter>();
  const { fetchFilters, endLoading } = useActions();
  const [pageData, setPageData] = useState<IPageData>({
    currentPage: 1,
    page: 0,
    size: 10,
    defaultSort: true,
    sort: ['auction_date_type desc', 'auction_date_utc asc'],
  });

  useEffect(() => {
    fetchFilters();
  }, []);

  useEffect(() => {
    getData(Object.assign(pageData, selectedFilters)).then((res) => {
      setData({
        content: res.data.data.results.content,
        total: res.data.data.results.totalElements,
      });
      endLoading();
    });
  }, [pageData, selectedFilters, endLoading]);

  return (
    <div className={classes.root}>
      <Filter
        data={data}
        filterData={filters}
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
      />
      <Content data={data} pageData={pageData} setPageData={setPageData} />
    </div>
  );
};

export default Catalog;
