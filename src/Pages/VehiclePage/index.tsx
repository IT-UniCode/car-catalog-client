import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Carousel } from 'antd';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import { getDataById } from '../../API/catalog';

import useStyles from './style';

interface IVehicleData {
  key: string;
  value: string | number;
}

interface IVehicle {
  title: string;
  vehicleData: IVehicleData[];
  imageList: IImageListItem[];
}

const spinIcon = <LoadingOutlined style={{ fontSize: 84 }} spin />;

const VehiclePage = () => {
  const classes = useStyles();
  const history = useHistory();
  const [data, setData] = useState<IVehicle | undefined>();
  const [loading, setLoading] = useState(true);

  const fillingData = (array: IContent) => {
    const result = [
      { key: '№ лота:', value: array.ln },
      { key: 'Номер VIN:', value: array.fv || '-' },
      { key: 'Тип документа:', value: `${array.locState} - ${array.td}` },
      { key: 'Одометр:', value: array.ord || '-' },
      { key: 'Основные моменты:', value: array.lcd || '-' },
      { key: 'Основное повреждение:', value: array.dd || '-' },
      { key: 'Вторичное повреждение:', value: array.sdd || '-' },
      { key: 'Оценочная розничная стоимость: ', value: array.la || '-' },
      { key: 'Тип кузова:', value: array.bstl || '-' },
      { key: 'Классификация ТС:', value: array.vehTypDesc || '-' },
      { key: 'Цвет:', value: array.clr || '-' },
      { key: 'Тип двигателя:', value: array.egn || '-' },
      { key: 'Цилиндры:', value: array.cy || '-' },
      { key: 'Передача:', value: array.tsmn || '-' },
      { key: 'Привод:', value: array.drv || '-' },
      { key: 'Топливо:', value: array.ft || '-' },
      { key: 'Ключи:', value: array.hk || '-' },
      { key: 'Примечания:', value: array.ltnte || '-' },
    ];

    return result;
  };

  useEffect(() => {
    const pathName = history.location.pathname.split('/');

    getDataById(pathName[pathName.length - 1]).then((res) => {
      const filledData = fillingData(res.data[0].data.lotDetails);
      console.log(filledData);

      setData({
        title: res.data[0].data.lotDetails.ld,
        vehicleData: filledData,
        imageList: res.data[1].data.imagesList.FULL_IMAGE,
      });
      setLoading(false);
    });
  }, [history.location.pathname]);

  return (
    <Spin spinning={loading} size='large' indicator={spinIcon}>
      <div className={classes.root}>
        <h2>{data?.title}</h2>
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
            <SimpleBar style={{ maxHeight: 400 }}>
              {data?.vehicleData?.map((item: IVehicleData, index: number) => (
                <div key={index} className='charateristic_item'>
                  <p className='charateristic_item-key'>{item.key}</p>
                  <p className='charateristic_item-value'>{item.value}</p>
                </div>
              ))}
            </SimpleBar>
          </div>
        </div>
      </div>
    </Spin>
  );
};

export default VehiclePage;
