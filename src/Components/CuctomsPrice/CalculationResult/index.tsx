import React, { FC } from 'react';

import useStyles from './style';

interface ICalculationResultProps {
  data: ICustomsResult | undefined;
}

const CalculationResult: FC<ICalculationResultProps> = ({ data }) => {
  const classes = useStyles();

  const costsInUSA = [
    {
      title: 'Стоимость вашего авто на аукционе в США',
      cost: data!.vehicleCost,
    },
    {
      title: 'Страховка авто (3% от стоимости)',
      cost: 0,
    },
    {
      title: 'Аукционный сбор',
      cost: 0,
    },
    {
      title: 'Брокерские услуги в Америке',
      cost: 1000,
    },
    {
      title: 'Доставка с аукциона в выбранный Вами порт погрузки*',
      cost: 0,
    },
    {
      title: 'Погрузка в контейнер',
      cost: 150,
    },
    {
      title: 'Отправка документов',
      cost: 50,
    },
    {
      title: 'Доставка кораблем в порт выгрузки',
      cost: 0,
    },
  ];

  const sumCostsInUsa = costsInUSA.reduce((sum, item) => item?.cost + sum, 0);

  console.log(data);

  return (
    <div className={classes.root}>
      <table className='result-table'>
        <thead>
          <tr className='first-row'>
            <th>№</th>
            <th>Наименование</th>
            <th>Стоимость</th>
          </tr>
          <tr className='title-row'>
            <td colSpan={3}>Затраты в США</td>
          </tr>
        </thead>
        <tbody>
          {costsInUSA.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>{item.cost} $</td>
            </tr>
          ))}
          <tr>
              <td colSpan={2}>Итого</td>
              <td>{sumCostsInUsa} $</td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CalculationResult;
