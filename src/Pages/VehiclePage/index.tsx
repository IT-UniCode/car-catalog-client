import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Carousel } from 'antd';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import { getDataById } from '../../API/catalog';

import useStyles from './style';

const spinIcon = <LoadingOutlined style={{ fontSize: 84 }} spin />;

const VehiclePage = () => {
  const classes = useStyles();
  const history = useHistory();
  const [data, setData] = useState<IContent | undefined>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const pathName = history.location.pathname.split('/');

    getDataById(pathName[pathName.length - 1]).then((res) => {
      setData({
        ...res.data[0].data.lotDetails,
        imageList: res.data[1].data.imagesList.FULL_IMAGE,
      });
      setLoading(false);
    });
  }, [history.location.pathname]);

  return (
    <Spin spinning={loading} size='large' indicator={spinIcon}>
      <div className={classes.root}>
        <h2>{data?.ld}</h2>
        <div className='vehicle_inner'>
          <div className='image_carusel-wrapper'>
            <Carousel autoplay className='image_carusel'>
              {data?.imageList?.map((item: IImageListItem, index: number) => (
                <div key={index} className='image_block'>
                  <img src={item.url} alt='' />
                </div>
              ))}
            </Carousel>
          </div>
          <div className='vehicle_charateristic'>
            <h4>№ лота: {data?.ln}</h4>
            <p>Номер VIN: {data?.fv || '-'}</p>
            <p>Тип документа: {data?.locState} - {data?.td}</p>
            <p>Одометр: {data?.orr} {data?.ord}</p>
            <p>Основные моменты: {data?.lcd}</p>
            <p>Основное повреждение: {data?.dd}</p>
            <p>Вторичное повреждение: {data?.sdd}</p>
            <p>Оценочная розничная стоимость: {data?.la}</p>
            <p>Тип кузова: {data?.bstl}</p>
            <p>Классификация ТС: {data?.vehTypDesc}</p>
            <p>Цвет: {data?.clr}</p>
            <p>Тип двигателя: {data?.egn}</p>
            <p>Цилиндры: {data?.cy}</p>
            <p>Передача: {data?.tsmn}</p>
            <p>Привод: {data?.drv}</p>
            <p>Топливо: {data?.ft}</p>
            <p>Ключи: {data?.hk}</p>
            <p>Примечания: {data?.ltnte}</p>
          </div>
        </div>
      </div>
    </Spin>
  );
};

export default VehiclePage;
