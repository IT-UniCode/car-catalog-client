import React from 'react';

import useStyles from './style';

const Catalog = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      Каталог
    </div>
  );
};

export default Catalog;
