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
    page: 0,
    size: 10,
  });

  useEffect(() => {
    getData(pageData).then((res) => {

      setData({
        content: res.data.data.results.content,
        total: res.data.data.results.totalElements,
      });
    });
  }, [pageData]);

  return (
    <div className={classes.root}>
      <Filter />
      <Content data={data} pageData={pageData} setPageData={setPageData}/>
    </div>
  );
};

export default Catalog;
