import React, { FC } from 'react';
import { Pagination } from 'antd';

import Card from './ContentCard';

import useStyles from './style';

interface IContentProps {
  data: IData;
  pageData: IPageData;
}

const Content: FC<IContentProps> = ({data, pageData}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Pagination defaultCurrent={1} total={data.total} />

      {data.content?.map((item, index) => (
        <Card data={item} key={index}/>
      ))}
      
      <Pagination defaultCurrent={1} total={data.total} />
    </div>
  );
};

export default Content;
