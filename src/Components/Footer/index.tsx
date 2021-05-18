import React, { FC } from 'react';
import { Layout } from 'antd';

import useStyles from './style';

const { Footer } = Layout;

const CustomFooter: FC = () => {
  const classes = useStyles();

  return (
    <Footer className={classes.root}>
      <div className='container'>
        Car Catalog ©2021 Created by UniCode
      </div>
    </Footer>
  );
};

export default CustomFooter;
