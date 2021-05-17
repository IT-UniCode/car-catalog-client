import React, { FC, ReactNode } from 'react';
import { Content } from 'antd/lib/layout/layout';
import { Switch, Route } from 'react-router-dom';

import Home from '../Pages/Home';

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
];

const Routes: FC = () => {
  return (
    <Content>
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
