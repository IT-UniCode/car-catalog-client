import React, { FC } from 'react';

import useStyles from './style';

const Home: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <section className='main'>
        <div className='offer_wrapper'>
          <h1 className='offer_title'>Car Trade</h1>
          <p className='offer_text'>
            На сайте находится таможенный калькулятор по действующим тарифам (Закон 8487/8488) на растаможку. С помощью этого калькулятора Вы можете сравнить стоимость растаможивания автомобилей с ДВС, элетромобиль и гибридов.
          </p>
        </div>
        <div className='img_wrapper'>
          <img src='/assets/img/bmw.png' alt='' />
        </div>
      </section>
    </div>
  );
};

export default Home;
