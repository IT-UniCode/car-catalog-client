import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { Layout, Menu } from 'antd';

import useStyles from './style';

const { Header } = Layout;

const CustomHeader: FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const [path, setPath] = useState([`${history.location.pathname}`]);

  return (
    <Header className={classes.root}>
      <div className='container'>
        <Menu theme='dark' mode='horizontal' selectedKeys={path}>
          <Menu.Item key='/'>
            <Link to='/' onClick={() => setPath(['/'])} className='menu_link'>
              Главная
            </Link>
          </Menu.Item>
          <Menu.Item key='/catalog'>
            <Link to='/catalog' onClick={() => setPath(['/catalog'])}>
              Каталог
            </Link>
          </Menu.Item>
          <Menu.Item key='/calc'>
            <Link to='/calc' onClick={() => setPath(['/calc'])}>
              Калькулятор
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    </Header>
  );
};

export default CustomHeader;
