import React, { FC } from 'react';
import { Pagination } from 'antd';

import Card from './ContentCard';

import useStyles from './style';

interface IContentProps {
  data: IData | undefined;
  pageData: IPageData;
  setPageData: React.Dispatch<React.SetStateAction<IPageData>>;
}

const Content: FC<IContentProps> = ({ data, pageData, setPageData }) => {
  const classes = useStyles();

  const changePage = (pageNum: number, pageSize: number | undefined) => {
    const copyPageData = {...pageData};
    copyPageData.currentPage = pageNum;
    copyPageData.page = pageNum - 1;

    if (pageSize) {
      copyPageData.size = pageSize;
    }

    setPageData(copyPageData);
  };

  return (
    <div className={classes.root}>
      <Pagination
        total={data?.total}
        current={pageData.currentPage}
        onChange={(page, size) => changePage(page, size)}
      />

      {data?.content?.map((item, index) => (
        <Card data={item} key={index} />
      ))}

      <Pagination
        total={data?.total}
        current={pageData.currentPage}
        onChange={(page, size) => changePage(page, size)}
      />
    </div>
  );
};

export default Content;
