import React, { FC } from 'react';
import { Button } from 'antd';

import useStyles from './style';
import { Link } from 'react-router-dom';

interface ICardProps {
  data: IContent;
}

const Card: FC<ICardProps> = ({ data }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img className='card_img' src={data.tims} alt='' />
      <div className='card_content'>
        <h4>{data.ld}</h4>

        <div className='card_inner'>
          <div className='content_column'>
            <p>Номер лота: №{data.ln}</p>
            <p>
              Одометр: {data.orr} миль ({data.ord})
            </p>
            <p>Оновные повреждения: {data.dd}</p>
          </div>
          <div className='content_column'>
            <p>Оценочная стоимость: {data.la + ' ' + data.cuc}</p>
            <p>Площадка/очередь/ряд: </p>
            <p>
              {data.syn} {data.locCity}/{data.al || '-'}/{data.gr}
            </p>
          </div>
          <Button className='card_btn'>
            <Link to={`catalog/${data.ln}`}>Подробнее</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
