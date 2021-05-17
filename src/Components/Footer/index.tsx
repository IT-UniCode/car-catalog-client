import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const CustomFooter = () => {
  return (
    <Footer style={{ textAlign: 'center' }}>
      Car Catalog ©2021 Created by UniCode
    </Footer>
  );
};

export default CustomFooter;
