import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Carousel } from 'antd';

import { getDataById } from '../../API/catalog';

import useStyles from './style';

const VehiclePage = () => {
  const classes = useStyles();
  const history = useHistory();

  const [data, setData] = useState<IContent | undefined>();

  useEffect(() => {
    const pathName = history.location.pathname.split('/');

    getDataById(pathName[pathName.length - 1]).then((res) => {
      setData({
        ...res.data[0].data.lotDetails,
        imageList: res.data[1].data.imagesList.FULL_IMAGE,
      });
    });
  }, []);

  console.log(data);

  return (
    <div className={classes.root}>
      <h2>{data?.ld}</h2>

      <div className='vehicle_inner'>
        <div className='image_carusel-wrapper'>
        <Carousel autoplay className='image_carusel'>
          {data?.imageList?.map(
            (item: IImageListItem, index: number) => (
              <div key={index} className='image_block'>
                <img src={item.url} alt='' />
              </div>
            )
          )}
        </Carousel>
        </div>
        <div className='vehicle_charateristic'>
          <h4>№ Лота: {data?.ln}</h4>
        </div>
      </div>
    </div>
  );
};

export default VehiclePage;
