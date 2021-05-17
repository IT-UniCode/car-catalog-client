import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';

import Routes from './Routes';
import Header from './Components/Header';
import Footer from './Components/Footer';

import useStyles from './style'; 

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>
        <Layout>
          <Header />
          <Routes />
          <Footer />
        </Layout>
      </Router>
    </div>
  );
};

export default App;
