import React, { FC } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import useStyles from './style';

interface ICharacteristic {
  data: IVehicleData[] | undefined;
}

const Characteristic: FC<ICharacteristic> = ({data}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SimpleBar style={{ maxHeight: 400 }}>
        {data?.map((item: IVehicleData, index: number) => (
          <div key={index} className='charateristic_item'>
            <p className='charateristic_item-key'>{item.key}</p>
            <p className='charateristic_item-value'>{item.value}</p>
          </div>
        ))}
      </SimpleBar>
    </div>
  );
};

export default Characteristic;
