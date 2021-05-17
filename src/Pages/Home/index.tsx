import React from 'react';

import useStyles from './style';

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p>Home</p>
    </div>
  )
};

export default Home;
