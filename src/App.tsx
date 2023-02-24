import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "antd";
import { Spin } from "antd";

import Routes from "./Routes";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { LoadingOutlined } from "@ant-design/icons";

import useStyles from "./style";

const spinIcon = <LoadingOutlined style={{ fontSize: 84 }} spin />;

const App = () => {
  const classes = useStyles();
  const { loading } = useTypedSelector((state) => state.loading);

  return (
    <Spin spinning={loading} size="large" indicator={spinIcon}>
      <div className={classes.root}>
        <Router>
          <Layout>
            <Header />
            <Routes />
            <Footer />
          </Layout>
        </Router>
      </div>
    </Spin>
  );
};

export default App;
