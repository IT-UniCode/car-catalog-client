import React, { FC, useEffect, useState } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

import { getData } from '../../API/catalog';
import Content from './Content';
import Filter from './Filter';

import useStyles from './style';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useAction';

const spinIcon = <LoadingOutlined style={{ fontSize: 84 }} spin />;

const Catalog: FC = () => {
  const classes = useStyles();
  const [data, setData] = useState<IData>();
  const [loading, setLoading] = useState(true);
  const { filters } = useTypedSelector((state) => state.filter);

  const [pageData, setPageData] = useState<IPageData>({
    currentPage: 1,
    page: 0,
    size: 10,
    defaultSort: true,
    sort: ['auction_date_type desc', 'auction_date_utc asc'],
  });

  const [selectedFilters, setSelectedFilters] = useState<IFilter>();

  const { fetchFilters } = useActions();

  useEffect(() => {
    fetchFilters();
  }, []);

  useEffect(() => {
    getData(Object.assign(pageData, selectedFilters)).then((res) => {
      setData({
        content: res.data.data.results.content,
        total: res.data.data.results.totalElements,
      });
    });
  }, [pageData, selectedFilters]);

  return (
    // <Spin spinning={loading} size='large' indicator={spinIcon}>
    <div className={classes.root}>
      <Filter
        data={data}
        filterData={filters}
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
      />
      <Content data={data} pageData={pageData} setPageData={setPageData} />
    </div>
    // </Spin>
  );
};

export default Catalog;
