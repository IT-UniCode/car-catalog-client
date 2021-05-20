import React, { FC, ReactNode } from 'react';
import { Content } from 'antd/lib/layout/layout';
import { Switch, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import Catalog from '../Pages/Catalog';
import VehiclePage from '../Pages/VehiclePage';

import useStyles from './style';

interface IRoutes {
  path: string;
  exact: boolean;
  componnent: ReactNode;
}

const ROUTES: IRoutes[] = [
  {
    path: '/',
    exact: true,
    componnent: <Home />,
  },
  {
    path: '/catalog',
    exact: true,
    componnent: <Catalog />,
  },
  {
    path: '/catalog/',
    exact: false,
    componnent: <VehiclePage />,
  },
];

const Routes: FC = () => {
  const classes = useStyles();

  return (
    <Content className={classes.root}>
      <Switch>
        {ROUTES.map((item, index) => (
          <Route path={item.path} exact={item.exact} key={index}>
            {item.componnent}
          </Route>
        ))}
      </Switch>
    </Content>
  );
};

export default Routes;
