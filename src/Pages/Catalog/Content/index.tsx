import React, { FC } from 'react';
import { Pagination } from 'antd';

import Card from './ContentCard';

import useStyles from './style';

interface IContentProps {
  data: IData;
  pageData: IPageData;
  setPageData: React.Dispatch<React.SetStateAction<IPageData>>;
}

const Content: FC<IContentProps> = ({ data, pageData, setPageData }) => {
  const classes = useStyles();

  const changePage = (pageNum: number, pageSize: number | undefined) => {
    const copyPageData = {...pageData};
    copyPageData.page = pageNum;

    if (pageSize) {
      copyPageData.size = pageSize;
    }
    
    setPageData(copyPageData);
  };

  return (
    <div className={classes.root}>
      <Pagination
        current={pageData.page}
        defaultCurrent={1}
        total={data.total}
        onChange={(page, size) => changePage(page, size)}
      />

      {data.content?.map((item, index) => (
        <Card data={item} key={index} />
      ))}

      <Pagination
        defaultCurrent={1}
        current={pageData.page}
        total={data.total}
        onChange={(page, size) => changePage(page, size)}
      />
    </div>
  );
};

export default Content;
