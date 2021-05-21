import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import { getDataById } from '../../API/catalog';
import Charateristic from './Characteristic';
import Carousel from './Carousel';
import CuctomsPrice from './CuctomsPrice';

import useStyles from './style';

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

      setData({
        title: res.data[0].data.lotDetails.ld,
        vehicleData: filledData,
        imageList: res.data[1].data.imagesList.FULL_IMAGE,
      });
      setLoading(false);
    });
  }, [history.location.pathname]);

  return (
    <div className={classes.root}>
      <Spin spinning={loading} size='large' indicator={spinIcon}>
        <h2>{data?.title}</h2>
        <div className='vehicle_wrapper'>
          <div className='vehicle_inner'>
            <Carousel data={data?.imageList} />
            <Charateristic data={data?.vehicleData} />
          </div>
          <CuctomsPrice data={data?.vehicleData} />
        </div>
      </Spin>
    </div>
  );
};

export default VehiclePage;
