import React, { FC } from 'react';
import { Carousel } from 'antd';

import useStyles from './style';

interface IImageCarusel {
  data: IImageListItem[] | undefined;
}

const ImageCarusel: FC<IImageCarusel> = ({ data }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Carousel autoplay className='image_carusel'>
        {data?.map((item: IImageListItem, index: number) => (
          <div key={index} className='image_block'>
            <img src={item.url} alt='' />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarusel;
