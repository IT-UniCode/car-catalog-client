import React from 'react';
import { Link } from 'react-router-dom';

import useStyles from './style';

const Filter = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link to='catalog/automobile' className='filter_item'>Автомобили</Link>
      <Link to='catalog/motorcycle' className='filter_item'>Мото техника</Link>
      <Link to='catalog/boat' className='filter_item'>Водный транспорт</Link>
      <Link to='catalog/truck' className='filter_item'>Грузовой транспорт</Link>
      <Link to='catalog/special' className='filter_item'>Спецтехника</Link>
    </div>
  );
};

export default Filter;
